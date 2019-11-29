import { IonButton, IonText } from "@ionic/react";
import React from "react";

import LandingScreen from "../components/LandingScreen";
import { RouteComponentProps } from "react-router-dom";

const Landing: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <LandingScreen>
      <div
        style={{
          marginTop: "20px"
        }}
      >
        <IonButton
          color="primary"
          onClick={e => {
            e.preventDefault();
            history.push("/sign-in");
          }}
        >
          SIGN IN
        </IonButton>
      </div>
      <div>
        <IonButton
          fill="clear"
          color="dark"
          size="small"
          onClick={e => {
            e.preventDefault();
            history.push("/sign-up");
          }}
        >
          OR SIGN UP
        </IonButton>
      </div>
    </LandingScreen>
  );
};

export default Landing;
