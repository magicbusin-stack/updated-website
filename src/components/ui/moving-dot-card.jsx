export default function MovingDotCard({ accent = "#FFCC04", className = "", children }) {
  return (
    <div className={`moving-dot-card ${className}`} style={{ "--md-accent": accent }}>
      <span className="moving-dot-card-dot" />
      <div className="moving-dot-card-content">{children}</div>
    </div>
  );
}

let injected = false;
function injectStyles() {
  if (typeof document === "undefined" || injected) return;
  const style = document.createElement("style");
  style.setAttribute("data-moving-dot-card", "true");
  style.textContent = `
    .moving-dot-card {
      --md-accent: #FFCC04;
      position: relative;
      height: 100%;
      background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.06), transparent 60%), linear-gradient(160deg, #14161b, #1d2028);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 1rem;
      padding: 1.25rem 1rem;
      overflow: hidden;
      isolation: isolate;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .moving-dot-card-dot {
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--md-accent);
      box-shadow: 0 0 8px 2px var(--md-accent);
      animation: movingDotTravel 4s linear infinite;
      z-index: 2;
      top: 0;
      left: 0;
    }
    @keyframes movingDotTravel {
      0%   { top: 0%;   left: 0%;   transform: translate(-50%, -50%); }
      25%  { top: 0%;   left: 100%; transform: translate(-50%, -50%); }
      50%  { top: 100%; left: 100%; transform: translate(-50%, -50%); }
      75%  { top: 100%; left: 0%;   transform: translate(-50%, -50%); }
      100% { top: 0%;   left: 0%;   transform: translate(-50%, -50%); }
    }
    .moving-dot-card-content {
      position: relative;
      z-index: 3;
      text-align: center;
      width: 100%;
    }
  `;
  document.head.appendChild(style);
  injected = true;
}

injectStyles();
