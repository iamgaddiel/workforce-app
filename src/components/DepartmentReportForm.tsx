import { IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption, IonItem, IonListHeader, IonText } from '@ionic/react'
import React, { useReducer } from 'react'
import { reportReducer } from '../reducers/functions/ReportReducer'
import { ADD_ASSISTANT_1, ADD_ASSISTANT_2, ADD_DEPARTMENT, ADD_HOD_OR_MD, ADD_ITEM_EXPLANATION, ADD_SERVICE, ADD_TOTAL_ABSENTEES, ADD_TOTAL_MEMBERS_IN_DEPARTMENT, ADD_TOTAL_MEMBERS_IN_SERVICE, ADD_UNIT_LEADERS_ATTENDANCE_DETAIL } from '../reducers/actions/ReportAtions'


const service_count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const DepartmentReportForm = () => {

    const [_, dispatch] = useReducer(reportReducer, {
        department: '',
        service: 1,
        director: '',
        assistant_1: '',
        assistant_2: '',
        // absents: [],
        any_observations: '',
        assistant_hod_remark: '',
        permitted_absentee_name_1: '',
        permitted_absentee_name_2: '',
        permitted_absentee_name_3: '',
        permitted_absentee_name_4: '',
        permitted_absentee_phone_1: '',
        permitted_absentee_phone_2: '',
        permitted_absentee_phone_3: '',
        permitted_absentee_phone_4: '',
        non_permitted_absentee_name_1: '',
        non_permitted_absentee_name_2: '',
        non_permitted_absentee_name_3: '',
        non_permitted_absentee_name_4: '',
        non_permitted_absentee_phone_1: '',
        non_permitted_absentee_phone_2: '',
        non_permitted_absentee_phone_3: '',
        non_permitted_absentee_phone_4: '',
        checked_on_1: '',
        checked_on_2: '',
        checked_on_3: '',
        checked_on_4: '',
        number_of_members_department: 0,
        number_of_members_service: 0,
        number_of_absentees: 0,
        unit_leader_attendance_details: '',
        b_c_d_explanation: '',
        service_uniform: '',
        peculiar_incidents: '',
        general_incidents: '',
        hod_remark: '',
        md_remark: '',
        official_remark: ''
    })



    return (
        <IonGrid>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='full'>Department</IonItem>
                </IonCol>
            </IonRow>

            {/* Director Name */}
            <IonRow className='mt-3'>
                <IonCol size='6'>
                    <IonInput
                        fill='outline'
                        placeholder='Department'
                        label='Department'
                        labelPlacement='stacked'
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
                        label='Attendance Details'
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
    )
}

export default DepartmentReportForm
