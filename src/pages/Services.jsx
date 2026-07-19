import PageHero from '../components/common/PageHero.jsx';
import PageTransition from '../components/common/PageTransition.jsx';
import ServicesGrid from '../components/Services/ServicesGrid.jsx';
import TechSection from '../components/Technology/TechSection.jsx';
import ProcessTimeline from '../components/Process/ProcessTimeline.jsx';
import FAQSection from '../components/FAQ/FAQSection.jsx';
import ContactCTA from '../components/CTA/ContactCTA.jsx';

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
