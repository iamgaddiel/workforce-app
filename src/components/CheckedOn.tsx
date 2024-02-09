import { IonGrid, IonListHeader, IonRow, IonCol, IonInput, IonItem, IonLabel, IonToggle } from '@ionic/react'
import React, { useReducer } from 'react'
import { ADD_CHECKED_ON_1, ADD_SERVICE, ADD_SERVICE_UNIFORM } from '../reducers/actions/ReportAtions'
import { reportReducer } from '../reducers/functions/ReportReducer'

const service_count = [1, 2, 3, 4]


const CheckedOn = () => {
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
                PECULIAR INCIDENTS/ ISSUES
            </IonListHeader>

            {/* Director Name */}
            {
                service_count.map(item => (
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
                    />
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default CheckedOn