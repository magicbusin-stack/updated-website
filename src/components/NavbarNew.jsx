import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const _MOTION = motion;
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { HighlightItem } from "@/components/unlumen-ui/primitives/effects/highlight";
import FlipCoinButton from "./ui/flip-coin-button";
import SocialMedia from "./ui/social-media";
import {
  MotionNavigationMenu,
  MotionNavigationMenuContent,
  MotionNavigationMenuItem,
  MotionNavigationMenuList,
  MotionNavigationMenuTrigger,
} from "@/components/unlumen-ui/motion-navigation-menu";

function MenuLink({ to, children, className }) {
  return (
    <HighlightItem asChild>
      <Link
        to={to}
        data-slot="navigation-menu-link"
        className={cn("flex flex-col gap-1 rounded-lg p-2 text-sm transition-colors outline-none", className)}
      >
        {children}
      </Link>
    </HighlightItem>
  );
}

// NOTE: This component follows the styling and behavior of your original
// NavbarNew but renders the mega-dropdown exactly like the wireframe image.
// Programmes uses grouped headings (bold, non-clickable) and sub-links
// appear beneath them. Resources already had groups — those are preserved.

const NAVIGATION_ITEMS = [
  {
    key: "about",
    label: "About Us",
    items: [
      { label: "About Magic Bus", path: "/about-us" },
      { label: "Our Approach", path: "/our-approach" },
      { label: "Who We Are", path: "/who-we-are" },
      { label: "Our Team", path: "/our-team" },
      { label: "Board of Directors", path: "/board-of-directors" },
    ],
  },
  {
    key: "programmes",
    label: "Programmes",
    // groups: each group has a title which is rendered as a bold heading (NOT a link)
    groups: [
      {
        title: "Adolescent Programme",
        path: "/adolescent-programme",
        items: [
          { label: "Government Partnership Programme", path: "/government-partnership-programme" },
          { label: "Learning & Development", path: "/learning-development" },
          { label: "Youth for Change Fellowship Programme", path: "/youth-for-change-fellowship-programme" },
        ],
      },
      {
        title: "Livelihood Programme",
        path: "/livelihood-programme",
        items: [
          { label: "Youth Skilling", path: "/youth-skilling-programme" },
          { label: "Connect With Work", path: "/connect-with-work" },
          { label: "Digital Skilling", path: "/digital-skilling" },
          { label: "Entrepreneurship Development", path: "/entrepreneurship-development-programme" },
          { label: "Rural Empowerment Programme", path: "/livelihood-programme" },
          { label: "Future X", path: "/futurex" },
        ],
      },
      {
        title: "Employee Volunteering Programme",
        path: "/employee-volunteering",
        items: [],
      },
    ],
  },
  {
    key: "partners",
    label: "Partners",
    items: [
      { label: "Corporate Partners", path: "/corporate-partners" },
      { label: "Foundations & Institutions", path: "/foundation-partners" },
      { label: "Government Partners", path: "/government-partners" },
      { label: "Knowledge Partners", path: "/knowledge-partners" },
      { label: "Employment Partners", path: "/employment-partners" },
      { label: "Partner Connect", path: "/partner" },
    ],
  },
  {
    key: "resources",
    label: "Resources",
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
          { label: "Events", path: "/events" },
          { label: "Podcasts", path: "/podcasts" },
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
      {
        title: "Help & Support",
        items: [
          { label: "FAQs", path: "/faq" },
        ],
      },
    ],
  },
  {
    key: "life",
    label: "Life @ Magic Bus",
    items: [
      { label: "Work With Us", path: "/work-with-us" },
      { label: "Certifications", path: "/certifications" },
      { label: "Our Culture", path: "/our-culture" },
      { label: "Learning & Development", path: "/learning-development" },
      { label: "MB Academy", path: "/mb-academy" },
      { label: "Darwin (Employee Login)", path: "/darwinbox" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com",
    ariaLabel: "LinkedIn",
    tooltip: "LinkedIn",
    color: "#0A66C2",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    ariaLabel: "Instagram",
    tooltip: "Instagram",
    color: "#C13584",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com",
    ariaLabel: "YouTube",
    tooltip: "YouTube",
    color: "#FF0000",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    ariaLabel: "Facebook",
    tooltip: "Facebook",
    color: "#1877F2",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://x.com",
    ariaLabel: "X",
    tooltip: "X",
    color: "#000000",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function NavbarWireframe() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Plain state + CSS transition classes, not framer-motion's `animate` prop —
  // animate() silently fails to apply on this nav (confirmed earlier: its
  // inline styles never land), so a scroll-driven shrink needs a mechanism
  // that actually works.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The header reserves real space for itself (via --header-h, read by the
  // hero section's margin-top) so the video can never overlap or get cropped
  // by it — measure the live rendered height since it varies with wrapping/
  // scroll state.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const setHeaderHeight = () => {
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    };
    setHeaderHeight();
    const ro = new ResizeObserver(setHeaderHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    // A single element carries both the fixed positioning AND the visible
    // background — no separate floating margin/gap layer. A floating card
    // with a gap around it always left a sliver of the plain white page
    // background showing behind it (nothing else occupies that reserved
    // space yet), which next to a white card read as two stacked white
    // boxes. Flush + bottom-only rounding avoids that ambiguity entirely
    // while keeping a soft, modern edge.
    <nav
      ref={navRef}
      className="fixed top-0 inset-x-0 z-50 max-w-[1400px] mx-auto rounded-b-2xl bg-white/95 backdrop-blur-sm border-b border-gray-200/70 overflow-visible"
    >
        <div
          className={cn(
            "relative flex items-center justify-between px-4 md:px-8 transition-[padding] duration-300 ease-out",
            scrolled ? "py-1" : "py-2"
          )}
        >

          {/* Left: Logo */}
          <Link to="/" className="flex-shrink-0 z-40">
            <img
              src="/Magic Bus Logo - Usage As Per Background-01.png"
              alt="Magic Bus Logo"
              className="h-[70px] md:h-[135px] w-auto object-contain"
            />
          </Link>

          {/* Right: Content */}
          <div className="flex flex-col items-end justify-between gap-2 md:gap-3 h-full">

            {/* Top Row: Social icons + Donate + mobile toggle, grouped together */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden lg:block">
                <SocialMedia items={SOCIAL_LINKS} />
              </div>

              <div className="hidden lg:block h-8 w-px bg-gray-200" />

              <div className="shrink-0">
                <FlipCoinButton onFlipComplete={() => navigate("/donate")}>Donate</FlipCoinButton>
              </div>

              <button
                className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-gray-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Bottom Row: Navigation Links */}
            <div className="hidden lg:flex items-center justify-end pr-2 mt-1">
              <MotionNavigationMenu
                viewport
                viewportClassName="bg-white border border-slate-200 shadow-lg rounded-xl"
                springStiffness={350}
                springDamping={32}
              >
                <MotionNavigationMenuList highlightClassName="bg-brand-yellow/20 rounded-lg">
                  {NAVIGATION_ITEMS.map((item) => (
                    <MotionNavigationMenuItem key={item.key} value={item.key}>
                      <MotionNavigationMenuTrigger className="text-[17px] font-medium text-slate-700 hover:text-brand-red data-[state=open]:text-brand-red">
                        {item.label}
                      </MotionNavigationMenuTrigger>
                      <MotionNavigationMenuContent highlightClassName="bg-brand-yellow/15 rounded-lg">
                        {item.groups ? (
                          <div className="grid w-[800px] grid-cols-1 gap-0 md:grid-cols-3">
                            {item.groups.map((group, gi) => (
                              <div key={gi} className="border-r border-slate-100 p-2 last:border-r-0">
                                {group.path ? (
                                  <MenuLink
                                    to={group.path}
                                    className="!flex-row items-center justify-between text-base font-bold text-slate-800 hover:text-brand-red"
                                  >
                                    {group.title}
                                  </MenuLink>
                                ) : (
                                  <div className="px-2 py-2 text-base font-bold text-slate-800">{group.title}</div>
                                )}

                                <div className="space-y-1.5">
                                  {group.items && group.items.length > 0 ? (
                                    group.items.map((subItem, si) => (
                                      <MenuLink key={si} to={subItem.path} className="text-[15px] leading-snug py-2 text-slate-600">
                                        {subItem.label}
                                      </MenuLink>
                                    ))
                                  ) : (
                                    <div className="h-6" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="w-72 space-y-1.5">
                            {item.items.map((subItem, subIndex) => (
                              <MenuLink key={subIndex} to={subItem.path} className="text-[15px] leading-snug py-2 text-slate-700">
                                {subItem.label}
                              </MenuLink>
                            ))}
                          </div>
                        )}
                      </MotionNavigationMenuContent>
                    </MotionNavigationMenuItem>
                  ))}
                </MotionNavigationMenuList>
              </MotionNavigationMenu>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <_MOTION.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden border-t border-slate-200 bg-white rounded-b-2xl overflow-hidden">
              <div className="px-6 py-4 space-y-4">
                <div className="space-y-2">
                  {NAVIGATION_ITEMS.map((item) => (
                    <details key={item.key} className="group">
                      <summary className="flex items-center justify-between py-2 text-sm font-medium text-slate-700 cursor-pointer">
                        {item.label}
                        <ChevronDown className="w-4 h-4 text-brand-red group-open:rotate-180 transition-transform" />
                      </summary>

                      <div className="pl-4 pb-2 space-y-1">
                        {item.groups ? (
                          item.groups.map((group, gidx) => (
                            <div key={gidx} className="mb-3">
                              {group.path ? (
                                <Link
                                  to={group.path}
                                  className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 hover:text-brand-red"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {group.title}
                                </Link>
                              ) : (
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{group.title}</div>
                              )}
                              {group.items.map((subItem, si) => (
                                <Link key={si} to={subItem.path} className="block py-1 text-sm text-slate-600 hover:text-brand-red" onClick={() => setMobileOpen(false)}>{subItem.label}</Link>
                              ))}
                            </div>
                          ))
                        ) : (
                          item.items.map((subItem, si) => (
                            <Link key={si} to={subItem.path} className="block py-1 text-sm text-slate-600 hover:text-brand-red" onClick={() => setMobileOpen(false)}>{subItem.label}</Link>
                          ))
                        )}
                      </div>
                    </details>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <div className="flex justify-center">
                    <FlipCoinButton
                      onFlipComplete={() => {
                        setMobileOpen(false);
                        navigate("/donate");
                      }}
                    >
                      Donate Now
                    </FlipCoinButton>
                  </div>
                  <div className="flex gap-2">
                    <Link to="/contact" className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 text-center text-sm font-medium rounded-lg" onClick={() => setMobileOpen(false)}>Contact Us</Link>
                    <Link to="/partner" className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 text-center text-sm font-medium rounded-lg" onClick={() => setMobileOpen(false)}>Partner</Link>
                  </div>
                </div>
              </div>
            </_MOTION.div>
          )}
        </AnimatePresence>
    </nav>
  );
}


