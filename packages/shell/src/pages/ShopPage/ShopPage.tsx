import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import './ShopPage.scss';

const ShopPage = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default ShopPage;
