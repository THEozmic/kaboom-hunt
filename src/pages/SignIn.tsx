import { IonButton, IonText, IonInput } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import LandingScreen from "../components/LandingScreen";

const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <LandingScreen>
      <form
        style={{
          textAlign: "left"
        }}
      >
        <div className="form-control">
          <IonInput type="text" placeholder="username"></IonInput>
        </div>

        <div className="form-control">
          <IonInput type="password" placeholder="password"></IonInput>
        </div>
      </form>

      <div
        style={{
          marginTop: "20px"
        }}
      >
        <IonButton
          color="primary"
          onClick={e => {
            e.preventDefault();
            history.push("/app");
          }}
        >
          CONTINUE
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

export default SignIn;
