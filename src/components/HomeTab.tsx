import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonButton,
  IonIcon,
  IonText
} from "@ionic/react";

import LogOut from "./LogOut";

const HomeTab: React.FC = () => {
  const [hasTicket, changeHasTicket] = useState(false);

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

      <IonContent>
        <div
          style={{
            backgroundColor: "var(--ion-color-light)",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "2em",
              padding: "20px",
              color: "var(--ion-color-primary)"
            }}
          >
            <div>
              <div className="heading">
                <div
                  style={{
                    color: "var(--ion-color-tertiary-contrast)"
                  }}
                >
                  Win Cash Prizes
                </div>
                <div>In Weekly</div>
                <div>Scavenger Hunts</div>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "10px 20px",
              backgroundColor: "var(--ion-color-primary-contrast)"
            }}
          >
            <IonText color="primary">
              <h2
                style={{
                  fontWeight: "bolder",
                  textAlign: "center",
                  padding: "0 30px"
                }}
              >
                Next Game <br />
                At Freedom Park, Lagos Island
              </h2>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "2em",
                  margin: "15px",
                  color: "var(--ion-color-tertiary-contrast)"
                }}
              >
                12 PM - 5 PM
              </p>
            </IonText>
          </div>

          <div
            style={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: "1.2em",
              fontWeight: "bold"
            }}
          >
            {hasTicket ? (
              <IonText color="primary">You have a ticket!</IonText>
            ) : (
              <IonButton onClick={() => changeHasTicket(true)}>
                BUY A TICKET
              </IonButton>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;
