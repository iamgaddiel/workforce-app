import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
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
import UserReports from './screens/UserReports/UserReports'
import { IonReactRouter } from '@ionic/react-router'
import UserProfile from './screens/UserProfile/UserProfile'
import UserReportCreate from './screens/UserReportCreate/UserReportCreate'

const Routes = () => {
    return (
        // <IonTabs>
        //     <IonTabBar slot="bottom">
        //         <IonTabButton tab="home" href="/user/dashboard/home">
        //             <IonIcon aria-hidden="true" icon={home} />
        //             <IonLabel>Dashboard</IonLabel>
        //         </IonTabButton>
        //         <IonTabButton tab="reports" href="/user/dashboard/reports">
        //             <IonIcon aria-hidden="true" icon={readerOutline} />
        //             <IonLabel>Reports</IonLabel>
        //         </IonTabButton>
        //         <IonTabButton tab="tab3" href="/user/dashboard/profile">
        //             <IonIcon aria-hidden="true" icon={person} />
        //             <IonLabel>Me</IonLabel>
        //         </IonTabButton>
        //     </IonTabBar>
        //     <IonRouterOutlet>
        //         <Route exact path="/user/dashboard/home" component={UserDashboard} />
        //         <Route exact path="/user/dashboard/reports" component={AdminReport} />
        //         <Route exact path="/user/dashboard/report-detail/:reportId" component={ReportDetail} />
        //         <Route exact path="/user/dashboard/users" component={UserList} />
        //         <Route exact path="/user/dashboard/search-user" component={SearchUser} />
        //         <Route exact path="/user/dashboard/user-detail/:userId" component={UserDetail} />
        //         <Route exact path="/user/dashboard/profile" component={Profile} />
        //         <Redirect exact from='/user/dashboard' to={'/user/dashboard/home'} />
        //     </IonRouterOutlet>
        // </IonTabs>
        <IonPage>
            <IonRouterOutlet>
                <Route exact path="/user/dashboard/home" component={UserDashboard} />
                <Route exact path="/user/dashboard/reports" component={UserReports} />
                <Route exact path="/user/dashboard/reports/create" component={UserReportCreate} />
                <Route exact path="/user/dashboard/report-detail/:reportId" component={ReportDetail} />
                <Route exact path="/user/dashboard/users" component={UserList} />
                <Route exact path="/user/dashboard/search-user" component={SearchUser} />
                <Route exact path="/user/dashboard/user-detail/:userId" component={UserDetail} />
                <Route exact path="/user/dashboard/profile" component={UserProfile} />
                <Redirect exact from='/user/dashboard' to={'/user/dashboard/reports'} />
            </IonRouterOutlet>
        </IonPage>
    )
}

export default Routes
