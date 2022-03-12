import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import './ItemPage.scss';

const ItemPage = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default ItemPage;
