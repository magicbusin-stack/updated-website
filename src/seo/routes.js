/* ============================================================================
   SEO: the single list of every page on the site.

   This one file feeds ALL of these, so they can never disagree:
     - the <title>, description, canonical link, robots tag and social tags of each page
     - sitemap.xml and the per-page static HTML heads made at build time (scripts/seo-build.mjs)
     - the breadcrumb structured data and the "Explore more" related links

   To add a page: add the route to src/App.jsx AND add a row here (the build stops with a clear
   message if a route in App.jsx is missing from this list).

   Fields
     path        URL path ("/" for the home page)
     title       <title> text (keep it under about 60 characters)
     description meta description (about 110-160 characters, plain facts that are on the page)
     label       short name used in breadcrumbs and "Explore more" links
     parent      path of the parent page (for breadcrumbs); omit for top-level pages
     type        schema.org page type: WebPage (default), AboutPage, ContactPage, CollectionPage
     noindex     true = tell search engines NOT to list this page (it is also left out of the sitemap)
     related     paths of closely related pages, shown as "Explore more" links at the bottom of the page
   ========================================================================== */

export const ROUTES = [
  {
    path: "/",
    title: "Magic Bus India Foundation | Youth Life Skills & Livelihoods",
    description:
      "Magic Bus moves young people from underserved communities from childhood to livelihood through life skills, employability skilling and livelihood programmes.",
    label: "Home",
    related: ["/adolescent-programme", "/livelihood-programme", "/about-us", "/donate"],
  },

  /* ---------- About ---------- */
  {
    path: "/about-us",
    title: "About Magic Bus: Childhood to Livelihood Since 1999",
    description:
      "Magic Bus helps young people from underserved communities complete education and build sustainable livelihoods. Read about our journey since 1999, our approach and our impact.",
    label: "About Magic Bus",
    parent: "/",
    type: "AboutPage",
    related: ["/our-approach", "/who-we-are", "/our-team", "/board-of-directors"],
  },
  {
    path: "/our-approach",
    title: "Our Approach: Equip, Educate, Empower | Magic Bus",
    description:
      "How Magic Bus takes young people on a structured journey from childhood to livelihood: life skills education, education support and employability training.",
    label: "Our Approach",
    parent: "/about-us",
    related: ["/adolescent-programme", "/livelihood-programme", "/about-us"],
  },
  {
    path: "/who-we-are",
    title: "Who We Are | Magic Bus India Foundation",
    description:
      "Who Magic Bus is: a non-profit working with young people from underserved communities, with the people, partners and principles behind the work.",
    label: "Who We Are",
    parent: "/about-us",
    related: ["/about-us", "/our-team", "/board-of-directors", "/certifications"],
  },
  {
    path: "/our-team",
    title: "Our Team | Magic Bus India Foundation",
    description: "Meet the leadership team at Magic Bus India Foundation, who guide our work with children, adolescents and youth.",
    label: "Our Team",
    parent: "/about-us",
    related: ["/board-of-directors", "/our-culture", "/work-with-us"],
  },
  {
    path: "/board-of-directors",
    title: "Board of Directors | Magic Bus India Foundation",
    description:
      "Meet the distinguished leaders on the Magic Bus board who guide our mission to empower children and youth through education, life skills and livelihood opportunities.",
    label: "Board of Directors",
    parent: "/about-us",
    related: ["/our-team", "/certifications", "/reports"],
  },

  /* ---------- Programmes ---------- */
  {
    path: "/adolescent-programme",
    title: "Adolescent Programme: Life Skills & Learning | Magic Bus",
    description:
      "The Magic Bus Adolescent Programme helps adolescents ace life and learning through a sports-based life skills curriculum and education support.",
    label: "Adolescent Programme",
    parent: "/",
    related: ["/school-to-work", "/sports-for-development", "/government-partnership-programme", "/youth-for-change-fellowship-programme", "/livelihood-programme"],
  },
  {
    path: "/school-to-work",
    title: "School-to-Work (StW) Transition Framework | Magic Bus India Foundation",
    description:
      "A connected school-to-work pathway that brings learners, families, schools, communities, government and industry together, from aspiration to opportunity and transition.",
    label: "School-to-Work Transition Framework",
    parent: "/adolescent-programme",
    related: ["/adolescent-programme", "/livelihood-programme", "/government-partnership-programme"],
  },
  {
    path: "/sports-for-development",
    title: "Sports for Development (S4D): Sport as Pedagogy | Magic Bus",
    description:
      "Magic Bus Sports for Development uses sport as a pedagogy for education, skilling and social change, with 200+ teams, 7 sports and 120+ girls teams.",
    label: "Sports for Development",
    parent: "/adolescent-programme",
    related: ["/adolescent-programme", "/school-to-work", "/youth-for-change-fellowship-programme"],
  },
  {
    path: "/government-partnership-programme",
    title: "Government Partnership Programme | Magic Bus",
    description:
      "How Magic Bus aligns with national priorities to deliver life skills education at scale through partnerships with state governments.",
    label: "Government Partnership Programme",
    parent: "/adolescent-programme",
    related: ["/government-partnerships", "/government-partners", "/adolescent-programme"],
  },
  {
    path: "/government-partnerships",
    title: "Government Partnerships | Magic Bus India Foundation",
    description:
      "Aligned with NEP 2020 and Viksit Bharat, Magic Bus works with state governments and NITI Aayog to deliver life skills education at scale.",
    label: "Government Partnerships",
    parent: "/adolescent-programme",
    related: ["/government-partnership-programme", "/government-partners", "/magic-mitra"],
  },
  {
    path: "/youth-for-change-fellowship-programme",
    title: "Youth for Change Fellowship Programme | Magic Bus",
    description:
      "A leadership journey that equips young people to turn community challenges into measurable, local action. Shaping young leaders for community transformation.",
    label: "Youth for Change Fellowship Programme",
    parent: "/adolescent-programme",
    related: ["/adolescent-programme", "/employee-volunteering", "/livelihood-programme"],
  },
  {
    path: "/learning-development",
    title: "Learning & Development at Magic Bus",
    description:
      "How Magic Bus helps its people grow through continuous learning: induction, managerial development, role-based programmes and frontline capability building.",
    label: "Learning & Development",
    parent: "/our-culture",
    related: ["/our-culture", "/mb-academy", "/work-with-us"],
  },
  {
    path: "/employee-volunteering",
    title: "Corporate Employee Volunteering | Magic Bus India Foundation",
    description:
      "A structured employee volunteering programme designed to align CSR and ESG priorities with measurable, on-ground community impact for adolescents and youth.",
    label: "Employee Volunteering",
    parent: "/",
    related: ["/corporate-partners", "/partner", "/adolescent-programme"],
  },
  {
    path: "/magic-mitra",
    title: "Magic Mitra: AI-Enabled Teaching Companion | Magic Bus",
    description:
      "Magic Mitra is a WhatsApp-based, AI-enabled teaching companion that helps government school teachers deliver life skills sessions with confidence and consistency.",
    label: "Magic Mitra",
    parent: "/government-partnerships",
    related: ["/government-partnerships", "/government-partnership-programme", "/mb-dost"],
  },
  {
    path: "/livelihood-programme",
    title: "Livelihood Programme for Youth Skills and Jobs | Magic Bus",
    description:
      "Magic Bus Livelihood Programme equips underserved youth with life, employability and digital skills, with job placement in ITeS, BFSI and retail.",
    label: "Livelihood Programme",
    parent: "/",
    related: ["/youth-skilling-programme", "/connect-with-work", "/digital-skilling", "/entrepreneurship-development-programme", "/futurex"],
  },
  {
    path: "/youth-skilling-programme",
    title: "Youth Skilling Programme: Job Course After 12th | Magic Bus",
    description:
      "Magic Bus Youth Skilling Programme: an 8-week employability skills course after 12th, with NCVET certification, up to 11 credits and job placement.",
    label: "Youth Skilling Programme",
    parent: "/livelihood-programme",
    related: ["/connect-with-work", "/digital-skilling", "/livelihood-programme", "/employment-partners"],
  },
  {
    path: "/connect-with-work",
    title: "Connect With Work: Free Job Training for Graduates",
    description:
      "Magic Bus Connect With Work: a free 7 to 8 day employability skills programme for graduates aged 20 to 25, with job fairs and free placement support.",
    label: "Connect With Work",
    parent: "/livelihood-programme",
    related: ["/youth-skilling-programme", "/digital-skilling", "/livelihood-programme", "/employment-partners"],
  },
  {
    path: "/digital-skilling",
    title: "Digital Programmes: AI Skills for Youth | Magic Bus",
    description:
      "Magic Bus Digital Programmes: AI-CWW, data annotation, AI data analytics and web design courses for underserved youth, with free job placement support.",
    label: "Digital Programmes",
    parent: "/livelihood-programme",
    related: ["/connect-with-work", "/youth-skilling-programme", "/futurex", "/livelihood-programme"],
  },
  {
    path: "/entrepreneurship-development-programme",
    title: "Entrepreneurship Development Programme for Women | Magic Bus",
    description:
      "Magic Bus Economic Empowerment Programme: EDP and Livelihood Resource Centres help rural women and youth start nano-enterprises and self-employment.",
    label: "Entrepreneurship Development Programme",
    parent: "/livelihood-programme",
    related: ["/livelihood-programme", "/youth-skilling-programme", "/flfpr-report", "/impact-reports"],
  },
  {
    path: "/futurex",
    title: "FutureX: Blended Learning for Youth Skilling | Magic Bus",
    description:
      "FutureX is a strategic initiative of Magic Bus, in partnership with Michael Susan Dell Foundation, that uses technology to deliver life and employability skills to youth.",
    label: "FutureX",
    parent: "/livelihood-programme",
    related: ["/mb-dost", "/digital-skilling", "/livelihood-programme"],
  },
  {
    path: "/mb-dost",
    title: "MB Dost: WhatsApp Learning Companion | Magic Bus",
    description:
      "MB Dost is a WhatsApp-based digital learning companion for FutureX participants, with on-demand life skills training, progress tracking and certification.",
    label: "MB Dost",
    parent: "/futurex",
    related: ["/futurex", "/digital-skilling", "/magic-mitra"],
  },

  /* ---------- Partners ---------- */
  {
    path: "/corporate-partners",
    title: "Corporate Partners | Magic Bus India Foundation",
    description:
      "Corporate partners and CSR supporters who work with Magic Bus to build resources, skills and pathways out of poverty for children and young people.",
    label: "Corporate Partners",
    parent: "/partner",
    related: ["/partner", "/foundation-partners", "/employee-volunteering", "/employment-partners"],
  },
  {
    path: "/foundation-partners",
    title: "Foundation & Institutional Partners | Magic Bus",
    description:
      "Foundations and institutions that support the Magic Bus mission with funding, capacity building and programme recognition.",
    label: "Foundations & Institutions",
    parent: "/partner",
    related: ["/corporate-partners", "/government-partners", "/knowledge-partners", "/partner"],
  },
  {
    path: "/government-partners",
    title: "Government Partners | Magic Bus India Foundation",
    description:
      "Magic Bus partners with state governments to align with the National Education Policy (NEP 2020) and mainstream life skills education.",
    label: "Government Partners",
    parent: "/partner",
    related: ["/government-partnerships", "/government-partnership-programme", "/foundation-partners", "/partner"],
  },
  {
    path: "/knowledge-partners",
    title: "Knowledge Partners | Magic Bus India Foundation",
    description:
      "Global advisory organisations and think tanks that work with Magic Bus to design and evaluate life skills and youth skilling programmes.",
    label: "Knowledge Partners",
    parent: "/partner",
    related: ["/impact-reports", "/foundation-partners", "/partner"],
  },
  {
    path: "/employment-partners",
    title: "Employment Partners | Magic Bus India Foundation",
    description:
      "Employers across retail, BFSI, QSR and ITeS that offer direct entry-level job placements to youth trained through Magic Bus.",
    label: "Employment Partners",
    parent: "/partner",
    related: ["/livelihood-programme", "/youth-skilling-programme", "/connect-with-work", "/partner"],
  },
  {
    path: "/partner",
    title: "Partner With Us | Magic Bus India Foundation",
    description:
      "Partner with Magic Bus through CSR and other partnerships to help young people from underserved communities move from childhood to livelihood.",
    label: "Partner With Us",
    parent: "/",
    type: "ContactPage",
    related: ["/corporate-partners", "/employee-volunteering", "/donate", "/contact"],
  },

  /* ---------- Reports & transparency ---------- */
  {
    path: "/reports",
    title: "Reports & Documents | Magic Bus India Foundation",
    description: "Annual, impact and research reports from Magic Bus India Foundation, published as part of our commitment to transparency.",
    label: "Reports",
    parent: "/",
    type: "CollectionPage",
    related: ["/annual-reports", "/impact-reports", "/gender-journey-report", "/flfpr-report"],
  },
  {
    path: "/impact-reports",
    title: "Impact Reports | Magic Bus India Foundation",
    description: "Impact assessments and evaluation reports that measure the real outcomes of Magic Bus programmes for young people.",
    label: "Impact Reports",
    parent: "/reports",
    type: "CollectionPage",
    related: ["/annual-reports", "/gender-journey-report", "/flfpr-report", "/reports"],
  },
  {
    path: "/annual-reports",
    title: "Annual Reports | Magic Bus India Foundation",
    description: "Year-by-year annual reports from Magic Bus India Foundation, showing our journey of impact.",
    label: "Annual Reports",
    parent: "/reports",
    type: "CollectionPage",
    related: ["/impact-reports", "/certifications", "/reports"],
  },
  {
    path: "/gender-journey-report",
    title: "Gender Journey Report | Magic Bus India Foundation",
    description: "Research on empowering girls and women, from the Magic Bus Gender Journey report.",
    label: "Gender Journey Report",
    parent: "/reports",
    related: ["/flfpr-report", "/impact-reports", "/entrepreneurship-development-programme"],
  },
  {
    path: "/flfpr-report",
    title: "FLFPR Report: Women in the Workforce | Magic Bus",
    description:
      "Magic Bus research on female labour force participation (FLFPR) in India, and what it means for women in the workforce.",
    label: "FLFPR Report",
    parent: "/reports",
    related: ["/gender-journey-report", "/entrepreneurship-development-programme", "/impact-reports"],
  },
  {
    path: "/certifications",
    title: "Certifications & Compliance | Magic Bus India Foundation",
    description:
      "Magic Bus is a non-profit registered under section 8 of the Companies Act 2013. See our registrations, certifications and compliance documents.",
    label: "Certifications",
    parent: "/reports",
    related: ["/reports", "/annual-reports", "/board-of-directors", "/privacy-policy"],
  },

  /* ---------- Media & stories ---------- */
  {
    path: "/events",
    title: "Events at Magic Bus | Magic Bus India Foundation",
    description: "Explore events, stories and programmes that are transforming the lives of young people across India.",
    label: "Events",
    parent: "/",
    related: ["/news", "/blogs", "/gallery", "/podcasts"],
  },
  {
    path: "/podcasts",
    title: "Podcasts | Magic Bus India Foundation",
    description:
      "Conversations about life skills, employability, sport for development and community engagement: stories that inspire young people to overcome poverty.",
    label: "Podcasts",
    parent: "/",
    related: ["/blogs", "/news", "/events", "/gallery"],
  },
  {
    path: "/gallery",
    title: "Photo Gallery | Magic Bus India Foundation",
    description: "Photos that capture the magical moments from Magic Bus programmes with children and young people.",
    label: "Gallery",
    parent: "/",
    related: ["/events", "/blogs", "/news"],
  },
  {
    path: "/blogs",
    title: "Blogs: Stories & Insights | Magic Bus India Foundation",
    description:
      "Articles, stories and research on how structured interventions help adolescents and youth complete education, build life skills and find employment.",
    label: "Blogs",
    parent: "/",
    type: "CollectionPage",
    related: ["/news", "/podcasts", "/events", "/impact-reports"],
  },
  {
    path: "/news",
    title: "News & Updates | Magic Bus India Foundation",
    description: "Latest news, updates and announcements about Magic Bus programmes, partnerships, achievements and impact across India.",
    label: "News",
    parent: "/",
    type: "CollectionPage",
    related: ["/blogs", "/events", "/podcasts", "/annual-reports"],
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions | Magic Bus India Foundation",
    description:
      "Answers about Magic Bus childhood development programmes, skilling initiatives, the volunteer ecosystem and reports.",
    label: "FAQs",
    parent: "/",
    related: ["/contact", "/about-us", "/donate"],
  },

  /* ---------- Careers & culture ---------- */
  {
    path: "/work-with-us",
    title: "Careers at Magic Bus: Work with Us",
    description:
      "Explore careers at Magic Bus, a certified Great Place to Work. Find roles, learn about our culture and apply to join a team transforming young lives.",
    label: "Work With Us",
    parent: "/",
    related: ["/our-culture", "/learning-development", "/certifications"],
  },
  {
    path: "/our-culture",
    title: "Our Culture: Purpose at Work | Magic Bus",
    description:
      "A workplace where curiosity is encouraged, integrity is non-negotiable and people grow together. Explore the culture, values and awards behind Magic Bus.",
    label: "Our Culture",
    parent: "/work-with-us",
    related: ["/work-with-us", "/learning-development", "/mb-academy"],
  },
  {
    path: "/mb-academy",
    title: "MB Academy: Learning on the Go | Magic Bus",
    description:
      "Magic Bus Academy is a virtual learning management system, with browser and app access, for Magic Bus staff and volunteers.",
    label: "MB Academy",
    parent: "/learning-development",
    related: ["/learning-development", "/our-culture", "/work-with-us"],
  },
  {
    path: "/darwinbox",
    title: "Darwinbox HR Platform | Magic Bus (Employees)",
    description: "Help for Magic Bus employees using Darwinbox, the HR management system used for day-to-day HR tasks.",
    label: "Darwinbox",
    parent: "/work-with-us",
    noindex: true, // internal staff help page: not meant for search results
  },

  /* ---------- Contact & giving ---------- */
  {
    path: "/contact",
    title: "Contact Magic Bus India Foundation",
    description: "How to contact Magic Bus India Foundation: head office, email and phone for general queries, CSR partnerships and careers.",
    label: "Contact Us",
    parent: "/",
    type: "ContactPage",
    related: ["/partner", "/faq", "/donate"],
  },
  {
    path: "/donate",
    title: "Donate to Magic Bus | Help a Young Person Build a Livelihood",
    description:
      "Donate to Magic Bus India Foundation to help children and young people from underserved communities complete education and build sustainable livelihoods.",
    label: "Donate",
    parent: "/",
    hideRelated: true, // keep the giving page focused: no "Explore more" links
    related: ["/about-us", "/reports", "/certifications", "/partner"],
  },

  /* ---------- Policies ---------- */
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Magic Bus India Foundation",
    description:
      "How Magic Bus India Foundation collects, uses, shares and protects your personal information, and how you can access, correct or delete it.",
    label: "Privacy Policy",
    parent: "/",
  },
  {
    path: "/terms-and-conditions",
    title: "Terms & Conditions | Magic Bus India Foundation",
    description: "The terms and conditions for using the Magic Bus India Foundation website.",
    label: "Terms & Conditions",
    parent: "/",
  },
  {
    path: "/refund-policy",
    title: "Refunds & Cancellation Policy | Magic Bus India Foundation",
    description:
      "How donation refunds and cancellations work at Magic Bus India Foundation for Indian and foreign donors, and how to contact Donor Services.",
    label: "Refund & Cancellation Policy",
    parent: "/donate",
  },
  {
    path: "/child-protection-policy",
    title: "Child Protection Policy | Magic Bus India Foundation",
    description:
      "Magic Bus is committed to preventing and responding to any form of abuse, violence and exploitation against children. Read our Child Protection Policy.",
    label: "Child Protection Policy",
    parent: "/",
  },
  {
    path: "/posh-policy",
    title: "POSH Policy | Magic Bus India Foundation",
    description:
      "Magic Bus is committed to a work environment that is fair, safe and respectful at every location. Read our POSH (prevention of sexual harassment) policy.",
    label: "POSH Policy",
    parent: "/",
  },
  {
    path: "/isms-policy",
    title: "ISMS Policy | Magic Bus India Foundation",
    description: "Magic Bus India Foundation's Information Security Management System (ISMS) Policy, aligned with ISO/IEC 27001.",
    label: "ISMS Policy",
    parent: "/",
  },

  /* ---------- Not for search engines ---------- */
  {
    path: "/home-old",
    title: "Magic Bus India Foundation (previous home page)",
    description: "An older version of the Magic Bus home page, kept for reference.",
    label: "Previous home page",
    parent: "/",
    noindex: true, // duplicate of the home page
  },
];

/* A page that does not exist (shown for unknown addresses). Not in the sitemap. */
export const NOT_FOUND = {
  title: "Page not found | Magic Bus India Foundation",
  description: "The page you are looking for could not be found.",
};

export const ROUTE_BY_PATH = Object.fromEntries(ROUTES.map((r) => [r.path, r]));
