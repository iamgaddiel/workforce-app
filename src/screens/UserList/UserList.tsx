import { IonAvatar, IonBackButton, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar, setupIonicReact, useIonAlert, useIonRouter, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { add, ellipsisVertical, search, trash } from 'ionicons/icons';
import React, { useState } from 'react';
import SmallAvatarImage from '../../components/SmallAvatarImage/SmallAvatarImage';

import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';
import AddUserModal from '../../components/AddUserModal/AddUserModal';
import useUser from '../../hooks/useUser';
import Settings from '../../helpers/settings';
import useToast from '../../hooks/useToast';



const { supabase } = Settings()

const UserList: React.FC = () => {
    const [userAvatar, setUserAvatar] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [users, setUser] = useState()

    const userObject = useUser()
    const { showToast } = useToast()

    const router = useIonRouter()
    const [presentAlert, dismissAlert] = useIonAlert()



    useIonViewWillEnter(() => {
        (async () => {
            const avatar = createAvatar(thumbs, {
                seed: userObject?.user?.email!
            });
            const image = await avatar.toDataUri();
            setUserAvatar(image)
        })()
    }, [])


    // Get list of Users
    useIonViewWillEnter(() => {
        (async () => {
            const { data, error } = await supabase.auth.admin.listUsers()
            if (error) {
                showToast('Could not fetch user list', 'danger')
                return
            }
            
            console.log("🚀 ~ data:", data)
            
        })()
    }, [])




    async function confirmDelete() {
        await presentAlert({
            header: 'Delete all users',
            message: 'Do you want to proceed?',
            buttons: [
                {
                    text: 'Confirm'
                },
                {
                    text: 'Cancel',
                    handler: async () => await dismissAlert()
                }
            ]
        })
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
                                    <IonCol size='1'>
                                        <IonIcon icon={search} style={{ fontSize: '1.3em' }} onClick={() => router.push('/dashboard/search-user')} />
                                    </IonCol>
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
                <IonGrid>
                    {
                        [...new Array(7).keys()].map((item, index) => (
                            <IonRow>
                                <IonCol>
                                    <IonItem lines='full' routerDirection='forward' routerLink='/dashboard/user-detail/sdfksfod' detail>
                                        <IonAvatar slot='start'>
                                            <IonImg src={userAvatar} className='w-75 h-75' />
                                        </IonAvatar>
                                        <IonLabel>
                                            Gaddiel Ighota
                                            <p>example@email.com</p>
                                        </IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        ))
                    }
                </IonGrid>

                <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </IonContent>
        </IonPage>
    );
};

export default UserList;

