import { IonAvatar, IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonAlert, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';
import { useParams } from 'react-router';
import { pencil, trash } from 'ionicons/icons';

import style from './UserDetail.module.css'
import UserEditModal from '../../components/UserEditModal/UserEditModal';



const UserDetail: React.FC = () => {
    const { userId } = useParams<{ userId: string }>()
    const [avatarImage, setAvatarImage] = useState('')

    const [presentAlert, dismissAlert] = useIonAlert()

    const [isOPen, setIsOpen] = useState(false)



    useIonViewWillEnter(() => {
        (async () => {
            const avatar = createAvatar(thumbs, {
                seed: userId
            });
            const image = await avatar.toDataUri();
            setAvatarImage(image)
        })()
    }, [])


    async function confirmDelete() {
        await presentAlert({
            header: 'Delete user',
            message: 'Are you sure?',
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
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/users' />
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
                    <IonRow className='ion-margin-top mt-5'>
                        <IonCol size='12' className='ion-text-center'>
                            <IonText className='fs-2'>James Garry</IonText> <br />
                            <IonText color={'medium'}>
                                <small>exmapl@gmail.com</small>
                            </IonText>
                        </IonCol>
                    </IonRow>
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

                <UserEditModal isOpen={isOPen} setIsOpen={setIsOpen} />
            </IonContent>
        </IonPage>
    );
};

export default UserDetail;