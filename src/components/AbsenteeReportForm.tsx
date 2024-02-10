import { IonGrid, IonRow, IonCol, IonItem, IonInput, IonSelect, IonSelectOption, IonListHeader } from '@ionic/react'
import React, { useEffect, useReducer } from 'react'
import { reportReducer } from '../reducers/functions/ReportReducer'
import { ADD_WHO_OBTAINED_PERMISSION_NAME_1 } from '../reducers/actions/ReportAtions'
import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil'
import { Report } from '../@types/Reports'
import { CreateReportAtom } from '../atoms/Report'



const service_count = [1, 2, 3, 4]

type Props = {
    setState:SetterOrUpdater<Report>
}


const AbsenteeReportForm: React.FC<Props> = ({ setState }) => {
    const [reportValue, setReportValues] = useRecoilState(CreateReportAtom)
    const [state, dispatch] = useReducer(reportReducer, reportValue)


    useEffect(() => {
        setReportValues({...reportValue,...state})
        console.log("🚀 ~ useEffect ~ state:", state)
        console.log("🚀 ~ useEffect ~ reportValue:", reportValue)
    }, [state])


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