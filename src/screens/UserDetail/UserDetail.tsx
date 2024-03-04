import { IonAvatar, IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonSkeletonText, IonText, IonTitle, IonToolbar, useIonAlert, useIonLoading, useIonRouter, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';
import { useParams } from 'react-router';
import { bagCheckOutline, pencil, trash } from 'ionicons/icons';

import style from './UserDetail.module.css'
import UserEditModal from '../../components/UserEditModal/UserEditModal';
import { useQuery } from '@tanstack/react-query';
import Settings from '../../helpers/settings';
import useToast from '../../hooks/useToast';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserDetailsTrigger, UserListTrigger } from '../../atoms/triggers';
import { _post } from '../../helpers/api';




const { supabase, serverBaseUrl } = Settings()

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


    const { data: currentUser, isLoading, isError } = useQuery({
        queryKey: ['singleUser', trigger],
        queryFn: getUserDetails
    })



    async function sendUserVerificationLink() {
        await presentLoading('Sending verification link to user...please wait')

        // Get Magic Link
        const { data: linkData } = await supabase.auth.admin.generateLink({
            type: 'magiclink',
            email: currentUser?.user?.email! as string
        })
        console.log("🚀 ~ sendUserVerificationLink ~ linkData:", linkData)

        const url = `${serverBaseUrl}/send_mail`
        const data = {
            email: currentUser?.user?.email!,
            link: linkData.properties?.action_link
        };
        const headers = {'Content-Type': 'application/json'}
        
        try {
            const { data: emailSentResponse, status } = await _post(url, data, headers)
            console.log(emailSentResponse, '<---');
        } catch (error: any) {
            await dismissLoading()
            showToast(error, 'danger', 'Unable to send link')
            return
        }

        await dismissLoading()
        showToast('Kindly notify user to check thier email', 'success', 'Link Sent Successfully')
    }


    async function getUserDetails() {
        try {
            const { data } = await supabase.auth.admin.getUserById(userId)
            console.log(data.user?.confirmed_at, "----- Confirm -")
            return data
        } catch (error) {
            throw new Error('User not found')
        }
    }


    async function deleteUser(userId: string) {
        await presentLoading('Deleting user...')
        await supabase.auth.admin.deleteUser(userId)
        await dismissLoading()
        showToast('User deleted successfully', 'success', 'Success')
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
                                    <IonText className='fs-2'>{currentUser?.user?.user_metadata?.name!}</IonText> <br />
                                    <IonText color={'medium'}>
                                        <small>{currentUser?.user?.email!}</small>
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
                    <IonRow className='ion-justify-content-center ion-text-center ion-margin-top'>
                        <IonCol size='12' className='ion-padding-horizontal'>
                            <IonButton mode='ios' expand='block' onClick={() => sendUserVerificationLink()}>
                                <IonText color={'light'}>
                                    Send Verification Link
                                </IonText>
                                <IonIcon color='light' icon={bagCheckOutline} slot='end' />
                            </IonButton>
                            <div className="mt-3">
                                <small className="text-muted mt-4 text-start">users will not be able to login if they don't verify their email</small>
                            </div>
                        </IonCol>
                        {/* {
                            isLoading ? (<IonSkeletonText style={{ width: '80%' }} animated />) : (
                                <>
                                    {
                                        Object.is(data?.user?.confirmation_sent_at, undefined) ? (
                                            <IonCol size='12' className='ion-padding-horizontal'>
                                                <IonButton mode='ios' expand='block' onClick={() => sendUserVerificationLink()}>
                                                    <IonText color={'light'}>
                                                        Send Verification Link
                                                    </IonText>
                                                    <IonIcon color='light' icon={bagCheckOutline} slot='end' />
                                                </IonButton>
                                                <div className="mt-3">
                                                    <small className="text-muted mt-4 text-start">users will not be able to login if they don't verify their email</small>
                                                </div>
                                            </IonCol>
                                        ) : (
                                            <IonCol size='3'>
                                                <IonChip color={'success'}>Verified</IonChip>
                                            </IonCol>
                                        )
                                    }
                                </>
                            )
                        } */}
                    </IonRow>
                </IonGrid>

                <UserEditModal isOpen={isOPen} setIsOpen={setIsOpen} userDetails={currentUser?.user!} />
            </IonContent>
        </IonPage>
    );
};

export default UserDetail;