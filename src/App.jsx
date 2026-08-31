import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./index.css";

const Home = lazy(() => import('./pages/Home'))
const HomeOld = lazy(() => import('./pages/HomeOld'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const WhoWeAre = lazy(() => import('./pages/WhoWeAre'))
const OurTeam = lazy(() => import('./pages/OurTeam'))
const OurCulture = lazy(() => import('./pages/OurCulture'))
const BoardOfDirectors = lazy(() => import('./pages/BoardOfDirectors'))
const LearningDevelopment = lazy(() => import('./pages/LearningDevelopment'))
const AdolescentProgramme = lazy(() => import('./pages/AdolescentProgramme'))
const GovernmentPartnershipProgramme = lazy(() => import('./pages/GovernmentPartnershipProgramme'))
const YouthForChangeFellowshipProgramme = lazy(() => import('./pages/YouthForChangeFellowshipProgramme'))
const EmployeeVolunteeringProgramme = lazy(() => import('./pages/EmployeeVolunteeringProgramme'))
const MagicMitra = lazy(() => import('./pages/MagicMitra'))
const LivelihoodProgramme = lazy(() => import('./pages/LivelihoodProgramme'))
const YouthSkillingProgramme = lazy(() => import('./pages/YouthSkillingProgramme'))
const ConnectWithWork = lazy(() => import('./pages/ConnectWithWork'))
const DigitalSkilling = lazy(() => import('./pages/DigitalSkilling'))
const EntrepreneurshipDevelopmentProgramme = lazy(() => import('./pages/EntrepreneurshipDevelopmentProgramme'))
const MBDost = lazy(() => import('./pages/MBDost'))
const FutureX = lazy(() => import('./pages/FutureX'))
const OurApproach = lazy(() => import('./pages/OurApproach'))
const DonateNow = lazy(() => import('./pages/DonateNow'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const PartnerWithUs = lazy(() => import('./pages/PartnerWithUs'))
const Blogs = lazy(() => import('./pages/Blogs'))
const News = lazy(() => import('./pages/News'))
const Certifications = lazy(() => import('./pages/Certifications'))
const Reports = lazy(() => import('./pages/Reports'))
const ImpactReports = lazy(() => import('./pages/ImpactReports'))
const AnnualReports = lazy(() => import('./pages/AnnualReports'))
const GenderJourneyReport = lazy(() => import('./pages/GenderJourneyReport'))
const FLFPRReport = lazy(() => import('./pages/FLFPRReport'))
const Gallery = lazy(() => import('./pages/Gallery'))
const CorporatePartners = lazy(() => import('./pages/CorporatePartners'))
const FoundationPartners = lazy(() => import('./pages/FoundationPartners'))
const GovernmentPartners = lazy(() => import('./pages/GovernmentPartners'))
const KnowledgePartners = lazy(() => import('./pages/KnowledgePartners'))
const EmploymentPartners = lazy(() => import('./pages/EmploymentPartners'))
const ChildProtectionPolicy = lazy(() => import('./pages/ChildProtectionPolicy'))
const PoshPolicy = lazy(() => import('./pages/PoshPolicy'))
const WorkWithUs = lazy(() => import('./pages/WorkWithUs'))
const Events = lazy(() => import('./pages/Events'))
const Podcasts = lazy(() => import('./pages/Podcasts'))
const MBAcademy = lazy(() => import('./pages/MBAcademy'))
const Darwinbox = lazy(() => import('./pages/Darwinbox'))
const FAQ = lazy(() => import('./pages/FAQ'))

function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-yellow border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-old" element={<HomeOld />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-culture" element={<OurCulture />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/learning-development" element={<LearningDevelopment />} />
          <Route path="/adolescent-programme" element={<AdolescentProgramme />} />
          <Route path="/government-partnership-programme" element={<GovernmentPartnershipProgramme />} />
          <Route path="/youth-for-change-fellowship-programme" element={<YouthForChangeFellowshipProgramme />} />
          <Route path="/employee-volunteering" element={<EmployeeVolunteeringProgramme />} />
          <Route path="/magic-mitra" element={<MagicMitra />} />
          <Route path="/livelihood-programme" element={<LivelihoodProgramme />} />
          <Route path="/youth-skilling-programme" element={<YouthSkillingProgramme />} />
          <Route path="/connect-with-work" element={<ConnectWithWork />} />
          <Route path="/digital-skilling" element={<DigitalSkilling />} />
          <Route path="/entrepreneurship-development-programme" element={<EntrepreneurshipDevelopmentProgramme />} />
          <Route path="/mb-dost" element={<MBDost />} />
          <Route path="/futurex" element={<FutureX />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/impact-reports" element={<ImpactReports />} />
          <Route path="/annual-reports" element={<AnnualReports />} />
          <Route path="/gender-journey-report" element={<GenderJourneyReport />} />
          <Route path="/flfpr-report" element={<FLFPRReport />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/corporate-partners" element={<CorporatePartners />} />
          <Route path="/foundation-partners" element={<FoundationPartners />} />
          <Route path="/government-partners" element={<GovernmentPartners />} />
          <Route path="/knowledge-partners" element={<KnowledgePartners />} />
          <Route path="/employment-partners" element={<EmploymentPartners />} />
          <Route path="/child-protection-policy" element={<ChildProtectionPolicy />} />
          <Route path="/posh-policy" element={<PoshPolicy />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/mb-academy" element={<MBAcademy />} />
          <Route path="/darwinbox" element={<Darwinbox />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
