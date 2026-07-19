import Hero from '../components/Hero/Hero.jsx';
import BrandsMarquee from '../components/Brands/BrandsMarquee.jsx';
import StatsSection from '../components/Stats/StatsSection.jsx';
import AboutCompany from '../components/About/AboutCompany.jsx';
import ServicesGrid from '../components/Services/ServicesGrid.jsx';
import IndustriesSection from '../components/Industries/IndustriesSection.jsx';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs.jsx';
import TechSection from '../components/Technology/TechSection.jsx';
import PortfolioSection from '../components/Portfolio/PortfolioSection.jsx';
import TestimonialsSlider from '../components/Testimonials/TestimonialsSlider.jsx';
import ClientLogos from '../components/Brands/ClientLogos.jsx';
import ProcessTimeline from '../components/Process/ProcessTimeline.jsx';
import FAQSection from '../components/FAQ/FAQSection.jsx';
import ContactCTA from '../components/CTA/ContactCTA.jsx';
import PageTransition from '../components/common/PageTransition.jsx';

/** Home page — every landing section in narrative order. */
const Home = () => (
  <PageTransition>
    <Hero />
    <BrandsMarquee />
    <StatsSection />
    <AboutCompany />
    <ServicesGrid />
    <IndustriesSection />
    <WhyChooseUs />
    <TechSection />
    <PortfolioSection />
    <TestimonialsSlider />
    <ClientLogos />
    <ProcessTimeline />
    <FAQSection />
    <ContactCTA />
  </PageTransition>
);

export default Home;
