import { IonCol, IonGrid, IonListHeader, IonRow, IonTextarea } from '@ionic/react'
import React, { useEffect, useReducer } from 'react'
import { reportReducer } from '../reducers/functions/ReportReducer'
import { ADD_ASSISTANT_HOD_REMARK, ADD_GENERAL_INCIDENT, ADD_HOD_REMARK, ADD_MD_REMARK, ADD_OFFICIAL_REMARK, ADD_OTHER_INCIDENT, ADD_PECULIAR_INCIDENT } from '../reducers/actions/ReportAtions'
import { SetterOrUpdater, useRecoilValue } from 'recoil'
import { Report } from '../@types/Reports'
import { CreateReportAtom } from '../atoms/Report'




type Props = {
    setState:SetterOrUpdater<Report>
}


const Incidents: React.FC<Props> = ({ setState }) => {
    const reportValue = useRecoilValue(CreateReportAtom)
    const [state, dispatch] = useReducer(reportReducer, reportValue)


    useEffect(() => {
        setState({...state})
    }, [state])


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