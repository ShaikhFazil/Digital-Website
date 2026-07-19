import { motion } from 'framer-motion';
import { staggerContainer, VIEWPORT_ONCE } from '../../animations/variants';
import { SERVICES } from '../../constants';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from './ServiceCard';

/** Home services grid with staggered card reveals. */
const ServicesGrid = ({ heading = true }) => (
  <section className="section bg-ink-900/40" aria-label="Our services">
    <div className="wrap">
      {heading && (
        <SectionHeading
          eyebrow="What we do"
          title="Six capabilities. One accountable team."
          lead="Pick a single service or combine them — every engagement runs on the same sprint cadence and reports into the same dashboard."
          align="center"
        />
      )}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesGrid;
