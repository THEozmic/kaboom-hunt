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

import { useTimer } from "react-timer-hook";

import { RouteComponentProps, withRouter } from "react-router";
import BackgroundPattern from "./BackgroundPattern";

const HomeTab: React.FC<RouteComponentProps> = ({ history }) => {
  const [hasTicket, changeHasTicket] = useState(false);
  const [isLoading, changeIsLoading] = useState(false);
  const [isLoaded, changeIsLoaded] = useState(false);
  let expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 30);

  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => {} //history.push("/game")
  });

  const startGame = () => {
    changeHasTicket(true);

    // Show loading screen...
    setTimeout(() => {
      changeIsLoading(true);
    }, 1000);
  };

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
        {isLoading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%"
            }}
          >
            <div
              style={{
                color: "var(--ion-color-primary)",
                fontSize: "2em",
                fontWeight: "bold"
              }}
            >
              Game Starts In
            </div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "3em",
                margin: "0",
                color: "var(--ion-color-tertiary-contrast)"
              }}
            >
              {`${minutes}:${seconds}`}
            </p>
            <BackgroundPattern />
          </div>
        ) : (
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
                  Next Game
                </h2>
              </IonText>
              <p
                style={{
                  color: "var(--ion-color-tertiary-contrast)"
                }}
              >
                <h2
                  style={{
                    fontWeight: "bolder",
                    textAlign: "center",
                    padding: "0 30px"
                  }}
                >
                  THIS FRIDAY
                </h2>
              </p>
              <IonText color="primary">
                <h2
                  style={{
                    fontWeight: "bolder",
                    textAlign: "center",
                    padding: "0 30px"
                  }}
                >
                  At Freedom Park,
                  <br />
                  Lagos Island
                </h2>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "1.3em",
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
                <IonButton onClick={() => startGame()}>BUY A TICKET</IonButton>
              )}
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(HomeTab);
