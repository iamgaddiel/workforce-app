import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonSkeletonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import DepartReportSection from '../../components/DepartReportSection/DepartReportSection';
import DepartmentPermission from '../../components/DepartmentPermission/DepartmentPermission';
import DepartmentRemarks from '../DepartmentRemarks/DepartmentRemarks';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import Settings from '../../helpers/settings';
import useToast from '../../hooks/useToast';




type Scene = 'departments' | 'permission' | 'remarks'

const { supabase } = Settings()

const ReportDetail: React.FC = () => {
    const { reportId } = useParams<{ reportId: string }>()

    const [scene, setScene] = useState<Scene>('departments')

    const { showToast } = useToast()



    const { data: report, isLoading } = useQuery({
        queryKey: ['report-detail'],
        queryFn: getReportDetails
    })


    async function getReportDetails() {
        let { data: reports, error } = await supabase
            .from('reports')
            .select('*')
            .eq('id', reportId)
            .single()

        if (error) {
            showToast(
                'Unable to fetch reports at this time. try again later',
                'danger',
                'Error Fetching Data'
            )
            throw new Error('Unable to fetch reports at this time. try again later')
        }

        return reports!

    }


    if (isLoading){
        return (
            [...new Array().keys()].map(item => (
                <IonSkeletonText animated style={{ with: '100%', height: '40px' }} className='mt-3 rounded' />
                
            ))
        )
    }

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/user/dashboard/reports' />
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

                {scene === 'departments' && <DepartReportSection report={report} />}
                {scene === 'permission' && <DepartmentPermission  report={report} />}
                {scene === 'remarks' && <DepartmentRemarks report={report} />}
            </IonContent>
        </IonPage>
    );
};

export default ReportDetail;