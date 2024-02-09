import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonModal, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AddUserType, EditUserType } from '../../@types/User';
import { close } from 'ionicons/icons';
import { User } from '@supabase/supabase-js';
import Settings from '../../helpers/settings';
import { useSetRecoilState } from 'recoil';
import { UserDetailsTrigger } from '../../atoms/triggers';





type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    userDetails: User
}

const { supabase } = Settings()

const UserEditModal: React.FC<Props> = ({ isOpen, setIsOpen, userDetails }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<AddUserType>()

    const router = useIonRouter()

    const [presentLoading, dismissLoading] = useIonLoading()

    const setUserDetailTrigger = useSetRecoilState(UserDetailsTrigger)




    const onSubmit: SubmitHandler<EditUserType> = async (data) => {
        await presentLoading('Updating user details...')
        await supabase.auth.admin.updateUserById(userDetails.id, {
            email: data.email,
            user_metadata: { name: data.name }
        })
        setUserDetailTrigger((currentTiggerState) => !currentTiggerState)
        await dismissLoading()
        setIsOpen(false)
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
                                <IonInput type='text' value={userDetails?.user_metadata?.name} placeholder='John Maxwell' label='Name' labelPlacement='stacked' fill='outline' autoFocus {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })} />
                            </IonCol>
                            <IonCol size='12' className='ion-margin-top'>
                                <IonInput type='email' placeholder='user123@email.com' value={userDetails?.email} label='EMAIL' labelPlacement='stacked' fill='outline' autoFocus {...register('email', {
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
                                    Update User
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