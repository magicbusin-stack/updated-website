import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const StrategicFramework = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Strategic Framework
          </h2>
          <p className="mt-2 text-lg text-gray-600">Childhood to Livelihood</p>
        </motion.div>

        {/* Main Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >

          {/* COLUMN 1: STRATEGIC PATHWAYS (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <HeaderBadge color="bg-rose-100 text-rose-700 border-rose-200">
              Strategic Pathways
            </HeaderBadge>

            <Card accent="#E11D48" className="border-l-4 border-rose-500">
              <h4 className="text-rose-600 font-bold text-lg mb-2">
                Life Skills Education (LSE) for Adolescents <span className="text-sm font-normal text-gray-500">(12-18 Yrs)</span>
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Proving and implementing a school-based model for LSE for adolescents that works at significant scale and can be integrated within the government system.
              </p>
            </Card>

            <Card accent="#E11D48" className="border-l-4 border-rose-500">
              <h4 className="text-rose-600 font-bold text-lg mb-2">
                Livelihood Opportunities for Youth <span className="text-sm font-normal text-gray-500">(18-25 Yrs)</span>
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Large scale direct delivery, leveraging partners and technology to achieve unparalleled efficiency and quality of programming.
              </p>
            </Card>
          </div>

          {/* ARROW 1 (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-1 h-full items-center justify-center">
             <motion.div
               animate={{ x: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
             >
               <ArrowRight className="w-8 h-8 text-gray-300" />
             </motion.div>
          </div>

          {/* COLUMN 2: BEST-IN-CLASS PROGRAMMES (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            <HeaderBadge color="bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200">
              Best-In-Class Programmes
            </HeaderBadge>

            {/* Split Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card accent="#C026D3" className="border-t-4 border-fuchsia-500 h-full">
                <h4 className="text-fuchsia-600 font-bold mb-2">Direct Delivery</h4>
                <p className="text-xs text-gray-600">
                  School-based, community embedded, programme delivered by Magic Bus staff.
                </p>
              </Card>

              <Card accent="#C026D3" className="border-t-4 border-fuchsia-500 h-full">
                <h4 className="text-fuchsia-600 font-bold mb-2">Govt. Partnership</h4>
                <p className="text-xs text-gray-600">
                  School-based programme, leveraging teacher training for delivery of Life Skills Education.
                </p>
              </Card>
            </div>

            {/* Bottom Row */}
            <Card accent="#C026D3" className="border-t-4 border-fuchsia-500 flex-1 flex flex-col justify-center text-center">
              <h4 className="text-fuchsia-600 font-bold text-lg mb-2">Livelihood Connect</h4>
              <p className="text-sm text-gray-600">
                Life and employability skills training, placement, and post-placement support.
              </p>
            </Card>
          </div>

           {/* ARROW 2 (Desktop Only) */}
           <div className="hidden lg:flex lg:col-span-1 h-full items-center justify-center">
             <motion.div
               animate={{ x: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
             >
               <ArrowRight className="w-8 h-8 text-gray-300" />
             </motion.div>
          </div>

          {/* COLUMN 3: OUTCOMES OF FOCUS (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <HeaderBadge color="bg-sky-100 text-sky-700 border-sky-200">
              Outcomes of Focus
            </HeaderBadge>

            {/* School Outcomes - Cyan Theme */}
            <div className="relative group">
              <span className="absolute -top-3 left-4 px-2 py-0.5 text-xs font-bold bg-cyan-500 text-white rounded shadow-sm z-10">
                SCHOOL OUTCOMES
              </span>
              <Card accent="#06B6D4" className="border-2 border-cyan-100 hover:border-cyan-300 pt-6">
                <h5 className="font-bold text-cyan-700 mb-1">Academic Success</h5>
                <p className="text-xs text-gray-600">
                  School participation, regularity, grade transition, learning engagement.
                </p>
              </Card>
            </div>

            {/* Life Outcomes - Lime Theme */}
            <div className="relative group">
              <span className="absolute -top-3 left-4 px-2 py-0.5 text-xs font-bold bg-lime-500 text-white rounded shadow-sm z-10">
                LIFE OUTCOMES
              </span>
              <Card accent="#84CC16" className="border-2 border-lime-100 hover:border-lime-300 pt-6">
                <h5 className="font-bold text-lime-700 mb-1">Empowerment</h5>
                <p className="text-xs text-gray-600">
                  Agency (esp. girls), resilience, self-efficacy, problem solving, gender equality.
                </p>
              </Card>
            </div>

            {/* Work Outcomes - Red Theme */}
            <Card accent="#EF4444" className="relative flex flex-col gap-3 border-2 border-red-50 hover:shadow-md">
               <span className="absolute -top-3 left-4 px-2 py-0.5 text-xs font-bold bg-red-500 text-white rounded shadow-sm z-10">
                WORK OUTCOMES
              </span>

              <div className="mt-2">
                <h5 className="font-bold text-red-600 text-sm">Employability</h5>
                <p className="text-xs text-gray-500">Career awareness, digital & financial literacy.</p>
              </div>
              <div className="w-full h-px bg-red-100"></div>

              <div>
                <h5 className="font-bold text-red-600 text-sm">Job Placement</h5>
                <p className="text-xs text-gray-500">Placement in sustainable jobs with aspirational salaries.</p>
              </div>
              <div className="w-full h-px bg-red-100"></div>

              <div>
                <h5 className="font-bold text-red-600 text-sm">Workplace Success</h5>
                <p className="text-xs text-gray-500">Long-term income, job satisfaction & performance.</p>
              </div>
            </Card>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Sub-components for cleaner code ---

const HeaderBadge = ({ children, color }) => (
  <div className={`w-full py-3 text-center font-bold uppercase tracking-wide rounded-lg border ${color} shadow-sm`}>
    {children}
  </div>
);

const Card = ({ children, className = "", accent = "#FFCC04" }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`shaderFrameworkCard group relative overflow-hidden bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    style={{ "--shader-accent": accent }}
  >
    <div className="shaderFrameworkBlob" aria-hidden="true" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

export default StrategicFramework;

const styles = `
.shaderFrameworkCard {
  isolation: isolate;
}

.shaderFrameworkBlob {
  position: absolute;
  top: -40%;
  right: -30%;
  width: 65%;
  height: 65%;
  border-radius: 9999px;
  background: radial-gradient(circle, var(--shader-accent), transparent 70%);
  filter: blur(28px);
  opacity: 0.14;
  transition: opacity 0.35s ease, transform 0.35s ease;
  z-index: 0;
  pointer-events: none;
}

.shaderFrameworkCard:hover .shaderFrameworkBlob {
  opacity: 0.28;
  transform: scale(1.15);
}
`;

let injected = false;
function injectStyles() {
  if (typeof document !== "undefined" && !injected) {
    const styleSheet = document.createElement("style");
    styleSheet.setAttribute("data-strategic-framework", "true");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    injected = true;
  }
}

injectStyles();
