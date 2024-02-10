import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSkeletonText, IonText, IonTitle, IonToolbar, RefresherEventDetail, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';

import style from './UserReports.module.css'
import { calendar, person, arrowBack, arrowForward, add, reloadOutline } from 'ionicons/icons';
import useUser from '../../hooks/useUser';
import SmallAvatarImage from '../../components/SmallAvatarImage/SmallAvatarImage';
import Settings from '../../helpers/settings';
import useToast from '../../hooks/useToast';
import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { getSaveData } from '../../helpers/storageSDKs';
import { USER } from '../../helpers/keys';
import { UserType } from '../../@types/User';
import { useRecoilValue } from 'recoil';
import { UserListTrigger } from '../../atoms/triggers';


import NotFound from '../../assets/images/empty.jpg'




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

    const { showToast } = useToast()

    const trigger = useRecoilValue(UserListTrigger)

    const [page, setPage] = useState(0)


    const { data: reports, isLoading } = useQuery({
        queryKey: ['user_reports', trigger],
        queryFn: getUserReports
    })

    const [previousReport, setPreviousReport] = useState(reports)





    function loadMoreData() {
        const ITEMS_PER_PAGE = 10
        let from = page * ITEMS_PER_PAGE
        let to = page + ITEMS_PER_PAGE

        if (page > 0) {
            from += 1
        }

        return { from, to }
    }


    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            getUserReports()
            event.detail.complete();
        }, 5000);
    }


    async function getUserReports() {
        const session = await getSaveData(USER) as UserType
        const { from, to } = loadMoreData()

        let { data, error } = await supabase
            .from('reports')
            .select('department, hod_or_md, created_at, id')
            .eq('user_id', session.user?.id)
        // .range(from, to)

        setPage((currentPage) => currentPage + 1)

        if (error) {
            showToast(
                'Unable to fetch reports at this time. try again later',
                'danger',
                'Error Fetching Data'
            )
            throw new Error('Unable to fetch reports at this time. try again later')
        }

        return data
    }


    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

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
                    {
                        isLoading ? (
                            <>
                                {
                                    [...new Array(4).keys()].map((item, index) => (
                                        <IonSkeletonText animated style={{ with: '100%', height: '80px' }} className='mt-3' />
                                    ))
                                }
                            </>
                        ) : (

                            <>
                                {
                                    reports?.length! > 0 ? (
                                        <IonRow>
                                            {
                                                reports?.map((item, index) => (
                                                    <IonCol size='12' sizeMd='4' key={index}>
                                                        <IonCard className='m-0' mode='ios' routerDirection='forward' routerLink={`/user/dashboard/report-detail/${item.id}`}>
                                                            <IonCardContent>
                                                                <div className={`${style.card__title} ion-padding-start`} style={{ borderLeftColor: borderColors[index] }}>
                                                                    <IonCardSubtitle> <IonIcon icon={person} /> {item.department}</IonCardSubtitle>
                                                                    <IonText>
                                                                        <p><small>{item.hod_or_md}</small></p>
                                                                    </IonText>
                                                                </div>
                                                                <div className="ion-margin-top">
                                                                    <small>{formatDistanceToNow(item.created_at)} </small>
                                                                </div>

                                                            </IonCardContent>
                                                        </IonCard>
                                                    </IonCol>
                                                ))
                                            }
                                        </IonRow>

                                    ) : (
                                        <div className='d-flex align-items-center justify-content-center' style={{ height: '80dvh' }}>
                                            <div>
                                                <IonAvatar className='mx-auto'>
                                                    <IonImg src={NotFound} />
                                                </IonAvatar>
                                                <IonText color={'medium'} className='mt-4'>No report found!</IonText>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }


                    {/* Pagination */}
                    {/* <IonRow className='ion-justify-content-evenly mt-5 w-75 mx-auto'>
                        <IonCol size='12'>
                            <IonButton mode='ios' color={'primary'} expand='block' onClick={() => getUserReports()}>
                                <IonText color={'light'}>Load More </IonText>
                                <IonIcon icon={reloadOutline} color='light' slot='start' />
                            </IonButton>
                        </IonCol>
                    </IonRow> */}
                    {/* <IonRow className='ion-justify-content-evenly mt-5 w-75 mx-auto'>
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
                    </IonRow> */}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default UserReports;