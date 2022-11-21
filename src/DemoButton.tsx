import { memo, useEffect, useRef, useState } from "react";
import { ChevronDown, IconClose } from "./Icons";

const demos: { label: string; url: string }[] = [
  {
    label: "Something",
    url: "https://example.com",
  },
  {
    label: "Something else",
    url: "https://example.com",
  },
  {
    label: "Something other",
    url: "https://example.com",
  },
];

export const DemoButton = memo(({ title }: { title: string }) => {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    // setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (button.current && !button.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        ref={button}
        className="r3r-button"
        style={{
          font: "inherit",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          gap: 8,
          top: 40,
          left: 40,
          fontSize: 24,
          color: "black",
          background: "none",
          border: "none",
        }}
        onClick={handleClick}
      >
        {title}{" "}
        {/* <span key={"icon" + open} className="animate-show-scale">
          {open ? <IconClose /> : <ChevronDown />}
        </span> */}
      </button>

      {open && (
        <div
          className="r3r-animate-show"
          style={{
            position: "absolute",
            top: 88,
            left: 24,
            width: "100%",
            maxWidth: 240,
            background: "white",
            padding: 16,
            borderRadius: 8,
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.25)",
          }}
        >
          {demos.map((demo) => (
            <a
              key={demo.label}
              href={demo.url}
              className="r3r-link"
              style={{
                display: "block",
                padding: 8,
                color: "black",
              }}
            >
              {demo.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
});
