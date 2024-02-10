import { IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonText } from '@ionic/react'
import { closeCircle } from 'ionicons/icons'
import React from 'react'


interface Props {
    report: any
}


const DepartmentPermission: React.FC<Props> = ({ report }) => {
    return (
        <>
            <IonList>
                <IonListHeader>
                    <IonText className='fw-bold'>Those who obtained permission</IonText>
                </IonListHeader>
                {
                    report.permitted_absentee_name_1 !== '' && report.permitted_absentee_phone_1 !== '' && (
                        <IonItem>
                            <IonLabel>
                                <p>{report.permitted_absentee_name_1}</p>
                                {report.permitted_absentee_phone_1}
                            </IonLabel>
                        </IonItem>
                    )
                }
                {
                    report.permitted_absentee_name_2 !== '' && report.permitted_absentee_phone_2 !== '' && (
                        <IonItem>
                            <IonLabel>
                                <p>{report.permitted_absentee_name_2}</p>
                                {report.permitted_absentee_phone_2}
                            </IonLabel>
                        </IonItem>
                    )
                }
                {
                    report.permitted_absentee_name_3 !== '' && report.permitted_absentee_phone_3 !== '' && (
                        <IonItem>
                            <IonLabel>
                                <p>{report.permitted_absentee_name_3}</p>
                                {report.permitted_absentee_phone_3}
                            </IonLabel>
                        </IonItem>
                    )
                }
                {
                    report.permitted_absentee_name_4 !== '' && report.permitted_absentee_phone_4 !== '' && (
                        <IonItem>
                            <IonLabel>
                                <p>{report.permitted_absentee_name_4}</p>
                                {report.permitted_absentee_phone_4}
                            </IonLabel>
                        </IonItem>
                    )
                }

                {
                    report.permitted_absentee_name_4 === '' && report.permitted_absentee_name_3 === '' && report.permitted_absentee_name_2 === '' && report.permitted_absentee_name_1 === '' && (
                        <IonText color={'medium'} className='ion-margin-start'>
                            <small>N/A</small>
                        </IonText>
                    )
                }

            </IonList>
            <IonList>
                <IonListHeader>
                    <IonText className='fw-bold'>Those who didn't obtained permission</IonText>
                </IonListHeader>
                {
                    report.non_permitted_absentee_name_1 !== '' && report.non_permitted_absentee_phone_1 !== '' && (
                        <IonItem>
                            <IonLabel>
                                <p>{report.non_permitted_absentee_name_1}</p>
                                {report.non_permitted_absentee_phone_1}
                            </IonLabel>
                        </IonItem>
                    )
                }
                {
                    report.non_permitted_absentee_name_1 !== '' && report.non_permitted_absentee_phone_2 !== '' && (
                        <IonItem>
                            <IonLabel>
                                <p>{report.non_permitted_absentee_name_1}</p>
                                {report.non_permitted_absentee_phone_2}
                            </IonLabel>
                        </IonItem>
                    )
                }
                {
                    report.non_permitted_absentee_name_3 !== '' && report.non_permitted_absentee_phone_3 !== '' && (
                        <IonItem>
                            <IonLabel>
                                <p>{report.non_permitted_absentee_name_3}</p>
                                {report.non_permitted_absentee_phone_3}
                            </IonLabel>
                        </IonItem>
                    )
                }
                {
                    report.non_permitted_absentee_name_4 !== '' && report.non_permitted_absentee_phone_4 !== '' && (
                        <IonItem>
                            <IonLabel>
                                <p>{report.non_permitted_absentee_name_4}</p>
                                {report.non_permitted_absentee_phone_4}
                            </IonLabel>
                        </IonItem>
                    )
                }

                {
                    report.non_permitted_absentee_name_4 === '' && report.non_permitted_absentee_name_3 === '' && report.non_permitted_absentee_name_2 === '' && report.non_permitted_absentee_name_1 === '' && (
                        <IonText color={'medium'} className='ion-margin-start'>
                            <small>N/A</small>
                        </IonText>
                    )
                }
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonText className='fw-bold'>Those traveled, sick etc... checked on?</IonText>
                </IonListHeader>
                {
                    report.checked_on_1 !== '' && (
                        <IonItem>
                            <IonLabel>
                                {report.checked_on_1}
                            </IonLabel>
                        </IonItem>
                    )
                }
                {
                    report.checked_on_2 !== '' && (
                        <IonItem>
                            <IonLabel>
                                {report.checked_on_2}
                            </IonLabel>
                        </IonItem>
                    )
                }
                {
                    report.checked_on_3 !== '' && (
                        <IonItem>
                            <IonLabel>
                                {report.checked_on_3}
                            </IonLabel>
                        </IonItem>
                    )
                }
                {
                    report.checked_on_4 !== '' && (
                        <IonItem>
                            <IonLabel>
                                {report.checked_on_4}
                            </IonLabel>
                        </IonItem>
                    )
                }
            </IonList>
            <IonItem>
                <IonLabel>
                    <p>Uniform for the week</p>
                    {report.service_uniform}
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>
                    <p>PECULIAR INCIDENTS/ ISSUES</p>
                    {report.peculiar_incidents === '' ? <IonText color={'medium'} ><small>N/A</small></IonText> : report.peculiar_incidents }
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>
                    <p>GENERAL INCIDENTS/ ISSUES</p>
                    {report.general_incidents === '' ? <IonText color={'medium'} ><small>N/A</small></IonText> : report.general_incidents }
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>
                    <p>ANY OTHER OBSERVATION</p>
                    {report.observations === '' ? <IonText color={'medium'} ><small>N/A</small></IonText> : report.observations }
                </IonLabel>
            </IonItem>
        </>
    )
}

export default DepartmentPermission