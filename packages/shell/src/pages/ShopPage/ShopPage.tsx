import React, { useContext } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonImg, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle } from '@ionic/react';
import { DataContext } from 'provider-lib';

import './ShopPage.scss';

const ShopPage = () => {
  const { productList } = useContext(DataContext);
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 2 });

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Shop</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCardHeader>New &amp; Featured</IonCardHeader>
        <div className="product-list">
          {productList.map(product => (
          <IonCard key={product.id} routerLink={`/shop/${product.id}`} routerDirection="forward">
            <img decoding="async" src={`/images/${product.image}`} />
            <IonCardTitle>{product.title}</IonCardTitle>
            <IonCardSubtitle>
              {formatter.format(product.price)}
            </IonCardSubtitle>
          </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShopPage;
