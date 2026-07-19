import { motion } from 'framer-motion';
import { blurReveal, fadeUp } from '../../animations/variants';

/**
 * Shared inner-page header with animated title, breadcrumb-style eyebrow,
 * and a soft ember glow backdrop.
 */
const PageHero = ({ eyebrow, title, lead }) => (
  <header className="relative overflow-hidden pb-16 pt-40 md:pb-24 md:pt-48">
    {/* Ambient glow */}
    <div
      aria-hidden
      className="absolute -top-32 left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-ember-500/10 blur-[120px]"
    />
    <div className="wrap relative">
      <motion.span variants={fadeUp} initial="hidden" animate="visible" className="eyebrow">
        {eyebrow}
      </motion.span>
      <motion.h1
        variants={blurReveal}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="heading-xl mt-5 max-w-4xl text-balance"
      >
        {title}
      </motion.h1>
      {lead && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.22}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-300"
        >
          {lead}
        </motion.p>
      )}
    </div>
  </header>
);

export default PageHero;
