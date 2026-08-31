// src/pages/DonateNow.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  X as XIcon,
  BookOpen,
  Briefcase,
  GraduationCap,
  School,
  Map,
  HeartPulse,
  CreditCard,
  Smartphone,
  Landmark,
  User,
  Mail,
  Phone,
  Maximize,
  Play,
  Pause,
} from "lucide-react";
import Layout from "../components/Layout";
import StatsCircularProgress from "../components/ui/stat-card-circular-progress";
import InfoCard from "../components/ui/info-card";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function DonateNow() {
  // === CONFIGURATION ===
  const donationConfig = {
    "one-time": { amounts: [3000, 6000, 12000, 18000], default: 3000, min: 300 },
    monthly: { amounts: [800, 1000, 1500, 2000], default: 800, min: 600 },
  };

  // state
  const [frequency, setFrequency] = useState("one-time");
  const [citizenship, setCitizenship] = useState("indian");
  const currentConfig = donationConfig[frequency];

  // hero video controls
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  const handleFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen(); // iOS Safari
  };

  const [selectedAmount, setSelectedAmount] = useState(currentConfig.default);
  const [customAmount, setCustomAmount] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    referral: "",
  });

  const [wants80G, setWants80G] = useState(false);
  const [taxForm, setTaxForm] = useState({
    panCard: "",
    address: "",
    pincode: "",
    state: "",
    city: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // helpers
  const effectiveAmount = () => {
    const custom = Number((customAmount || "").toString().replace(/[^\d]/g, ""));
    if (customAmount !== "") return custom;
    return Number(selectedAmount || 0);
  };

  const handleFrequencyChange = (newFreq) => {
    setFrequency(newFreq);
    setSelectedAmount(donationConfig[newFreq].default);
    setCustomAmount("");
    setErrors((e) => ({ ...e, amount: undefined }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleTaxFormChange = (e) => {
    const { name, value } = e.target;
    setTaxForm((s) => ({ ...s, [name]: value }));
  };

  const handleAmountClick = (val) => {
    setSelectedAmount(val);
    setCustomAmount("");
    setErrors((e) => ({ ...e, amount: undefined }));
  };

  const handleCustomAmountChange = (e) => {
    const v = e.target.value.replace(/[^\d]/g, "");
    setCustomAmount(v);
    setSelectedAmount(null);
    setErrors((er) => ({ ...er, amount: undefined }));
  };

  const validate = () => {
    const errs = {};
    const required = ["fullName", "mobile", "email"];
    required.forEach((k) => {
      if (!form[k]?.trim()) errs[k] = "Required";
    });

    const amt = effectiveAmount();
    if (!amt || amt < currentConfig.min) {
      errs.amount = `Minimum donation for ${frequency} is ₹ ${currentConfig.min}`;
    }

    if (wants80G) {
      const taxRequired = ["panCard", "address", "pincode", "state", "city"];
      taxRequired.forEach((k) => {
        if (!taxForm[k]?.trim()) errs[k] = "Required";
      });
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      // NOTE: integrate real payment flow / API here
    }, 700);
  };

  return (
    <Layout>
      <main className="bg-white text-ink font-sans min-h-screen">
        {/* ===== HERO + FORM ===== */}
        {/* marginTop reserves the fixed header's live-measured height (same
            --header-h mechanism the homepage hero uses) so the header can
            never overlap this section. The video sits in its own
            aspect-ratio box in normal document flow — no absolute/fixed
            positioning, no 100vh — so it can't behave like a full-screen
            background or overlap the form. */}
        <section
          className="relative w-full bg-white"
          style={{ marginTop: "var(--header-h, 113px)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              {/* LEFT on desktop, SECOND on mobile: hero content — its own contained area */}
              <motion.div
                className="order-2 lg:order-1"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="inline-block bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-sm font-semibold">
                  Be a changemaker
                </span>
                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase leading-[1.05] tracking-tight text-brand-black">
                  We can save the <span className="text-brand-red">future</span>
                </h1>
                <p className="mt-5 max-w-md text-base md:text-lg text-gray-600">
                  Support life skills education, education enhancement and livelihood
                  skilling for children and youth — and help them break the cycle of
                  poverty.
                </p>

                {/* Video — contained in its own box, native aspect ratio. Stays
                    put in this column, but is fully interactive: play/pause,
                    mute/unmute, and a real browser fullscreen button. */}
                <div className="group relative mt-8 w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-[#111]">
                  <video
                    ref={videoRef}
                    src="/ngo-videos/mbif-homepage-video.mp4"
                    poster="/ngo-videos/mbif-homepage-video-poster.jpg"
                    className="h-full w-full object-cover cursor-pointer"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onClick={togglePlay}
                  />

                  {/* Center play/pause affordance — shows on hover, or always when paused */}
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                      isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                    }`}
                  >
                    <span className="h-14 w-14 rounded-full bg-black/50 backdrop-blur-sm grid place-items-center text-white">
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
                    </span>
                  </button>

                  {/* Fullscreen control — desktop only; always visible there
                      (not hover-only, since hover doesn't exist on touch) */}
                  <div className="hidden lg:flex absolute bottom-3 right-3 items-center gap-2">
                    <button
                      type="button"
                      onClick={handleFullscreen}
                      aria-label="Watch fullscreen"
                      className="h-9 w-9 rounded-full bg-black/50 backdrop-blur-sm grid place-items-center text-white hover:bg-black/70 transition-colors"
                    >
                      <Maximize className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT on desktop, FIRST on mobile: donation form — its own area, plain document flow */}
              <motion.aside
                id="donation-form"
                className="order-1 lg:order-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100">
                  {/* tax exemption strip */}
                  <div className="bg-brand-yellow/15 border border-brand-yellow/40 text-brand-black px-4 py-3 rounded-xl mb-6 text-center">
                    <div className="text-sm md:text-base font-black tracking-tight">
                      50% Tax Exemption Under Section 80G*
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5 font-medium">
                      *Only applicable for Indian citizens
                    </div>
                  </div>

                  {/* frequency toggle */}
                  <div className="mb-5">
                    <div className="inline-flex w-full rounded-full bg-gray-100 p-1" role="tablist">
                      <button
                        type="button"
                        onClick={() => handleFrequencyChange("one-time")}
                        role="tab"
                        aria-selected={frequency === "one-time"}
                        className={`flex-1 px-4 py-2 rounded-full text-sm font-bold transition ${frequency === "one-time" ? "bg-brand-red text-white shadow" : "text-gray-700"
                          }`}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        onClick={() => handleFrequencyChange("monthly")}
                        role="tab"
                        aria-selected={frequency === "monthly"}
                        className={`flex-1 px-4 py-2 rounded-full text-sm font-bold transition ${frequency === "monthly" ? "bg-brand-red text-white shadow" : "text-gray-700"
                          }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* citizenship */}
                  <div className="mb-5 flex flex-col sm:flex-row gap-3 sm:items-center">
                    <label className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer">
                      <input
                        type="radio"
                        name="citizenship"
                        className="h-4 w-4 accent-brand-red"
                        checked={citizenship === "indian"}
                        onChange={() => setCitizenship("indian")}
                      />
                      <span>I am an Indian citizen</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer">
                      <input
                        type="radio"
                        name="citizenship"
                        className="h-4 w-4 accent-brand-red"
                        checked={citizenship === "non-indian"}
                        onChange={() => setCitizenship("non-indian")}
                      />
                      <span>I am not an Indian citizen</span>
                    </label>
                  </div>

                  {/* amounts */}
                  <div className="mb-5">
                    <div className="text-sm font-semibold mb-2 text-gray-800">Choose an amount</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {currentConfig.amounts.map((amt) => {
                        const isSelected = selectedAmount === amt && customAmount === "";
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => handleAmountClick(amt)}
                            className={`py-3 px-2 rounded-lg text-sm font-bold border flex items-center justify-center gap-2 transition
                            ${isSelected
                                ? "bg-brand-red text-white border-brand-red shadow"
                                : "bg-white text-gray-800 border-gray-200 hover:border-brand-red/50"
                              }`}
                            aria-pressed={isSelected}
                          >
                            <span>₹ {amt.toLocaleString()}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* custom amount */}
                    <div className="mt-3">
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                        <input
                          type="text"
                          inputMode="numeric"
                          placeholder={`Min. ${currentConfig.min}`}
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className={`w-full pl-8 pr-3 py-3 rounded-lg border text-sm font-medium focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none ${customAmount !== "" ? "border-brand-yellow bg-yellow-50" : "border-gray-200"
                            }`}
                          aria-label="Custom amount"
                        />
                      </div>
                      {errors.amount && <p className="text-xs text-brand-red mt-1 font-medium">{errors.amount}</p>}
                      <p className="text-xs text-gray-600 mt-2">
                        <strong>Total to be charged:</strong> ₹ {effectiveAmount().toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* payment method */}
                  <div className="mb-5">
                    <div className="text-sm font-semibold mb-2 text-gray-800">Payment method</div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-2">
                      {[
                        { key: "card", label: "Card", icon: CreditCard },
                        { key: "upi", label: "UPI", icon: Smartphone },
                        { key: "netbanking", label: "Net Banking", icon: Landmark },
                      ].map(({ key, label, icon: Icon }) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setPaymentMethod(key)}
                          aria-pressed={paymentMethod === key}
                          className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border py-3 text-xs font-bold transition ${
                            paymentMethod === key
                              ? "border-brand-red bg-brand-red text-white shadow"
                              : "border-gray-200 bg-white text-gray-700 hover:border-brand-red/50"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* form */}
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Field
                        icon={User}
                        name="fullName"
                        placeholder="Full Name *"
                        value={form.fullName}
                        onChange={handleChange}
                        error={errors.fullName}
                        className="sm:col-span-2"
                      />
                      <Field
                        icon={Phone}
                        name="mobile"
                        placeholder="Mobile *"
                        value={form.mobile}
                        onChange={handleChange}
                        error={errors.mobile}
                      />
                      <Field
                        icon={Mail}
                        name="email"
                        placeholder="Email Id *"
                        value={form.email}
                        onChange={handleChange}
                        error={errors.email}
                      />

                      <div className="sm:col-span-2">
                        <select
                          name="referral"
                          value={form.referral}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:border-brand-yellow transition-colors"
                          aria-label="How did you know about us?"
                        >
                          <option value="">How did you know about us?</option>
                          <option>Social Media</option>
                          <option>Search</option>
                          <option>Friend / Family</option>
                          <option>Event</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    {/* 80G certificate opt-in */}
                    <div>
                      <label className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded accent-brand-red"
                          checked={wants80G}
                          onChange={(e) => setWants80G(e.target.checked)}
                        />
                        <span>I would like to receive 80(G) Certificate</span>
                      </label>

                      {wants80G && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-3 space-y-3"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <input
                                name="panCard"
                                type="text"
                                placeholder="PAN Card No. *"
                                value={taxForm.panCard}
                                onChange={handleTaxFormChange}
                                className={`w-full rounded-xl border bg-white px-4 py-3 text-sm uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
                                  errors.panCard ? "border-brand-red" : "border-gray-200 focus:border-brand-yellow"
                                }`}
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                To get the 80-G certificate, please enter your PAN number
                              </p>
                              {errors.panCard && <span className="text-xs text-brand-red block">Required</span>}
                            </div>
                            <div>
                              <textarea
                                name="address"
                                placeholder="Address"
                                value={taxForm.address}
                                onChange={handleTaxFormChange}
                                rows={2}
                                className={`w-full rounded-xl border bg-white px-4 py-3 text-sm resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
                                  errors.address ? "border-brand-red" : "border-gray-200 focus:border-brand-yellow"
                                }`}
                              />
                              {errors.address && <span className="text-xs text-brand-red block">Required</span>}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <Field
                              name="pincode"
                              placeholder="Pin Code"
                              value={taxForm.pincode}
                              onChange={handleTaxFormChange}
                              error={errors.pincode}
                            />
                            <Field
                              name="state"
                              placeholder="State"
                              value={taxForm.state}
                              onChange={handleTaxFormChange}
                              error={errors.state}
                            />
                            <Field
                              name="city"
                              placeholder="City"
                              value={taxForm.city}
                              onChange={handleTaxFormChange}
                              error={errors.city}
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={submitting}
                      className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-brand-red text-white text-base font-bold shadow-lg transition-all hover:shadow-2xl hover:shadow-brand-red/20 disabled:opacity-70 disabled:cursor-not-allowed"
                      whileHover={!submitting ? { scale: 1.02 } : {}}
                      whileTap={!submitting ? { scale: 0.98 } : {}}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {submitting ? "Processing…" : "DONATE NOW"} <ArrowRight size={16} />
                      </span>
                    </motion.button>
                  </form>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* ===== WHY DONATE ===== */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-black text-center">
                Empower the Future of India with Magic Bus
              </h2>

              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>
                  Imagine a world where every young person has access to education and the opportunity to reach their full potential.
                  This is the world that Magic Bus is striving to create. With your support, we can make this a reality.
                </p>

                <p>
                  Your contribution will help us give young people the tools they need to succeed. Through our
                  programmes, we empower young people with <strong>life skills education</strong>, <strong>education enhancement</strong>,
                  and <strong>livelihood skilling</strong> to equip them to break out of poverty and build a better life for themselves and their families.
                </p>

                <p>
                  Every donation can make a difference. Donate today and help us create a more just and equitable society for all.
                </p>
              </div>

              {/* Legal / disclaimer */}
              <div className="mt-2 p-4 rounded-lg bg-yellow-50 border-l-4 border-brand-yellow/70">
                <p className="text-base md:text-lg text-brand-red font-bold leading-snug">
                  All donations to Magic Bus are eligible for{" "}
                  <mark className="bg-brand-yellow text-brand-black px-1.5 py-0.5 rounded font-black">
                    50% tax exemption under Section 80G
                  </mark>{" "}
                  of the Income Tax Act.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Magic Bus is a non-profit organisation registered as <em>Magic Bus India Foundation</em>.
                </p>
              </div>

              {/* Impact / quick stats */}
              <StatsCircularProgress
                stats={[
                  { icon: GraduationCap, value: 1.6, decimalPlaces: 1, suffix: "M", label: "Children Educated", color: "#E12228" },
                  { icon: School, value: 735, label: "Education Centres", color: "#FFCC04" },
                  { icon: Map, value: 21, label: "States", color: "#21BDEA" },
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* ===== IMPACT SECTION ===== */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">What Will Your Donation Support?</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Your contribution directly impacts the lives of children across India
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <InfoCard
                icon={BookOpen}
                title="Primary & Secondary Education"
                description="Quality learning for children"
                borderColor="#E12228"
              />
              <InfoCard
                icon={HeartPulse}
                title="Regular Health Check-ups"
                description="Medical support & nutrition"
                borderColor="#FFCC04"
              />
              <InfoCard
                icon={GraduationCap}
                title="Transferable Skills & Youth Training"
                description="Building future leaders"
                borderColor="#21BDEA"
              />
              <InfoCard
                icon={Briefcase}
                title="Vocational Education & Skill Training"
                description="Career opportunities"
                borderColor="#B3CC35"
              />
            </div>
          </div>
        </section>

        {/* ===== SUCCESS TOAST ===== */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed right-6 bottom-6 z-50 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 border"
            role="status"
          >
            <CheckCircle className="text-brand-green w-6 h-6" />
            <div>
              <div className="font-semibold">Thank you!</div>
              <div className="text-sm text-gray-600">
                Your donation of ₹{effectiveAmount().toLocaleString()} is being processed.
              </div>
            </div>
            <button onClick={() => setSuccess(false)} className="ml-2 p-2 rounded-md hover:bg-gray-100">
              <XIcon size={16} />
            </button>
          </motion.div>
        )}
      </main>
    </Layout>
  );
}

/* ---------- Small field components ---------- */
function Field({ name, value, onChange, placeholder, error, type = "text", className = "", icon: Icon }) {
  return (
    <label className={`block ${className}`}>
      <span className="sr-only">{placeholder}</span>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        )}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-xl border bg-white py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 ${
            Icon ? "pl-10 pr-4" : "px-4"
          } ${error ? "border-brand-red" : "border-gray-200 focus:border-brand-yellow"}`}
        />
      </div>
      {error && <span className="text-xs text-brand-red mt-1 block">Required</span>}
    </label>
  );
}
