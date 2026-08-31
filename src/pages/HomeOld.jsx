import AIDigitalSection from '../components/Home/AIDigitalSection';
import AwardsShowcase from '../components/Home/AwardsShowcase';
import EventsCampaigns from '../components/Home/EventsCampaigns';
import FAQSection from '../components/Home/FAQSectiom';
import GetInvolvedSection from '../components/Home/GetInvolvedSection';
import HeroCarousel from '../components/Home/HeroCarousel';
import JourneyStepper from '../components/Home/JourneyStepper';
import OurOutreachOld from '../components/Home/OurOutreachOld';
import OutreachImpactBento from '../components/Home/OutreachImpactBento';
import PartnersShowcase from '../components/Home/PartnersShowcase';
import ProgrammesSlider from '../components/Home/ProgrammesSlider';
import SuccessStories from '../components/Home/SuccessStories';
import Layout from '../components/Layout';
import { homefaq } from '../components/Home/faqItems';

export default function HomeOld() {
  return (
    <Layout>
        <HeroCarousel />
        <JourneyStepper   />
        <ProgrammesSlider />
        <AIDigitalSection />
        <OurOutreachOld />
        <GetInvolvedSection />
        <PartnersShowcase />
        <OutreachImpactBento />
        <SuccessStories />
        <FAQSection  items={homefaq} />
    </Layout>
  );
}