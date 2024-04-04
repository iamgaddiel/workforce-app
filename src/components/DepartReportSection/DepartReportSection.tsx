import { IonInput, IonItem, IonLabel, IonList, IonListHeader, IonText } from '@ionic/react'
import { formatDistanceToNow } from 'date-fns'
import React from 'react'
import { Report } from '../../@types/Reports'


interface Props{
    report: Report
}

const DepartReportSection: React.FC<Props> = ({ report }) => {
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
                        {report.date}
                    </IonLabel>
                </IonItem>

                {/* Service */}
                <IonItem>
                    <IonLabel>
                        <p>Service</p>
                        {report.service}
                    </IonLabel>
                </IonItem>

                {/* Department */}
                <IonItem>
                    <IonLabel>
                        <p>Department</p>
                        {report.department}
                    </IonLabel>
                </IonItem>

                {/* HOD/MD */}
                <IonItem>
                    <IonLabel>
                        <p>MD/HOD Name</p>
                        {report.hod_or_md}
                    </IonLabel>
                </IonItem>

                {/* Assistant 1 */}
                <IonItem>
                    <IonLabel>
                        <p>Assistant </p>
                        {report.assistant_1}
                    </IonLabel>
                </IonItem>

                {/* Assistant 2 */}
                <IonItem>
                    <IonLabel>
                        <p>Assistant 2 (as it applies)</p>
                        {report.assistant_2 ?? 'N/A'}
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
                    <IonText slot='end'>{report.number_of_members_in_department}</IonText>
                </IonItem>

                {/* In Service Members */}
                <IonItem>
                    <IonLabel>
                        Total Members in service
                    </IonLabel>
                    <IonText slot='end'>{report.number_of_members_in_service}</IonText>
                </IonItem>

                {/* Absentee Members */}
                <IonItem>
                    <IonLabel>
                        Total Absentees
                    </IonLabel>
                    <IonText slot='end'>{report.number_of_absentee_members}</IonText>
                </IonItem>
            </IonList>

            <IonList>
                <IonItem>
                    <IonLabel>
                        <p>Unit Leaders Attendance Details</p>
                        {report.unit_leader_attendance_details}
                    </IonLabel>
                </IonItem>
            </IonList>
        </>
    )
}

export default DepartReportSection