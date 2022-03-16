import React, { useState, useContext, useRef } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonImg, IonText, IonSelect, IonSelectOption, IonButton, IonModal } from '@ionic/react';
import { useIonModal } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { DataContext } from 'provider-lib';
// @ts-ignore
import CheckoutPage from 'checkout/CheckoutPage';

import './CartPage.scss'


const CartPage: React.FC<RouteComponentProps<{}>> = () => {
  const { cart, user, checkout, productList } = useContext(DataContext);
  const pageEl = useRef(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  function handleDismiss() {
    dismiss();
  }
  const [present, dismiss] = useIonModal(CheckoutPage, {
    onDismiss: handleDismiss,
  });
  const subTotal = cart?.basket?.reduce((acc, item) => {
    const productPrice = productList.find(product => product.id === item.productId)?.price;
    if (!productPrice) return acc;
    return acc + item.quantity * productPrice;
  }, 0) || 0;
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 2 });

  return (
    <IonPage ref={pageEl}>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!cart || cart.basket?.length === 0 ?
          <IonText>
            <p>Your cart is empty</p>
          </IonText>
          :
          <>
            <IonList>
              {cart.basket.map(item => {
                const product = productList.find(product => product.id === item.productId);
                return product && (
                  <IonItem key={product.id}>
                    <IonImg src={`/images/${product.image}`} />
                    <h2>{product.title}</h2>
                    <IonSelect>
                      {Array(9).fill(1).map((num, index) => <IonSelectOption>{index + 1}</IonSelectOption>)}
                    </IonSelect>
                    <p>{item.quantity}</p>
                    <p>{product.price}</p>
                  </IonItem>
                );
              })}
            </IonList>
            <IonItem>
              <table>
                <tr>
                  <th>Subtotal</th>
                  <td>{formatter.format(subTotal)}</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>Standard - Free</td>
                </tr>
                <tr>
                  <th>Subtotal</th>
                  <td>{formatter.format(subTotal)} + Tax</td>
                </tr>
              </table>
            </IonItem>
          <IonButton expand="block" onClick={() => present()}>Checkout</IonButton>
          </>
        }
      </IonContent>
    </IonPage>
  );
};

export default CartPage;
