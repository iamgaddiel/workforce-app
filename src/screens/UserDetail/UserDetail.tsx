import { IonAvatar, IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonSkeletonText, IonText, IonTitle, IonToolbar, useIonAlert, useIonLoading, useIonRouter, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';
import { useParams } from 'react-router';
import { pencil, trash } from 'ionicons/icons';

import style from './UserDetail.module.css'
import UserEditModal from '../../components/UserEditModal/UserEditModal';
import { useQuery } from '@tanstack/react-query';
import Settings from '../../helpers/settings';
import useToast from '../../hooks/useToast';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserDetailsTrigger, UserListTrigger } from '../../atoms/triggers';




const { supabase } = Settings()

const UserDetail: React.FC = () => {
    const { userId } = useParams<{ userId: string }>()

    const [avatarImage, setAvatarImage] = useState('')

    const [presentAlert, dismissAlert] = useIonAlert()

    const [presentLoading, dismissLoading] = useIonLoading()

    const { showToast } = useToast()

    const [isOPen, setIsOpen] = useState(false)

    const router = useIonRouter()

    const [trigger, setTrigger] = useRecoilState(UserDetailsTrigger)

    const setUserListTrigger = useSetRecoilState(UserListTrigger)



    useIonViewWillEnter(() => {
        (async () => {
            const avatar = createAvatar(thumbs, {
                seed: userId
            });
            const image = await avatar.toDataUri();
            setAvatarImage(image)
        })()
    }, [])


    const { data, isLoading, isError } = useQuery({
        queryKey: ['singleUser', trigger],
        queryFn: getUserDetails
    })




    async function getUserDetails() {
        try {
            const { data } = await supabase.auth.admin.getUserById(userId)
            return data
        } catch (error) {
            throw new Error('User not found')
        }
    }
    
    
    async function deleteUser(userId: string) {
        await presentLoading('Deleting user...')
        await supabase.auth.admin.deleteUser(userId)
        await dismissLoading()
        showToast('User deleted successfuly', 'success', 'Success')
        setUserListTrigger((currentTriggerState) => !currentTriggerState)
        router.push('/app/dashboard/users')
    }


    async function confirmDelete() {
        await presentAlert({
            header: 'Delete user',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Confirm',
                    handler: () => deleteUser(userId)
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
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/app/users' />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <IonGrid className={`${style.user__banner}`}>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='2' className=''>
                            <IonAvatar className={`${style.avatar}`}>
                                <IonImg src={avatarImage} />
                            </IonAvatar>
                        </IonCol>
                    </IonRow>
                    {
                        isLoading ? (
                            <IonRow className='ion-margin-top mt-5'>
                                <IonCol size='12' className='ion-text-center'>
                                    <IonSkeletonText animated style={{ width: '100%', height: '30px' }} />
                                    <IonSkeletonText animated style={{ width: '100%', height: '20px' }} className='mt-3' />
                                </IonCol>
                            </IonRow>
                        ) : (
                            <IonRow className='ion-margin-top mt-5'>
                                <IonCol size='12' className='ion-text-center'>
                                    <IonText className='fs-2'>{data?.user?.user_metadata?.name!}</IonText> <br />
                                    <IonText color={'medium'}>
                                        <small>{data?.user?.email!}</small>
                                    </IonText>
                                </IonCol>
                            </IonRow>
                        )
                    }
                    <IonRow className='ion-justify-content-center ion-text-center ion-margin-top'>
                        <IonCol size='2'>
                            <div className={`${style.icon__wrapper} ${style.icon__pen}`} onClick={() => setIsOpen(true)}>
                                <IonIcon icon={pencil} />
                            </div>
                        </IonCol>
                        <IonCol size='2'>
                            <div className={`${style.icon__wrapper} ${style.icon__trash}`} onClick={confirmDelete}>
                                <IonIcon icon={trash} />
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <UserEditModal isOpen={isOPen} setIsOpen={setIsOpen} userDetails={data?.user!} />
            </IonContent>
        </IonPage>
    );
};

export default UserDetail;