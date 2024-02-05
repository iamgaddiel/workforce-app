import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import DepartReportSection from '../../components/DepartReportSection/DepartReportSection';
import DepartmentPermission from '../../components/DepartmentPermission/DepartmentPermission';
import DepartmentRemarks from '../DepartmentRemarks/DepartmentRemarks';


type Scene = 'departments' | 'permission' | 'remarks'
const ReportDetail: React.FC = () => {
    const [scene, setScene] = useState<Scene>('departments')

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/dashboard/reports' />
                    </IonButtons>
                    <IonTitle>Report</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonSegment mode='md' value={scene} onIonChange={(e) => setScene(e.detail.value as Scene)}>
                    <IonSegmentButton value={'departments'}>Departments</IonSegmentButton>
                    <IonSegmentButton value={'permission'}>Permissions</IonSegmentButton>
                    <IonSegmentButton value={'remarks'}>Remarks</IonSegmentButton>
                </IonSegment>

                { scene === 'departments' && <DepartReportSection />}
                { scene === 'permission' && <DepartmentPermission />}
                { scene === 'remarks' && <DepartmentRemarks />}
            </IonContent>
        </IonPage>
    );
};

export default ReportDetail;