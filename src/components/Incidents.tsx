import { IonCol, IonGrid, IonListHeader, IonRow, IonText, IonTextarea } from '@ionic/react'
import React, { useReducer } from 'react'
import { reportReducer } from '../reducers/functions/ReportReducer'
import { ADD_ASSISTANT_HOD_REMARK, ADD_GENERAL_INCIDENT, ADD_HOD_REMARK, ADD_MD_REMARK, ADD_OFFICIAL_REMARK, ADD_OTHER_INCIDENT, ADD_PECULIAR_INCIDENT } from '../reducers/actions/ReportAtions'

const Incidents = () => {
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
                <IonCol size='12' className='ion-margin-top'>
                    <IonTextarea
                        placeholder='ic'
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
                        placeholder='ic'
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
                        placeholder='ic'
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
                    Sign off remark
                </IonListHeader>
                <IonCol size='12'>
                    <IonTextarea
                        placeholder='ic'
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
                        placeholder='ic'
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
                        placeholder='ic'
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
                        placeholder='ic'
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
    )
}

export default Incidents