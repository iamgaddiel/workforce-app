import { thumbs } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { IonAvatar, IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonRouter, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';

import style from './UserProfile.module.css'
import { person, personOutline, power } from 'ionicons/icons';
import { clearAll } from '../../helpers/storageSDKs';
import useUser from '../../hooks/useUser';

const Profile: React.FC = () => {
    const [avatar, setAvatar] = useState('')
    const email = 'useremail'

    const router = useIonRouter()

    const userObject = useUser()


    useIonViewWillEnter(() => {
        (async () => {
            const avatar = createAvatar(thumbs, {
                seed: userObject?.user?.id
            });
            const svg = await avatar.toDataUri()
            setAvatar(svg)
        })()
    }, [])


    async function handleLogout() {
        await clearAll()
        router.push('/login')
    }


    return (
        <IonPage>
            <IonHeader className='ion-no-border pb-5'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/user/dashboard/reports' />
                    </IonButtons>
                    <IonTitle>Your Profile</IonTitle>
                </IonToolbar>
                <section className={style.profile__wrapper}>
                    <IonAvatar>
                        <IonImg src={avatar} alt='profile image' />
                    </IonAvatar>
                </section>
            </IonHeader>
            <IonContent className={`${style.content} ion-padding`}>
                <IonGrid className='mt-4'>
                    <IonRow>
                        <IonCol size='12'>
                            <h2>{userObject?.user?.user_metadata.name}</h2>
                            <div>
                                <IonText color={'medium'}>
                                    <small>{userObject?.user?.email}</small>
                                </IonText>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow className='mt-3'>
                        <IonCol size='12'>
                            <IonList>
                                <IonItem detail lines='full'>
                                    <IonIcon icon={personOutline} slot='start' />
                                    <IonLabel>
                                        Personal Information
                                    </IonLabel>
                                </IonItem>
                                <IonItem lines='none' onClick={handleLogout}>
                                    <IonIcon icon={power} slot='start' color='danger' />
                                    <IonLabel color={'danger'}>
                                        Logout
                                    </IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Profile;