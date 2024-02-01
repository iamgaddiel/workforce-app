import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

const ReportDetail: React.FC = () => {
    const [scene, setScene] = useState<'departments' | 'permission' | 'remarks'>('departments')

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
                <IonSegment mode='md' value={scene} onIonChange={() => setScene(scene)}>
                    <IonSegmentButton value={'departments'}>Departments</IonSegmentButton>
                    <IonSegmentButton value={'permission'}>Permissions</IonSegmentButton>
                    <IonSegmentButton value={'remarks'}>Remarks</IonSegmentButton>
                    <IonSegmentButton value={'remarks'}>Remarks</IonSegmentButton>
                </IonSegment>
            </IonContent>
        </IonPage>
    );
};

export default ReportDetail;