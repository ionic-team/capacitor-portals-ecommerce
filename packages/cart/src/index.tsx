import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CheckoutPage } from './pages/CheckoutPage';
import { PaymentPage } from './pages/PaymentPage';

ReactDOM.render(
  <React.StrictMode>
    <CheckoutPage />
    <PaymentPage />
  </React.StrictMode>,
  document.getElementById('root')
);
