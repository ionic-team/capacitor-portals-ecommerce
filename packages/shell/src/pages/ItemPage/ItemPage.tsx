import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonText,
  IonImg,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';
import { DataContext } from 'provider-lib';

import './ItemPage.scss';
interface ItemPageProps {
  id: string;
}

const ItemPage: React.FC<RouteComponentProps<ItemPageProps>> = ({
  match: {
    params: { id },
  },
}) => {
  const { productList } = useContext(DataContext);
  const product = productList.find(
    (product) => product.id === parseInt(id),
    10,
  );
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 2,
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/shop"></IonBackButton>
          </IonButtons>
          <IonTitle>{product ? product.title : 'Product Not Found'}</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/help" routerDirection="forward">
              <IonIcon
                slot="icon-only"
                icon={informationCircleOutline}
              ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {product === undefined ? (
        <IonContent>
          <IonText>Product Not Found</IonText>
        </IonContent>
      ) : (
        <>
          <IonContent className="ion-padding">
            <IonImg src={`/images/${product.image}`} />
            <IonText>
              <h1>{product.title}</h1>
              <h2>{formatter.format(product.price)}</h2>
              <p>{product.description}</p>
              <IonButton expand="block" onClick={() => console.log('clicked')}>
                Add to cart
              </IonButton>
            </IonText>
          </IonContent>
        </>
      )}
    </IonPage>
  );
};

export default ItemPage;
