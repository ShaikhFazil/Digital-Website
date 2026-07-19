import { motion } from 'framer-motion';
import { blurReveal, fadeUp, VIEWPORT_ONCE } from '../../animations/variants';
import { cn } from '../../utils/cn';

/**
 * Consistent section intro: eyebrow label + heading + optional lead paragraph.
 * `align` controls text alignment on desktop; mobile is always left-aligned.
 */
const SectionHeading = ({ eyebrow, title, lead, align = 'left', className }) => (
  <div
    className={cn(
      'max-w-3xl',
      align === 'center' && 'md:mx-auto md:text-center',
      className,
    )}
  >
    {eyebrow && (
      <motion.span
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className={cn('eyebrow', align === 'center' && 'md:justify-center')}
      >
        {eyebrow}
      </motion.span>
    )}
    <motion.h2
      variants={blurReveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      custom={0.08}
      className="heading-lg mt-4 text-balance"
    >
      {title}
    </motion.h2>
    {lead && (
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        custom={0.18}
        className="mt-5 text-base leading-relaxed text-mist-300 sm:text-lg"
      >
        {lead}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;
