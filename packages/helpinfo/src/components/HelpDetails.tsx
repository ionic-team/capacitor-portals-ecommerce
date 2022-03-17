import React, { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { callOutline, mailOutline } from 'ionicons/icons';

import './HelpDetails.scss';

const HelpDetails = () => {
  return (
    <>
      <IonItem lines="none">
        <h1>Get Assistance</h1>
      </IonItem>
      <IonItem lines="none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </IonItem>
      <IonItem lines="none">
        <a className="help-link" href="mailto:help@portals.ionic.io">
          <IonIcon slot="icon-only" icon={mailOutline} />
          help@portals.ionic.io
        </a>
      </IonItem>
      <IonItem lines="none">
        <a className="help-link" href="tel:1-800-767-8257">
          <IonIcon slot="icon-only" icon={callOutline} />
          1-800-PORTALS
        </a>
      </IonItem>
    </>
  );
};

export default HelpDetails;
