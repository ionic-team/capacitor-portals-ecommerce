import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
// @ts-ignore
const HelpDetails = React.lazy(() => import('helpinfo/HelpDetails'));

const HelpPage = () => {
  return (
    <IonPage id="help-page">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Help</IonTitle>
        </IonToolbar>
      </IonHeader>
      <HelpDetails />
    </IonPage>
  );
};

export default HelpPage;
