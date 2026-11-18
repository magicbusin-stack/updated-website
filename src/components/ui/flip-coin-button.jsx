import { useEffect, useRef, useState } from "react";

/* The site's Donate-style button.
   - The little Magic Bus on the left still bobs and spins its wheels on hover (unchanged).
   - The old coin-flip animation is gone. On click the Magic Bus now drives across the button, and then the page
     redirects (via onFlipComplete, the prop name is kept so every existing use keeps working).
   - size="lg" gives the bigger version used in the header. */

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

function BusIcon({ className = "fcbBus" }) {
  return (
    <svg className={className} viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

const DRIVE_MS = 1000; // how long the bus takes to cross the button before the redirect

export default function FlipCoinButton({ children, onFlipComplete, size }) {
  const [clicked, setClicked] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    timers.current.push(
      setTimeout(() => {
        if (onFlipComplete) onFlipComplete();
        timers.current.push(setTimeout(() => setClicked(false), 300));
      }, DRIVE_MS)
    );
  };

  return (
    <button type="button" className={cn("flipCoinButton", { clicked, fcbLarge: size === "lg" })} onClick={handleClick}>
      <span className="buttonText">
        <span className="fcbBadge">
          <span className="fcbBadgeInner">
            <BusIcon />
          </span>
        </span>
        <span className="fcbLabel">{children}</span>
      </span>
      <span className="fcbRoad" aria-hidden="true">
        <span className="fcbDriver">
          <BusIcon className="fcbDriverBus" />
        </span>
      </span>
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
  transition: transform 80ms ease-in-out;
  width: clamp(10.5rem, 46vw, 12rem);
  -webkit-tap-highlight-color: transparent;
}

.flipCoinButton.fcbLarge {
  font-size: clamp(1.05rem, 4vw, 1.25rem);
  height: clamp(2.9rem, 10vw, 3.5rem);
  width: clamp(11.5rem, 50vw, 14rem);
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .flipCoinButton.fcbLarge {
    font-size: 1.05rem;
    height: 3rem;
    width: 11rem;
  }
}

.flipCoinButton:active {
  transform: scale(0.97);
}

.flipCoinButton:focus-visible {
  box-shadow: 0 0 0 3px rgba(225, 34, 40, 0.45);
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
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
  transition: background 150ms ease, box-shadow 150ms ease;
}

.flipCoinButton:hover::before {
  background: linear-gradient(180deg, #ffd700, #f5b800);
  box-shadow: 0 4px 14px rgba(255, 204, 4, 0.55), 0 1px 2px rgba(0, 0, 0, 0.12);
}

.buttonText {
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  white-space: nowrap;
  position: relative;
  transition: opacity 250ms ease;
  z-index: 3;
}

.fcbLabel {
  color: #0f172a;
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

.fcbLarge .fcbBadge {
  height: 2.4rem;
  width: 2.4rem;
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

.fcbLarge .fcbBus {
  height: 0.95rem;
  width: 1.8rem;
}

/* Hover: the badge bus bobs and its wheels spin (unchanged) */
.flipCoinButton:hover:not(.clicked) .fcbBus {
  animation: fcbBusDrive 0.4s ease-in-out infinite;
}

.flipCoinButton:hover:not(.clicked) .fcbBadge .fcbWheel {
  animation: fcbWheelSpin 0.35s linear infinite;
}

/* Click: a bigger bus drives across the button, then the page redirects */
.fcbRoad {
  border-radius: 9999px;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 4;
}

.fcbDriver {
  height: 2.1rem;
  left: -4.5rem;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3.4rem;
}

.fcbLarge .fcbDriver {
  height: 2.4rem;
  width: 3.9rem;
}

.fcbDriverBus {
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.35));
  height: 100%;
  width: 100%;
}

.flipCoinButton.clicked {
  pointer-events: none;
}

.flipCoinButton.clicked .buttonText {
  opacity: 0;
  transition: opacity 90ms ease;
}

.flipCoinButton.clicked .fcbDriver {
  animation: fcbDriveAcross ${DRIVE_MS}ms cubic-bezier(0.45, 0, 0.35, 1) forwards;
}

.flipCoinButton.clicked .fcbDriver .fcbWheel {
  animation: fcbWheelSpin 0.2s linear infinite;
}

@keyframes fcbDriveAcross {
  0% {
    left: -4.5rem;
    opacity: 1;
  }
  100% {
    left: calc(100% + 1rem);
    opacity: 1;
  }
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

@media (prefers-reduced-motion: reduce) {
  .flipCoinButton.clicked .fcbDriver {
    animation-duration: 1ms;
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
