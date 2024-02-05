import { IonItem, IonLabel, IonList } from '@ionic/react'
import React from 'react'

const DepartmentRemarks = () => {
    return (
        <>
            <IonList>
                <IonItem>
                    <IonLabel>
                        <p>ASSISTANT HOD’S REMARK</p>
                        Lorem ipsum dolor sit.
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <p>HOD’S REMARK</p>
                        Lorem ipsum dolor sit.
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <p>MD’S REMARK</p>
                        Lorem ipsum dolor sit.
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <p>OFFICIAL REMARK</p>
                        Lorem ipsum dolor sit.
                    </IonLabel>
                </IonItem>
            </IonList>
        </>
    )
}

export default DepartmentRemarks