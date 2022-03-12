import React, { useState, useContext } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonList, IonImg, IonItem, IonLabel } from '@ionic/react';
import { DataContext } from 'provider-lib';

import './ShopPage.scss';

const ShopPage = () => {
  const { productList } = useContext(DataContext);

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        Products
        <IonList>
          {productList.map(product => (
          <IonItem key={product.id} button href={`/product/${product.id}`}>
            <IonImg src={`/images/${product.image}`} />
            <IonLabel>{product.title}</IonLabel>
            <p>{new Intl.NumberFormat('en-US', { maximumSignificantDigits: 2 }).format(product.price)}</p>
          </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ShopPage;
