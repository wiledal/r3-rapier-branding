import { ReactNode } from "react";
import { IconDiscord, IconGithub } from "./Icons";

interface SocialButtonProps {
  href: string;
  label: string;
  icon: ReactNode;
}

const SocialButton = ({ href, label, icon }: SocialButtonProps) => {
  return (
    <a
      className="r3r-button"
      href={href}
      target="_blank"
      style={{
        display: "inline-flex",
        alignItems: "center",
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
      {icon}
      {label}
    </a>
  );
};

export const Meta = ({ version }: { version: string }) => (
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
        marginBottom: 8,
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
        icon={<IconGithub />}
        href="https://github.com/pmndrs/react-three-rapier"
      />
      <SocialButton
        icon={<IconDiscord />}
        label="Discord"
        href="https://discord.gg/ZZjjNvJ"
      />
    </div>
  </div>
);
