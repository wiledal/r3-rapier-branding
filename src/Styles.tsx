export const Styles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
@keyframes r3r-show {
  0% {
      opacity: 0;
      transform: translateY(-10px);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
}

.r3r-animate-show {
  animation: r3r-show 0.2s ease both;
}

@keyframes r3r-show-scale {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.r3r-animate-show-scale {
  animation: r3r-show-scale 0.2s ease both;
}

.r3r-button {
  cursor: pointer;
  transition: transform 0.2s ease;
}
.r3r-button:hover {
  transform: scale(1.02);
}
.r3r-button:active {
  transform: scale(0.98);
  transition: none;
}

.r3r-link {
  cursor: pointer;
  transition: transform 0.2s ease; 
  text-decoration: none;
}
.r3r-link:hover {
  text-decoration: underline;
  color:red;
  transform: translateX(4px);
}
`,
    }}
  ></style>
);
