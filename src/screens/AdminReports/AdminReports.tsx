import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import style from './AdminReports.module.css'
import { arrowBack, arrowForward, calendar, person } from 'ionicons/icons';

const AdminReport: React.FC = () => {

    const borderColors = [
        '#FF6F00',
        '#5260ff',
        '#868685',
        '#ffc409'
    ]

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar className='ion-padding-end'>
                    <IonTitle>Reports</IonTitle>
                    <IonIcon icon={calendar} slot='end' color='primary' style={{ fontSize: '1.4em' }} />
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid fixed>
                    <IonRow>
                        {
                            [...new Array(4).keys()].map((item, index) => (
                                <IonCol size='12' sizeMd='4' key={index}>
                                    <IonCard className='m-0' mode='ios' routerDirection='forward' routerLink='/dashboard/report-detail/sdflsfksfl'>
                                        <IonCardContent>
                                            <div className={`${style.card__title} ion-padding-start`} style={{ borderLeftColor: borderColors[index] }}>
                                                <IonCardSubtitle> <IonIcon icon={person} /> New Web UI Design</IonCardSubtitle>
                                                <IonText>
                                                    <p><small>Lorem ipsum, dolor sit amet...</small></p>
                                                </IonText>
                                            </div>
                                            <div className="ion-margin-top">
                                                <small>Today, 10:00apm </small>
                                            </div>

                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            ))
                        }
                    </IonRow>

                    {/* Pagination */}
                    <IonRow className='ion-justify-content-evenly mt-5 w-75 mx-auto'>
                        <IonCol size='2' sizeMd='1'>
                            <button className={`${style.pagination__btn__direction}`}>
                                <IonIcon icon={arrowBack}  />
                            </button>
                        </IonCol>
                        <IonCol size='6' sizeMd='4' className={`${style.pagination__btn__wrapper}`}>
                            <IonRow className='ion-justify-content-evenly'>
                                <IonCol size='2'>
                                    <IonText>1</IonText>
                                </IonCol>
                                <IonCol size='2'>
                                    <IonText className='fw-bold'>2</IonText>
                                </IonCol>
                                <IonCol size='2'>
                                    <IonText>3</IonText>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        <IonCol size='2' sizeMd='1'>
                            <button className={`${style.pagination__btn__direction}`}>
                                <IonIcon icon={arrowForward}  />
                            </button>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AdminReport;