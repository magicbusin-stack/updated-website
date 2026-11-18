import React from "react";

/* "Our Outreach & Impact": the Adolescent and Livelihood stats pages, built from the six HTML files supplied by the team
   (1A/1B, 2A/2B and the two Livelihood pages) and the matching photos (cropped so no text is baked into the pictures).
   The text, numbers, colours and icons are copied from those HTML files as written; only the Tailwind
   custom colours were turned into fixed hex values. Photos are in /public/outreach/.
   How the slides should be shown (stacked, switched, auto-playing ...) is still to be decided: for now they are stacked. */

export const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&family=Outfit:wght@700;800;900&display=swap";

function SlideAdolescentsOutreach1() {
  return (
    <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif", color: "#1a202c" }}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
<div className="lg:col-span-5 flex flex-col justify-start" data-purpose="highlight-narrative">
<span className="font-['Montserrat',system-ui,sans-serif] text-base sm:text-lg font-bold text-gray-950 uppercase tracking-wide">
          OVER
        </span>
<h3 className="font-['Montserrat',system-ui,sans-serif] text-5xl sm:text-6xl md:text-7xl font-black text-[#f7b71d] tracking-tight leading-none my-1">
          40 LAKHS
        </h3>
<h4 className="font-['Montserrat',system-ui,sans-serif] text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#0b1325] tracking-tight uppercase mb-4">
          ADOLESCENTS EMPOWERED.
        </h4>
<p className="text-gray-800 text-[15px] sm:text-base leading-relaxed mb-6 font-medium">
          Magic Bus India Foundation follows a dual Direct and Indirect implementation model to promote adolescent development across India.
        </p>
<p className="text-[13px] sm:text-[13px] leading-relaxed text-gray-500 font-normal">
          *This is the cumulative number of adolescents reached through Government Partnership programmes with Magic Bus across 14 states (Andhra Pradesh, Maharashtra, Chhattisgarh, Tamil Nadu, Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram). ^These four states (Himachal Pradesh, Haryana, Uttar Pradesh, and Uttarakhand) are also part of the NITI Aayog partnership. ~These 10 states (Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram) had active partnerships with Magic Bus in FY 2025–26.
        </p>
</div>
<div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-y-10 sm:gap-y-12 gap-x-6 sm:gap-x-8" data-purpose="key-metrics-grid">
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="w-12 h-12 mb-3 text-red-500">
<svg className="w-full h-full stroke-current" fill="none" viewBox="0 0 54 54">
<rect fill="none" height="20" rx="2" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" width="28" x="22" y="4"></rect>
<path d="M28 18V15" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M36 18V12" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M44 18V9" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="12" cy="9" fill="none" r="4.5" stroke="#dc2626" strokeWidth="2.2"></circle>
<path d="M5 25C5 20.5 8.5 17 13 17C15.5 17 17.5 18 19 19.8L25 15.5" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
<path d="M5 25H21" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="11" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M5 45.5C5 42 7.8 39.5 11 39.5C14.2 39.5 17 42 17 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="27" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M21 45.5C21 42 23.8 39.5 27 39.5C30.2 39.5 33 42 33 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="43" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M37 45.5C37 42 39.8 39.5 43 39.5C46.2 39.5 49 42 49 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-['Montserrat',system-ui,sans-serif] text-[#0f172a] text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-none mb-1">
            37,389
          </span>
<span className="text-sm sm:text-[15px] font-normal text-gray-700 leading-snug">
            Teachers Trained
          </span>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="w-12 h-12 mb-3 text-red-500">
<svg className="w-full h-full stroke-current" fill="none" viewBox="0 0 54 54">
<rect fill="none" height="20" rx="2" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" width="28" x="22" y="4"></rect>
<path d="M28 18V15" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M36 18V12" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M44 18V9" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="12" cy="9" fill="none" r="4.5" stroke="#dc2626" strokeWidth="2.2"></circle>
<path d="M5 25C5 20.5 8.5 17 13 17C15.5 17 17.5 18 19 19.8L25 15.5" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
<path d="M5 25H21" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="11" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M5 45.5C5 42 7.8 39.5 11 39.5C14.2 39.5 17 42 17 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="27" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M21 45.5C21 42 23.8 39.5 27 39.5C30.2 39.5 33 42 33 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="43" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M37 45.5C37 42 39.8 39.5 43 39.5C46.2 39.5 49 42 49 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-['Montserrat',system-ui,sans-serif] text-[#0f172a] text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-none mb-1">
            30,069
          </span>
<span className="text-sm sm:text-[15px] font-normal text-gray-700 leading-snug">
            Schools
          </span>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="w-12 h-12 mb-3 text-red-500">
<svg className="w-full h-full stroke-current" fill="none" viewBox="0 0 54 54">
<rect fill="none" height="20" rx="2" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" width="28" x="22" y="4"></rect>
<path d="M28 18V15" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M36 18V12" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M44 18V9" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="12" cy="9" fill="none" r="4.5" stroke="#dc2626" strokeWidth="2.2"></circle>
<path d="M5 25C5 20.5 8.5 17 13 17C15.5 17 17.5 18 19 19.8L25 15.5" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
<path d="M5 25H21" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="11" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M5 45.5C5 42 7.8 39.5 11 39.5C14.2 39.5 17 42 17 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="27" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M21 45.5C21 42 23.8 39.5 27 39.5C30.2 39.5 33 42 33 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="43" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M37 45.5C37 42 39.8 39.5 43 39.5C46.2 39.5 49 42 49 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-['Montserrat',system-ui,sans-serif] text-[#0f172a] text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-none mb-1">
            52%
          </span>
<span className="text-sm sm:text-[15px] font-normal text-gray-700 leading-snug">
            Girl Participants
          </span>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="w-12 h-12 mb-3 text-red-500">
<svg className="w-full h-full stroke-current" fill="none" viewBox="0 0 54 54">
<rect fill="none" height="20" rx="2" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" width="28" x="22" y="4"></rect>
<path d="M28 18V15" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M36 18V12" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M44 18V9" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="12" cy="9" fill="none" r="4.5" stroke="#dc2626" strokeWidth="2.2"></circle>
<path d="M5 25C5 20.5 8.5 17 13 17C15.5 17 17.5 18 19 19.8L25 15.5" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
<path d="M5 25H21" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="11" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M5 45.5C5 42 7.8 39.5 11 39.5C14.2 39.5 17 42 17 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="27" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M21 45.5C21 42 23.8 39.5 27 39.5C30.2 39.5 33 42 33 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="43" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M37 45.5C37 42 39.8 39.5 43 39.5C46.2 39.5 49 42 49 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-['Montserrat',system-ui,sans-serif] text-[#0f172a] text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-none mb-1">
            11
          </span>
<span className="text-sm sm:text-[15px] font-normal text-gray-700 leading-snug">
            Government Partnerships
          </span>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="w-12 h-12 mb-3 text-red-500">
<svg className="w-full h-full stroke-current" fill="none" viewBox="0 0 54 54">
<rect fill="none" height="20" rx="2" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" width="28" x="22" y="4"></rect>
<path d="M28 18V15" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M36 18V12" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M44 18V9" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="12" cy="9" fill="none" r="4.5" stroke="#dc2626" strokeWidth="2.2"></circle>
<path d="M5 25C5 20.5 8.5 17 13 17C15.5 17 17.5 18 19 19.8L25 15.5" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
<path d="M5 25H21" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="11" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M5 45.5C5 42 7.8 39.5 11 39.5C14.2 39.5 17 42 17 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="27" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M21 45.5C21 42 23.8 39.5 27 39.5C30.2 39.5 33 42 33 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="43" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M37 45.5C37 42 39.8 39.5 43 39.5C46.2 39.5 49 42 49 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-['Montserrat',system-ui,sans-serif] text-[#0f172a] text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-none mb-1">
            131
          </span>
<span className="text-sm sm:text-[15px] font-normal text-gray-700 leading-snug">
            Aspirational Blocks
          </span>
</div>
<div className="flex flex-col items-start" data-purpose="stat-card">
<div aria-hidden="true" className="w-12 h-12 mb-3 text-red-500">
<svg className="w-full h-full stroke-current" fill="none" viewBox="0 0 54 54">
<rect fill="none" height="20" rx="2" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" width="28" x="22" y="4"></rect>
<path d="M28 18V15" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M36 18V12" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<path d="M44 18V9" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="12" cy="9" fill="none" r="4.5" stroke="#dc2626" strokeWidth="2.2"></circle>
<path d="M5 25C5 20.5 8.5 17 13 17C15.5 17 17.5 18 19 19.8L25 15.5" stroke="#dc2626" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
<path d="M5 25H21" stroke="#dc2626" strokeLinecap="round" strokeWidth="2.2"></path>
<circle cx="11" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M5 45.5C5 42 7.8 39.5 11 39.5C14.2 39.5 17 42 17 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="27" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M21 45.5C21 42 23.8 39.5 27 39.5C30.2 39.5 33 42 33 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="43" cy="35" fill="none" r="3.2" stroke="#0f172a" strokeWidth="2"></circle>
<path d="M37 45.5C37 42 39.8 39.5 43 39.5C46.2 39.5 49 42 49 45.5" stroke="#0f172a" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-['Montserrat',system-ui,sans-serif] text-[#0f172a] text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-none mb-1">
            343
          </span>
<span className="text-sm sm:text-[15px] font-normal text-gray-700 leading-snug">
            Community Learning Centres
          </span>
</div>
</div>
</div>
<footer className="mt-12 pt-6 border-t border-gray-100" data-purpose="source-disclaimer">
<p className="text-[13px] text-gray-500 font-normal">
        Data as of March 2026. All data sourced from Magic Bus internal system generated data.
      </p>
</footer>
    </div>
  );
}

function SlideAdolescentsImpact1() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#1e293b" }}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
<div className="lg:col-span-5 flex flex-col justify-between" data-purpose="hero-metric-display">
<div>
<span className="block text-xl sm:text-2xl font-black tracking-wider text-[#111827] uppercase mb-1">
            OVER
          </span>
<h3 className="text-6xl sm:text-7xl xl:text-[88px] font-black leading-none tracking-tight text-[#F5B000] uppercase">
            40 LAKHS
          </h3>
<h4 className="text-xl sm:text-2xl font-black text-[#111827] uppercase tracking-tight mt-2 mb-4">
            ADOLESCENTS EMPOWERED.
          </h4>
<p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-md font-medium">
            Magic Bus India Foundation follows a dual Direct and Indirect implementation model to promote adolescent development across India.
          </p>
</div>
<div className="mt-8 pt-4" data-purpose="regional-footnote">
<p className="text-[13px] sm:text-xs leading-relaxed text-[#64748b] text-justify">
            *This is the cumulative number of adolescents reached through Government Partnership programmes with Magic Bus across 14 states (Andhra Pradesh, Maharashtra, Chhattisgarh, Tamil Nadu, Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram). ^These four states (Himachal Pradesh, Haryana, Uttar Pradesh, and Uttarakhand) are also part of the NITI Aayog partnership. ~These 10 states (Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram) had active partnerships with Magic Bus in FY 2025–26.
          </p>
</div>
</div>
<div className="lg:col-span-7" data-purpose="metrics-comparison-grid">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-12">
<article className="flex flex-col space-y-3" data-purpose="impact-stat-item">
<div aria-hidden="true" className="h-[12px] flex w-full rounded-[1px] overflow-hidden">
<div className="bg-[#F5B000]" style={{ width: "27%" }}></div>
<div className="bg-[#FFAEAC]" style={{ width: "73%" }}></div>
</div>
<p className="text-base sm:text-lg font-normal text-[#111827] leading-snug">
<strong className="font-bold text-black">27%</strong> increase in attendance and school regularity
            </p>
</article>
<article className="flex flex-col space-y-3" data-purpose="impact-stat-item">
<div aria-hidden="true" className="h-[12px] flex w-full rounded-[1px] overflow-hidden">
<div className="bg-[#F5B000]" style={{ width: "34%" }}></div>
<div className="bg-[#FFAEAC]" style={{ width: "66%" }}></div>
</div>
<p className="text-base sm:text-lg font-normal text-[#111827] leading-snug">
<strong className="font-bold text-black">34%</strong> adolescents aspire to pursue graduation and higher studies
            </p>
</article>
<article className="flex flex-col space-y-3" data-purpose="impact-stat-item">
<div aria-hidden="true" className="h-[12px] flex w-full rounded-[1px] overflow-hidden">
<div className="bg-[#F5B000]" style={{ width: "46%" }}></div>
<div className="bg-[#FFAEAC]" style={{ width: "54%" }}></div>
</div>
<p className="text-base sm:text-lg font-normal text-[#111827] leading-snug">
<strong className="font-bold text-black">46%</strong> improvement in perceived ability to withstand and recover from difficulties
            </p>
</article>
<article className="flex flex-col space-y-3" data-purpose="impact-stat-item">
<div aria-hidden="true" className="h-[12px] flex w-full rounded-[1px] overflow-hidden">
<div className="bg-[#F5B000]" style={{ width: "20%" }}></div>
<div className="bg-[#FFAEAC]" style={{ width: "80%" }}></div>
</div>
<p className="text-base sm:text-lg font-normal text-[#111827] leading-snug">
<strong className="font-bold text-black">20%</strong> increase in perceived ability to act as required to achieve goals
            </p>
</article>
</div>
</div>
</div>
<footer className="mt-12 sm:mt-16 pt-4 border-t border-gray-100 text-left">
<p className="text-xs sm:text-sm text-[#64748b] tracking-wide">
        Data as of March 2026. All data sourced from Magic Bus internal system generated data.
      </p>
</footer>
    </div>
  );
}

function SlideAdolescentsOutreach2() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#111827" }}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
<div className="lg:col-span-5 flex flex-col justify-between" data-purpose="primary-metric-summary">
<div>
<span className="block text-2xl sm:text-3xl font-black text-gray-950 uppercase tracking-tight leading-none mb-1">
            OVER
          </span>
<div className="font-['Outfit','Inter',sans-serif] text-6xl sm:text-7xl xl:text-[84px] font-extrabold text-[#F8B200] tracking-tight leading-[0.9] my-1">
            40 LAKHS
          </div>
<h3 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight leading-tight mt-2 mb-4">
            ADOLESCENTS EMPOWERED.
          </h3>
<p className="text-base text-gray-800 leading-relaxed font-normal max-w-xl">
            Magic Bus India Foundation follows a dual Direct and Indirect implementation model to promote adolescent development across India.
          </p>
</div>
<div className="mt-8 pt-4 text-[13px] leading-[1.6] text-gray-500 font-normal space-y-2 border-t border-gray-100 lg:border-t-0">
<p>
            *This is the cumulative number of adolescents reached through Government Partnership programmes with Magic Bus across 14 states (Andhra Pradesh, Maharashtra, Chhattisgarh, Tamil Nadu, Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram). ^These four states (Himachal Pradesh, Haryana, Uttar Pradesh, and Uttarakhand) are also part of the NITI Aayog partnership. ~These 10 states (Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram) had active partnerships with Magic Bus in FY 2025–26.
          </p>
</div>
</div>
<div className="lg:col-span-7" data-purpose="metrics-grid">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 sm:gap-y-12 gap-x-6 sm:gap-x-8">
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
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none">
              37,389
            </div>
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
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none">
              30,069
            </div>
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
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none">
              52%
            </div>
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
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none">
              11
            </div>
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
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none">
              131
            </div>
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
<div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-none">
              343
            </div>
<div className="mt-2 text-sm sm:text-base font-normal text-gray-700 leading-snug">
              Community<br className="hidden sm:inline"/> Learning Centres
            </div>
</div>
</div>
</div>
</div>
<footer className="mt-8 pt-4">
<p className="text-[13px] text-gray-500 font-medium">
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
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
<div className="lg:col-span-6 flex flex-col justify-start" data-purpose="primary-metric-summary">
<span className="text-xs sm:text-sm md:text-base font-extrabold tracking-widest text-[#1e293b] uppercase mb-1">
            OVER
          </span>
<h1 className="text-[clamp(3rem,5.5vw,4.75rem)] leading-[0.95] tracking-[-0.01em] font-extrabold text-[#f5b800] mb-2 uppercase">
            40 LAKHS
          </h1>
<h3 className="text-base sm:text-lg md:text-xl font-black text-[#1e293b] tracking-tight uppercase mb-4">
            ADOLESCENTS EMPOWERED.
          </h3>
<p className="text-sm sm:text-base text-[#1e293b] leading-relaxed mb-8 max-w-xl font-medium">
            Magic Bus India Foundation follows a dual Direct and Indirect implementation model to promote adolescent development across India.
          </p>
<div className="border-t border-slate-100 pt-5 text-[13px] sm:text-xs text-[#64748b] leading-normal space-y-2 max-w-xl text-justify" data-purpose="footnotes">
<p>
              *This is the cumulative number of adolescents reached through Government Partnership programmes with Magic Bus across 14 states (Andhra Pradesh, Maharashtra, Chhattisgarh, Tamil Nadu, Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram). ^These four states (Himachal Pradesh, Haryana, Uttar Pradesh, and Uttarakhand) are also part of the NITI Aayog partnership. ~These 10 states (Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram) had active partnerships with Magic Bus in FY 2025–26.
            </p>
<p>
              Data as of March 2026. All data sourced from Magic Bus internal system generated data.
            </p>
</div>
</div>
<div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-14 pt-2" data-purpose="detailed-metrics-grid">
<div className="flex flex-col space-y-3" data-purpose="metric-item">
<div aria-label="27 percent representation" className="h-4 w-full flex rounded-none overflow-hidden bg-[#fca5a5]">
<div className="h-full bg-[#f5b800]" style={{ width: "27%" }}></div>
<div className="h-full bg-[#fca5a5]" style={{ width: "73%" }}></div>
</div>
<p className="text-sm sm:text-base text-[#1e293b] leading-snug">
<span className="font-extrabold text-[#1e293b]">27%</span> increase in attendance and school regularity
            </p>
</div>
<div className="flex flex-col space-y-3" data-purpose="metric-item">
<div aria-label="34 percent representation" className="h-4 w-full flex rounded-none overflow-hidden bg-[#fca5a5]">
<div className="h-full bg-[#f5b800]" style={{ width: "34%" }}></div>
<div className="h-full bg-[#fca5a5]" style={{ width: "66%" }}></div>
</div>
<p className="text-sm sm:text-base text-[#1e293b] leading-snug">
<span className="font-extrabold text-[#1e293b]">34%</span> adolescents aspire to pursue graduation and higher studies
            </p>
</div>
<div className="flex flex-col space-y-3" data-purpose="metric-item">
<div aria-label="46 percent representation" className="h-4 w-full flex rounded-none overflow-hidden bg-[#fca5a5]">
<div className="h-full bg-[#f5b800]" style={{ width: "46%" }}></div>
<div className="h-full bg-[#fca5a5]" style={{ width: "54%" }}></div>
</div>
<p className="text-sm sm:text-base text-[#1e293b] leading-snug">
<span className="font-extrabold text-[#1e293b]">46%</span> improvement in perceived ability to withstand and recover from difficulties
            </p>
</div>
<div className="flex flex-col space-y-3" data-purpose="metric-item">
<div aria-label="20 percent representation" className="h-4 w-full flex rounded-none overflow-hidden bg-[#fca5a5]">
<div className="h-full bg-[#f5b800]" style={{ width: "20%" }}></div>
<div className="h-full bg-[#fca5a5]" style={{ width: "80%" }}></div>
</div>
<p className="text-sm sm:text-base text-[#1e293b] leading-snug">
<span className="font-extrabold text-[#1e293b]">20%</span> increase in perceived ability to act as required to achieve goals
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
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
<article className="lg:col-span-5 flex flex-col justify-start" data-purpose="featured-statistic">
<span className="text-base sm:text-lg md:text-[19px] font-extrabold tracking-wider text-[#111e38] uppercase mb-1">
          OVER
        </span>
<div className="text-[clamp(3.75rem,5.5vw,5.25rem)] leading-none tracking-[-0.02em] font-black text-[#f5b800] mb-2 select-none">
          3.5 LAKHS
        </div>
<h2 className="text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight text-[#111e38] uppercase mb-4">
          YOUTH EMPOWERED.
        </h2>
<p className="text-sm md:text-[15px] leading-relaxed text-[#334155] font-normal pr-0 lg:pr-2">
          The Livelihood Programme equips youth aged 18–25 with transferable life and employability skills. Also, the Rural Livelihood Programme strengthens entrepreneurship among peri-urban and rural communities by strengthening life skills, leadership, and entrepreneurial skills.
        </p>
</article>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9 pt-2" data-purpose="kpi-grid">
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
<div className="text-[clamp(2rem,2.5vw,2.4rem)] leading-[1.1] font-bold text-[#111e38]">
            1,626
          </div>
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
<div className="text-[clamp(2rem,2.5vw,2.4rem)] leading-[1.1] font-bold text-[#111e38]">
            116
          </div>
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
<div className="text-[clamp(2rem,2.5vw,2.4rem)] leading-[1.1] font-bold text-[#111e38]">
            60%
          </div>
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
<div className="text-[clamp(2rem,2.5vw,2.4rem)] leading-[1.1] font-bold text-[#111e38]">
            69%
          </div>
<p className="text-sm md:text-base font-normal text-[#334155] leading-snug">
            Young Women Participants in Skill Impact Bond Programme
          </p>
</div>
</div>
</div>
<footer className="mt-16 pt-4 border-t border-slate-100" data-purpose="footnote">
<p className="text-[13px] md:text-xs text-[#64748b] tracking-normal">
        Data as of March 2026. All data sourced from Magic Bus internal system generated data.
      </p>
</footer>
    </div>
  );
}

function SlideLivelihoodImpact() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", color: "#111827" }}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
<section className="lg:col-span-6 flex flex-col justify-start" data-purpose="hero-empowered-statistic">
<span className="text-xl md:text-2xl font-black text-[#111827] uppercase tracking-wider mb-0 leading-tight">
          OVER
        </span>
<div className="tracking-[-0.01em] text-5xl sm:text-6xl md:text-[76px] font-black text-[#f2b500] leading-none tracking-tight my-1">
          3.5 LAKHS
        </div>
<h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] uppercase tracking-tight mt-1 mb-6 leading-tight">
          YOUTH EMPOWERED.
        </h2>
<p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal max-w-xl">
          The Livelihood Programme equips youth aged 18–25 with transferable life and employability skills. Also, the Rural Livelihood Programme strengthens entrepreneurship among peri-urban and rural communities by strengthening life skills, leadership, and entrepreneurial skills.
        </p>
</section>
<section className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10" data-purpose="metrics-matrix">
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
<p className="text-3xl md:text-[34px] font-black text-[#111827] leading-tight tracking-tight">
            84%
          </p>
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
<p className="text-3xl md:text-[34px] font-black text-[#111827] leading-tight tracking-tight">
            ₹15,920/Mo.
          </p>
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
<p className="text-3xl md:text-[34px] font-black text-[#111827] leading-tight tracking-tight">
            65%
          </p>
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
<p className="text-3xl md:text-[34px] font-black text-[#111827] leading-tight tracking-tight">
            2,450+
          </p>
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
  { key: "adolescents-outreach-1", label: "Adolescents Outreach (1A)", photo: "/outreach/adolescents-1.jpg", alt: "Adolescents playing a cone game on an open field", Content: SlideAdolescentsOutreach1 },
  { key: "adolescents-impact-1", label: "Adolescents Impact (1B)", photo: "/outreach/adolescents-1.jpg", alt: "Adolescents playing a cone game on an open field", Content: SlideAdolescentsImpact1 },
  { key: "adolescents-outreach-2", label: "Adolescents Outreach (2A)", photo: "/outreach/adolescents-2.jpg", alt: "Smiling school children and mentors cheering together", Content: SlideAdolescentsOutreach2 },
  { key: "adolescents-impact-2", label: "Adolescents Impact (2B)", photo: "/outreach/adolescents-2.jpg", alt: "Smiling school children and mentors cheering together", Content: SlideAdolescentsImpact2 },
  { key: "livelihood-outreach", label: "Livelihood Outreach", photo: "/outreach/livelihood.jpg", alt: "Group of young people from the Livelihood Programme giving thumbs up", Content: SlideLivelihoodOutreach },
  { key: "livelihood-impact", label: "Livelihood Impact", photo: "/outreach/livelihood.jpg", alt: "Group of young people from the Livelihood Programme giving thumbs up", Content: SlideLivelihoodImpact },
];
