// src/pages/PartnerWithUs.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Layout from "../components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: "easeOut" },
  }),
};

export default function PartnerWithUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    partnership: "",
    org: "",
    referral: "",
    message: "",
    agree: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) topRef.current.focus({ preventScroll: true });
  }, []);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: hook into your backend
    setTimeout(() => setSubmitting(false), 800);
  };

  const rows = [
    {
      label: (
        <>
          <strong>CSR Partnerships</strong> <br className="sm:hidden" />{" "}
          Employee Volunteering Partnership
        </>
      ),
      email: "csr@magicbusindia.org",
    },
    {
      label: <strong>Institutional Partnerships</strong>,
      email: "institutional.partner@magicbusindia.org",
    },
    {
      label: <strong>Knowledge and Government Partnerships</strong>,
      email: "govt.partner@magicbusindia.org",
    },
    {
      label: <strong>Employer Partnerships</strong>,
      email: "emp-partner@magicbusindia.org",
    },
    {
      label: <strong>High Networth Individual Partnerships</strong>,
      email: "hni@magicbusindia.org",
    },
    {
      label: <strong>Individual Partnerships</strong>,
      email: "donors@magicbusindia.org",
    },
  ];

  return (
    <Layout>
      <main className="bg-white text-ink font-sans">
        {/* ===== 1) HERO (matches Donate) ===== */}
        <section className="relative h-screen w-full overflow-hidden">
        <img
            src="/src/assets/images/partner-hero.jpg"
            alt="Group of smiling children and mentors waving"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
            e.currentTarget.src =
                "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=1600&q=80";
            }}
        />

        {/* ⬇️ Same tint layers as Donate */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
            <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl text-white"
            >
            <span
                ref={topRef}
                tabIndex={-1}
                className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold"
            >
                Partner with us
            </span>

            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
                Let’s connect.
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/90">
                Join hands to move a generation from <em>Childhood to Livelihood</em>.
            </p>

            <div className="mt-6">
                <motion.a
                href="#contact-form"
                className="group relative overflow-hidden rounded-full bg-brand-red px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                >
                <span className="relative z-10 flex items-center gap-2">
                    Get in touch
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M9 6l6 6-6 6" />
                    </svg>
                </span>
                <motion.div
                    className="absolute inset-0 bg-brand-red"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                />
                </motion.a>
            </div>
            </motion.div>
        </div>
        </section>


        {/* ===== 2) BREADCRUMB ===== */}
        <section className="py-3 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-6 text-sm text-ink/60">
            Home / <span className="text-ink">Partner With Us</span>
          </div>
        </section>

        {/* ===== 3) VERTICAL INTRO + FORM ===== */}
        <section className="py-14 md:py-16 bg-white" id="contact-form">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-14">
            {/* --- Left (Intro) --- */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
                Thank You for Showing Interest!
              </h2>
              <div className="h-1 w-24 bg-brand-yellow rounded mx-auto mt-3 mb-6" />
              <p className="text-lg text-ink/80 leading-relaxed max-w-5xl mx-auto">
                Magic Bus works with children and young people taking them on a
                journey from <strong>Childhood to Livelihood</strong> and out of
                poverty. You can help us enable children to complete secondary
                education, delay their age of marriage, and skill young people to
                be in secure and stable employment — thereby moving a generation
                out of poverty.
              </p>

            </motion.div>

            {/* --- Right (Form) --- */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-brand-yellow/20 rounded-2xl p-1 shadow-sm border border-brand-yellow/40"
            >
              <div className="bg-white rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-extrabold text-ink text-center">
                  Let’s Get in Touch
                </h3>
                <p className="text-sm text-ink/60 mt-2 text-center max-w-md mx-auto">
                  Share a few details and our partnerships team will reach out.
                </p>

                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Your Name*"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                    />
                    <Input
                      label="Email Address*"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Contact No.*"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      required
                    />
                    <Select
                      label="Type of Partnership"
                      name="partnership"
                      value={form.partnership}
                      onChange={onChange}
                      options={[
                        "CSR Partnership",
                        "Employee Volunteering",
                        "Institutional",
                        "Government / Knowledge",
                        "Employer",
                        "HNI / Individual",
                        "Other",
                      ]}
                    />
                  </div>

                  {/* Row 3 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Organisation name*"
                      name="org"
                      value={form.org}
                      onChange={onChange}
                      required
                    />
                    <Input
                      label="How did you hear about Magic Bus"
                      name="referral"
                      value={form.referral}
                      onChange={onChange}
                    />
                  </div>

                  {/* Message */}
                  <TextArea
                    label="Have a question? Write to us. (limit 100 words)*"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={4}
                  />

                  {/* reCAPTCHA placeholder */}
                  <div className="rounded-lg border border-border bg-gray-50 px-4 py-3 text-sm text-ink/70">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4 accent-brand-red" />
                      <span>I'm not a robot (reCAPTCHA placeholder)</span>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-brand-red px-8 py-3 font-bold text-brand-red hover:bg-brand-red hover:text-white transition disabled:opacity-60"
                    >
                      SUBMIT
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </form>

                {/* Contact quick links */}
                <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-border hover:shadow transition">
                    <div className="p-2 rounded-lg bg-brand-red/10">
                      <Mail className="w-5 h-5 text-brand-red" />
                    </div>
                    <div>
                      <div className="text-sm text-ink/60">Write to us</div>
                      <a
                        href="mailto:csr@magicbusindia.org"
                        className="font-semibold hover:text-brand-red"
                      >
                        csr@magicbusindia.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-border hover:shadow transition">
                    <div className="p-2 rounded-lg bg-brand-yellow/20">
                      <Phone className="w-5 h-5 text-brand-black" />
                    </div>
                    <div>
                      <div className="text-sm text-ink/60">Call / WhatsApp</div>
                      <a href="tel:8976720830" className="font-semibold">
                        +91 89767 20830
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== 4) SECONDARY TEXT ===== */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-ink/80 text-lg leading-relaxed"
            >
              There are several ways to lend your support to our work. If you
              are interested in helping change young lives forever, you can
              collaborate with us. We would love to hear from you to figure out
              the various opportunities through which we can work together.
            </motion.p>
          </div>
        </section>

        {/* ===== 5) PLEASE CONTACT TABLE ===== */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h4
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl font-extrabold text-ink mb-6"
            >
              Please Contact
            </motion.h4>

            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="divide-y divide-border">
                {rows.map((r, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    custom={idx * 0.2}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 gap-4 items-center px-4 py-4 bg-brand-yellow/20"
                  >
                    <div className="text-ink text-sm sm:text-base">{r.label}</div>
                    <div className="sm:text-right">
                      <a
                        href={`mailto:${r.email}`}
                        className="inline-flex items-center gap-2 font-semibold text-brand-red hover:underline"
                      >
                        {r.email}
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 6) FLOATING TOP BUTTON ===== */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 bottom-6 z-40 rounded-md bg-brand-red text-white px-3 py-2 text-xs font-bold shadow-lg hover:bg-red-600"
          aria-label="Scroll to top"
        >
          Top
        </button>
      </main>
    </Layout>
  );
}

/* ----------------------------- Tiny inputs ------------------------------ */
function Input({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-ink mb-1">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-brand-yellow/30 focus:border-brand-yellow"
      />
    </label>
  );
}

function Select({ label, options = [], className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-ink mb-1">{label}</span>
      <select
        {...props}
        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-brand-yellow/30 focus:border-brand-yellow"
      >
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

function TextArea({ label, className = "", rows = 4, ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-ink mb-1">{label}</span>
      <textarea
        rows={rows}
        {...props}
        className="w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-brand-yellow/30 focus:border-brand-yellow"
      />
    </label>
  );
}
