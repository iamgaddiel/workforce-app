import { IonAvatar, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar, useIonRouter, useIonViewWillEnter } from '@ionic/react';
import React from 'react';
import SmallAvatarImage from '../../components/SmallAvatarImage/SmallAvatarImage';
import { checkmark, chevronForward } from 'ionicons/icons'

import style from './AdminHome.module.css'

import logo from '../../assets/images/MasterPlaceLOGO.png'


const AdminHome: React.FC = () => {
    const router = useIonRouter()

    return (
        <IonPage>
            <IonContent className="ion-padding">
                {/* Greeter */}
                <IonGrid>
                    <IonRow className='ion-justify-content-between align-items-center'>
                        <IonCol size='7'>
                            <IonText>
                                <small>Hey Username</small> <br />
                                <big>Welcome back!</big>
                            </IonText>
                        </IonCol>
                        <IonCol size='2'>
                            <SmallAvatarImage email='hello@gmail.com' />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* Sections */}
                <IonGrid fixed className='ion-margin-top'>
                    <IonRow className='ion-align-items-end'>
                        <IonCol size='6' onClick={() => router.push('/dashboard/users')}>
                            <div className={`${style.db__section} ${style.db__section_1} ion-padding`}>
                                <IonText>
                                    <big>Users</big>
                                </IonText>
                            </div>
                        </IonCol>
                        <IonCol size='6'>
                            <div className={`${style.db__section} ${style.db__section_2} ion-padding`}>
                                <IonText>
                                    <big>Departments</big>
                                </IonText>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-align-items-start'>
                        <IonCol size='6'>
                            <div className={`${style.db__section} ${style.db__section_3} ion-padding `}>
                                <IonText>
                                    <big>Profile</big>
                                </IonText>
                            </div>
                        </IonCol>
                        <IonCol size='6'>
                            <div className={`${style.db__section} ${style.db__section_4} ion-padding `}>
                                <IonText>
                                    <big>Settings</big> <br />
                                </IonText>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* Reports */}
                <IonGrid className='ion-margin-top'>
                    <IonRow className='ion-justify-content-between align-items-center'>
                        <IonCol size='5'>
                            <IonText>
                                <big>Recent Reports</big>
                            </IonText>
                        </IonCol>
                        <IonCol size='3' className='ion-text-end'>
                            <IonText>
                                <IonRouterLink routerLink='/dashboard/reports' routerDirection='forward'>
                                    <IonIcon icon={chevronForward} />
                                </IonRouterLink>
                            </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        {
                            [...new Array(5).keys()].map((item, indx) => (
                                <IonCol size='12' key={indx}>
                                    <div className="border border-1 rounded-3">
                                        <IonItem lines='none' detail>
                                            <IonAvatar slot='start'>
                                                <IonImg src={logo} />
                                            </IonAvatar>
                                            <IonLabel>
                                                John Smith
                                                <p>Today, 6:20am</p>
                                            </IonLabel>
                                        </IonItem>
                                    </div>
                                </IonCol>
                            ))
                        }
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AdminHome;