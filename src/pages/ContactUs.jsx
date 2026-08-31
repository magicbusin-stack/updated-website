// ContactUs.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/Home/FAQSectiom";
import { contactFAQ } from "../components/Home/faqItems";
import FaqSchema from "../components/seo/FaqSchema";
import { Users, Briefcase, HelpCircle, Mail, Phone, MapPin, Building2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" },
  }),
};

/**
 * --- Enhanced Contact Page
 * - Keeps original hero and FAQ (unchanged)
 * - Adds Contact Cards (CSR, Careers, General, HQ)
 * - Adds Branch Locator (click office -> recenter map + show details)
 * - Adds ContactForm with conditional fields + consent checkboxes
 *
 * Note: Map uses a Google Maps embed iframe and simple "recenter" technique
 * by swapping the iframe src per selected office (no API key required).
 */

/* ---------------- contact card data ---------------- */
const CONTACT_CARDS = [
  {
    key: "headquarters",
    icon: Building2,
    title: "Headquarters",
    subtitle: "Magic Bus India Foundation",
    details: [
      { text: "3rd Floor, Reliable Plaza, Thane Belapur Road, Airoli, Navi Mumbai – 400708" },
      { text: "Mon–Fri 09:00 – 18:00" },
    ],
    accent: "bg-brand-yellow/10 border-brand-yellow/30",
  },
  {
    key: "csr",
    icon: Users,
    title: "CSR & Employee Volunteering",
    subtitle: "Partnership Opportunities",
    details: [
      { icon: Mail, text: "csr@magicbusindia.org", href: "mailto:csr@magicbusindia.org" },
      { icon: Phone, text: "8976720830", href: "tel:8976720830" },
    ],
    accent: "bg-brand-green/10 border-brand-green/30",
  },
  {
    key: "careers",
    icon: Briefcase,
    title: "Career Opportunities",
    subtitle: "Join Our Team",
    details: [
      { icon: Mail, text: "careers@magicbusindia.org", href: "mailto:careers@magicbusindia.org" },
    ],
    accent: "bg-brand-blue/10 border-brand-blue/30",
  },
  {
    key: "general",
    icon: HelpCircle,
    title: "General Inquiries",
    subtitle: "We're Here to Help",
    details: [
      { icon: Mail, text: "info@magicbusindia.org", href: "mailto:info@magicbusindia.org" },
      { icon: Phone, text: "022 62434848", href: "tel:02262434848" },
    ],
    accent: "bg-brand-red/10 border-brand-red/30",
  },
];

/* ---------------- office / map data ----------------
   Each office has { id, title, lat, lng, address, phone, hours }.
   Clicking an office sets it as active and updates the iframe src to center it.
*/
const OFFICES = [
  {
    id: "mumbai-hq",
    title: "Mumbai HQ (Airoli)",
    lat: 19.159635382062607,
    lng: 73.003827, // slightly adjusted center
    address:
      "Magic Bus India Foundation\n3rd Floor, Reliable Plaza\nThane Belapur Road, Airoli\nNavi Mumbai – 400708",
    phone: "022 62434848",
    hours: "Mon–Fri 09:00 – 18:00",
  },
  {
    id: "thane-office",
    title: "Thane Office",
    lat: 19.2183,
    lng: 72.9781,
    address: "Thane Office\nSample address line\nThane, Mumbai",
    phone: "022 61234567",
    hours: "Mon–Fri 09:30 – 17:30",
  },
  {
    id: "mumbai-south",
    title: "Mumbai South",
    lat: 18.9388,
    lng: 72.8356,
    address: "Mumbai South Office\nSample address line\nMumbai",
    phone: "022 60000000",
    hours: "Mon–Fri 10:00 – 17:00",
  },
];

/* Helper to build Google Maps embed url centered on lat/lng */
const buildMapSrc = (lat, lng, zoom = 14) =>
  `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1706709912234`;

/* ---------------- Contact Form (with conditional fields) ---------------- */
function ContactForm({ onSuccess }) {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    orgType: "", // dropdown
    enquiryType: "", // mandatory dropdown
    companyName: "",
    employeeSize: "",
    partnershipFocus: "",
    preferredActivity: "",
    volunteersCount: "",
    message: "",
    consentContact: false,
    consentNewsletter: false,
  });

  const [errors, setErrors] = useState({});
  const enquiryType = values.enquiryType;

  const handleChange = (k) => (e) => {
    const v = e?.target?.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((s) => ({ ...s, [k]: v }));
  };

  const validate = () => {
    const err = {};
    if (!values.fullName.trim()) err.fullName = "Full name is required";
    if (!values.email.trim()) err.email = "Email is required";
    if (!values.mobile.trim()) err.mobile = "Mobile number is required";
    if (!values.enquiryType) err.enquiryType = "Please select type of enquiry";
    // conditional validations
    if (values.enquiryType === "partnership") {
      if (!values.companyName.trim()) err.companyName = "Company name is required";
      if (!values.employeeSize.trim()) err.employeeSize = "Employee size is required";
    }
    if (values.enquiryType === "volunteering") {
      if (!values.preferredActivity.trim()) err.preferredActivity = "Preferred activity is required";
      if (!values.volunteersCount.trim()) err.volunteersCount = "Number of volunteers is required";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!validate()) return;

    // TODO: submit to API endpoint (fetch/post). For now we call onSuccess callback
    console.log("contact submit", values);
    if (onSuccess) onSuccess();
    // simple reset
    setValues({
      fullName: "",
      email: "",
      mobile: "",
      city: "",
      orgType: "",
      enquiryType: "",
      companyName: "",
      employeeSize: "",
      partnershipFocus: "",
      preferredActivity: "",
      volunteersCount: "",
      message: "",
      consentContact: false,
      consentNewsletter: false,
    });
    setErrors({});
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-ink mb-2">Send us a Message</h3>
        <p className="text-slate-600">Fill out the form below and we'll get back to you as soon as possible</p>
      </div>

      <form
        className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"
        onSubmit={handleSubmit}
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Full Name *</span>
            <input
              value={values.fullName}
              onChange={handleChange("fullName")}
              className={`mt-2 block w-full rounded-md border px-3 py-2 ${errors.fullName ? "border-red-500" : "border-gray-200"
                }`}
              placeholder="Your full name"
            />
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </label>

          <label className="block">
            <span className="text-sm font-medium">Email Address *</span>
            <input
              value={values.email}
              onChange={handleChange("email")}
              type="email"
              className={`mt-2 block w-full rounded-md border px-3 py-2 ${errors.email ? "border-red-500" : "border-gray-200"
                }`}
              placeholder="name@domain.com"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </label>

          <label className="block">
            <span className="text-sm font-medium">Mobile Number *</span>
            <input
              value={values.mobile}
              onChange={handleChange("mobile")}
              className={`mt-2 block w-full rounded-md border px-3 py-2 ${errors.mobile ? "border-red-500" : "border-gray-200"
                }`}
              placeholder="+91 98765 43210"
            />
            {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
          </label>

          <label className="block">
            <span className="text-sm font-medium">City / Location</span>
            <input
              value={values.city}
              onChange={handleChange("city")}
              className="mt-2 block w-full rounded-md border border-gray-200 px-3 py-2"
              placeholder="City"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <label>
            <span className="text-sm font-medium">Organisation Type</span>
            <select
              value={values.orgType}
              onChange={handleChange("orgType")}
              className="mt-2 block w-full rounded-md border border-gray-200 px-3 py-2"
            >
              <option value="">Select</option>
              <option value="corporate">Corporate</option>
              <option value="sme">SME</option>
              <option value="individual">Individual Donor</option>
              <option value="school">School / College</option>
              <option value="ngo">NGO</option>
              <option value="government">Government Body</option>
              <option value="media">Media</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            <span className="text-sm font-medium">Type of Enquiry *</span>
            <select
              value={values.enquiryType}
              onChange={handleChange("enquiryType")}
              className={`mt-2 block w-full rounded-md border px-3 py-2 ${errors.enquiryType ? "border-red-500" : "border-gray-200"
                }`}
            >
              <option value="">Choose</option>
              <option value="partnership">Partnership</option>
              <option value="volunteering">Employee Volunteering</option>
              <option value="donation">Donations / Fundraising</option>
              <option value="media">Media / Press</option>
              <option value="careers">Career Opportunities</option>
              <option value="general">General / Other</option>
            </select>
            {errors.enquiryType && <p className="text-xs text-red-600 mt-1">{errors.enquiryType}</p>}
          </label>
        </div>

        {/* conditional - partnership */}
        {enquiryType === "partnership" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <label>
              <span className="text-sm font-medium">Company name *</span>
              <input
                value={values.companyName}
                onChange={handleChange("companyName")}
                className={`mt-2 block w-full rounded-md border px-3 py-2 ${errors.companyName ? "border-red-500" : "border-gray-200"
                  }`}
              />
              {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
            </label>
            <label>
              <span className="text-sm font-medium">Employee size *</span>
              <input
                value={values.employeeSize}
                onChange={handleChange("employeeSize")}
                className={`mt-2 block w-full rounded-md border px-3 py-2 ${errors.employeeSize ? "border-red-500" : "border-gray-200"
                  }`}
                placeholder="eg. 50, 250"
              />
              {errors.employeeSize && <p className="text-xs text-red-600 mt-1">{errors.employeeSize}</p>}
            </label>
            <label>
              <span className="text-sm font-medium">Partnership focus areas</span>
              <input
                value={values.partnershipFocus}
                onChange={handleChange("partnershipFocus")}
                className="mt-2 block w-full rounded-md border border-gray-200 px-3 py-2"
                placeholder="Education, Health, Skills..."
              />
            </label>
          </div>
        )}

        {/* conditional - volunteering */}
        {enquiryType === "volunteering" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <label>
              <span className="text-sm font-medium">Preferred activity *</span>
              <input
                value={values.preferredActivity}
                onChange={handleChange("preferredActivity")}
                className={`mt-2 block w-full rounded-md border px-3 py-2 ${errors.preferredActivity ? "border-red-500" : "border-gray-200"
                  }`}
                placeholder="eg. mentoring, teaching, events"
              />
              {errors.preferredActivity && (
                <p className="text-xs text-red-600 mt-1">{errors.preferredActivity}</p>
              )}
            </label>
            <label>
              <span className="text-sm font-medium">No. of volunteers *</span>
              <input
                value={values.volunteersCount}
                onChange={handleChange("volunteersCount")}
                className={`mt-2 block w-full rounded-md border px-3 py-2 ${errors.volunteersCount ? "border-red-500" : "border-gray-200"
                  }`}
                placeholder="e.g. 5"
              />
              {errors.volunteersCount && <p className="text-xs text-red-600 mt-1">{errors.volunteersCount}</p>}
            </label>
          </div>
        )}

        <label className="block mt-4">
          <span className="text-sm font-medium">Message</span>
          <textarea
            value={values.message}
            onChange={handleChange("message")}
            rows={5}
            className="mt-2 block w-full rounded-md border border-gray-200 px-3 py-2"
            placeholder="Describe your query..."
          />
        </label>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={values.consentContact} onChange={handleChange("consentContact")} />
            <span className="text-sm">I agree to be contacted by Magic Bus India Foundation.</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={values.consentNewsletter} onChange={handleChange("consentNewsletter")} />
            <span className="text-sm">I want to receive newsletters.</span>
          </label>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <button type="submit" className="px-6 py-3 bg-brand-red text-white rounded-full font-semibold shadow">
            Submit
          </button>
          <button
            type="button"
            onClick={() =>
              setValues({
                fullName: "",
                email: "",
                mobile: "",
                city: "",
                orgType: "",
                enquiryType: "",
                companyName: "",
                employeeSize: "",
                partnershipFocus: "",
                preferredActivity: "",
                volunteersCount: "",
                message: "",
                consentContact: false,
                consentNewsletter: false,
              })
            }
            className="px-4 py-2 border rounded-md"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

/* ---------------- Branch locator (map + office list) ---------------- */
function BranchLocator() {
  const [active, setActive] = useState(OFFICES[0].id);

  const activeOffice = useMemo(() => OFFICES.find((o) => o.id === active) || OFFICES[0], [active]);

  return (
    <div className="mt-10 grid lg:grid-cols-7 gap-8 items-stretch">
      {/* Info / Office list */}
      <div className="lg:col-span-3 p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-brand-yellow/20 rounded-xl shadow-sm">
            <MapPin className="w-6 h-6 text-brand-red" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-ink mb-1">Visit Us</h3>
            <p className="text-ink/70">Branch locator — click a location to view details on the map</p>
          </div>
        </div>

        <div className="space-y-3">
          {OFFICES.map((office) => (
            <button
              key={office.id}
              onClick={() => setActive(office.id)}
              className={`w-full text-left p-3 rounded-lg transition-all ${active === office.id
                ? "bg-brand-red/5 shadow-sm"
                : "hover:bg-ink/5"
                }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-ink">{office.title}</div>
                  <div className="text-sm text-ink/70">{office.address.split("\n")[0]}</div>
                </div>
                <div className="text-sm text-ink/60">{office.hours}</div>
              </div>
              <div className="text-sm text-ink/80 mt-2">{office.phone}</div>
            </button>
          ))}
        </div>

        {/* active office details */}
        <div className="mt-6 pt-4 text-sm text-ink/80">
          <div className="font-semibold">{activeOffice.title}</div>
          <pre className="whitespace-pre-wrap text-sm mt-2">{activeOffice.address}</pre>
          <div className="mt-2">Phone: <a href={`tel:${activeOffice.phone}`} className="text-brand-red">{activeOffice.phone}</a></div>
          <div className="mt-1">Hours: {activeOffice.hours}</div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeOffice.title + " " + activeOffice.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-brand-red font-medium"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>

      {/* Map iframe */}
      <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
        <iframe
          title="Magic Bus offices map"
          src={buildMapSrc(activeOffice.lat, activeOffice.lng)}
          width="100%"
          height="100%"
          className="w-full h-[400px] lg:h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

/* ---------------- ContactSection (cards + map + form + CTA) ---------------- */
function ContactSection() {
  return (
    <section id="contact-details" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">Get in Touch</h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">
            We're here to answer your questions and explore how we can work together to create lasting change.
          </p>
        </div>

        {/* Map / Locator */}
        <BranchLocator />

        {/* Contact form + CTA */}
        <div className="mt-16 gap-8 items-start">
          <div>
            <ContactForm onSuccess={() => alert("Thanks! We received your message. We'll get back to you soon.")} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DonateCTA({
  title = "Make a meaningful difference today.",
  cta = "Donate now",
  href = "/donate",
  subtle = true,        // toggle very-light chrome
}) {
  return (
    <section
      className={`relative py-10 ${subtle ? "bg-transparent" : "bg-gradient-to-r from-brand-blue to-brand-red"
        }`}
    >
      {/* background wash (ultra subtle) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(14,165,233,0.08), rgba(244,63,94,0.08))",
        }}
      />

      {/* top/bottom hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* glass card */}
        <div className="rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-white/60 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-5 py-5 md:px-7 md:py-6">
            <h2 className="text-base md:text-lg font-medium leading-snug text-ink/90 text-center md:text-left">
              {title}
            </h2>

            <motion.a
              href={href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-5 py-2.5 md:px-6 md:py-2.5 font-semibold shadow-sm hover:shadow transition-all"
            >
              {cta}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactYellowStripe() {
  const items = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "CSR & Employee Volunteering",
      subtitle:
        "Need assistance or want to collaborate on employee volunteering or CSR initiatives?",
      email: { label: "csr@magicbusindia.org", href: "mailto:csr@magicbusindia.org" },
      phone: { label: "+91 89767 20830", href: "tel:+918976720830" },
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Opportunities",
      subtitle: "Interested in joining our mission-driven team?",
      email: {
        label: "careers@magicbusindia.org",
        href: "mailto:careers@magicbusindia.org",
      },
      phone: null,
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "General Queries",
      subtitle: "Have questions? Our team is here to help.",
      email: { label: "info@magicbusindia.org", href: "mailto:info@magicbusindia.org" },
      phone: { label: "022 62434848", href: "tel:02262434848" },
    },
  ];

  return (
    <section
      className="relative py-10 md:py-12 bg-brand-yellow/10 text-ink"
      aria-labelledby="quick-contact-title"
    >
      {/* modern top/bottom borders */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-2">
        <div className="mx-auto h-full w-[95%] rounded-b-full bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-70" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2">
        <div className="mx-auto h-full w-[95%] rounded-t-full bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-70" />
      </div> */}

      <h2 id="quick-contact-title" className="sr-only">
        Quick Contact Cards
      </h2>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article
              key={i}
              className="group rounded-2xl bg-white/80 backdrop-blur p-6 md:p-7 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-brand-yellow/20 text-ink">
                  {it.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{it.subtitle}</p>

                  <div className="mt-4 space-y-1.5 text-sm">
                    {it.email && (
                      <a
                        href={it.email.href}
                        className="inline-flex items-center gap-2 text-ink/90 hover:text-brand-red"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{it.email.label}</span>
                      </a>
                    )}
                    {it.phone && (
                      <a
                        href={it.phone.href}
                        className="inline-flex items-center gap-2 text-ink/90 hover:text-brand-red"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{it.phone.label}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page (hero unchanged) ---------------- */
export default function ContactUs() {
  return (
    <Layout>
        <FaqSchema faqs={contactFAQ} />
      <main className="bg-white text-ink font-sans">
        {/* ===== HERO (leave as you had it) ===== */}
        <section className="relative h-screen w-full overflow-hidden">
          <img
            src="src/assets/images/contact-hero.jpg"
            alt="Contact Us Hero"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl text-white">
              <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
                Get in touch
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
                Magic Bus India Foundation
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90">
                Magic Bus partners with companies, donors, volunteers, and communities to move young people out of poverty through education and employment.
              </p>
              <div className="mt-6">
                <motion.a
                  href="#contact-details"
                  className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View contact details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                  <motion.div className="absolute inset-0 bg-brand-red" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== BREADCRUMB (keep as-is) ===== */}
        <section className="py-4 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-sm text-gray-500">Home / Contact Us</div>
        </section>

        <ContactYellowStripe />

        {/* ===== CONTACT SECTION (enhanced) ===== */}
        <ContactSection />

        {/* ===== FAQ (leave as you had it) ===== */}
        <FAQSection
          title="Need More Information?"
          subtitle="Get quick answers to common questions about donations, volunteering, and partnerships."
          items={contactFAQ}
        />

        {/* NEW: Donate CTA */}
        <DonateCTA
          title="The best way to make a difference in the lives of others."
          cta="Donate now"
          href="/donate"
        />
      </main>
    </Layout>
  );
}
