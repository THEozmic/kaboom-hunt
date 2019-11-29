import React from "react";

const BackgroundPattern: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "-10px",
        width: "100%",
        zIndex: 0
      }}
    >
      <svg
        style={{
          transform: "translatey(0px)",
          animation: "float 6s ease-in-out infinite"
        }}
        width="100%"
        height="100%"
        viewBox="0 0 367 473"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="42" cy="51" r="15" fill="#5C638C" />
        <circle cx="169" cy="72" r="30" fill="#8D99DD" />
        <circle cx="20" cy="252" r="20" fill="#D8DEFF" />
        <circle
          cx="361.485"
          cy="315.357"
          r="15"
          transform="rotate(97.9803 361.485 315.357)"
          fill="#5C638C"
        />
        <circle
          cx="323.057"
          cy="438.211"
          r="30"
          transform="rotate(97.9803 323.057 438.211)"
          fill="#8D99DD"
        />
        <circle
          cx="321.76"
          cy="3.7602"
          r="17.5"
          transform="rotate(97.9803 321.76 3.7602)"
          fill="#D8DEFF"
        />
      </svg>
    </div>
  );
};

export default BackgroundPattern;
