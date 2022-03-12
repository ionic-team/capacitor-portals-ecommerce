import React, { useState } from 'react';
import { IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
// @ts-ignore
const HelpDetails = React.lazy(() => import('helpinfo/HelpDetails'));

const HelpPage = () => {
  return (
    <IonPage id="help-page">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/shop"></IonBackButton>
          </IonButtons>
          <IonTitle>Help</IonTitle>
        </IonToolbar>
      </IonHeader>
      <HelpDetails />
    </IonPage>
  );
};

export default HelpPage;
