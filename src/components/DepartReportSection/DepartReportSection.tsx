import { IonInput, IonItem, IonLabel, IonList, IonListHeader, IonText } from '@ionic/react'
import React from 'react'

const DepartReportSection = () => {
    return (
        <>
            {/* Names */}
            <IonList>
                <IonListHeader>
                    <IonText className='fw-bold'>Names</IonText>
                </IonListHeader>

                {/* Date */}
                <IonItem>
                    <IonLabel>
                        <p>Date</p>
                        10 Oct, 2023
                    </IonLabel>
                </IonItem>

                {/* Service */}
                <IonItem>
                    <IonLabel>
                        <p>Service</p>
                        1 Service
                    </IonLabel>
                </IonItem>

                {/* Department */}
                <IonItem>
                    <IonLabel>
                        <p>Department</p>
                        Media
                    </IonLabel>
                </IonItem>

                {/* HOD/MD */}
                <IonItem>
                    <IonLabel>
                        <p>MD/HOD Name</p>
                        John Doe
                    </IonLabel>
                </IonItem>

                {/* Assistant 1 */}
                <IonItem>
                    <IonLabel>
                        <p>MD/HOD Name</p>
                        John Doe
                    </IonLabel>
                </IonItem>

                {/* Assistant 2 */}
                <IonItem>
                    <IonLabel>
                        <p>Assistant 2 (as it applies)</p>
                        John Doe
                    </IonLabel>
                </IonItem>
            </IonList>


            {/* Numbers */}
            <IonList>
                <IonListHeader>
                    <IonText className='fw-bold'>Counts</IonText>
                </IonListHeader>

                {/* Deprtment Members */}
                <IonItem>
                    <IonLabel>
                        Total Department Members
                    </IonLabel>
                    <IonText slot='end'>200</IonText>
                </IonItem>

                {/* In Service Members */}
                <IonItem>
                    <IonLabel>
                        Total Members in service
                    </IonLabel>
                    <IonText slot='end'>200</IonText>
                </IonItem>

                {/* Absentee Members */}
                <IonItem>
                    <IonLabel>
                        Total Absentees
                    </IonLabel>
                    <IonText slot='end'>200</IonText>
                </IonItem>
            </IonList>

            <IonList>
                <IonItem>
                    <IonLabel>
                        <p>Unit Leaders Attendance Details</p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, recusandae.
                    </IonLabel>
                </IonItem>
            </IonList>
        </>
    )
}

export default DepartReportSection