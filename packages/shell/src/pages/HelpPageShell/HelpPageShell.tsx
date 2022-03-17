import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from '@ionic/react';

// @ts-ignore
const HelpDetails = React.lazy(() => import('helpinfo/HelpDetails'));

const HelpPageShell: React.FC = () => (
  <IonPage>
    <IonHeader translucent={true}>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/shop"></IonBackButton>
        </IonButtons>
        <IonTitle>Help Info</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <React.Suspense fallback={<div></div>}>
        <HelpDetails />
      </React.Suspense>
    </IonContent>
  </IonPage>
);

export default HelpPageShell;
