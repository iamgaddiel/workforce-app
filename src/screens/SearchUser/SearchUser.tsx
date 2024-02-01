import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonListHeader, IonPage, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { close } from 'ionicons/icons';
import React from 'react';

const SearchUser: React.FC = () => {

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/dashboard/users' />
                    </IonButtons>
                    <IonTitle>Search User</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonSearchbar placeholder='Search' mode='ios' />

                <IonList>
                    <IonListHeader>
                        <IonText>Recent Search</IonText>
                    </IonListHeader>
                    {
                        [...new Array(5).keys()].map((item, index) => (
                            <IonItem lines='full' key={index}>
                                <IonText>James Martins</IonText>
                                <IonIcon icon={close} slot='end' />
                            </IonItem>
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default SearchUser;