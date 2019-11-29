import { IonButton, IonText, IonInput, IonRouterLink } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import LandingScreen from "../components/LandingScreen";

const SignUp: React.FC<RouteComponentProps> = ({ history }) => {
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
          <IonInput type="tel" placeholder="phone number"></IonInput>
        </div>
        <div className="form-control">
          <IonInput type="password" placeholder="password"></IonInput>
        </div>
        <div>
          <IonText color="primary">
            By signing up, you agree to our{" "}
            <IonRouterLink
              routerLink="/"
              style={{
                textDecoration: "underline"
              }}
            >
              terms of service
            </IonRouterLink>
            .
          </IonText>
        </div>
      </form>
      <div
        style={{
          marginTop: "20px"
        }}
      >
        <IonButton color="primary">SIGN UP</IonButton>
      </div>
      <div>
        <IonButton
          fill="clear"
          color="dark"
          size="small"
          onClick={e => {
            e.preventDefault();
            history.push("/sign-in");
          }}
        >
          OR SIGN IN
        </IonButton>
      </div>
      <div
        style={{
          marginTop: "20px",
          fontWeight: "bold"
        }}
      >
        <IonRouterLink routerLink="/">Privacy Policy</IonRouterLink>
      </div>
    </LandingScreen>
  );
};

export default SignUp;
