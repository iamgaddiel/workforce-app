import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonListHeader, IonPage, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useQuery } from '@tanstack/react-query';
import { close } from 'ionicons/icons';
import React, { useCallback, useState } from 'react';
import Settings from '../../helpers/settings';



const { supabase } = Settings()

const SearchUser: React.FC = () => {

    const [searchParams, setSetParams] = useState('')

    const { data: users } = useQuery({
        queryKey: ['search_user', searchParams],
        queryFn: () => searchUser(searchParams)
    })




    // Get list of Users
    async function searchUser(param: string) {

        const { data, error } = await supabase.from('auth-user').select('*').textSearch('user_metadata', param)
        console.log("🚀 ~ searchUser ~ data:", data)
        // const { data, error } = await supabase.auth.admin.listUsers()

        if (error) {
            throw new Error('Error getting user');
        }

        // const returnData = { ...data, users: data.users.filter(user => user.user_metadata?.role == 'user') }
        return data
    }

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
                <IonSearchbar placeholder='Search' mode='ios' onIonChange={e => setSetParams(e.detail.value!)} />

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