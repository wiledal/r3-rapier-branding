import React from "react";

interface SocialButtonProps {
  href: string;
  label: string;
  // icon: string;
}

const SocialButton = ({ href, label }: SocialButtonProps) => {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        gap: 8,
        padding: "4px 8px",
        background: "#000",
        borderRadius: 4,
        fontWeight: "bold",
        letterSpacing: 0,
        color: "#fff",
        textDecoration: "none",
      }}
    >
      {label}
    </a>
  );
};

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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(black 1px, transparent 0)",
            backgroundRepeat: "repeat",
            backgroundSize: "40px 40px",
            opacity: 0.5,
          }}
        />

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

        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            fontSize: 24,
            color: "black",
          }}
        >
          {title}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
          }}
        >
          <div
            style={{
              position: "relative",
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            @react-three/<strong>rapier</strong>
            <span
              style={{
                display: "block",
                position: "absolute",
                fontSize: 10,
                background: "#fff",
                padding: 4,
                borderRadius: 4,
                top: -16,
                right: -16,
              }}
            >
              {version}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "flex-end",
            }}
          >
            <SocialButton
              label="GitHub"
              href="https://github.com/pmndrs/react-three-rapier"
            />
            <SocialButton
              label="Discord"
              href="https://github.com/pmndrs/react-three-rapier"
            />
          </div>
        </div>
      </div>
    </>
  );
};
