export default function AnimatedGradientBorder({ children, className = "", radius = "1.5rem" }) {
  return (
    <div
      className={`animatedGradientBorder ${className}`}
      style={{ "--agb-radius": radius }}
    >
      <div className="animatedGradientBorderInner" style={{ borderRadius: `calc(${radius} - 2px)` }}>
        {children}
      </div>
    </div>
  );
}

const styles = `
.animatedGradientBorder {
  position: relative;
  border-radius: var(--agb-radius, 1.5rem);
  padding: 2px;
  background: linear-gradient(120deg, #B8860B, #FFE066, #FFCC04, #C9960A, #FFF3B0, #B8860B);
  background-size: 300% 300%;
  animation: agbMove 6s ease infinite;
}

.animatedGradientBorderInner {
  background: #ffffff;
  height: 100%;
}

@keyframes agbMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

let injected = false;
function injectStyles() {
  if (typeof document !== "undefined" && !injected) {
    const styleSheet = document.createElement("style");
    styleSheet.setAttribute("data-animated-gradient-border", "true");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    injected = true;
  }
}

injectStyles();
