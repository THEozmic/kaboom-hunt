import {
  IonIcon,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet
} from "@ionic/react";

import { settings, home } from "ionicons/icons";

import React from "react";

import HomeTab from "../components/HomeTab";
import SettingsTab from "../components/SettingsTab";

import { RouteComponentProps, Route, Redirect } from "react-router-dom";

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/app" to="/app/home" />
        <Route path="/app/home" render={() => <HomeTab />} exact={true} />
        <Route
          path="/app/settings"
          render={() => <SettingsTab />}
          exact={true}
        />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/app/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="settings" href="/app/settings">
          <IonIcon icon={settings} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Home;
