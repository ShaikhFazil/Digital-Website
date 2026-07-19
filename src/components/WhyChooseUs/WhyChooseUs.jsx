import { motion } from 'framer-motion';
import { getIcon } from '../../utils/icons';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '../../animations/variants.jsx';
import { WHY_US } from '../../constants';
import SectionHeading from '../common/SectionHeading.jsx';

/** "Why choose us" — four proof points with scale-in icon chips. */
const WhyChooseUs = () => (
  <section className="section bg-ink-900/40" aria-label="Why choose us">
    <div className="wrap">
      <SectionHeading
        eyebrow="Why Stratos"
        title="Chosen for results. Kept for accountability."
        lead="Four structural decisions separate us from the agency you just left."
        align="center"
      />
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
      >
        {WHY_US.map(({ icon, title, text }) => {
          const Icon = getIcon(icon);
          return (
            <motion.li
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="card-surface group p-7 transition-colors duration-300 hover:border-ember-500/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember-500/10 text-ember-400 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist-300">{text}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  </section>
);

export default WhyChooseUs;
