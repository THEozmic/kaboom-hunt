import React from "react";
import { IonButtons, IonButton, IonIcon } from "@ionic/react";
import { logOut } from "ionicons/icons";

import { withRouter, RouteComponentProps } from "react-router";

const LogOut: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <>
      <IonButtons slot="end">
        <IonButton
          fill="clear"
          onClick={e => {
            e.preventDefault();
            history.push("/landing");
          }}
        >
          <IonIcon slot="icon-only" icon={logOut} color="light" />
        </IonButton>
      </IonButtons>
    </>
  );
};

export default withRouter(LogOut);
