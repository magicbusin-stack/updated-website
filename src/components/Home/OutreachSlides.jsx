import React from "react";
import Ticker from "./OutreachTicker";

/* "Our Outreach & Impact": the stats pages built from the team's HTML files (Adolescents Outreach / Impact, Livelihood
   Outreach / Impact). The wording, numbers, footnotes, colours and icons come from those files. All four slides now share
   ONE layout and ONE set of sizes and fonts (taken from the Livelihood Outreach slide), so they look the same.
   Photos are in /public/outreach/. */

export const DATA_LINE = "Data as of March 2026. All data sourced from Magic Bus internal system generated data.";
export const FONTS_HREF = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";

const Icon3 = () => (
<svg className="stroke-current fill-none stroke-[1.8] h-full w-full" viewBox="0 0 48 48">
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
);

const Icon5 = () => (
<svg className=" h-full w-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
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
);

const Icon6 = () => (
<svg className="fill-none stroke-current h-full w-full" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 40 40">
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
);

function Slide({ t, hero, para, footnote, stats, bars, Icon }) {
  const cols = stats && stats.length > 4 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", color: t.body }}>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left: the big headline number (stays still) */}
        <div className="flex flex-col lg:col-span-5">
          <span className="text-lg font-extrabold uppercase tracking-wider md:text-[19px]" style={{ color: t.ink }}>
            OVER
          </span>
          <div className="mb-2 select-none text-[clamp(3.75rem,5.5vw,5.25rem)] font-black leading-none tracking-[-0.02em]" style={{ color: t.yellow }}>
            {hero.number}
          </div>
          <h3 className="mb-4 text-xl font-extrabold uppercase tracking-tight sm:text-2xl md:text-[26px]" style={{ color: t.ink }}>
            {hero.line}
          </h3>
          <p className="text-[16px] leading-relaxed md:text-[17px]">{para}</p>
          {footnote && (
            <p className="mt-5 text-[12px] leading-relaxed" style={{ color: t.foot }}>
              {footnote}
            </p>
          )}
        </div>

        {/* Right: the numbers (these count up) */}
        <div className={`grid grid-cols-1 gap-x-10 gap-y-9 pt-2 lg:col-span-7 ${cols}`}>
          {stats &&
            stats.map(([value, label]) => (
              <div key={label} className="flex flex-col items-start space-y-2">
                <div aria-hidden="true" className="h-10 w-10" style={{ color: t.icon }}>
                  <Icon />
                </div>
                <div className="text-[clamp(2rem,2.5vw,2.4rem)] font-bold leading-[1.1]" style={{ color: t.ink }}>
                  <Ticker value={value} />
                </div>
                <p className="text-base leading-snug">{label}</p>
              </div>
            ))}
          {bars &&
            bars.map(([pct, text]) => (
              <div key={text} className="flex flex-col space-y-3">
                <div aria-hidden="true" className="flex h-4 w-full overflow-hidden" style={{ backgroundColor: t.bar }}>
                  <div className="h-full" style={{ width: `${pct}%`, backgroundColor: t.yellow }} />
                </div>
                <p className="text-base leading-snug sm:text-lg" style={{ color: t.ink }}>
                  <strong className="font-extrabold">
                    <Ticker value={`${pct}%`} />
                  </strong>{" "}
                  {text}
                </p>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
}

const SlideAdolescentsOutreach2Data = {
  "t": {
    "yellow": "#F8B200",
    "ink": "#030712",
    "body": "#1f2937",
    "foot": "#6b7280",
    "icon": "#d32f2f"
  },
  "hero": {
    "number": "40 LAKHS",
    "line": "ADOLESCENTS EMPOWERED."
  },
  "para": "Magic Bus India Foundation follows a dual Direct and Indirect implementation model to promote adolescent development across India.",
  "footnote": "*This is the cumulative number of adolescents reached through Government Partnership programmes with Magic Bus across 14 states (Andhra Pradesh, Maharashtra, Chhattisgarh, Tamil Nadu, Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram). ^These four states (Himachal Pradesh, Haryana, Uttar Pradesh, and Uttarakhand) are also part of the NITI Aayog partnership. ~These 10 states (Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram) had active partnerships with Magic Bus in FY 2025–26.",
  "stats": [
    [
      "37,389",
      "Teachers Trained"
    ],
    [
      "30,069",
      "Schools"
    ],
    [
      "52%",
      "Girl Participants"
    ],
    [
      "11",
      "Government Partnerships"
    ],
    [
      "131",
      "Aspirational Blocks"
    ],
    [
      "343",
      "Community Learning Centres"
    ]
  ],
  "bars": null
};
function SlideAdolescentsOutreach2() {
  return <Slide {...SlideAdolescentsOutreach2Data} Icon={Icon3} />;
}

const SlideAdolescentsImpact2Data = {
  "t": {
    "yellow": "#f5b800",
    "ink": "#1e293b",
    "body": "#1e293b",
    "foot": "#64748b",
    "icon": "#d32f2f",
    "bar": "#fca5a5"
  },
  "hero": {
    "number": "40 LAKHS",
    "line": "ADOLESCENTS EMPOWERED."
  },
  "para": "Magic Bus India Foundation follows a dual Direct and Indirect implementation model to promote adolescent development across India.",
  "footnote": "*This is the cumulative number of adolescents reached through Government Partnership programmes with Magic Bus across 14 states (Andhra Pradesh, Maharashtra, Chhattisgarh, Tamil Nadu, Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram). ^These four states (Himachal Pradesh, Haryana, Uttar Pradesh, and Uttarakhand) are also part of the NITI Aayog partnership. ~These 10 states (Assam, Himachal Pradesh, Haryana, Madhya Pradesh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand, Meghalaya, and Mizoram) had active partnerships with Magic Bus in FY 2025–26.",
  "stats": null,
  "bars": [
    [
      27,
      "increase in attendance and school regularity"
    ],
    [
      34,
      "adolescents aspire to pursue graduation and higher studies"
    ],
    [
      46,
      "improvement in perceived ability to withstand and recover from difficulties"
    ],
    [
      20,
      "increase in perceived ability to act as required to achieve goals"
    ]
  ]
};
function SlideAdolescentsImpact2() {
  return <Slide {...SlideAdolescentsImpact2Data} Icon={null} />;
}

const SlideLivelihoodOutreachData = {
  "t": {
    "yellow": "#f5b800",
    "ink": "#111e38",
    "body": "#334155",
    "foot": "#64748b",
    "icon": "#d62828"
  },
  "hero": {
    "number": "3.5 LAKHS",
    "line": "YOUTH EMPOWERED."
  },
  "para": "The Livelihood Programme equips youth aged 18–25 with transferable life and employability skills. Also, the Rural Livelihood Programme strengthens entrepreneurship among peri-urban and rural communities by strengthening life skills, leadership, and entrepreneurial skills.",
  "footnote": null,
  "stats": [
    [
      "1,626",
      "Colleges"
    ],
    [
      "116",
      "Livelihood Centres"
    ],
    [
      "60%",
      "Young Women Participants in Overall Livelihood Programme"
    ],
    [
      "69%",
      "Young Women Participants in Skill Impact Bond Programme"
    ]
  ],
  "bars": null
};
function SlideLivelihoodOutreach() {
  return <Slide {...SlideLivelihoodOutreachData} Icon={Icon6} />;
}

const SlideLivelihoodImpactData = {
  "t": {
    "yellow": "#f2b500",
    "ink": "#111827",
    "body": "#1f2937",
    "foot": "#9ca3af",
    "icon": "#ce3427"
  },
  "hero": {
    "number": "3.5 LAKHS",
    "line": "YOUTH EMPOWERED."
  },
  "para": "The Livelihood Programme equips youth aged 18–25 with transferable life and employability skills. Also, the Rural Livelihood Programme strengthens entrepreneurship among peri-urban and rural communities by strengthening life skills, leadership, and entrepreneurial skills.",
  "footnote": null,
  "stats": [
    [
      "84%",
      "youth successfully placed in sustainable jobs"
    ],
    [
      "₹15,920/Mo.",
      "Average salary for placed youth"
    ],
    [
      "65%",
      "continued to stay employed for three months after joining"
    ],
    [
      "2,450+",
      "entrepreneurs created under Entrepreneurship Development Programme"
    ]
  ],
  "bars": null
};
function SlideLivelihoodImpact() {
  return <Slide {...SlideLivelihoodImpactData} Icon={Icon5} />;
}

export const OUTREACH_SLIDES = [
  { key: "adolescents-outreach-2", label: "Adolescents Outreach", photo: "/outreach/adolescents-2.jpg", alt: "Smiling school children and mentors cheering together", Content: SlideAdolescentsOutreach2 },
  { key: "adolescents-impact-2", label: "Adolescents Impact", photo: "/outreach/adolescents-2.jpg", alt: "Smiling school children and mentors cheering together", Content: SlideAdolescentsImpact2 },
  { key: "livelihood-outreach", label: "Livelihood Outreach", photo: "/outreach/livelihood.jpg", alt: "Group of young people from the Livelihood Programme giving thumbs up", Content: SlideLivelihoodOutreach },
  { key: "livelihood-impact", label: "Livelihood Impact", photo: "/outreach/livelihood.jpg", alt: "Group of young people from the Livelihood Programme giving thumbs up", Content: SlideLivelihoodImpact },
];
