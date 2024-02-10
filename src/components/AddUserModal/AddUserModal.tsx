import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonModal, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react'
import React from 'react'
import { AddUserType } from '../../@types/User'
import { close } from 'ionicons/icons'
import { useForm, SubmitHandler } from 'react-hook-form'
import Settings from '../../helpers/settings'
import useToast from '../../hooks/useToast'
import { useRecoilState } from 'recoil'
import { UserListTrigger } from '../../atoms/triggers'




const { supabase } = Settings()

const AddUserModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<AddUserType>()

    const [presentLoading, dismissLoading] = useIonLoading()

    const { showToast } = useToast()

    const [trigger, setTrigger] = useRecoilState(UserListTrigger)



    const onSubmit: SubmitHandler<AddUserType> = async (data) => {
        try {
            await presentLoading('Creating user...')
            const formData = {
                email: data.email,
                password: data.password,
                user_metadata: {
                    name: data.name,
                    role: data.role,
                }
            }

            await supabase.auth.admin.createUser(formData)
            await dismissLoading()
            showToast('User created successfully', 'success', 'Success')
            setTrigger((currentTriggerState) => !currentTriggerState) // triggers reload
            setIsOpen(false)
        }

        catch (error: any) {
            await dismissLoading()
            showToast('User already with this detail already exists', 'danger', 'Error Creating User')
            return
        }

    }



    return (
        <IonModal initialBreakpoint={.7} isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
            <IonHeader className='ion-no-border'>
                <IonToolbar className='ion-padding-end'>
                    <IonGrid>
                        <IonRow className='ion-justify-content-between'>
                            <IonCol size='auto'>
                                <IonTitle>Create User</IonTitle>
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
                                {errors.name && <small className='text-danger'>{errors.name.message}</small>}
                            </IonCol>
                            <IonCol size='12' className='ion-margin-top'>
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
                            <IonCol size='12' className='ion-margin-top'>
                                <IonSelect placeholder='Admin' label='Role' labelPlacement='fixed' fill='outline' {...register('role', {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    }
                                })}>
                                    <IonSelectOption value={'admin'}>Admin</IonSelectOption>
                                    <IonSelectOption value={'user'}>User</IonSelectOption>
                                </IonSelect>
                                {errors.role && <small className='text-danger'>{errors.role.message}</small>}
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
}

export default AddUserModal


type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

