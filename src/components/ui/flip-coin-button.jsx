import { useEffect, useRef, useState } from "react";

function cn(...inputs) {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === "string") return [input];
      if (typeof input === "object") {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .join(" ");
}

const LANDING_MESSAGES = ["Empower Dreams", "Inspire Change", "Future Starts", "Empower Futures", "Together Forward"];

export default function FlipCoinButton({ children, onFlipComplete, landingText }) {
  const [clicked, setClicked] = useState(false);
  const [shrinkLanding, setShrinkLanding] = useState(false);
  const [coinLanded, setCoinLanded] = useState(false);
  const [randomLandingText, setRandomLandingText] = useState(LANDING_MESSAGES[0]);
  const coinRef = useRef(null);
  const requestRef = useRef();

  const handleClick = () => {
    if (clicked) return;

    if (landingText === undefined) {
      setRandomLandingText(LANDING_MESSAGES[Math.floor(Math.random() * LANDING_MESSAGES.length)]);
    }

    setClicked(true);

    // Wait to start flipping the coin because of the button tilt animation
    setTimeout(() => {
      if (coinRef.current) {
        // Randomize the flipping speeds just for fun
        coinRef.current.style.setProperty("--coin-side-rotation-count", `${Math.floor(Math.random() * 5) * 90}`);
        coinRef.current.style.setProperty("--coin-max-flip-angle", `${(Math.floor(Math.random() * 4) + 3) * Math.PI}`);
        flipCoin();
      }
    }, 50);
  };

  const flipCoin = () => {
    if (!coinRef.current) return;

    let moveLoopCount = 0;
    const maxMoveLoopCount = 90; // The larger the number, the slower the animation
    const sideRotationCount = Number.parseInt(
      coinRef.current.style.getPropertyValue("--coin-side-rotation-count") || "0"
    );
    const maxFlipAngle = Number.parseFloat(coinRef.current.style.getPropertyValue("--coin-max-flip-angle") || "0");

    const flipCoinLoop = () => {
      if (!coinRef.current) return;

      moveLoopCount++;
      const percentageCompleted = moveLoopCount / maxMoveLoopCount;
      const angle = -maxFlipAngle * Math.pow(percentageCompleted - 1, 2) + maxFlipAngle;

      // Calculate the scale and position of the coin moving through the air
      coinRef.current.style.setProperty("--coin-y-multiplier", `${-11 * Math.pow(percentageCompleted * 2 - 1, 4) + 11}`);
      coinRef.current.style.setProperty("--coin-x-multiplier", `${percentageCompleted}`);
      coinRef.current.style.setProperty("--coin-scale-multiplier", `${percentageCompleted * 0.6}`);
      coinRef.current.style.setProperty("--coin-rotation-multiplier", `${percentageCompleted * sideRotationCount}`);

      // Calculate the scale and position values for the different coin faces
      coinRef.current.style.setProperty("--front-scale-multiplier", `${Math.max(Math.cos(angle), 0)}`);
      coinRef.current.style.setProperty("--front-y-multiplier", `${Math.sin(angle)}`);

      coinRef.current.style.setProperty("--middle-scale-multiplier", `${Math.abs(Math.cos(angle))}`);
      coinRef.current.style.setProperty("--middle-y-multiplier", `${Math.cos((angle + Math.PI / 2) % Math.PI)}`);

      coinRef.current.style.setProperty("--back-scale-multiplier", `${Math.max(Math.cos(angle - Math.PI), 0)}`);
      coinRef.current.style.setProperty("--back-y-multiplier", `${Math.sin(angle - Math.PI)}`);

      coinRef.current.style.setProperty(
        "--shine-opacity-multiplier",
        `${4 * Math.sin((angle + Math.PI / 2) % Math.PI) - 3.2}`
      );
      coinRef.current.style.setProperty(
        "--shine-bg-multiplier",
        `${-40 * (Math.cos((angle + Math.PI / 2) % Math.PI) - 0.5)}%`
      );

      // Repeat animation loop
      if (moveLoopCount < maxMoveLoopCount) {
        if (moveLoopCount === maxMoveLoopCount - 6) {
          setShrinkLanding(true);
        }
        requestRef.current = requestAnimationFrame(flipCoinLoop);
      } else {
        setCoinLanded(true);
        if (coinRef.current) {
          coinRef.current.style.setProperty("opacity", "0");
        }
        setTimeout(() => {
          setClicked(false);
          setShrinkLanding(false);
          setCoinLanded(false);
          if (onFlipComplete) onFlipComplete();
          setTimeout(() => {
            resetCoin();
          }, 300);
        }, 1500);
      }
    };

    requestRef.current = requestAnimationFrame(flipCoinLoop);
  };

  const resetCoin = () => {
    if (!coinRef.current) return;

    coinRef.current.style.setProperty("--coin-x-multiplier", "0");
    coinRef.current.style.setProperty("--coin-scale-multiplier", "0");
    coinRef.current.style.setProperty("--coin-rotation-multiplier", "0");
    coinRef.current.style.setProperty("--shine-opacity-multiplier", "0.4");
    coinRef.current.style.setProperty("--shine-bg-multiplier", "50%");
    coinRef.current.style.setProperty("opacity", "1");
  };

  useEffect(() => {
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <button
      type="button"
      className={cn("flipCoinButton", {
        clicked: clicked,
        shrinkLanding: shrinkLanding,
        coinLanded: coinLanded,
      })}
      data-landing-text={landingText ?? randomLandingText}
      onClick={handleClick}
    >
      <span className="buttonText">{children}</span>
      <div className="coinWrapper">
        <div className="coin" ref={coinRef}>
          <div className="coinMiddle"></div>
          <div className="coinBack"></div>
          <div className="coinFront"></div>
        </div>
      </div>
    </button>
  );
}

// Brand colors (Magic Bus): yellow #FFCC04, ink #1A1A1A
const styles = `
.flipCoinButton {
  background: none;
  border: 0;
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 1.0625rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  height: 3rem;
  outline: 0;
  position: relative;
  top: 0;
  transition: transform 50ms ease-in-out;
  width: 12rem;
  -webkit-tap-highlight-color: transparent;
}

.flipCoinButton:active {
  transform: scale(0.97);
}

.flipCoinButton.clicked {
  animation: 150ms ease-in-out 1 flipCoinShake;
  pointer-events: none;
}

.flipCoinButton.clicked .buttonText {
  opacity: 0;
  transition: opacity 100ms linear 200ms;
}

.flipCoinButton.clicked::before {
  height: 0.5rem;
  width: 60%;
}

.flipCoinButton.clicked .coin {
  transition: margin-bottom 1s linear 200ms;
  margin-bottom: 0;
}

.flipCoinButton.shrinkLanding::before {
  transition: width 200ms ease-in;
  width: 0;
}

.flipCoinButton.coinLanded::after {
  opacity: 1;
  transform: scale(1);
  transform-origin: 50% 50%;
  animation: flipCoinLandGlow 1.1s ease-in-out infinite;
}

@keyframes flipCoinLandGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 204, 4, 0.7), 0 6px 16px rgba(0, 0, 0, 0.28);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(255, 204, 4, 0), 0 6px 16px rgba(0, 0, 0, 0.28);
  }
}

.flipCoinButton.coinLanded .coinWrapper {
  background: radial-gradient(circle at 35% 97%, rgba(3, 16, 50, 0.4) 0.04rem, transparent 0.04rem),
    radial-gradient(circle at 45% 92%, rgba(3, 16, 50, 0.4) 0.04rem, transparent 0.02rem),
    radial-gradient(circle at 55% 98%, rgba(3, 16, 50, 0.4) 0.04rem, transparent 0.04rem),
    radial-gradient(circle at 65% 96%, rgba(3, 16, 50, 0.4) 0.06rem, transparent 0.06rem);
  background-position: center bottom;
  background-size: 100%;
  bottom: -1rem;
  opacity: 0;
  transform: scale(2) translateY(-10px);
}

.buttonText {
  color: #1a1a1a;
  margin-right: 1.8rem;
  opacity: 1;
  position: relative;
  transition: opacity 100ms linear 500ms;
  z-index: 3;
}

.flipCoinButton::before {
  background: #ffcc04;
  border-radius: 9999px;
  bottom: 0;
  content: "";
  display: block;
  height: 100%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  transition: height 250ms ease-in-out 400ms, width 250ms ease-in-out 300ms;
  width: 100%;
  z-index: 2;
}

.flipCoinButton::after {
  align-items: center;
  background: #ffcc04;
  border-radius: 9999px;
  top: 0;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.28);
  color: #1a1a1a;
  content: attr(data-landing-text);
  display: flex;
  font-weight: 800;
  height: 100%;
  justify-content: center;
  left: 0;
  letter-spacing: 0.01em;
  opacity: 0;
  padding: 0 0.5rem;
  pointer-events: none;
  position: absolute;
  text-align: center;
  transform: scale(0);
  transform-origin: 50% 50%;
  transition: transform 200ms cubic-bezier(0, 0, 0.35, 1.43);
  width: 100%;
  z-index: 1;
}

.coinWrapper {
  background: none;
  bottom: 0;
  height: 18rem;
  left: 0;
  opacity: 1;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  transform: none;
  transform-origin: 50% 100%;
  transition: opacity 200ms linear 100ms, transform 300ms ease-out;
  width: 100%;
}

.coin {
  --front-y-multiplier: 0;
  --back-y-multiplier: 0;
  --coin-y-multiplier: 0;
  --coin-x-multiplier: 0;
  --coin-scale-multiplier: 0;
  --coin-rotation-multiplier: 0;
  --shine-opacity-multiplier: 0.4;
  --shine-bg-multiplier: 50%;
  bottom: calc(var(--coin-y-multiplier) * 1rem - 3.5rem);
  height: 3.5rem;
  margin-bottom: 3.05rem;
  position: absolute;
  right: calc(var(--coin-x-multiplier) * 34% + 16%);
  transform: translateX(50%) scale(calc(0.4 + var(--coin-scale-multiplier)))
    rotate(calc(var(--coin-rotation-multiplier) * -1deg));
  transition: opacity 100ms linear 200ms;
  width: 3.5rem;
  z-index: 3;
}

.coinFront,
.coinMiddle,
.coinBack,
.coin::before,
.coinFront::after,
.coinBack::after {
  border-radius: 50%;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 3;
}

.coinFront {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(160, 130, 10, 0.4) 54%, #ffe680 54%),
    linear-gradient(210deg, #ffcc04 32%, transparent 32%), linear-gradient(150deg, #ffcc04 32%, transparent 32%),
    linear-gradient(to right, #ffcc04 22%, transparent 22%, transparent 78%, #ffcc04 78%),
    linear-gradient(to bottom, #fffbe6 44%, transparent 44%, transparent 65%, #fffbe6 65%, #fffbe6 71%, #ffcc04 71%),
    linear-gradient(
      to right,
      transparent 28%,
      #fffbe6 28%,
      #fffbe6 34%,
      #ffcc04 34%,
      #ffcc04 40%,
      #fffbe6 40%,
      #fffbe6 47%,
      #ffcc04 47%,
      #ffcc04 53%,
      #fffbe6 53%,
      #fffbe6 60%,
      #ffcc04 60%,
      #ffcc04 66%,
      #fffbe6 66%,
      #fffbe6 72%,
      transparent 72%
    );
  background-color: #ffcc04;
  background-size: 100% 100%;
  transform: translateY(calc(var(--front-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--front-scale-multiplier));
}

.coinFront::after {
  background: rgba(0, 0, 0, 0.15);
  content: "";
  opacity: var(--front-y-multiplier);
}

.coinMiddle {
  background: #d1a900;
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--middle-scale-multiplier));
}

.coinBack {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(160, 130, 10, 0.4) 54%, #ffe680 54%),
    radial-gradient(circle at 50% 40%, #fffbe6 23%, transparent 23%),
    radial-gradient(circle at 50% 100%, #fffbe6 35%, transparent 35%);
  background-color: #ffcc04;
  background-size: 100% 100%;
  transform: translateY(calc(var(--back-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--back-scale-multiplier));
}

.coinBack::after {
  background: rgba(0, 0, 0, 0.15);
  content: "";
  opacity: var(--back-y-multiplier);
}

.coin::before {
  background: radial-gradient(circle at 25% 65%, transparent 50%, rgba(255, 255, 255, 0.9) 90%),
    linear-gradient(
      55deg,
      transparent calc(var(--shine-bg-multiplier) + 0%),
      #fff8dc calc(var(--shine-bg-multiplier) + 0%),
      transparent calc(var(--shine-bg-multiplier) + 50%)
    );
  content: "";
  opacity: var(--shine-opacity-multiplier);
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / -2)) scaleY(var(--middle-scale-multiplier))
    rotate(calc(var(--coin-rotation-multiplier) * 1deg));
  z-index: 10;
}

.coin::after {
  background: #d1a900;
  content: "";
  height: 0.3181818182rem;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 2;
}

@keyframes flipCoinShake {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.94);
  }
  100% {
    transform: scale(1);
  }
}
`;

let injected = false;
function injectStyles() {
  if (typeof document !== "undefined" && !injected) {
    const styleSheet = document.createElement("style");
    styleSheet.setAttribute("data-flip-coin-button", "true");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    injected = true;
  }
}

injectStyles();
