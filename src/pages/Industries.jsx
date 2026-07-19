import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '../animations/variants';
import { INDUSTRIES } from '../constants';
import PageHero from '../components/common/PageHero';
import PageTransition from '../components/common/PageTransition';
import LazyImage from '../components/common/LazyImage';
import TestimonialsSlider from '../components/Testimonials/TestimonialsSlider';
import ContactCTA from '../components/CTA/ContactCTA';

/** Industries page: full vertical grid with hover-zoom tiles. */
const Industries = () => (
  <PageTransition>
    <PageHero
      eyebrow="Industries"
      title="Vertical playbooks, not generic best practice"
      lead="Thirteen industries, each with its own benchmarks, channel mix and compliance realities. Here are the eight we're asked about most."
    />
    <section className="section pt-0" aria-label="Industry list">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {INDUSTRIES.map(({ id, name, note, image }) => (
          <motion.article
            key={id}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
          >
            <LazyImage
              src={image}
              alt={`${name} industry`}
              className="absolute inset-0"
              imgClassName="transition-transform duration-700 group-hover:scale-110"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h2 className="font-display text-xl font-semibold text-white">{name}</h2>
              <p className="mt-1.5 text-sm text-mist-300">{note}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
    <TestimonialsSlider />
    <ContactCTA />
  </PageTransition>
);

export default Industries;
