import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonModal, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AddUserType } from '../../@types/User';
import { close } from 'ionicons/icons';





type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UserEditModal: React.FC<Props> = ({ isOpen, setIsOpen}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<AddUserType>()
    const router = useIonRouter()


    const onSubmit: SubmitHandler<AddUserType> = (data) => {
        router.push('/dashboard/home')
    }


    return (
        <IonModal initialBreakpoint={.5} isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
            <IonHeader className='ion-no-border'>
                <IonToolbar className='ion-padding-end'>
                    <IonGrid>
                        <IonRow className='ion-justify-content-between'>
                            <IonCol size='auto'>
                                <IonTitle>Edit Username </IonTitle>
                            </IonCol>
                            <IonCol size='1'>
                                <IonIcon icon={close} onClick={() => setIsOpen(false)} />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <IonGrid>
                        <IonRow className='ion-margin-top'>
                            <IonCol size='12'>
                                <IonInput type='text' placeholder='John Maxwell' label='Name' labelPlacement='stacked' fill='outline' autoFocus {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })} />
                            </IonCol>
                            <IonCol size='12' className='ion-margin-top'>
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
                            <IonCol size='12' sizeMd='3'>
                                <IonButton color={'primary'} expand='block' shape='round' mode='ios' type='submit'>
                                    Create User
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </form>
            </IonContent>
        </IonModal>
    )
};

export default UserEditModal;