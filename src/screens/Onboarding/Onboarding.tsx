import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import style from './Onboarding.module.css'

import logo from '../../assets/images/MasterPlaceLOGO.png'
import { chevronForward } from 'ionicons/icons';

const Onboarding: React.FC = () => {

    return (
        <IonPage>
            <IonContent className={`ion-padding`}>
                <IonGrid fixed>
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
                            <IonButton mode='ios' expand='block' shape='round' color={'primary'} routerDirection='root' routerLink='/login'>
                                Get Started
                                <IonIcon icon={chevronForward} color='light' slot='end' />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Onboarding;