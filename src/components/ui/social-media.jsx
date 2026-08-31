export default function SocialMedia({ items, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.ariaLabel}
          className="group relative flex flex-col items-center"
        >
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full text-slate-500 transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-white"
            style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = item.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)";
            }}
          >
            {item.icon}
          </span>
          <span
            className="pointer-events-none absolute top-full mt-1 -translate-y-1 whitespace-nowrap text-[10px] font-semibold opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
            style={{ color: item.color }}
          >
            {item.tooltip}
          </span>
        </a>
      ))}
    </div>
  );
}
