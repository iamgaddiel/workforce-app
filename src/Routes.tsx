import { IonApp, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AdminDashboard from './screens/AdimDashboard/AdimDashboard'
import UserDashboard from './screens/UserDashboard/UserDashboard'

const Routes = () => {
    const [isAdmin, setIsAdmin] = useState(true)


    return (
        <IonPage>
            <IonRouterOutlet>
                <Route path={'/dashboard/:path'} render={() => isAdmin ? <AdminDashboard /> : <UserDashboard />} />
            </IonRouterOutlet>
        </IonPage>
    )
}

export default Routes
