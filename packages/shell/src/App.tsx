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
import { Route } from 'react-router';
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
import { CartPage } from './pages/CartPage';

// @ts-ignore
const AddressPage = React.lazy(() => import('account/AddressPage'));
// @ts-ignore
const UserDetailPage = React.lazy(() => import('account/UserDetailPage'));
// @ts-ignore
const CheckoutPage = React.lazy(() => import('cart/CheckoutPage'));
// @ts-ignore
const PaymentPage = React.lazy(() => import('cart/PaymentPage'));
// @ts-ignore
const HelpPage = React.lazy(() => import('helpinfo/HelpPage'));

setupIonicReact();

const App: React.FC = () => {
  return (
    <DataProvider>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <React.Suspense fallback="Loading Button">
                <Route exact path="/" component={ShopPage} />
                <Route path="/cart" exact component={CartPage} />
                <Route path="/user" exact component={UserDetailPage} />
                <Route path="/address" exact component={AddressPage} />
                <Route path="/address/:id" exact component={AddressPage} />
                <Route path="/checkout" exact component={CheckoutPage} />
                <Route path="/payment" exact component={PaymentPage} />
                <Route path="/payment/:id" component={PaymentPage} />
              </React.Suspense>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="shop" href="/">
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
