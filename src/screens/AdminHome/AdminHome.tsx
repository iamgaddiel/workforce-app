import { IonAvatar, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar, useIonRouter, useIonViewWillEnter } from '@ionic/react';
import React from 'react';
import SmallAvatarImage from '../../components/SmallAvatarImage/SmallAvatarImage';
import { checkmark, chevronForward, people, person, readerOutline } from 'ionicons/icons'

import style from './AdminHome.module.css'

import logo from '../../assets/images/MasterPlaceLOGO.png'
import useUser from '../../hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import { UserType } from '../../@types/User';
import { USER } from '../../helpers/keys';
import { getSaveData } from '../../helpers/storageSDKs';
import useToast from '../../hooks/useToast';
import { useRecoilValue } from 'recoil';
import { UserListTrigger } from '../../atoms/triggers';
import Settings from '../../helpers/settings';

import NotFound from '../../assets/images/empty.jpg'
import { formatDistanceToNow } from 'date-fns';





const { supabase } = Settings()

const AdminHome: React.FC = () => {
    const router = useIonRouter()

    const userObject = useUser()

    const trigger = useRecoilValue(UserListTrigger)

    const { showToast } = useToast()


    const { data: reports, isLoading } = useQuery({
        queryKey: ['user_reports', trigger],
        queryFn: getUserReports
    })



    async function getUserReports() {
        const session = await getSaveData(USER) as UserType

        let { data, error } = await supabase
            .from('reports')
            .select('department, hod_or_md, created_at, id')
            .range(0, 4)


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
                {/* Greeter */}
                <IonGrid>
                    <IonRow className='ion-justify-content-between align-items-center'>
                        <IonCol size='7'>
                            <IonText>
                                <small>Hey {userObject?.user?.user_metadata?.name ?? 'Admin'}</small> <br />
                                <big>Welcome back!</big>
                            </IonText>
                        </IonCol>
                        <IonCol size='2'>
                            <SmallAvatarImage email={userObject?.user?.email!} />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* Sections */}
                <IonGrid fixed className='ion-margin-top'>
                    <IonRow className='ion-align-items-end'>
                        <IonCol size='6' onClick={() => router.push('/app/dashboard/users')}>
                            <div className={`${style.db__section} ${style.db__section_1} ion-padding`}>
                                <IonIcon icon={people} size='large' /> <br />
                                <IonText>
                                    <big>Users</big>
                                </IonText>
                            </div>
                        </IonCol>
                        <IonCol size='6' onClick={() => router.push('/app/dashboard/reports')}>
                            <div className={`${style.db__section} ${style.db__section_2} ion-padding`}>
                                <IonIcon icon={readerOutline} size='large' /> <br />
                                <IonText>
                                    <big>Reports</big>
                                </IonText>
                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-align-items-start'>
                        <IonCol size='12'>
                            <div className={`${style.db__section} ${style.db__section_4} ion-padding `} onClick={() => router.push('/app/dashboard/profile')}>
                                <IonIcon icon={person} size='large' /> <br />
                                <div>
                                    <IonText>
                                        <big>Profile</big>
                                    </IonText>
                                </div>
                            </div>
                        </IonCol>
                        {/* <IonCol size='6'>
                            <div className={`${style.db__section} ${style.db__section_4} ion-padding `}>
                                <IonText>
                                    <big>Settings</big> <br />
                                </IonText>
                            </div>
                        </IonCol> */}
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
                                <IonRouterLink routerLink='/app/dashboard/reports' routerDirection='forward'>
                                    <IonIcon icon={chevronForward} />
                                </IonRouterLink>
                            </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        {
                            reports?.length! > 0 ? (
                                <>
                                    {
                                        reports?.map((item, indx) => (
                                            <IonCol size='12' key={indx}>
                                                <div className="border border-1 rounded-3">
                                                    <IonItem lines='none' detail routerDirection='forward' routerLink={`/user/dashboard/report-detail/${item.id}`}>
                                                        <IonAvatar slot='start'>
                                                            <IonImg src={logo} />
                                                        </IonAvatar>
                                                        <IonLabel>
                                                            {item.hod_or_md}
                                                            <p>{formatDistanceToNow(item.created_at)}</p>
                                                        </IonLabel>
                                                    </IonItem>
                                                </div>
                                            </IonCol>
                                        ))
                                    }
                                </>
                            ) : (
                                <div className='d-flex align-items-center justify-content-center' style={{ height: '80dvh' }}>
                                    <div>
                                        <IonAvatar className='mx-auto'>
                                            <IonImg src={NotFound} />
                                        </IonAvatar>
                                        <IonText color={'medium'} className='mt-4'>No users found!</IonText>
                                    </div>
                                </div>
                            )
                        }
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AdminHome;