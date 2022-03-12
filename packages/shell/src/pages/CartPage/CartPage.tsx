import React, { useState, useContext } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonItem, IonList } from '@ionic/react';
import { DataContext } from 'provider-lib';

import './CartPage.scss';

const CartPage = () => {
  const { cart, user, checkout, productList } = useContext(DataContext);

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {cart && cart.basket?.length > 0 && (
        <IonList>
          {cart.basket.map(item => (
          <IonItem>
            {item.quantity}
          </IonItem>
          ))}
        </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CartPage;
