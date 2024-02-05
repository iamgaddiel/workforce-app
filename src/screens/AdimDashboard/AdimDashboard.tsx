import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { home, readerOutline, person } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AdminHome from '../AdminHome/AdminHome';
import AdminReport from '../AdminReports/AdminReports';
import UserList from '../UserList/UserList';
import SearchUser from '../SearchUser/SearchUser';
import UserDetail from '../UserDetail/UserDetail';
import ReportDetail from '../ReportDetail/ReportDetail';
import Profile from '../Profile/Profile';


const AdminDashboard: React.FC = () => {


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
                <Redirect exact from='/app/dashboard' to={'/app/dashboard/home'} />
                <Route exact path="/app/dashboard/home" component={AdminHome} />
                <Route exact path="/app/dashboard/reports" component={AdminReport} />
                <Route exact path="/app/dashboard/report-detail/:reportId" component={ReportDetail} />
                <Route exact path="/app/dashboard/users" component={UserList} />
                <Route exact path="/app/dashboard/search-user" component={SearchUser} />
                <Route exact path="/app/dashboard/user-detail/:userId" component={UserDetail} />
                <Route exact path="/app/dashboard/profile" component={Profile} />
            </IonRouterOutlet>
        </IonTabs>
    );
};

export default AdminDashboard;