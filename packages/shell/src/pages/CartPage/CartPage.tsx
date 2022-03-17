import React, { useContext, useRef } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonLabel,
  IonText,
  IonSelect,
  IonSelectOption,
  IonButton,
} from '@ionic/react';
import { useIonModal } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { DataContext } from 'provider-lib';
// @ts-ignore
import CheckoutPage from 'checkout/CheckoutPage';

import './CartPage.scss';

const CartPage: React.FC<RouteComponentProps<{}>> = () => {
  const { cart, productList } = useContext(DataContext);
  const pageEl = useRef(null);
  function handleDismiss() {
    dismiss();
  }
  const [present, dismiss] = useIonModal(CheckoutPage, {
    onDismiss: handleDismiss,
  });
  const subTotal =
    cart?.basket?.reduce((acc, item) => {
      const productPrice = productList.find(
        (product) => product.id === item.productId,
      )?.price;
      if (!productPrice) return acc;
      return acc + item.quantity * productPrice;
    }, 0) || 0;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 2,
  });

  return (
    <IonPage ref={pageEl}>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense" translucent={true}>
          <IonToolbar>
            <IonTitle size="large">Cart</IonTitle>
          </IonToolbar>
        </IonHeader>
        {!cart || cart.basket?.length === 0 ? (
          <IonText>
            <p>Your cart is empty</p>
          </IonText>
        ) : (
          <>
            <IonList>
              {cart.basket.map((item) => {
                const product = productList.find(
                  (product) => product.id === item.productId,
                );
                return (
                  product && (
                    <IonItem key={product.id}>
                      <div className="cart-item">
                        <img
                          alt={product.title}
                          src={`/images/${product.image}`}
                        />
                        <div className="cart-item-details">
                          <h2>{product.title}</h2>
                          <IonLabel>Qty</IonLabel>
                          <IonSelect>
                            {Array(9)
                              .fill(1)
                              .map((num, index) => (
                                <IonSelectOption>{index + 1}</IonSelectOption>
                              ))}
                          </IonSelect>
                          <p className="item-total">
                            {formatter.format(product.price)}
                          </p>
                        </div>
                      </div>
                    </IonItem>
                  )
                );
              })}
            </IonList>
            <div className="ion-padding">
              <table className="totals">
                <tr>
                  <th>Subtotal</th>
                  <td>{formatter.format(subTotal)}</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>Standard - Free</td>
                </tr>
                <tr className="total">
                  <th>Estimated total</th>
                  <td>{formatter.format(subTotal)} + Tax</td>
                </tr>
              </table>
              <IonButton expand="block" onClick={() => present()}>
                Checkout
              </IonButton>
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CartPage;
