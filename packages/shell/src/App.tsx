import React from 'react';
import {
  IonApp,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { gridOutline, basketOutline, personOutline } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import { DataProvider } from 'provider-lib';


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

import { ShopPage } from './pages/ShopPage';
import { ItemPage } from './pages/ItemPage';
import { CartPage } from './pages/CartPage';
import { HelpPage } from './pages/HelpPage';

// @ts-ignore
const AddressPage = React.lazy(() => import('account/AddressPage'));
// @ts-ignore
const UserDetailPage = React.lazy(() => import('account/UserDetailPage'));
// @ts-ignore
const PaymentPage = React.lazy(() => import('checkout/PaymentPage'));

setupIonicReact();

const App: React.FC = () => {
  return (
    <DataProvider>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <React.Suspense fallback="Loading Button">
                <Route exact path="/">
                  <Redirect to="/shop" />
                </Route>
                <Route path="/shop" component={ShopPage} />
                <Route path="/shop/:id" component={ItemPage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/cart" exact component={CartPage} />
                <Route path="/user" exact component={UserDetailPage} />
                <Route path="/address" exact component={AddressPage} />
                <Route path="/address/:id" exact component={AddressPage} />
                <Route path="/payment" exact component={PaymentPage} />
                <Route path="/payment/:id" component={PaymentPage} />
              </React.Suspense>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="shop" href="/shop">
                <IonIcon icon={gridOutline} />
              </IonTabButton>
              <IonTabButton tab="cart" href="/cart">
                <IonIcon icon={basketOutline} />
              </IonTabButton>
              <IonTabButton tab="user" href="/user">
                <IonIcon icon={personOutline} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </DataProvider>
  );
};

export default App;
