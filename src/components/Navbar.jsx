import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const _MOTION = motion;
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";


const ChevronDown = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);
const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
  </svg>
);

const MENUS = [
  { key: "about", label: "About Us" },
  { key: "programmes", label: "Programmes" },
  { key: "partners", label: "Partners" },
  { key: "resources", label: "Resources" },
  { key: "life", label: "Life @ Magic Bus" },
];

const MEGA = {
  about: {
    title: "About Us",
    items: [
      { label: "Our Approach", path: "#" },
      { label: "Our Team", path: "#" },
      { label: "Board of Directors", path: "/board-of-directors" },
      { label: "Our Culture", path: "#" },
    ],
  },

  programmes: {
    title: "Programmes",
    items: [
      { label: "Adolescent Programme", path: "#" },
      { label: "MB Dost", path: "#" },
      { label: "Livelihood Programme", path: "#" },
      { label: "Standard Skilling", path: "#" },
      { label: "Digital Skilling", path: "#" },
      { label: "Rural Empowerment Programme", path: "#" },
      { label: "Future X", path: "#" },
      { label: "Employee Volunteering Programme", path: "#" },
    ],
  },

  partners: {
    title: "Partners",
    items: [
      { label: "Corporate Partners", path: "#" },
      { label: "Foundations & Institutions", path: "#" },
      { label: "Government Partners", path: "#" },
      { label: "Knowledge Partners", path: "#" },
      { label: "Employment Partners", path: "#" },
      { label: "Partner Connect", path: "#" },
    ],
  },

  resources: {
    title: "Resources",
    groups: [
      {
        title: "Reports & Publications",
        items: [
          { label: "Impact Reports", path: "/impact-reports" },
          { label: "Gender Journey Report", path: "/gender-journey-report" },
          { label: "Annual Reports", path: "/annual-reports" },
          { label: "FLFPR Report", path: "/flfpr-report" },
        ],
      },
      {
        title: "Media & Stories",
        items: [
          { label: "Gallery", path: "/gallery" },
          { label: "Blogs", path: "/blogs" },
          { label: "News", path: "/news" },
          { label: "Webstories", path: "#" },
          { label: "Awards", path: "#" },
          { label: "Success Stories", path: "#" },
          { label: "Testimonials", path: "#" },
          { label: "Podcast", path: "#" },
        ],
      },
      {
        title: "Policies",
        items: [
          { label: "Privacy", path: "#" },
          { label: "Terms & Conditions", path: "#" },
          { label: "POSH Policy", path: "/posh-policy" },
          { label: "Child Protection Policy", path: "/child-protection-policy" },
        ],
      },
    ],
  },

  life: {
    title: "Life @ Magic Bus",
    items: [
      { label: "Work With Us", path: "/work-with-us" },
      { label: "Certifications", path: "/certifications" },
      { label: "Our Culture", path: "#" },
      { label: "Learning & Development", path: "/learning-development" },
      { label: "MB Academy", path: "#" },
      { label: "Darwin (Employee Login)", path: "#" },
    ],
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const closeMegaSoon = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setActiveKey(null), 120);
  };

  return (
    <nav
      className={`site-nav fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/98 shadow-sm" : "bg-white"}`}
      onMouseLeave={closeMegaSoon}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* container is relative so we can absolutely center search within it */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP ROW — Logo | (search absolutely centered) | CTAs */}
        <div className="flex items-center justify-between h-20 md:h-24 border-b border-gray-100">
          {/* Logo (left) */}
          <Link to="/" className="flex items-center gap-3 z-40">
            <img
              src="/Magic Bus Logo - Usage As Per Background-01.png"
              alt="Magic Bus Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain rounded-full"
            />
            <span className="sr-only">Magic Bus</span>
          </Link>

          {/* SEARCH - absolutely centered in container so always centered */}
          <div
            className="pointer-events-auto absolute left-1/2 transform -translate-x-1/2  w-full max-w-sm px-4 z-30"
            style={{ touchAction: "manipulation" }}
          >
            {/* adjust widths responsively */}
            <div className="mx-auto w-full">
              <label htmlFor="site-search" className="sr-only">Search the site</label>
              <div className="relative">
                <input
                  id="site-search"
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand-red text-sm placeholder-gray-400 shadow-sm bg-white"
                  aria-label="Search"
                />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* CTAs (right) */}
          <div className="flex items-center gap-3 z-40">
            <div className="flex flex-col items-end gap-2">
              {/* CTA row */}
              <div className="flex items-center gap-2">
                <Link
                  to="/donate"
                  className="inline-flex px-4 py-2 rounded-full bg-brand-red text-white text-sm font-semibold shadow-sm transition"
                  style={{ backgroundColor: "#E12228" }} // inline fallback
                >
                  Donate Now
                </Link>

                <Link
                  to="/contact"
                  className="hidden sm:inline-flex px-3 py-2 rounded-full border border-gray-300 text-sm font-semibold hover:bg-brand-yellow hover:text-white transition"
                >
                  Contact Us
                </Link>

                <Link
                  to="/partner"
                  className="hidden sm:inline-flex px-3 py-2 rounded-full border border-gray-300 text-sm font-semibold hover:bg-brand-yellow hover:text-white transition"
                >
                  Partner
                </Link>

                {/* mobile menu toggle */}
                <button
                  className="lg:hidden w-9 h-9 grid place-items-center rounded-full border border-gray-200 ml-1"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label="Toggle menu"
                  aria-expanded={mobileOpen}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Socials - moved BELOW CTAs (right aligned) */}
              <div className="flex items-center justify-center gap-2 mt-1">
                {/* Instagram - gradient-like circle */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full shadow"
                  style={{
                    background:
                      "linear-gradient(45deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)"
                  }}
                >
                  <Instagram size={14} color="#fff" />
                </a>

                {/* LinkedIn - brand blue */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full shadow"
                  style={{ background: "#0A66C2" }}
                >
                  <Linkedin size={14} color="#fff" />
                </a>

                {/* YouTube - brand red */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full shadow"
                  style={{ background: "#FF0000" }}
                >
                  <Youtube size={14} color="#fff" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY ROW (desktop) */}
        <div className="hidden lg:block py-3">
          <div className="mt-1 flex items-center justify-center gap-3">
            {MENUS.map((m) => (
              <button
                key={m.key}
                onMouseEnter={() => setActiveKey(m.key)}
                onFocus={() => setActiveKey(m.key)}
                className={`px-4 py-1.5 text-sm font-semibold transition-colors rounded-md ${activeKey === m.key ? "text-brand-red" : "text-gray-800 hover:text-brand-red"} flex items-center gap-2`}
                aria-haspopup="true"
                aria-expanded={activeKey === m.key}
              >
                {m.label}
                <ChevronDown className={`transition-transform ${activeKey === m.key ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MEGA MENU */}
      <AnimatePresence>
        {activeKey && (
          <_MOTION.div
            key={activeKey}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={() => setActiveKey(activeKey)}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              {activeKey !== "resources" ? (
                <div className="grid grid-cols-5 gap-6">
                  <div className="col-span-2">
                    <h3 className="font-bold text-base mb-4 text-gray-900">{MEGA[activeKey].title}</h3>
                    <ul className="space-y-2">
                      {MEGA[activeKey].items?.map((item) => (
                        <li key={item.label}>
                          {item.path.startsWith('#') ? (
                            <a href={item.path} className="text-sm text-gray-700 hover:text-brand-red transition-colors block py-0.5">
                              {item.label}
                            </a>
                          ) : (
                            <Link to={item.path} className="text-sm text-gray-700 hover:text-brand-red transition-colors block py-0.5">
                              {item.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-3 grid grid-cols-3 gap-6 opacity-80">
                    {[1, 2, 3].map((k) => (
                      <div key={k} className="rounded-xl border border-gray-100 p-4 bg-gray-50/60">
                        <div className="text-xs font-semibold text-gray-600 mb-2">Highlight {k}</div>
                        <p className="text-xs text-gray-500">Quick links and key sections relevant to {MEGA[activeKey].title}.</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-8">
                  {MEGA.resources.groups.map((g) => (
                    <div key={g.title}>
                      <h4 className="font-semibold text-gray-900 mb-3">{g.title}</h4>
                      <ul className="space-y-2">
                        {g.items.map((item) => (
                          <li key={item.label}>
                            {item.path.startsWith('#') ? (
                              <a href={item.path} className="text-sm text-gray-700 hover:text-brand-red transition-colors block py-0.5">
                                {item.label}
                              </a>
                            ) : (
                              <Link to={item.path} className="text-sm text-gray-700 hover:text-brand-red transition-colors block py-0.5">
                                {item.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </_MOTION.div>
        )}
      </AnimatePresence>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <_MOTION.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4">
              {/* Mobile search */}
              <div className="mb-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-4 pr-9 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand-red text-sm"
                    aria-label="Search"
                  />
                  <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Menu groups */}
              <div className="grid grid-cols-1 divide-y divide-gray-100">
                {MENUS.map((m) => (
                  <details key={m.key} className="py-2">
                    <summary className="list-none flex items-center justify-between py-2 cursor-pointer">
                      <span className="font-semibold">{m.label}</span>
                      <ChevronDown className="shrink-0" />
                    </summary>
                    <div className="pl-1 pt-2 space-y-2">
                      {(MEGA[m.key].items || MEGA[m.key].groups?.flatMap((g) => g.items) || [])
                        .slice(0, 8)
                        .map((item) => (
                          item.path?.startsWith('#') ? (
                            <a key={item.label} href={item.path} className="block text-sm text-gray-700 hover:text-brand-red">
                              {item.label}
                            </a>
                          ) : (
                            <Link key={item.label} to={item.path} className="block text-sm text-gray-700 hover:text-brand-red">
                              {item.label}
                            </Link>
                          )
                        ))}
                    </div>
                  </details>
                ))}
              </div>

              {/* Mobile CTAs + socials */}
              <div className="mt-4 flex gap-2 flex-col">
                <Link to="/donate" className="px-4 py-2 rounded-full bg-brand-red text-white text-sm font-semibold">
                  Donate Now
                </Link>

                <div className="flex gap-2">
                  <Link to="/contact" className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold">Contact Us</Link>
                  <Link to="/partner" className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold">Partner</Link>
                </div>

                <div className="w-full flex items-center gap-3 mt-3">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full" style={{ background: "linear-gradient(45deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)" }}>
                    <Instagram size={18} color="#fff" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full" style={{ background: "#0A66C2" }}>
                    <Linkedin size={18} color="#fff" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-full" style={{ background: "#FF0000" }}>
                    <Youtube size={18} color="#fff" />
                  </a>
                </div>
              </div>
            </div>
          </_MOTION.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


