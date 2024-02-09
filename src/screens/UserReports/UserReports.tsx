import { IonCard, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';

import style from './UserReports.module.css'
import { calendar, person, arrowBack, arrowForward, add } from 'ionicons/icons';
import useUser from '../../hooks/useUser';
import SmallAvatarImage from '../../components/SmallAvatarImage/SmallAvatarImage';
import Settings from '../../helpers/settings';




const { supabase } = Settings()

const UserReports: React.FC = () => {
    const borderColors = [
        '#FF6F00',
        '#5260ff',
        '#868685',
        '#ffc409'
    ]

    const userObject = useUser()

    const router = useIonRouter()



    async function getUserReports() {
        try {

            let { data: reports, error } = await supabase
                .from('reports')
                .select('some_column,other_column')

        }
        catch (error: any) {

        }
    }


    return (
        <IonPage>
            {/* <IonHeader className='ion-no-border'>
                <IonToolbar className='ion-padding-end'>
                    <IonTitle>Reports</IonTitle>
                    <IonIcon icon={calendar} slot='end' color='primary' style={{ fontSize: '1.4em' }} />
                </IonToolbar>
            </IonHeader> */}
            <IonContent className="ion-padding">
                {/* Floating Button */}
                <IonFab vertical='bottom' horizontal='end' slot='fixed' className='ion-margin-bottom'>
                    <IonFabButton routerLink='/user/dashboard/reports/create' routerDirection='forward'>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
                {/* Greeter */}
                <IonGrid>
                    <IonRow className='ion-justify-content-between align-items-center'>
                        <IonCol size='7'>
                            <IonText>
                                <small>Hey {userObject?.user?.user_metadata?.name ?? 'user'}</small> <br />
                                <big>Welcome back!</big>
                            </IonText>
                        </IonCol>
                        <IonCol size='2' onClick={() => router.push('/user/dashboard/Profile')}>
                            <SmallAvatarImage email={userObject?.user?.email!} />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid fixed>
                    <IonRow>
                        {
                            [...new Array(4).keys()].map((item, index) => (
                                <IonCol size='12' sizeMd='4' key={index}>
                                    <IonCard className='m-0' mode='ios' routerDirection='forward' routerLink='/user/dashboard/report-detail/sdflsfksfl'>
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
                                <IonIcon icon={arrowBack} />
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
                                <IonIcon icon={arrowForward} />
                            </button>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default UserReports;