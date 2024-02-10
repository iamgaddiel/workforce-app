import { IonAvatar, IonBackButton, IonButton, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSkeletonText, IonText, IonTitle, IonToolbar, RefresherEventDetail, setupIonicReact, useIonAlert, useIonLoading, useIonRouter, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { add, ellipsisVertical, search, trash } from 'ionicons/icons';
import React, { useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';
import AddUserModal from '../../components/AddUserModal/AddUserModal';
import useUser from '../../hooks/useUser';
import Settings from '../../helpers/settings';
import useToast from '../../hooks/useToast';
import { useQuery } from '@tanstack/react-query';


import NotFound from '../../assets/images/empty.jpg'
import { useRecoilState } from 'recoil';
import { UserListTrigger } from '../../atoms/triggers';



const { supabase } = Settings()

const UserList: React.FC = () => {
    const [userAvatar, setUserAvatar] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    const [trigger, setTrigger] = useRecoilState(UserListTrigger) // triggers state reload

    const userObject = useUser()

    const { showToast } = useToast()

    const router = useIonRouter()

    const [presentAlert, dismissAlert] = useIonAlert()
    
    const [presentLoading, dismissLoading] = useIonLoading()



    const { data: userData, error, isLoading, isError } = useQuery({
        queryKey: ['user_list', trigger],
        queryFn: fetchAllUser
    })



    useIonViewWillEnter(() => {
        (async () => {
            const avatar = createAvatar(thumbs, {
                seed: userObject?.user?.email!
            });
            const image = await avatar.toDataUri();
            setUserAvatar(image)
        })()
    }, [])




    async function deleteAllUser() {
        await presentLoading('Deleting all users...')
        userData?.users.forEach(user => {
            supabase.auth.admin.deleteUser(user.id)
        })
        setTrigger((currentTriggerState) => !currentTriggerState)
        await dismissLoading()
    }


    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            fetchAllUser()
            event.detail.complete();
        }, 4000);
    }


    // Get list of Users
    async function fetchAllUser() {

        const { data, error } = await supabase.auth.admin.listUsers()
        
        if (error) {
            showToast('Could not fetch user list', 'danger')
            throw new Error('Error getting user');
        }
        
        const returnData = { ...data, users: data.users.filter(user => user.user_metadata?.role == 'user') }
        setTrigger((currentTriggerState) => !currentTriggerState) // triggers reload
        return returnData
    }


    async function confirmDelete() {
        await presentAlert({
            header: 'Delete all users',
            message: 'Do you want to proceed?',
            buttons: [
                {
                    text: 'Confirm',
                    handler: () => deleteAllUser()
                },
                {
                    text: 'Cancel',
                    handler: async () => await dismissAlert()
                }
            ]
        })
    }



    if (isLoading) {
        return (
            <>
                {
                    [...new Array(4).keys()].map((_, index) => (
                        <IonSkeletonText key={index} style={{ width: '100%', height: '20px' }} animated className='mb-2' />
                    ))
                }
            </>
        )
    }


    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonGrid>
                        <IonRow className='ion-justify-content-between align-items-center bf-danger'>
                            <IonCol size='2' className='ion-text-start'>
                                <IonBackButton defaultHref='/app/dashboard/home' />
                            </IonCol>
                            <IonCol size='2' className='ion-text-start'>
                                <IonText>Users</IonText>
                            </IonCol>
                            <IonCol size='4'>
                                <IonRow className='ion-justify-content-evenly'>
                                    <IonCol size='1'>
                                        <IonIcon icon={add} style={{ fontSize: '1.3em' }} onClick={() => setIsOpen(true)} />
                                    </IonCol>
                                    {/* <IonCol size='1'>
                                        <IonIcon icon={search} style={{ fontSize: '1.3em' }} onClick={() => router.push('/app/dashboard/search-user')} />
                                    </IonCol> */}
                                    <IonCol size='1'>
                                        <IonIcon icon={trash} style={{ fontSize: '1.3em' }} color='danger' onClick={confirmDelete} />
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonGrid>
                    {
                        userData?.users?.length! > 0 ? (
                            <>
                                {
                                    userData?.users?.map((user, index) => (
                                        <IonRow key={index}>
                                            <IonCol>
                                                <IonItem lines='full' routerDirection='forward' routerLink={`/app/dashboard/user-detail/${user.id}`}>
                                                    <IonAvatar slot='start'>
                                                        <IonImg src={userAvatar} className='w-75 h-75' />
                                                    </IonAvatar>
                                                    <IonLabel>
                                                        {user.user_metadata?.name}
                                                        <p>{user.email}</p>
                                                    </IonLabel>
                                                    <IonChip color={user.user_metadata?.role === 'user' ? 'success' : 'admin'}>{user.user_metadata?.role}</IonChip>
                                                </IonItem>
                                            </IonCol>
                                        </IonRow>
                                    ))
                                }
                            </>
                        ) : (
                            <div className='d-flex align-items-center justify-content-center' style={{ height: '80dvh' }}>
                                <div>
                                    <IonAvatar className='mx-auto'>
                                        <IonImg src={NotFound} />
                                    </IonAvatar>
                                    <IonText color={'medium'} className='mt-4'>No users found!</IonText>
                                </div>
                            </div>
                        )
                    }
                </IonGrid>

                <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </IonContent>
        </IonPage>
    );
};

export default UserList;

