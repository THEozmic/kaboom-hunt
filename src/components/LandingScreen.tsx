import { IonContent, IonPage, IonText } from "@ionic/react";
import React from "react";

import BackgroundPattern from "./BackgroundPattern";

const LandingScreen: React.FC = ({ children }) => {
  return (
    <IonPage>
      <IonContent>
        <BackgroundPattern />

        <div
          style={{
            zIndex: 2,
            position: "relative",
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh"
            }}
          >
            <div
              style={{
                padding: "20px"
              }}
            >
              <IonText color="primary">
                <h1 style={{ fontWeight: "bold", margin: "30px" }}>
                  Kaboom Hunt
                </h1>
              </IonText>
              {children}
            </div>
          </div>
        </div>
        <footer
          style={{
            position: "fixed",
            width: "101%",
            bottom: "-10px",
            left: "-1px"
          }}
        >
          <svg
            width="100%"
            height="162"
            viewBox="0 0 375 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M84 18.5001C41.2 0.900085 -3.5 -10.6667 -20.5 18.5V160.5H446V77.5001C420.167 47.1667 355.8 -0.699932 305 50.5001C241.5 114.5 137.5 40.5001 84 18.5001Z"
              fill="#D8DEFF"
            />
            <path
              d="M61.5 48.4539C18.7 30.8539 -26 84.7872 -43 113.954V190.454H423.5V107.454C397.667 77.1205 333.3 29.2539 282.5 80.4539C219 144.454 115 70.4539 61.5 48.4539Z"
              fill="#8D99DD"
            />
            <path
              d="M85.5 88.4539C42.7 70.8539 -2 124.787 -19 153.954V230.454H447.5V147.454C421.667 117.121 357.3 69.2539 306.5 120.454C243 184.454 139 110.454 85.5 88.4539Z"
              fill="#5C638C"
            />
          </svg>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default LandingScreen;
