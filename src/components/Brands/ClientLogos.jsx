import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '../../animations/variants.jsx';
import { TRUSTED_BRANDS } from '../../constants';
import SectionHeading from '../common/SectionHeading.jsx';

/** Client logo wall — hover restores full brightness per tile. */
const ClientLogos = () => (
  <section className="section pt-0" aria-label="Our clients">
    <div className="wrap">
      <SectionHeading
        eyebrow="Clientele"
        title="In good company"
        align="center"
        className="!max-w-xl"
      />
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-4"
      >
        {TRUSTED_BRANDS.map((brand) => (
          <motion.li
            key={brand}
            variants={staggerItem}
            className="flex h-28 items-center justify-center border border-white/5 bg-ink-900/40 transition-colors duration-300 hover:bg-ink-800"
          >
            <span className="font-display text-lg font-semibold text-mist-400 transition-colors duration-300 hover:text-white">
              {brand}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </section>
);

export default ClientLogos;
