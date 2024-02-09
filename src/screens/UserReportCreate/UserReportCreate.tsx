import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import DepartmentReportForm from '../../components/DepartmentReportForm';
import { arrowBack, chevronForward, cloud, cloudUpload } from 'ionicons/icons';
import AbsenteeReportForm from '../../components/AbsenteeReportForm';
import CheckedOn from '../../components/CheckedOn';
import Incidents from '../../components/Incidents';
import useToast from '../../hooks/useToast';


import style from './UserReportCreate.module.css'




const SwiperButton = ({ children }: any) => {
    
    const swiper = useSwiper()
    return (
        <IonRow className='ion-justify-content-evenly ion-align-items-center'>
            {/* <IonCol size='2'>
                <button className={`${style.pagination__btn__direction}`} onClick={() => swiper.slidePrev}>
                    <IonIcon icon={arrowBack} />
                </button>
            </IonCol> */}
            <IonCol size='12'>
                <IonButton
                    shape='round'
                    expand='block'
                    size='default'
                    mode='ios'
                    className='ion-margin-top ion-padding'
                    onClick={() => swiper.slideNext()}
                >
                    {children}
                </IonButton>
            </IonCol>
        </IonRow>
    )
}



const UserReportCreate: React.FC = () => {
    const { showToast } = useToast()
    const [presentLoading, dismissLoading] = useIonLoading()
    const router = useIonRouter()

    async function submitReport() {

    }

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/user/dashboard/reports' />
                    </IonButtons>
                    <IonTitle>Create Report</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination
                >
                    <SwiperSlide>
                        <DepartmentReportForm />
                        <SwiperButton>
                            Next
                            <IonIcon icon={chevronForward} color='light' slot='end' />
                        </SwiperButton>
                    </SwiperSlide>
                    <SwiperSlide>
                        <AbsenteeReportForm />
                        <SwiperButton>
                            Next
                            <IonIcon icon={chevronForward} color='light' slot='end' />
                        </SwiperButton>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CheckedOn />
                        <SwiperButton>
                            Next
                            <IonIcon icon={chevronForward} color='light' slot='end' />
                        </SwiperButton>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Incidents />
                        <IonButton
                            shape='round'
                            expand='block'
                            size='default'
                            mode='ios'
                            className='ion-margin-top ion-padding'
                            onClick={() => submitReport()}
                        >
                            Submit
                            <IonIcon icon={cloudUpload} color='light' slot='end' />
                        </IonButton>
                    </SwiperSlide>
                </Swiper>
            </IonContent>
        </IonPage>
    );
};

export default UserReportCreate;