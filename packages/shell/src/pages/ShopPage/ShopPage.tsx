import React, { useState, useContext } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonImg, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle } from '@ionic/react';
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
        <div className="product-list">
          {productList.map(product => (
          <IonCard key={product.id} button href={`/shop/${product.id}`}>
            <IonCardHeader>
              <IonImg src={`/images/${product.image}`} />
            </IonCardHeader>
            <IonCardTitle>{product.title}</IonCardTitle>
            <IonCardSubtitle>
              {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 2 }).format(product.price)}
            </IonCardSubtitle>
          </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShopPage;
