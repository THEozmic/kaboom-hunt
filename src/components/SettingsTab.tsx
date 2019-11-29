import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonButton,
  IonIcon
} from "@ionic/react";

import LogOut from "./LogOut";

const SettingsTab: React.FC = () => {
  return (
    <IonPage id="speaker-list">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <LogOut />
          </IonButtons>
          <IonTitle color="light">
            <h1
              style={{
                fontWeight: "bold",
                margin: "0"
              }}
            >
              KH
            </h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">Settings</IonContent>
    </IonPage>
  );
};

export default SettingsTab;
