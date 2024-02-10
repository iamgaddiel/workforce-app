import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React from 'react';

import style from './Onboarding.module.css'

import logo from '../../assets/images/MasterPlaceLOGO.png'
import { chevronForward } from 'ionicons/icons';
import { UserType } from '../../@types/User';
import { USER } from '../../helpers/keys';
import { getSaveData } from '../../helpers/storageSDKs';






const Onboarding: React.FC = () => {
    const [presentLoading, dismissLoading] = useIonLoading()

    const router = useIonRouter()



    async function checkIfAuthenticated() {

        await presentLoading('Loading...')
        const session = await getSaveData(USER)! as UserType
        await dismissLoading()

        if (!Object.is(session, null)) {
            if (session.user!.user_metadata?.role === 'user') {
                console.log("🚀 ~ checkIfAuthenticated ~ user:", session.user)
                router.push('/user/dashboard', 'root')
                return
            }
            router.push('/app/dashboard', 'root')
            return
        }

        router.push('/login', 'root')
    }

    return (
        <IonPage>
            <IonContent className={`ion-padding`}>
                <div className="h-100 d-flex align-items-center p-10">
                    <IonGrid fixed className=''>
                        <IonRow className='ion-justify-content-center'>
                            <IonCol size='12' sizeMd='6' sizeLg='4'>
                                <div className={`${style.logo_wrapper}`}>
                                    <IonImg src={logo} alt='mastersplacelogo' />
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-justify-content-between'>
                            <IonCol size='12' sizeMd='6' sizeLg='4'>
                                <IonText color={'primary'} className='ion-text-center'>
                                    <h1 className={`${style.title}`}>TheWorkForce</h1>
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-justify-content-center'>
                            <IonCol size='12' sizeMd='6' sizeLg='4'>
                                <IonButton mode='ios' expand='block' shape='round' color={'primary'} onClick={checkIfAuthenticated}>
                                    Get Started
                                    <IonIcon icon={chevronForward} color='light' slot='end' />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Onboarding;