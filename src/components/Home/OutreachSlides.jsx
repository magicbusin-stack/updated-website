import React from "react";
import Ticker from "./OutreachTicker";

/* "Our Outreach & Impact": the Adolescent and Livelihood stats pages, built from the six HTML files supplied by the team
   (1A/1B, 2A/2B and the two Livelihood pages) and the matching photos (cropped so no text is baked into the pictures).
   The text, numbers, colours and icons are copied from those HTML files as written; only the Tailwind
   custom colours were turned into fixed hex values. Photos are in /public/outreach/.
   How the slides should be shown (stacked, switched, auto-playing ...) is still to be decided: for now they are stacked. */

export const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&family=Outfit:wght@700;800;900&display=swap";

function SlideAdolescentsOutreach2() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#111827" }}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-14 items-start">
<div className="lg:col-span-5 flex flex-col justify-between" data-purpose="primary-metric-summary">
<div>
<span className="block text-2xl sm:text-3xl font-black text-gray-950 uppercase tracking-tight leading-none mb-1">
            OVER
          </span>
<div className="font-['Outfit','Inter',sans-serif] text-6xl sm:text-7xl xl:text-[84px] font-extrabold text-[#F8B200] tracking-tight leading-[0.9] my-1"><Ticker value="40 LAKHS" /></div>
<h3 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight leading-tight mt-2 mb-4">
            ADOLESCENTS EMPOWERED.
          </h3>
<p className="text-base text-gray-800 leading-relaxed font-normal max-w-xl">
            Magic Bus India Foundation follows a dual Direct and Indirect implementation model to promote adolescent development across India.
          </p>
</div>
<div className="mt-3 pt-2 text-[12px] leading-[1.6] text-gray-500 font-normal space-y-2 border-t border-gray-100 lg:border-t-0">
<p>
            *This is the cumulative number of adolescents reached through Government Partnership programmes with Magic Bus across 14 states (Andhra Pradesh, Maharashtra, Chhattisgarh, Tamil Nadu, Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram). ^These four states (Himachal Pradesh, Haryana, Uttar Pradesh, and Uttarakhand) are also part of the NITI Aayog partnership. ~These 10 states (Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram) had active partnerships with Magic Bus in FY 2025–26.
          </p>
</div>
</div>
<div className="lg:col-span-7" data-purpose="metrics-grid">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 sm:gap-y-7 gap-x-6 sm:gap-x-8">
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="mb-3 text-[#d32f2f]">
<svg className="w-10 h-10 stroke-current fill-none stroke-[1.8]" viewBox="0 0 48 48">
<rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" width="25" x="19" y="4"></rect>
<path d="M23 16 L29 11 L35 14 L40 8" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M40 8 h-4 m4 0 v4" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="10" cy="9" r="4" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M4 22 C4 17 8 16 11 16 L19 12" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 17 v5" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="9" cy="30" r="3"></circle>
<path d="M5 40 C5 36 7 35 9 35 C11 35 13 36 13 40" strokeLinecap="round"></path>
<circle cx="21" cy="30" r="3"></circle>
<path d="M17 40 C17 36 19 35 21 35 C23 35 25 36 25 40" strokeLinecap="round"></path>
<circle cx="33" cy="30" r="3"></circle>
<path d="M29 40 C29 36 31 35 33 35 C35 35 37 36 37 40" strokeLinecap="round"></path>
</svg>
</div>
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none"><Ticker value="37,389" /></div>
<div className="mt-2 text-sm sm:text-base font-normal text-gray-700 leading-snug">
              Teachers Trained
            </div>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="mb-3 text-[#d32f2f]">
<svg className="w-10 h-10 stroke-current fill-none stroke-[1.8]" viewBox="0 0 48 48">
<rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" width="25" x="19" y="4"></rect>
<path d="M23 16 L29 11 L35 14 L40 8" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M40 8 h-4 m4 0 v4" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="10" cy="9" r="4" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M4 22 C4 17 8 16 11 16 L19 12" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 17 v5" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="9" cy="30" r="3"></circle>
<path d="M5 40 C5 36 7 35 9 35 C11 35 13 36 13 40" strokeLinecap="round"></path>
<circle cx="21" cy="30" r="3"></circle>
<path d="M17 40 C17 36 19 35 21 35 C23 35 25 36 25 40" strokeLinecap="round"></path>
<circle cx="33" cy="30" r="3"></circle>
<path d="M29 40 C29 36 31 35 33 35 C35 35 37 36 37 40" strokeLinecap="round"></path>
</svg>
</div>
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none"><Ticker value="30,069" /></div>
<div className="mt-2 text-sm sm:text-base font-normal text-gray-700 leading-snug">
              Schools
            </div>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="mb-3 text-[#d32f2f]">
<svg className="w-10 h-10 stroke-current fill-none stroke-[1.8]" viewBox="0 0 48 48">
<rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" width="25" x="19" y="4"></rect>
<path d="M23 16 L29 11 L35 14 L40 8" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M40 8 h-4 m4 0 v4" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="10" cy="9" r="4" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M4 22 C4 17 8 16 11 16 L19 12" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 17 v5" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="9" cy="30" r="3"></circle>
<path d="M5 40 C5 36 7 35 9 35 C11 35 13 36 13 40" strokeLinecap="round"></path>
<circle cx="21" cy="30" r="3"></circle>
<path d="M17 40 C17 36 19 35 21 35 C23 35 25 36 25 40" strokeLinecap="round"></path>
<circle cx="33" cy="30" r="3"></circle>
<path d="M29 40 C29 36 31 35 33 35 C35 35 37 36 37 40" strokeLinecap="round"></path>
</svg>
</div>
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none"><Ticker value="52%" /></div>
<div className="mt-2 text-sm sm:text-base font-normal text-gray-700 leading-snug">
              Girl Participants
            </div>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="mb-3 text-[#d32f2f]">
<svg className="w-10 h-10 stroke-current fill-none stroke-[1.8]" viewBox="0 0 48 48">
<rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" width="25" x="19" y="4"></rect>
<path d="M23 16 L29 11 L35 14 L40 8" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M40 8 h-4 m4 0 v4" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="10" cy="9" r="4" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M4 22 C4 17 8 16 11 16 L19 12" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 17 v5" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="9" cy="30" r="3"></circle>
<path d="M5 40 C5 36 7 35 9 35 C11 35 13 36 13 40" strokeLinecap="round"></path>
<circle cx="21" cy="30" r="3"></circle>
<path d="M17 40 C17 36 19 35 21 35 C23 35 25 36 25 40" strokeLinecap="round"></path>
<circle cx="33" cy="30" r="3"></circle>
<path d="M29 40 C29 36 31 35 33 35 C35 35 37 36 37 40" strokeLinecap="round"></path>
</svg>
</div>
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none"><Ticker value="11" /></div>
<div className="mt-2 text-sm sm:text-base font-normal text-gray-700 leading-snug">
              Government<br className="hidden sm:inline"/> Partnerships
            </div>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="mb-3 text-[#d32f2f]">
<svg className="w-10 h-10 stroke-current fill-none stroke-[1.8]" viewBox="0 0 48 48">
<rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" width="25" x="19" y="4"></rect>
<path d="M23 16 L29 11 L35 14 L40 8" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M40 8 h-4 m4 0 v4" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="10" cy="9" r="4" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M4 22 C4 17 8 16 11 16 L19 12" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 17 v5" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="9" cy="30" r="3"></circle>
<path d="M5 40 C5 36 7 35 9 35 C11 35 13 36 13 40" strokeLinecap="round"></path>
<circle cx="21" cy="30" r="3"></circle>
<path d="M17 40 C17 36 19 35 21 35 C23 35 25 36 25 40" strokeLinecap="round"></path>
<circle cx="33" cy="30" r="3"></circle>
<path d="M29 40 C29 36 31 35 33 35 C35 35 37 36 37 40" strokeLinecap="round"></path>
</svg>
</div>
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none"><Ticker value="131" /></div>
<div className="mt-2 text-sm sm:text-base font-normal text-gray-700 leading-snug">
              Aspirational<br className="hidden sm:inline"/> Blocks
            </div>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="mb-3 text-[#d32f2f]">
<svg className="w-10 h-10 stroke-current fill-none stroke-[1.8]" viewBox="0 0 48 48">
<rect height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" width="25" x="19" y="4"></rect>
<path d="M23 16 L29 11 L35 14 L40 8" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M40 8 h-4 m4 0 v4" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="10" cy="9" r="4" strokeLinecap="round" strokeLinejoin="round"></circle>
<path d="M4 22 C4 17 8 16 11 16 L19 12" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 17 v5" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="9" cy="30" r="3"></circle>
<path d="M5 40 C5 36 7 35 9 35 C11 35 13 36 13 40" strokeLinecap="round"></path>
<circle cx="21" cy="30" r="3"></circle>
<path d="M17 40 C17 36 19 35 21 35 C23 35 25 36 25 40" strokeLinecap="round"></path>
<circle cx="33" cy="30" r="3"></circle>
<path d="M29 40 C29 36 31 35 33 35 C35 35 37 36 37 40" strokeLinecap="round"></path>
</svg>
</div>
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none"><Ticker value="343" /></div>
<div className="mt-2 text-sm sm:text-base font-normal text-gray-700 leading-snug">
              Community<br className="hidden sm:inline"/> Learning Centres
            </div>
</div>
</div>
</div>
</div>
<footer className="mt-3 pt-2">
<p className="text-[12px] text-gray-500 font-medium">
        Data as of March 2026. All data sourced from Magic Bus internal system generated data.
      </p>
</footer>
    </div>
  );
}

function SlideAdolescentsImpact2() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1e293b" }}>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
<div className="lg:col-span-6 flex flex-col justify-start" data-purpose="primary-metric-summary">
<span className="text-xs sm:text-sm md:text-base font-extrabold tracking-widest text-[#1e293b] uppercase mb-1">
            OVER
          </span>
<h1 className="text-[clamp(3rem,5.5vw,4.75rem)] leading-[0.95] tracking-[-0.01em] font-extrabold text-[#f5b800] mb-2 uppercase"><Ticker value="40 LAKHS" /></h1>
<h3 className="text-base sm:text-lg md:text-xl font-black text-[#1e293b] tracking-tight uppercase mb-4">
            ADOLESCENTS EMPOWERED.
          </h3>
<p className="text-sm sm:text-base text-[#1e293b] leading-relaxed mb-4 max-w-xl font-medium">
            Magic Bus India Foundation follows a dual Direct and Indirect implementation model to promote adolescent development across India.
          </p>
<div className="border-t border-slate-100 pt-2 text-[12px] sm:text-xs text-[#64748b] leading-normal space-y-2 max-w-xl text-justify" data-purpose="footnotes">
<p>
              *This is the cumulative number of adolescents reached through Government Partnership programmes with Magic Bus across 14 states (Andhra Pradesh, Maharashtra, Chhattisgarh, Tamil Nadu, Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram). ^These four states (Himachal Pradesh, Haryana, Uttar Pradesh, and Uttarakhand) are also part of the NITI Aayog partnership. ~These 10 states (Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram) had active partnerships with Magic Bus in FY 2025–26.
            </p>
<p>
              Data as of March 2026. All data sourced from Magic Bus internal system generated data.
            </p>
</div>
</div>
<div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-8 pt-2" data-purpose="detailed-metrics-grid">
<div className="flex flex-col space-y-3" data-purpose="metric-item">
<div aria-label="27 percent representation" className="h-4 w-full flex rounded-none overflow-hidden bg-[#fca5a5]">
<div className="h-full bg-[#f5b800]" style={{ width: "27%" }}></div>
<div className="h-full bg-[#fca5a5]" style={{ width: "73%" }}></div>
</div>
<p className="text-sm sm:text-base text-[#1e293b] leading-snug">
<span className="font-extrabold text-[#1e293b]"><Ticker value="27%" /></span> increase in attendance and school regularity
            </p>
</div>
<div className="flex flex-col space-y-3" data-purpose="metric-item">
<div aria-label="34 percent representation" className="h-4 w-full flex rounded-none overflow-hidden bg-[#fca5a5]">
<div className="h-full bg-[#f5b800]" style={{ width: "34%" }}></div>
<div className="h-full bg-[#fca5a5]" style={{ width: "66%" }}></div>
</div>
<p className="text-sm sm:text-base text-[#1e293b] leading-snug">
<span className="font-extrabold text-[#1e293b]"><Ticker value="34%" /></span> adolescents aspire to pursue graduation and higher studies
            </p>
</div>
<div className="flex flex-col space-y-3" data-purpose="metric-item">
<div aria-label="46 percent representation" className="h-4 w-full flex rounded-none overflow-hidden bg-[#fca5a5]">
<div className="h-full bg-[#f5b800]" style={{ width: "46%" }}></div>
<div className="h-full bg-[#fca5a5]" style={{ width: "54%" }}></div>
</div>
<p className="text-sm sm:text-base text-[#1e293b] leading-snug">
<span className="font-extrabold text-[#1e293b]"><Ticker value="46%" /></span> improvement in perceived ability to withstand and recover from difficulties
            </p>
</div>
<div className="flex flex-col space-y-3" data-purpose="metric-item">
<div aria-label="20 percent representation" className="h-4 w-full flex rounded-none overflow-hidden bg-[#fca5a5]">
<div className="h-full bg-[#f5b800]" style={{ width: "20%" }}></div>
<div className="h-full bg-[#fca5a5]" style={{ width: "80%" }}></div>
</div>
<p className="text-sm sm:text-base text-[#1e293b] leading-snug">
<span className="font-extrabold text-[#1e293b]"><Ticker value="20%" /></span> increase in perceived ability to act as required to achieve goals
            </p>
</div>
</div>
</div>
</div>
    </div>
  );
}

function SlideLivelihoodOutreach() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#334155" }}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
<article className="lg:col-span-5 flex flex-col justify-start" data-purpose="featured-statistic">
<span className="text-base sm:text-lg md:text-[19px] font-extrabold tracking-wider text-[#111e38] uppercase mb-1">
          OVER
        </span>
<div className="text-[clamp(3.75rem,5.5vw,5.25rem)] leading-none tracking-[-0.02em] font-black text-[#f5b800] mb-2 select-none"><Ticker value="3.5 LAKHS" /></div>
<h2 className="text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight text-[#111e38] uppercase mb-4">
          YOUTH EMPOWERED.
        </h2>
<p className="text-sm md:text-[15px] leading-relaxed text-[#334155] font-normal pr-0 lg:pr-2">
          The Livelihood Programme equips youth aged 18–25 with transferable life and employability skills. Also, the Rural Livelihood Programme strengthens entrepreneurship among peri-urban and rural communities by strengthening life skills, leadership, and entrepreneurial skills.
        </p>
</article>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 pt-2" data-purpose="kpi-grid">
<div className="flex flex-col items-start space-y-2">
<div aria-hidden="true" className="w-9 h-9 text-[#d62828]">
<svg className="w-full h-full fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
<rect height="15" rx="1.5" width="18" x="18" y="4"></rect>
<line x1="22" x2="22" y1="14" y2="12"></line>
<line x1="26" x2="26" y1="14" y2="9"></line>
<line x1="30" x2="30" y1="14" y2="7"></line>
<path d="M21 11 L25 8 L29 10 L33 6"></path>
<circle cx="9" cy="7" r="3"></circle>
<path d="M4 17 c0-3 2.5-5 5.5-5 s5.5 2 5.5 5"></path>
<path d="M12 12 l6-3"></path>
<g transform="translate(4, 23)">
<circle cx="4" cy="4" r="2.5"></circle>
<path d="M0.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
<circle cx="14" cy="4" r="2.5"></circle>
<path d="M10.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
<circle cx="24" cy="4" r="2.5"></circle>
<path d="M20.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
</g>
</svg>
</div>
<div className="text-[clamp(2rem,2.5vw,2.4rem)] leading-[1.1] font-bold text-[#111e38]"><Ticker value="1,626" /></div>
<p className="text-sm md:text-base font-normal text-[#334155]">
            Colleges
          </p>
</div>
<div className="flex flex-col items-start space-y-2">
<div aria-hidden="true" className="w-9 h-9 text-[#d62828]">
<svg className="w-full h-full fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
<rect height="15" rx="1.5" width="18" x="18" y="4"></rect>
<line x1="22" x2="22" y1="14" y2="12"></line>
<line x1="26" x2="26" y1="14" y2="9"></line>
<line x1="30" x2="30" y1="14" y2="7"></line>
<path d="M21 11 L25 8 L29 10 L33 6"></path>
<circle cx="9" cy="7" r="3"></circle>
<path d="M4 17 c0-3 2.5-5 5.5-5 s5.5 2 5.5 5"></path>
<path d="M12 12 l6-3"></path>
<g transform="translate(4, 23)">
<circle cx="4" cy="4" r="2.5"></circle>
<path d="M0.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
<circle cx="14" cy="4" r="2.5"></circle>
<path d="M10.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
<circle cx="24" cy="4" r="2.5"></circle>
<path d="M20.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
</g>
</svg>
</div>
<div className="text-[clamp(2rem,2.5vw,2.4rem)] leading-[1.1] font-bold text-[#111e38]"><Ticker value="116" /></div>
<p className="text-sm md:text-base font-normal text-[#334155]">
            Livelihood Centres
          </p>
</div>
<div className="flex flex-col items-start space-y-2">
<div aria-hidden="true" className="w-9 h-9 text-[#d62828]">
<svg className="w-full h-full fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
<rect height="15" rx="1.5" width="18" x="18" y="4"></rect>
<line x1="22" x2="22" y1="14" y2="12"></line>
<line x1="26" x2="26" y1="14" y2="9"></line>
<line x1="30" x2="30" y1="14" y2="7"></line>
<path d="M21 11 L25 8 L29 10 L33 6"></path>
<circle cx="9" cy="7" r="3"></circle>
<path d="M4 17 c0-3 2.5-5 5.5-5 s5.5 2 5.5 5"></path>
<path d="M12 12 l6-3"></path>
<g transform="translate(4, 23)">
<circle cx="4" cy="4" r="2.5"></circle>
<path d="M0.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
<circle cx="14" cy="4" r="2.5"></circle>
<path d="M10.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
<circle cx="24" cy="4" r="2.5"></circle>
<path d="M20.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
</g>
</svg>
</div>
<div className="text-[clamp(2rem,2.5vw,2.4rem)] leading-[1.1] font-bold text-[#111e38]"><Ticker value="60%" /></div>
<p className="text-sm md:text-base font-normal text-[#334155] leading-snug">
            Young Women Participants in Overall Livelihood Programme
          </p>
</div>
<div className="flex flex-col items-start space-y-2">
<div aria-hidden="true" className="w-9 h-9 text-[#d62828]">
<svg className="w-full h-full fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
<rect height="15" rx="1.5" width="18" x="18" y="4"></rect>
<line x1="22" x2="22" y1="14" y2="12"></line>
<line x1="26" x2="26" y1="14" y2="9"></line>
<line x1="30" x2="30" y1="14" y2="7"></line>
<path d="M21 11 L25 8 L29 10 L33 6"></path>
<circle cx="9" cy="7" r="3"></circle>
<path d="M4 17 c0-3 2.5-5 5.5-5 s5.5 2 5.5 5"></path>
<path d="M12 12 l6-3"></path>
<g transform="translate(4, 23)">
<circle cx="4" cy="4" r="2.5"></circle>
<path d="M0.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
<circle cx="14" cy="4" r="2.5"></circle>
<path d="M10.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
<circle cx="24" cy="4" r="2.5"></circle>
<path d="M20.5 12 c0-2.2 1.6-3.8 3.5-3.8 s3.5 1.6 3.5 3.8"></path>
</g>
</svg>
</div>
<div className="text-[clamp(2rem,2.5vw,2.4rem)] leading-[1.1] font-bold text-[#111e38]"><Ticker value="69%" /></div>
<p className="text-sm md:text-base font-normal text-[#334155] leading-snug">
            Young Women Participants in Skill Impact Bond Programme
          </p>
</div>
</div>
</div>
<footer className="mt-5 pt-2 border-t border-slate-100" data-purpose="footnote">
<p className="text-[12px] md:text-xs text-[#64748b] tracking-normal">
        Data as of March 2026. All data sourced from Magic Bus internal system generated data.
      </p>
</footer>
    </div>
  );
}

function SlideLivelihoodImpact() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", color: "#111827" }}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
<section className="lg:col-span-6 flex flex-col justify-start" data-purpose="hero-empowered-statistic">
<span className="text-xl md:text-2xl font-black text-[#111827] uppercase tracking-wider mb-0 leading-tight">
          OVER
        </span>
<div className="tracking-[-0.01em] text-5xl sm:text-6xl md:text-[76px] font-black text-[#f2b500] leading-none tracking-tight my-1"><Ticker value="3.5 LAKHS" /></div>
<h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] uppercase tracking-tight mt-1 mb-3 leading-tight">
          YOUTH EMPOWERED.
        </h2>
<p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal max-w-xl">
          The Livelihood Programme equips youth aged 18–25 with transferable life and employability skills. Also, the Rural Livelihood Programme strengthens entrepreneurship among peri-urban and rural communities by strengthening life skills, leadership, and entrepreneurial skills.
        </p>
</section>
<section className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6" data-purpose="metrics-matrix">
<div className="flex flex-col items-start" data-purpose="metric-item">
<div aria-hidden="true" className="w-10 h-10 mb-3 text-[#ce3427]">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
<rect height="13" rx="1.5" strokeWidth="2.2" width="16" x="18" y="3"></rect>
<line strokeWidth="2" x1="22" x2="25" y1="12" y2="9"></line>
<line strokeWidth="2" x1="25" x2="28" y1="9" y2="10"></line>
<line strokeWidth="2" x1="28" x2="31" y1="10" y2="6"></line>
<circle cx="9" cy="6" r="2.5" strokeWidth="2.2"></circle>
<path d="M4 15.5c0-2.8 2.2-5 5-5h1c1.5 0 2.8.6 3.8 1.7" strokeWidth="2"></path>
<line strokeWidth="2" x1="12" x2="16" y1="11" y2="7.5"></line>
<circle cx="8" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M4 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
<circle cx="20" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M16 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
<circle cx="32" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M28 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
</svg>
</div>
<p className="text-3xl md:text-[34px] font-black text-[#111827] leading-tight tracking-tight"><Ticker value="84%" /></p>
<p className="text-sm md:text-[15px] font-medium text-gray-800 leading-snug mt-2">
            youth successfully placed<br className="hidden sm:inline"/> in sustainable jobs
          </p>
</div>
<div className="flex flex-col items-start" data-purpose="metric-item">
<div aria-hidden="true" className="w-10 h-10 mb-3 text-[#ce3427]">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
<rect height="13" rx="1.5" strokeWidth="2.2" width="16" x="18" y="3"></rect>
<line strokeWidth="2" x1="22" x2="25" y1="12" y2="9"></line>
<line strokeWidth="2" x1="25" x2="28" y1="9" y2="10"></line>
<line strokeWidth="2" x1="28" x2="31" y1="10" y2="6"></line>
<circle cx="9" cy="6" r="2.5" strokeWidth="2.2"></circle>
<path d="M4 15.5c0-2.8 2.2-5 5-5h1c1.5 0 2.8.6 3.8 1.7" strokeWidth="2"></path>
<line strokeWidth="2" x1="12" x2="16" y1="11" y2="7.5"></line>
<circle cx="8" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M4 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
<circle cx="20" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M16 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
<circle cx="32" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M28 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
</svg>
</div>
<p className="text-3xl md:text-[34px] font-black text-[#111827] leading-tight tracking-tight"><Ticker value="₹15,920/Mo." /></p>
<p className="text-sm md:text-[15px] font-medium text-gray-800 leading-snug mt-2">
            Average salary for<br className="hidden sm:inline"/> placed youth
          </p>
</div>
<div className="flex flex-col items-start" data-purpose="metric-item">
<div aria-hidden="true" className="w-10 h-10 mb-3 text-[#ce3427]">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
<rect height="13" rx="1.5" strokeWidth="2.2" width="16" x="18" y="3"></rect>
<line strokeWidth="2" x1="22" x2="25" y1="12" y2="9"></line>
<line strokeWidth="2" x1="25" x2="28" y1="9" y2="10"></line>
<line strokeWidth="2" x1="28" x2="31" y1="10" y2="6"></line>
<circle cx="9" cy="6" r="2.5" strokeWidth="2.2"></circle>
<path d="M4 15.5c0-2.8 2.2-5 5-5h1c1.5 0 2.8.6 3.8 1.7" strokeWidth="2"></path>
<line strokeWidth="2" x1="12" x2="16" y1="11" y2="7.5"></line>
<circle cx="8" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M4 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
<circle cx="20" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M16 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
<circle cx="32" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M28 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
</svg>
</div>
<p className="text-3xl md:text-[34px] font-black text-[#111827] leading-tight tracking-tight"><Ticker value="65%" /></p>
<p className="text-sm md:text-[15px] font-medium text-gray-800 leading-snug mt-2">
            continued to stay employed for three months after joining
          </p>
</div>
<div className="flex flex-col items-start" data-purpose="metric-item">
<div aria-hidden="true" className="w-10 h-10 mb-3 text-[#ce3427]">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
<rect height="13" rx="1.5" strokeWidth="2.2" width="16" x="18" y="3"></rect>
<line strokeWidth="2" x1="22" x2="25" y1="12" y2="9"></line>
<line strokeWidth="2" x1="25" x2="28" y1="9" y2="10"></line>
<line strokeWidth="2" x1="28" x2="31" y1="10" y2="6"></line>
<circle cx="9" cy="6" r="2.5" strokeWidth="2.2"></circle>
<path d="M4 15.5c0-2.8 2.2-5 5-5h1c1.5 0 2.8.6 3.8 1.7" strokeWidth="2"></path>
<line strokeWidth="2" x1="12" x2="16" y1="11" y2="7.5"></line>
<circle cx="8" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M4 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
<circle cx="20" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M16 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
<circle cx="32" cy="24" r="2.2" strokeWidth="2"></circle>
<path d="M28 33c0-2.2 1.8-4 4-4s4 1.8 4 4" strokeWidth="2"></path>
</svg>
</div>
<p className="text-3xl md:text-[34px] font-black text-[#111827] leading-tight tracking-tight"><Ticker value="2,450+" /></p>
<p className="text-sm md:text-[15px] font-medium text-gray-800 leading-snug mt-2">
            entrepreneurs created under Entrepreneurship Development Programme
          </p>
</div>
</section>
</div>
<footer className="mt-14 pt-6 border-t border-gray-100" data-purpose="data-source-footnote">
<p className="text-xs text-gray-500 font-normal">
        Data as of March 2026. All data sourced from Magic Bus internal system generated data.
      </p>
</footer>
    </div>
  );
}

export const OUTREACH_SLIDES = [
  { key: "adolescents-outreach-2", label: "Adolescents Outreach (2A)", photo: "/outreach/adolescents-2.jpg", alt: "Smiling school children and mentors cheering together", Content: SlideAdolescentsOutreach2 },
  { key: "adolescents-impact-2", label: "Adolescents Impact (2B)", photo: "/outreach/adolescents-2.jpg", alt: "Smiling school children and mentors cheering together", Content: SlideAdolescentsImpact2 },
  { key: "livelihood-outreach", label: "Livelihood Outreach", photo: "/outreach/livelihood.jpg", alt: "Group of young people from the Livelihood Programme giving thumbs up", Content: SlideLivelihoodOutreach },
  { key: "livelihood-impact", label: "Livelihood Impact", photo: "/outreach/livelihood.jpg", alt: "Group of young people from the Livelihood Programme giving thumbs up", Content: SlideLivelihoodImpact },
];
