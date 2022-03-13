import React, { useState, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonImg, IonButton } from '@ionic/react';
import { DataContext } from 'provider-lib';

import './ItemPage.scss';
interface ItemPageProps {
 id: string;
}

const ItemPage: React.FC<RouteComponentProps<ItemPageProps>> = ( { match: { params: { id } }} ) => {
  const { productList } = useContext(DataContext);
  const product = productList.find(product => product.id === parseInt(id), 10);

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/shop"></IonBackButton>
          </IonButtons>
          <IonTitle>{product ? product.title : 'Product Not Found'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {product === undefined ? <div>Product Not Found</div> :
        <IonContent>
          <IonImg src={`/images/${product.image}`} />
          <p>{product.price}</p>
          <p>{product.description}</p>
          <IonButton onClick={() => console.log('clicked')}>Add to cart</IonButton>
        </IonContent>
      }
    </IonPage>
  );
};

export default ItemPage;
