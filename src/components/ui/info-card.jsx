import { useEffect, useRef } from "react";

export default function InfoCard({ icon: Icon, title, description, borderColor = "#FFCC04", hoverTextColor = "#1A1A1A" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty("--border-color", borderColor);
    container.style.setProperty("--hover-text-color", hoverTextColor);

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(y, x);
      container.style.setProperty("--rotation", `${angle}rad`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [borderColor, hoverTextColor]);

  return (
    <div ref={containerRef} className="info-card-file-container">
      <div className="info-card-inner">
        {Icon && (
          <div className="info-card-icon-wrap" style={{ color: borderColor }}>
            <Icon className="info-card-icon" />
          </div>
        )}
        <div className="info-card-content">
          <h3 className="info-card-text">
            <span className="info-card-title">{title}</span>
            <span className="info-card-text-effect" style={{ backgroundColor: borderColor }} />
          </h3>
          {description && <p className="info-card-description">{description}</p>}
        </div>
      </div>
    </div>
  );
}

let injected = false;
function injectStyles() {
  if (typeof document === "undefined" || injected) return;
  const style = document.createElement("style");
  style.setAttribute("data-info-card", "true");
  style.textContent = `
    .info-card-file-container {
      --rotation: 0deg;
      --border-color: #FFCC04;
      --hover-text-color: #1A1A1A;
      width: 100%;
      aspect-ratio: 388 / 378;
      border: 3px solid transparent;
      border-radius: 1em;
      background-image: linear-gradient(#151515, #151515),
        conic-gradient(from var(--rotation), var(--border-color) 0deg, var(--border-color) 90deg, #2c2c2c 90deg, #2c2c2c 360deg);
      background-origin: border-box;
      background-clip: padding-box, border-box;
      position: relative;
      overflow: hidden;
      padding: 12px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info-card-inner {
      width: 100%;
      height: 100%;
      border-radius: 0.7em;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .info-card-icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 0 0.5rem;
    }
    .info-card-icon {
      width: 3rem;
      height: 3rem;
    }
    .info-card-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 4px 20px 20px;
      text-align: center;
    }
    .info-card-text {
      font-size: 1.15rem;
      font-weight: bold;
      letter-spacing: -0.01em;
      line-height: 1.3;
      margin: 0 0 8px;
      color: #f5f5f5;
      transition: color 0.3s ease;
      position: relative;
      overflow: hidden;
      padding: 4px;
    }
    .info-card-file-container:hover .info-card-text {
      color: var(--hover-text-color);
    }
    .info-card-title {
      position: relative;
      z-index: 10;
    }
    .info-card-text-effect {
      clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
      transform-origin: center;
      transition: clip-path cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;
      position: absolute;
      inset: -4px;
      z-index: 0;
    }
    .info-card-file-container:hover .info-card-text-effect {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    .info-card-description {
      font-size: 0.85rem;
      color: #c9c9c9;
      margin: 0;
    }
  `;
  document.head.appendChild(style);
  injected = true;
}

injectStyles();
