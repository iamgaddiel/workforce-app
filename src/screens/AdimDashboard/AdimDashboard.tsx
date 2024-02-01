import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, readerOutline, cogSharp } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router-dom';
import Tab3 from '../Tab3';
import AdminHome from '../AdminHome/AdminHome';
import AdminReport from '../AdminReports/AdminReports';
import UserList from '../UserList/UserList';
import SearchUser from '../SearchUser/SearchUser';
import UserDetail from '../UserDetail/UserDetail';
import ReportDetail from '../ReportDetail/ReportDetail';

const AdminDashboard: React.FC = () => {

    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/dashboard/home" component={AdminHome} />
                    <Route exact path="/dashboard/reports" component={AdminReport} />
                    <Route exact path="/dashboard/report-detail/:reportId" component={ReportDetail} />
                    <Route exact path="/dashboard/users" component={UserList} />
                    <Route exact path="/dashboard/search-user" component={SearchUser} />
                    <Route exact path="/dashboard/user-detail/:userId" component={UserDetail} />
                    <Route path="/tab3">
                        <Tab3 />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/dashboard/home">
                        <IonIcon aria-hidden="true" icon={home} />
                        <IonLabel>Dashboard</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="reports" href="/dashboard/reports">
                        <IonIcon aria-hidden="true" icon={readerOutline} />
                        <IonLabel>Reports</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon aria-hidden="true" icon={cogSharp} />
                        <IonLabel>Me</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
};

export default AdminDashboard;