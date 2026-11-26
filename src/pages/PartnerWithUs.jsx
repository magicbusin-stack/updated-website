// src/pages/PartnerWithUs.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Check,
  Copy,
  Gem,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import Layout from "../components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: "easeOut" },
  }),
};

/* One place for every department email. The contact cards, the form and the "write to us" links all read from here. */
const CONTACTS = [
  {
    key: "csr",
    title: "CSR Partnerships",
    sub: "and Employee Volunteering Partnership",
    email: "csr@magicbusindia.org",
    Icon: Building2,
    tile: "bg-brand-red/10 text-brand-red",
    bar: "bg-brand-red",
  },
  {
    key: "institutional",
    title: "Institutional Partnerships",
    sub: "Foundations and institutions",
    email: "institutional.partner@magicbusindia.org",
    Icon: Landmark,
    tile: "bg-brand-blue/10 text-brand-blue",
    bar: "bg-brand-blue",
  },
  {
    key: "govt",
    title: "Knowledge and Government Partnerships",
    sub: "Research, advisory and state governments",
    email: "govt.partner@magicbusindia.org",
    Icon: GraduationCap,
    tile: "bg-brand-green/10 text-brand-green",
    bar: "bg-brand-green",
  },
  {
    key: "employer",
    title: "Employer Partnerships",
    sub: "Hiring and placements",
    email: "emp-partner@magicbusindia.org",
    Icon: Handshake,
    tile: "bg-brand-yellow/30 text-brand-black",
    bar: "bg-brand-yellow",
  },
  {
    key: "hni",
    title: "High Networth Individual Partnerships",
    sub: "Philanthropy and major gifts",
    email: "hni@magicbusindia.org",
    Icon: Gem,
    tile: "bg-brand-red/10 text-brand-red",
    bar: "bg-brand-red",
  },
  {
    key: "individual",
    title: "Individual Partnerships",
    sub: "Donors and supporters",
    email: "donors@magicbusindia.org",
    Icon: Heart,
    tile: "bg-brand-blue/10 text-brand-blue",
    bar: "bg-brand-blue",
  },
];

const emailFor = (key) => CONTACTS.find((c) => c.key === key).email;

/* Form "Type of Partnership" choices, each routed to the right team */
const PARTNERSHIP_TYPES = [
  { label: "CSR Partnership", email: emailFor("csr") },
  { label: "Employee Volunteering", email: emailFor("csr") },
  { label: "Institutional", email: emailFor("institutional") },
  { label: "Government / Knowledge", email: emailFor("govt") },
  { label: "Employer", email: emailFor("employer") },
  { label: "High Networth Individual (HNI)", email: emailFor("hni") },
  { label: "Individual", email: emailFor("individual") },
  { label: "Other", email: emailFor("csr") },
];

const PHONE_DISPLAY = "+91 89767 20830";
const PHONE_LINK = "tel:+918976720830";
const MAX_WORDS = 100;
const wordCount = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0);

export default function PartnerWithUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    partnership: "",
    org: "",
    referral: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | { to } | { error }
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) topRef.current.focus({ preventScroll: true });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (status) setStatus(null);
  };

  const words = wordCount(form.message);

  /* Until the website has its own form backend, sending opens the visitor's email app with everything filled in,
     addressed to the right team. */
  const onSubmit = (e) => {
    e.preventDefault();
    if (words > MAX_WORDS) {
      setStatus({ error: `Please keep your message within ${MAX_WORDS} words (it is ${words} now).` });
      return;
    }
    const type = PARTNERSHIP_TYPES.find((t) => t.label === form.partnership);
    const to = type ? type.email : emailFor("csr");
    const subject = `Partnership enquiry${type ? ` - ${type.label}` : ""}${form.org ? ` - ${form.org}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Contact no.: ${form.phone}`,
      `Organisation: ${form.org}`,
      `Type of partnership: ${form.partnership || "-"}`,
      `How did you hear about Magic Bus: ${form.referral || "-"}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ to });
  };

  return (
    <Layout>
      <div className="bg-white text-ink font-sans">
        {/* ===== 1) HERO (matches Donate) ===== */}
        <section className="relative h-screen w-full overflow-hidden">
          <img fetchPriority="high" decoding="async"
            src="/ngo-images/partner-hero.jpg"
            alt="Group of smiling children and mentors waving"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=1600&q=80";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl text-white">
              <span ref={topRef} tabIndex={-1} className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-yellow backdrop-blur-sm"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-yellow" />
                Partner with us
              </span>

              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight bg-gradient-to-r from-brand-red via-brand-yellow to-white bg-clip-text text-transparent">Let’s connect.</h1>

              <p className="mt-4 text-xl md:text-2xl text-white/90">
                Join hands to move a generation from <em>Childhood to Livelihood</em>.
              </p>

              <div className="mt-8">
                <motion.a
                  href="#contact-form"
                  className="group relative overflow-hidden rounded-full bg-brand-red px-9 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in touch
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                  <motion.div className="absolute inset-0 bg-brand-red" initial={{ x: "-100%" }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== 3) INTRO ===== */}
        <section className="pt-16 md:pt-20 bg-white">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto px-6 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">Thank You for Showing Interest!</h2>
            <div className="h-1.5 w-24 bg-brand-yellow rounded mx-auto mt-4 mb-7" />
            <p className="text-lg md:text-xl text-ink/85 leading-relaxed">
              Magic Bus works with children and young people taking them on a journey from <strong>Childhood to Livelihood</strong> and out of poverty. You can help us
              enable children to complete secondary education, delay their age of marriage, and skill young people to be in secure and stable employment — thereby
              moving a generation out of poverty.
            </p>
          </motion.div>
        </section>

        {/* ===== 4) FORM ===== */}
        <section className="py-14 md:py-20 bg-white" id="contact-form">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid lg:grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-3xl border border-black/10 shadow-xl"
            >
              {/* Left: dark info panel */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#262626] to-[#1A1A1A] p-8 md:p-10 text-white">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-yellow/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-brand-red/20 blur-3xl" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-brand-yellow">
                    <Send className="h-4 w-4" />
                    Let’s get in touch
                  </span>
                  <h3 className="mt-5 text-3xl md:text-4xl font-extrabold leading-tight">Tell us how you would like to partner</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/80">Share a few details and our partnerships team will reach out.</p>

                  <ul className="mt-8 space-y-4 text-lg text-white/90">
                    {["Choose the type of partnership", "We route your message to the right team", "A member of our team replies to you"].map((t, i) => (
                      <li key={t} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-base font-extrabold text-brand-black">{i + 1}</span>
                        <span className="pt-0.5">{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 space-y-4 border-t border-white/15 pt-8">
                    <a href={`mailto:${emailFor("csr")}`} className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white">
                        <Mail className="h-6 w-6" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold uppercase tracking-wider text-white/60">Write to us</span>
                        <span className="block break-all text-lg font-bold group-hover:text-brand-yellow">{emailFor("csr")}</span>
                      </span>
                    </a>
                    <a href={PHONE_LINK} className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-black">
                        <Phone className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold uppercase tracking-wider text-white/60">Call / WhatsApp</span>
                        <span className="block text-lg font-bold group-hover:text-brand-yellow">{PHONE_DISPLAY}</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: the form */}
              <div className="bg-white p-6 md:p-10">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Input label="Your name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
                    <Input label="Email address" type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Input label="Contact no." type="tel" name="phone" value={form.phone} onChange={onChange} required autoComplete="tel" />
                    <Select label="Type of partnership" name="partnership" value={form.partnership} onChange={onChange} options={PARTNERSHIP_TYPES.map((t) => t.label)} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Input label="Organisation name" name="org" value={form.org} onChange={onChange} required autoComplete="organization" />
                    <Input label="How did you hear about Magic Bus?" name="referral" value={form.referral} onChange={onChange} optional />
                  </div>

                  <label className="block">
                    <span className="mb-2 flex items-baseline justify-between gap-3 text-base font-semibold text-ink">
                      <span>
                        Have a question? Write to us <span className="text-brand-red">*</span>
                      </span>
                      <span className={`text-sm font-medium ${words > MAX_WORDS ? "text-brand-red" : "text-ink/60"}`}>
                        {words}/{MAX_WORDS} words
                      </span>
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={5}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3.5 text-lg outline-none transition focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/30"
                    />
                  </label>

                  {status?.error && (
                    <p role="alert" className="rounded-xl border border-brand-red/30 bg-brand-red/5 px-4 py-3 text-base font-semibold text-brand-red">
                      {status.error}
                    </p>
                  )}
                  {status?.to && (
                    <p role="status" className="rounded-xl border border-brand-green/30 bg-brand-green/10 px-4 py-3 text-base leading-relaxed text-ink">
                      Your email app should open with your message ready to send to <strong>{status.to}</strong>. If nothing opens, please write to us at that address.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#c41b20] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/30 active:translate-y-0 active:scale-[0.98] sm:w-auto"
                  >
                    Send message
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== 5) SECONDARY TEXT ===== */}
        <section className="pb-6 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-ink/85 text-lg md:text-xl leading-relaxed">
              There are several ways to lend your support to our work. If you are interested in helping change young lives forever, you can collaborate with us. We would
              love to hear from you to figure out the various opportunities through which we can work together.
            </motion.p>
          </div>
        </section>

        {/* ===== 6) CONTACT US ===== */}
        <ContactUs />

        {/* ===== 7) FLOATING TOP BUTTON ===== */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 bottom-6 z-40 rounded-lg bg-brand-red px-4 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-red-600"
          aria-label="Scroll to top"
        >
          Top
        </button>
      </div>
    </Layout>
  );
}

/* ----------------------------- Contact Us ------------------------------ */
function ContactUs() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F7F5]" id="contact-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/15 bg-brand-red/5 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-brand-red">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            Reach the right team
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-ink leading-tight">Contact Us</h2>
          <div className="h-1.5 w-24 bg-brand-yellow rounded mx-auto mt-4 mb-6" />
          <p className="text-lg md:text-xl text-ink/80 leading-relaxed">Write to the team that matches how you would like to partner with us.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CONTACTS.map((c, i) => (
            <ContactCard key={c.key} c={c} index={i} />
          ))}
        </div>

        {/* Phone strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-yellow p-8 text-center sm:flex-row sm:text-left md:p-10"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-black text-brand-yellow">
              <Phone className="h-7 w-7" />
            </span>
            <div>
              <p className="text-base font-bold uppercase tracking-wider text-brand-black/70">Prefer to talk? Call / WhatsApp</p>
              <a href={PHONE_LINK} className="text-3xl font-black tracking-tight text-brand-black hover:text-brand-red md:text-4xl">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 rounded-full bg-brand-black px-8 py-3.5 text-lg font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#333] active:scale-[0.98]"
          >
            <Phone className="h-5 w-5" />
            Call now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ c, index }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try {
      navigator.clipboard.writeText(c.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available: the email is still visible and clickable */
    }
  };
  return (
    <motion.article
      variants={fadeUp}
      custom={index * 0.6}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
    >
      <span className={`absolute inset-x-0 top-0 h-1.5 ${c.bar}`} />
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.tile}`}>
        <c.Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-xl md:text-2xl font-extrabold leading-snug text-ink">{c.title}</h3>
      <p className="mt-1.5 text-base text-ink/70">{c.sub}</p>

      <a href={`mailto:${c.email}`} className="mt-5 flex items-start gap-2 [overflow-wrap:anywhere] text-lg font-semibold text-brand-red hover:underline">
        <Mail className="mt-1 h-5 w-5 shrink-0" />
        {c.email}
      </a>

      <div className="cta-inline mt-6 pt-1">
        <a
          href={`mailto:${c.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#c41b20] hover:shadow-md active:scale-95"
        >
          Email us
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-base font-bold text-ink transition hover:border-black/40 hover:bg-black/5 active:scale-95"
        >
          {copied ? <Check className="h-4 w-4 text-brand-green" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </motion.article>
  );
}

/* ----------------------------- Form fields ------------------------------ */
const fieldClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3.5 text-lg outline-none transition focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/30";

function Label({ children, optional }) {
  return (
    <span className="mb-2 block text-base font-semibold text-ink">
      {children}
      {!optional && <span className="text-brand-red"> *</span>}
    </span>
  );
}

function Input({ label, optional, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <Label optional={optional}>{label}</Label>
      <input {...props} className={fieldClass} />
    </label>
  );
}

function Select({ label, options = [], className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <Label optional>{label}</Label>
      <select {...props} className={fieldClass}>
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
