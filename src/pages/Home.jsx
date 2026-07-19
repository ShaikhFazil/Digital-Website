import Hero from '../components/Hero/Hero';
import BrandsMarquee from '../components/Brands/BrandsMarquee';
import StatsSection from '../components/Stats/StatsSection';
import AboutCompany from '../components/About/AboutCompany';
import ServicesGrid from '../components/Services/ServicesGrid';
import IndustriesSection from '../components/Industries/IndustriesSection';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import TechSection from '../components/Technology/TechSection';
import PortfolioSection from '../components/Portfolio/PortfolioSection';
import TestimonialsSlider from '../components/Testimonials/TestimonialsSlider';
import ClientLogos from '../components/Brands/ClientLogos';
import ProcessTimeline from '../components/Process/ProcessTimeline';
import FAQSection from '../components/FAQ/FAQSection';
import ContactCTA from '../components/CTA/ContactCTA';
import PageTransition from '../components/common/PageTransition';

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
