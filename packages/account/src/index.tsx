import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AddressPage } from './pages/AddressPage';
import { UserDetailPage } from './pages/UserDetailPage';

ReactDOM.render(
  <React.StrictMode>
    <UserDetailPage />
    <AddressPage />
  </React.StrictMode>,
  document.getElementById('root')
);
