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

function BusIcon() {
  return (
    <svg className="fcbBus" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 11C4 7 7 4 11 4H27C30.5 4 33.5 6.5 35 10L37.5 15H4V11Z" fill="#FFCC04" />
      <path d="M29 6H33.8L35.8 11H29V6Z" fill="#38BDF8" />
      <rect x="22" y="6" width="5.5" height="5" rx="0.8" fill="#BAE6FD" />
      <rect x="15" y="6" width="5.5" height="5" rx="0.8" fill="#BAE6FD" />
      <rect x="8" y="6" width="5.5" height="5" rx="0.8" fill="#BAE6FD" />
      <path d="M3 14H38.5C39.3 14 40 14.7 39.8 15.5L38.8 19C38.4 20.2 37.3 21 36 21H5C3.9 21 3 20.1 3 19V14Z" fill="#E12228" />
      <path d="M4 13.5H38" stroke="#FFE169" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="38" cy="16.5" r="1.5" fill="#FFFBEB" />
      <g className="fcbWheel" style={{ transformOrigin: "11px 20.5px" }}>
        <circle cx="11" cy="20.5" r="4.2" fill="#1E293B" />
        <circle cx="11" cy="20.5" r="2.2" fill="#E2E8F0" />
        <circle cx="11" cy="20.5" r="0.8" fill="#475569" />
      </g>
      <g className="fcbWheel" style={{ transformOrigin: "31px 20.5px" }}>
        <circle cx="31" cy="20.5" r="4.2" fill="#1E293B" />
        <circle cx="31" cy="20.5" r="2.2" fill="#E2E8F0" />
        <circle cx="31" cy="20.5" r="0.8" fill="#475569" />
      </g>
    </svg>
  );
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
    coinRef.current.style.removeProperty("opacity");
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
      <span className="buttonText">
        <span className="fcbBadge">
          <span className="fcbBadgeInner">
            <BusIcon />
          </span>
        </span>
        <span className="fcbLabel">{children}</span>
      </span>
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
  font-size: clamp(0.9rem, 3.6vw, 1.05rem);
  font-weight: 800;
  letter-spacing: 0.01em;
  height: clamp(2.6rem, 9vw, 3rem);
  outline: 0;
  position: relative;
  top: 0;
  transition: transform 50ms ease-in-out;
  width: clamp(10.5rem, 46vw, 12rem);
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
  opacity: 1;
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
  display: flex;
  align-items: center;
  gap: 0.6rem;
  white-space: nowrap;
  opacity: 1;
  position: relative;
  transition: opacity 100ms linear 500ms;
  z-index: 3;
}

.flipCoinButton::before {
  background: linear-gradient(180deg, #ffe033, #ffcc04);
  border: 1px solid #e5b500;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(255, 204, 4, 0.4), 0 1px 2px rgba(0, 0, 0, 0.1);
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
  background: linear-gradient(180deg, #ffe033, #ffcc04);
  border: 1px solid #e5b500;
  box-sizing: border-box;
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
  opacity: 0;
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

.flipCoinButton:hover::before {
  background: linear-gradient(180deg, #ffd700, #f5b800);
}

.fcbBadge {
  align-items: center;
  background: linear-gradient(135deg, #fff3b0, #ffde59 40%, #e5ac00);
  border-radius: 50%;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 1px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-shrink: 0;
  height: 2rem;
  justify-content: center;
  padding: 2px;
  width: 2rem;
}

.fcbBadgeInner {
  align-items: center;
  background: linear-gradient(135deg, #ffe680, #f5b800);
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  width: 100%;
}

.fcbBus {
  filter: drop-shadow(0 0 0.6px #1e293b) drop-shadow(0 0 0.6px #1e293b);
  height: 0.8rem;
  width: 1.5rem;
}

.fcbLabel {
  color: #0f172a;
}

.flipCoinButton:hover:not(.clicked) .fcbBus {
  animation: fcbBusDrive 0.4s ease-in-out infinite;
}

.flipCoinButton:hover:not(.clicked) .fcbWheel {
  animation: fcbWheelSpin 0.35s linear infinite;
}

@media (max-width: 480px) {
  .fcbBadge {
    height: 1.75rem;
    width: 1.75rem;
  }
  .fcbBus {
    height: 0.8125rem;
    width: 1.25rem;
  }
  .buttonText {
    gap: 0.45rem;
  }
}

@keyframes fcbBusDrive {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1.5px) rotate(-0.5deg);
  }
}

@keyframes fcbWheelSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
