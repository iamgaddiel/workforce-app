import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonListHeader, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonTextarea, IonTitle, IonToolbar, useIonAlert, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import DepartmentReportForm from '../../components/DepartmentReportForm';
import { arrowBack, chevronForward, cloud, cloudUpload } from 'ionicons/icons';
import AbsenteeReportForm from '../../components/AbsenteeReportForm';
import CheckedOn from '../../components/CheckedOn';
import Incidents from '../../components/Incidents';
import useToast from '../../hooks/useToast';


import style from './UserReportCreate.module.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CreateReportAtom } from '../../atoms/Report';
import { Report } from '../../@types/Reports';
import useUser from '../../hooks/useUser';
import Settings from '../../helpers/settings';
import { ADD_DEPARTMENT, ADD_SERVICE, ADD_HOD_OR_MD, ADD_ASSISTANT_1, ADD_ASSISTANT_2, ADD_TOTAL_MEMBERS_IN_DEPARTMENT, ADD_TOTAL_MEMBERS_IN_SERVICE, ADD_TOTAL_ABSENTEES, ADD_UNIT_LEADERS_ATTENDANCE_DETAIL, ADD_ITEM_EXPLANATION, ADD_SERVICE_UNIFORM, ADD_ASSISTANT_HOD_REMARK, ADD_GENERAL_INCIDENT, ADD_HOD_REMARK, ADD_MD_REMARK, ADD_OFFICIAL_REMARK, ADD_OTHER_INCIDENT, ADD_PECULIAR_INCIDENT } from '../../reducers/actions/ReportAtions';
import { reportReducer } from '../../reducers/functions/ReportReducer';
import { UserListTrigger } from '../../atoms/triggers';






const { supabase } = Settings()

const service_count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const absentee_count = [1, 2, 3, 4]

const checked_on_count = [1, 2, 3, 4]



const UserReportCreate: React.FC = () => {

    const { showToast } = useToast()

    const [presentLoading, dismissLoading] = useIonLoading()

    const [presetAlert, dismissAlert] = useIonAlert()

    const router = useIonRouter()

    const userObject = useUser()

    const setTrigger = useSetRecoilState(UserListTrigger)


    // REPORT STATE

    const [reportValues, setReportValues] = useRecoilState(CreateReportAtom)

    const [state, dispatch] = useReducer(reportReducer, reportValues)



    useEffect(() => {
        setReportValues(state)
        console.log(state, '<----000')
        console.log(reportValues, '<------+++')
    }, [state])



    async function submitReport() {
        console.log("🚀 ~ reportFormValues:", reportValues)
        await presentLoading('Submitting form')
        const {
            department,
            service,
            hod_or_md,
            assistant_1,
            number_of_members_in_department,
            number_of_members_in_service,
            number_of_absentee_members,
            b_c_d_explanation,
            service_uniform
        } = state

        if (department  === '' || service  === ''|| hod_or_md  === '' || assistant_1  === '' || b_c_d_explanation  === '' || service_uniform  === '') {
            await dismissLoading()
            await presetAlert({
                header: 'Missing fields',
                subHeader: 'Fill in the following vales',
                message: 'Department, Service, HOD/Director, Assistant, TotalNumber: Department, Service, Absentees. Attendance Detail, Explain, Service Uniform',
                buttons: [
                    {
                        text: 'Okay',
                        handler: async () => await dismissAlert()
                    }
                ]
            })
            return
        }

        if (
            ( number_of_members_in_service || number_of_members_in_department ) === 0) {
            await dismissLoading()
            await presetAlert({
                header: 'Missing fields',
                subHeader: 'Fill in the following vales',
                message: 'Total number in department and total number in service.',
                buttons: [
                    {
                        text: 'Okay',
                        handler: async () => await dismissAlert()
                    }
                ]
            })
            return
        }

        const formData = {
            ...state,
            user_id: userObject?.user?.id!,
        }

        const { data, error } = await supabase
            .from('reports')
            .insert([
                {...formData}
            ])
            .select()

        if (error) {
            await dismissLoading()
            showToast('Could not submit report', 'danger', 'Error Submitting Report')
            console.log(error, '<===')
            return
        }

        await dismissLoading()
        setTrigger((currentTriggerState) => !currentTriggerState)
        showToast('Report submitted successfully', 'success', 'Success')
        router.push('/user/dashboard/reports')
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
                <IonGrid>
                    <IonRow>
                        <IonCol size='12'>
                            <IonItem lines='full'>Department</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow className='mt-3'>
                        <IonCol size='6'>
                            <IonInput
                                fill='outline'
                                placeholder='Department'
                                label='Department'
                                labelPlacement='stacked'
                                onChange={e => console.log(e.currentTarget.value, '<<<<<<')}
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_DEPARTMENT
                                })}
                            />
                        </IonCol>

                        <IonCol size='6'>
                            <IonSelect
                                placeholder='Service'
                                label='Service'
                                fill='outline'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_SERVICE
                                })}
                            >
                                {
                                    service_count.map(item => (
                                        <IonSelectOption key={item} value={item}>{item}</IonSelectOption>
                                    ))
                                }
                            </IonSelect>
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-margin-top'>
                        <IonCol size='12' sizeMd='6'>
                            <IonInput
                                fill='outline'
                                placeholder='Name of HOD/MD'
                                label='HOD/Director'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_HOD_OR_MD
                                })}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-margin-top'>
                        <IonCol size='12' sizeMd='6'>
                            <IonInput
                                fill='outline'
                                placeholder='Name of HOD Assistant'
                                label='Assistant'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_ASSISTANT_1
                                })}
                            />
                        </IonCol>
                        <IonCol size='12' sizeMd='6' className='ion-margin-top'>
                            <IonInput
                                fill='outline'
                                placeholder='Name of HOD Assistant 2'
                                label='Assistant 2'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_ASSISTANT_2
                                })}
                            />
                        </IonCol>
                    </IonRow>

                    <IonListHeader>
                        <IonText>Total Numbers</IonText>
                    </IonListHeader>
                    <IonRow>
                        <IonCol size='4' className='ion-margin-top'>
                            <IonInput
                                type='text'
                                inputMode='numeric'
                                fill='outline'
                                placeholder='Department'
                                label='Department'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_TOTAL_MEMBERS_IN_DEPARTMENT
                                })}
                            />
                        </IonCol>
                        <IonCol size='4' className='ion-margin-top'>
                            <IonInput
                                type='text'
                                inputMode='numeric'
                                fill='outline'
                                placeholder='Service'
                                label='Service'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_TOTAL_MEMBERS_IN_SERVICE
                                })}
                            />
                        </IonCol>
                        <IonCol size='4' className='ion-margin-top'>
                            <IonInput
                                type='text'
                                inputMode='numeric'
                                fill='outline'
                                placeholder='Absentees'
                                label='Absentees'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_TOTAL_ABSENTEES
                                })}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-margin-top'>
                        <IonCol size='12' sizeMd='6'>
                            <IonInput
                                fill='outline'
                                placeholder='All unit leaders attendance details'
                                label='Unit Leader Attendance Details'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_UNIT_LEADERS_ATTENDANCE_DETAIL
                                })}
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-margin-top'>
                        <IonCol size='12' sizeMd='6'>
                            <IonInput
                                fill='outline'
                                placeholder='Explain the previous three fields'
                                label='Explain'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_ITEM_EXPLANATION
                                })}
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                {/* Absentee Report */}
                <IonGrid>
                    <IonListHeader>
                        THOSE WHO OBTAINED PERMISSION
                    </IonListHeader>

                    {/* Director Name */}
                    {
                        absentee_count.map(item => (
                            <IonRow key={item}>
                                <IonCol size='7'>
                                    <IonInput
                                        fill='outline'
                                        placeholder='Absentee name'
                                        label='Name'
                                        labelPlacement='stacked'
                                        onIonChange={(e) => dispatch({
                                            payload: e.detail.value as string,
                                            action: `ADD_WHO_OBTAINED_PERMISSION_NAME_${item}`
                                        })}
                                    />
                                </IonCol>
                                <IonCol size='5'>
                                    <IonInput
                                        type='text'
                                        inputMode='numeric'
                                        fill='outline'
                                        placeholder='09088767654'
                                        label='Phone'
                                        labelPlacement='stacked'
                                        onIonChange={(e) => dispatch({
                                            payload: e.detail.value as string,
                                            action: `ADD_WHO_OBTAINED_PERMISSION_PHONE_${item}`
                                        })}
                                    />
                                </IonCol>
                            </IonRow>
                        ))
                    }

                    <IonListHeader>
                        THOSE WHO DID NOT OBTAIN PERMISSION
                    </IonListHeader>
                    {
                        absentee_count.map(item => (
                            <IonRow key={item}>
                                <IonCol size='7'>
                                    <IonInput
                                        fill='outline'
                                        placeholder='Absentee name'
                                        label='Name'
                                        labelPlacement='stacked'
                                        onIonChange={(e) => dispatch({
                                            payload: e.detail.value,
                                            action: `ADD_WHO_NOT_DID_OBTAINED_PERMISSION_NAME_${item}`
                                        })}
                                    />
                                </IonCol>
                                <IonCol size='5'>
                                    <IonInput
                                        type='text'
                                        inputMode='numeric'
                                        fill='outline'
                                        placeholder='09088767654'
                                        label='Phone'
                                        labelPlacement='stacked'
                                        onIonChange={(e) => dispatch({
                                            payload: e.detail.value as string,
                                            action: `ADD_WHO_DID_NOT_OBTAINED_PERMISSION_PHONE_${item}`
                                        })}
                                    />
                                </IonCol>
                            </IonRow>
                        ))
                    }
                </IonGrid>

                {/* CHECKON FORM */}
                <IonGrid>
                    <IonListHeader>
                        THOSE UNAVAILABLE AND CHECKED ON
                    </IonListHeader>

                    {
                        checked_on_count.map(item => (
                            <IonRow className='ion-justify-content-between ion-align-items-center' key={item}>
                                <IonCol size='12'>
                                    <IonInput
                                        fill='outline'
                                        placeholder='Absentee name'
                                        label='Name'
                                        labelPlacement='stacked'
                                        mode='md'
                                        onIonChange={(e) => dispatch({
                                            payload: e.detail.value as string,
                                            action: `ADD_CHECKED_ON_${item}`
                                        })}
                                    />
                                </IonCol>
                            </IonRow>
                        ))
                    }

                    <IonListHeader>
                        Uniform for service
                    </IonListHeader>
                    <IonRow>
                        <IonCol size='12'>
                            <IonInput
                                fill='outline'
                                placeholder='Gold and Black'
                                label='Uniform'
                                labelPlacement='stacked'
                                onIonChange={(e) => dispatch({
                                    payload: e.detail.value as string,
                                    action: ADD_SERVICE_UNIFORM
                                })}
                                required
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>


                {/* INCIDENTS FORM */}
                <IonGrid>
                    <IonListHeader>
                        INCIDENT FORM
                    </IonListHeader>
                    <IonRow>
                        <IonCol size='12' className='ion-margin-top'>
                            <IonTextarea
                                placeholder='Specific incidents'
                                label='PECULIAR INCIDENTS/ ISSUES'
                                labelPlacement='stacked'
                                fill='outline'
                                autoGrow
                                onIonChange={e => dispatch({
                                    payload: e.detail.value,
                                    action: ADD_PECULIAR_INCIDENT
                                })}
                            />
                        </IonCol>
                        <IonCol size='12' className='ion-margin-top'>
                            <IonTextarea
                                placeholder='Generic Incidents'
                                label='GENERAL INCIDENTS/ ISSUES'
                                labelPlacement='stacked'
                                fill='outline'
                                autoGrow
                                onIonChange={e => dispatch({
                                    payload: e.detail.value,
                                    action: ADD_GENERAL_INCIDENT
                                })}
                            />
                        </IonCol>
                        <IonCol size='12' className='ion-margin-top'>
                            <IonTextarea
                                placeholder='Any'
                                label='ANY OTHER OBSERVATION'
                                labelPlacement='stacked'
                                fill='outline'
                                autoGrow
                                onIonChange={e => dispatch({
                                    payload: e.detail.value,
                                    action: ADD_OTHER_INCIDENT
                                })}
                            />
                        </IonCol>

                        <IonListHeader>
                            SIGN OFF REMARK
                        </IonListHeader>
                        <IonCol size='12'>
                            <IonTextarea
                                placeholder='Remarks'
                                label='ASSISTANT HOD’S REMARK'
                                labelPlacement='stacked'
                                fill='outline'
                                autoGrow
                                onIonChange={e => dispatch({
                                    payload: e.detail.value,
                                    action: ADD_ASSISTANT_HOD_REMARK
                                })}
                            />
                        </IonCol>
                        <IonCol size='12' className='ion-margin-top'>
                            <IonTextarea
                                placeholder='Remarks'
                                label='HOD’S REMARK'
                                labelPlacement='stacked'
                                fill='outline'
                                autoGrow
                                onIonChange={e => dispatch({
                                    payload: e.detail.value,
                                    action: ADD_HOD_REMARK
                                })}
                            />
                        </IonCol>
                        <IonCol size='12' className='ion-margin-top'>
                            <IonTextarea
                                placeholder='Remarks'
                                label='MD’S REMARK'
                                labelPlacement='stacked'
                                fill='outline'
                                autoGrow
                                onIonChange={e => dispatch({
                                    payload: e.detail.value,
                                    action: ADD_MD_REMARK
                                })}
                            />
                        </IonCol>
                        <IonCol size='12' className='ion-margin-top'>
                            <IonTextarea
                                placeholder='Remarks'
                                label='OFFICIAL REMARK'
                                labelPlacement='stacked'
                                fill='outline'
                                autoGrow
                                onIonChange={e => dispatch({
                                    payload: e.detail.value,
                                    action: ADD_OFFICIAL_REMARK
                                })}
                            />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid fixed>
                    <IonRow className='ion-justify-content-evenly ion-align-items-center'>
                        <IonCol size='12'>
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

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent >
        </IonPage >
    );

};

export default UserReportCreate;