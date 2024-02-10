import { IonItem, IonLabel, IonList, IonText } from '@ionic/react'
import React from 'react'


interface Props {
    report: any
}

const DepartmentRemarks: React.FC<Props> = ({ report }) => {
    return (
        <>
            <IonList>
                <IonItem>
                    <IonLabel>
                        <p>ASSISTANT HOD’S REMARK</p>
                        {report.assistant_hod_remark === '' ? <IonText color={'medium'} ><small>N/A</small></IonText> : report.assistant_hod_remark}
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <p>HOD’S REMARK</p>
                        {report.hod_remark === '' ? <IonText color={'medium'} ><small>N/A</small></IonText> : report.hod_remark}
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <p>MD’S REMARK</p>
                        {report.md_remark === '' ? <IonText color={'medium'} ><small>N/A</small></IonText> : report.md_remark}
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <p>OFFICIAL REMARK</p>
                        {report.official_remark === '' ? <IonText color={'medium'} ><small>N/A</small></IonText> : report.official_remark}
                    </IonLabel>
                </IonItem>
            </IonList>
        </>
    )
}

export default DepartmentRemarks