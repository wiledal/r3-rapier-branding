export const Background = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        "radial-gradient(black 1px, transparent 0), radial-gradient(black 1px, transparent 0)",
      backgroundRepeat: "repeat",
      backgroundSize: "80px 80px",
      backgroundPosition: "0 0, 40px 40px",
      opacity: 0.5,
    }}
  />
);
