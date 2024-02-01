import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { arrowForward, mail, mailOutline } from 'ionicons/icons';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

import style from './Login.module.css'
import { LoginAuth } from '../../@types/auth';

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginAuth>()
    const router = useIonRouter()


    const onSubmit: SubmitHandler<LoginAuth> = (data) => {
        router.push('/dashboard/home')
    }


    return (
        <IonPage>
            <IonContent className={`${style.content} ion-padding`}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='12'>
                                <h1>Login</h1>
                                <p>Please sign in to continue</p>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-justify-content-start ion-margin-top'>
                            <IonCol size='12'>
                                <IonInput type='email' placeholder='user123@email.com' label='EMAIL' labelPlacement='stacked' fill='outline' autoFocus {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })} />
                            </IonCol>
                            <IonCol size='12' className='ion-margin-top'>
                                <IonInput type='password' placeholder='Yu34!d.#2day' label='PASSWORD' labelPlacement='stacked' fill='outline' {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })} />
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-justify-content-end ion-margin-top'>
                            <IonCol size='6' sizeMd='3'>
                                <IonButton color={'primary'} expand='block' shape='round' mode='ios' type='submit'>
                                    Login
                                    <IonIcon icon={arrowForward} size='large' slot='end' color='light' />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
            <IonFooter className='ion-no-border'>
                <IonToolbar className='ion-text-center'>
                    <IonText>
                        <small>workforce </small>
                    </IonText>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Login;
