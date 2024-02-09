import { IonAvatar, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonIcon, IonImg, IonInput, IonPage, IonRow, IonText, IonToolbar, useIonLoading, useIonRouter, useIonToast } from '@ionic/react';
import { arrowForward, warning } from 'ionicons/icons';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

import style from './Login.module.css'
import { LoginAuth } from '../../@types/auth';
import Settings from '../../helpers/settings';
import { saveData } from '../../helpers/storageSDKs';
import { USER } from '../../helpers/keys';

import Logo from '../../assets/images/MasterPlaceLOGO.png'




const Login: React.FC = () => {
    const router = useIonRouter()

    const { supabase } = Settings()

    const [presentToast, dismissToast] = useIonToast()

    const [presentLoading, dismissLoading] = useIonLoading()

    const { register, handleSubmit, formState: { errors } } = useForm<LoginAuth>()





    const onSubmit: SubmitHandler<LoginAuth> = async (formData) => {
        await presentLoading('Authenticating...')

        const { data, error } = await supabase.auth.signInWithPassword(formData)

        if (error) {
            await dismissLoading()
            await presentToast({
                header: 'Authentication Error',
                message: 'Invalid login credentials, try again',
                icon: warning,
                position: 'top',
                duration: 3000,
                color: 'danger',
                swipeGesture: 'vertical'
            })
            return
        }

        await saveData(USER, data)
        await dismissLoading()

        if (data.user.user_metadata?.role === 'user') {
            router.push('/user/dashboard/reports')
            return
        }

        router.push('/app/dashboard/home')
    }


    return (
        <IonPage>
            <IonContent className={`${style.content} ion-padding`}>
    
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonGrid fixed>
                        <IonRow className='ion-justify-content-center'>
                            <IonCol size='2'>
                                <IonAvatar>
                                    <IonImg src={Logo} />
                                </IonAvatar>
                            </IonCol>
                        </IonRow>
                        <IonRow className='mt-4'>
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
                                {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                            </IonCol>
                            <IonCol size='12' className='ion-margin-top'>
                                <IonInput type='password' placeholder='Yu34!d.#2day' label='PASSWORD' labelPlacement='stacked' fill='outline' {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })} />
                                {errors.password && <small className='text-danger'>{errors.password.message}</small>}
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
