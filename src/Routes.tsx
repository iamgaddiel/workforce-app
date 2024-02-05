import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AdminDashboard from './screens/AdimDashboard/AdimDashboard'
import UserDashboard from './screens/UserDashboard/UserDashboard'
import { home, readerOutline, person } from 'ionicons/icons'
import AdminHome from './screens/AdminHome/AdminHome'
import AdminReport from './screens/AdminReports/AdminReports'
import Profile from './screens/Profile/Profile'
import ReportDetail from './screens/ReportDetail/ReportDetail'
import SearchUser from './screens/SearchUser/SearchUser'
import UserDetail from './screens/UserDetail/UserDetail'
import UserList from './screens/UserList/UserList'

const Routes = () => {

    // TODO: get admin emails
    // TODO: check if current user email is in the list

    const [isAdmin, setIsAdmin] = useState(true)

    return (
        <IonTabs>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/app/dashboard/home">
                    <IonIcon aria-hidden="true" icon={home} />
                    <IonLabel>Dashboard</IonLabel>
                </IonTabButton>
                <IonTabButton tab="reports" href="/app/dashboard/reports">
                    <IonIcon aria-hidden="true" icon={readerOutline} />
                    <IonLabel>Reports</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/app/dashboard/profile">
                    <IonIcon aria-hidden="true" icon={person} />
                    <IonLabel>Me</IonLabel>
                </IonTabButton>
            </IonTabBar>
            <IonRouterOutlet>
                <Route exact path="/app/dashboard/home" component={AdminHome} />
                <Route exact path="/app/dashboard/reports" component={AdminReport} />
                <Route exact path="/app/dashboard/report-detail/:reportId" component={ReportDetail} />
                <Route exact path="/app/dashboard/users" component={UserList} />
                <Route exact path="/app/dashboard/search-user" component={SearchUser} />
                <Route exact path="/app/dashboard/user-detail/:userId" component={UserDetail} />
                <Route exact path="/app/dashboard/profile" component={Profile} />
                <Redirect exact from='/app/dashboard' to={'/app/dashboard/home'} />
            </IonRouterOutlet>
        </IonTabs>
    )
}

export default Routes
