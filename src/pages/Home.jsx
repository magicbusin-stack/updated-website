import AIDigitalSection from '../components/Home/AIDigitalSection';
import AwardsShowcase from '../components/Home/AwardsShowcase';
import EventsCampaigns from '../components/Home/EventsCampaigns';
import FAQSection from '../components/Home/FAQSectiom';
import GetInvolvedSection from '../components/Home/GetInvolvedSection';
import HeroCarousel from '../components/Home/HeroCarousel';
import JourneyStory from '../components/programmes/JourneyStory';
import SectionHeading from '../components/Home/SectionHeading';
import OurOutreachSection from '../components/Home/OurOutreachSection';
import PartnersShowcase from '../components/Home/PartnersShowcase';
import ProgrammesSlider from '../components/Home/ProgrammesSlider';
import SuccessStories from '../components/Home/SuccessStories';
import Layout from '../components/Layout';
import { homefaq } from '../components/Home/faqItems';
import FaqSchema from '../components/seo/FaqSchema';

export default function Home() {
  return (
    <Layout>
        <FaqSchema faqs={homefaq} />
        <HeroCarousel />
        <JourneyStory heading={<SectionHeading title="Childhood to Livelihood Journey" accent="Livelihood Journey" />} />
        <ProgrammesSlider />
        <OurOutreachSection />
        <SuccessStories />
        <AIDigitalSection />
        <PartnersShowcase />
        <GetInvolvedSection />
        <FAQSection  items={homefaq} showTag={false} titleAccent="Questions" />
    </Layout>
  );
}