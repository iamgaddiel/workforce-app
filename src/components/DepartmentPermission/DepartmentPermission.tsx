import { IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonText } from '@ionic/react'
import { closeCircle } from 'ionicons/icons'
import React from 'react'

const DepartmentPermission = () => {
    return (
        <>
            <IonList>
                <IonListHeader>
                    <IonText className='fw-bold'>Those who obtained permission</IonText>
                </IonListHeader>
                {
                    [...new Array(4).keys()].map((items, indx) => (
                        <IonItem>
                            <IonLabel key={indx}>
                                <p>Paul Jame</p>
                                09034545678
                            </IonLabel>
                        </IonItem>
                    ))
                }
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonText className='fw-bold'>Those who didn't obtained permission</IonText>
                </IonListHeader>
                {
                    [...new Array(4).keys()].map((items, indx) => (
                        <IonItem>
                            <IonLabel key={indx}>
                                <p>Paul Jame</p>
                                09034545678
                            </IonLabel>
                        </IonItem>
                    ))
                }
            </IonList>
            <IonList>
                <IonListHeader>
                    <IonText className='fw-bold'>Those traveled, sick etc... checked on?</IonText>
                </IonListHeader>
                {
                    [...new Array(4).keys()].map((items, indx) => (
                        <IonItem lines='none'>
                            <IonLabel key={indx}>
                                <p>Paul Jame</p>
                                09034545678
                            </IonLabel>
                            <IonIcon icon={closeCircle} color={'danger'} slot='end' />
                        </IonItem>
                    ))
                }
            </IonList>
            <IonItem>
                <IonLabel>
                    <p>Uniform for the week</p>
                    Lorem ipsum dolor sit.
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>
                    <p>PECULIAR INCIDENTS/ ISSUES</p>
                    Lorem ipsum dolor sit.
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>
                    <p>GENERAL INCIDENTS/ ISSUES</p>
                    Lorem ipsum dolor sit.
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>
                    <p>ANY OTHER OBSERVATION</p>
                    Lorem ipsum dolor sit.
                </IonLabel>
            </IonItem>
        </>
    )
}

export default DepartmentPermission