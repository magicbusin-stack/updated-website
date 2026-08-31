import { useState } from "react";
import { Instagram, Linkedin, Youtube, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function FooterColumn({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group border-b border-white/10 pb-3 md:border-0 md:pb-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-1 py-2 -my-2 text-left text-sm font-semibold tracking-tight text-white md:w-auto md:cursor-default md:justify-start md:py-0 md:my-0"
      >
        {title}
        <ChevronDown
          className={`h-3.5 w-3.5 text-white/50 transition-transform duration-300 md:group-hover:rotate-180 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* Mobile: plain conditional render on tap — guaranteed to work regardless of any CSS transition quirks */}
      {open && <div className="mt-4 md:hidden">{children}</div>}

      {/* Desktop: CSS-only hover reveal (unchanged behavior for pointer users) */}
      <div className="hidden md:grid md:grid-rows-[0fr] md:opacity-0 md:transition-all md:duration-300 md:ease-out md:group-hover:mt-4 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <footer className="bg-gray-900 text-gray-300 text-xs">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">

          {/* ABOUT US */}
          <FooterColumn title="About Us">
            <ul className="space-y-2">
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Our Approach</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Our Team</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Our Culture</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Board of Directors</a></li>
            </ul>
          </FooterColumn>

          {/* PROGRAMMES */}
          <FooterColumn title="Programmes">
            <p className="font-semibold text-white mt-2">Adolescent Programme</p>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Government Partnership Programme</a></li>
              <li><Link to="/youth-for-change-fellowship-programme" className="font-medium hover:text-brand-yellow transition-colors">Youth for Change Fellowship Programme</Link></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">MB Dost</a></li>
            </ul>

            <p className="font-semibold text-white mt-4">Livelihood Programme</p>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Standard Skilling</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Digital Skilling</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Rural Youth Livelihoods</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Future X</a></li>
            </ul>

            <p className="font-semibold text-white mt-4"><Link to="/employee-volunteering" className="hover:text-brand-yellow transition-colors">Employee Volunteering Programme</Link></p>
          </FooterColumn>

          {/* PARTNERS */}
          <FooterColumn title="Partners">
            <ul className="space-y-2">
              <li><Link to="/corporate-partners" className="font-medium hover:text-brand-yellow transition-colors">Corporate Partners</Link></li>
              <li><Link to="/foundation-partners" className="font-medium hover:text-brand-yellow transition-colors">Foundations & Institutions</Link></li>
              <li><Link to="/government-partners" className="font-medium hover:text-brand-yellow transition-colors">Government Partners</Link></li>
              <li><Link to="/knowledge-partners" className="font-medium hover:text-brand-yellow transition-colors">Knowledge Partners</Link></li>
              <li><Link to="/employment-partners" className="font-medium hover:text-brand-yellow transition-colors">Employment Partners</Link></li>
              <li><Link to="/partner" className="font-medium hover:text-brand-yellow transition-colors">Partner Connect</Link></li>
            </ul>
          </FooterColumn>

          {/* RESOURCES */}
          <FooterColumn title="Resources">
            <p className="font-semibold text-white mt-2">Reports & Publications</p>
            <ul className="space-y-2 mt-2">
              <li><Link to="/impact-reports" className="font-medium hover:text-brand-yellow transition-colors">Impact Reports</Link></li>
              <li><Link to="/annual-reports" className="font-medium hover:text-brand-yellow transition-colors">Annual Reports</Link></li>
              <li><Link to="/gender-journey-report" className="font-medium hover:text-brand-yellow transition-colors">Gender Journey Report</Link></li>
              <li><Link to="/flfpr-report" className="font-medium hover:text-brand-yellow transition-colors">FLFPR Report</Link></li>
            </ul>

            <p className="font-semibold text-white mt-4">Media & Stories</p>
            <ul className="space-y-2 mt-2">
              <li><Link to="/events" className="font-medium hover:text-brand-yellow transition-colors">Events</Link></li>
              <li><Link to="/podcasts" className="font-medium hover:text-brand-yellow transition-colors">Podcasts</Link></li>
              <li><Link to="/news" className="font-medium hover:text-brand-yellow transition-colors">News</Link></li>
              <li><Link to="/blogs" className="font-medium hover:text-brand-yellow transition-colors">Blogs</Link></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Podcast</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Web Stories</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Success Stories</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Testimonials</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Awards</a></li>
            </ul>

            <p className="font-semibold text-white mt-4">Help & Support</p>
            <ul className="space-y-2 mt-2">
              <li><Link to="/faq" className="font-medium hover:text-brand-yellow transition-colors">FAQs</Link></li>
            </ul>
          </FooterColumn>

          {/* INTERNATIONAL PRESENCE */}
          <FooterColumn title="International Presence">
            <ul className="space-y-2 mb-4">
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Magic Bus USA</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Magic Bus UK</a></li>
            </ul>

            <p className="font-semibold text-white">Life @ Magic Bus</p>
            <ul className="space-y-2 mt-2 mb-4">
              <li><Link to="/work-with-us" className="font-medium hover:text-brand-yellow transition-colors">Work With Us</Link></li>
              <li><Link to="/mb-academy" className="font-medium hover:text-brand-yellow transition-colors">MB Academy</Link></li>
              <li><Link to="/darwinbox" className="font-medium hover:text-brand-yellow transition-colors">Darwin (Employee Login)</Link></li>
              <li><Link to="/learning-development" className="font-medium hover:text-brand-yellow transition-colors">Learning & Development</Link></li>
            </ul>

            <p className="font-semibold text-white">India Locations</p>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Mumbai</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Hyderabad</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Kolkata</a></li>
              <li><a href="#" className="font-medium hover:text-brand-yellow transition-colors">Noida</a></li>
            </ul>
          </FooterColumn>

          {/* CONNECT WITH US — always visible: contact info & subscribe form, not a link list */}
          <div>
            <h4 className="text-sm font-semibold tracking-tight text-white mb-4">
              Connect With Us
            </h4>

            <p className="leading-relaxed mb-2">
              <strong>Head Office:</strong><br />
              123 Development Street,<br />
              Mumbai, Maharashtra 400001,<br />
              India
            </p>

            <p className="mb-1">Phone: +91 22 1234 5678</p>
            <p className="mb-3">Email: info@magicbus.org</p>

            <p className="font-semibold text-white mb-1">
              Subscribe for updates
            </p>
            <form onSubmit={handleSubmit} className="space-y-1">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-gray-400 focus:outline-none focus:border-brand-yellow transition-colors"
              />
              <button className="w-full bg-brand-red hover:bg-brand-yellow hover:text-brand-black py-1 rounded text-xs font-semibold text-white transition-colors">
                Subscribe
              </button>
            </form>

            <div className="flex gap-3 mt-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:scale-110 hover:text-brand-yellow transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:scale-110 hover:text-brand-yellow transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:scale-110 hover:text-brand-yellow transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-2 border-t border-white/10 pt-8 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Magic Bus. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="underline hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="underline hover:text-brand-yellow transition-colors">Terms & Conditions</a>
            <Link to="/posh-policy" className="underline hover:text-brand-yellow transition-colors">POSH Policy</Link>
            <Link to="/child-protection-policy" className="underline hover:text-brand-yellow transition-colors">Child Protection Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
