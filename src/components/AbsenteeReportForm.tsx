import { IonGrid, IonRow, IonCol, IonItem, IonInput, IonSelect, IonSelectOption, IonListHeader } from '@ionic/react'
import React, { useReducer } from 'react'
import { reportReducer } from '../reducers/functions/ReportReducer'
import { ADD_WHO_OBTAINED_PERMISSION_NAME_1 } from '../reducers/actions/ReportAtions'



const service_count = [1, 2, 3, 4]


const AbsenteeReportForm = () => {
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
            <IonListHeader>
                Those who obtained permission
            </IonListHeader>

            {/* Director Name */}
            {
                service_count.map(item => (
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
                                    action:  `ADD_WHO_OBTAINED_PERMISSION_PHONE_${item}`
                                })}
                            />
                        </IonCol>
                    </IonRow>
                ))
            }

            <IonListHeader>
                Those who did not obtain permission
            </IonListHeader>
            {
                service_count.map(item => (
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
    )
}

export default AbsenteeReportForm