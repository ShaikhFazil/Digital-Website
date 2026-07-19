import PageHero from '../components/common/PageHero';
import PageTransition from '../components/common/PageTransition';
import ServicesGrid from '../components/Services/ServicesGrid';
import TechSection from '../components/Technology/TechSection';
import ProcessTimeline from '../components/Process/ProcessTimeline';
import FAQSection from '../components/FAQ/FAQSection';
import ContactCTA from '../components/CTA/ContactCTA';

/** Services page: full capability grid + AI section + process + FAQ. */
const Services = () => (
  <PageTransition>
    <PageHero
      eyebrow="Services"
      title="Every capability a modern growth team needs"
      lead="Six service lines, one operating system. Engage a single specialism or assemble a cross-functional pod — either way you get senior people, sprint cadence and a live dashboard."
    />
    <ServicesGrid heading={false} />
    <TechSection />
    <ProcessTimeline />
    <FAQSection />
    <ContactCTA />
  </PageTransition>
);

export default Services;
