import { IonGrid, IonListHeader, IonRow, IonCol, IonInput, IonItem, IonLabel, IonToggle } from '@ionic/react'
import React, { useEffect, useReducer } from 'react'
import { ADD_CHECKED_ON_1, ADD_SERVICE, ADD_SERVICE_UNIFORM } from '../reducers/actions/ReportAtions'
import { reportReducer } from '../reducers/functions/ReportReducer'
import { SetterOrUpdater, useRecoilValue } from 'recoil'
import { Report } from '../@types/Reports'
import { CreateReportAtom } from '../atoms/Report'

const service_count = [1, 2, 3, 4]


type Props = {
    setState:SetterOrUpdater<Report>
}

const CheckedOn: React.FC<Props> = ({ setState }) => {
    const reportValue = useRecoilValue(CreateReportAtom)
    const [state, dispatch] = useReducer(reportReducer, reportValue)


    useEffect(() => {
        setState({...state})
    }, [state])



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
                        required
                    />
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default CheckedOn