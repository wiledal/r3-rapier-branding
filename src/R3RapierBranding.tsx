import React from "react";
import { Background } from "./Background";
import { DemoButton } from "./DemoButton";
import { Meta } from "./Meta";
import { Styles } from "./Styles";

import "./Styles.tsx";

interface R3RapierBrandingProps {
  colors?: [colorA: string, colorB: string];
  title: string;
  version: string;
  children?: React.ReactNode;
}

export const R3RapierBranding = ({
  colors = ["#24ff72", "#ffef00"],
  title,
  version,
  children,
}: R3RapierBrandingProps) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <Styles />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(45deg, ${colors[1]} 0%, ${colors[0]} 100%)`,
          fontFamily: "Montserrat",
          letterSpacing: 1,
        }}
      >
        <Background />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </div>

        <DemoButton title={title} />

        <Meta version={version} />
      </div>
    </>
  );
};
