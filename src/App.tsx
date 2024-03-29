import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Onboarding from './screens/Onboarding/Onboarding';
// import Swiper styles
import 'swiper/css';


import './theme/App.module.css'
import Login from './screens/Login/Login';
import Routes from './Routes';
import UserRoutes from './UserRoutes';
import UserReports from './screens/UserReports/UserReports';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Onboarding} />
          <Route exact path="/login" component={Login} />
          <Route path={'/app/dashboard'} component={Routes} />
          <Route path={'/user/dashboard'} component={UserRoutes} />
          <Route path={'/reports'} component={UserReports} />
          {/* <Redirect exact from='/app' to="/app/dashboard" /> */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>

  )
};

export default App;
