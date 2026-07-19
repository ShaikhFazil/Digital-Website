import PageHero from '../components/common/PageHero.jsx';
import PageTransition from '../components/common/PageTransition.jsx';
import PortfolioSection from '../components/Portfolio/PortfolioSection.jsx';
import StatsSection from '../components/Stats/StatsSection.jsx';
import ClientLogos from '../components/Brands/ClientLogos.jsx';
import ContactCTA from '../components/CTA/ContactCTA.jsx';

const PORTFOLIO_LIMIT = 8;

/** Case studies page: full portfolio + proof points. */
const CaseStudies = () => (
  <PageTransition>
    <PageHero
      eyebrow="Case studies"
      title="Work measured in revenue, not impressions"
      lead="A sample of engagements our clients have cleared us to talk about — each one anchored to the metric it was hired to move."
    />
    <PortfolioSection heading={false} limit={PORTFOLIO_LIMIT} />
    <StatsSection />
    <ClientLogos />
    <ContactCTA />
  </PageTransition>
);

export default CaseStudies;
