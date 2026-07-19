import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '../../animations/variants';
import { STATS } from '../../constants';

/** Company statistics with CountUp triggered by Intersection Observer. */
const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <section aria-label="Company statistics" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-72 w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500/5 blur-[100px]"
      />
      <motion.dl
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="wrap relative grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4"
      >
        {STATS.map(({ value, suffix, label }) => (
          <motion.div key={label} variants={staggerItem} className="text-center">
            <dd className="font-display text-5xl font-semibold text-white sm:text-6xl">
              {inView ? <CountUp end={value} duration={2.2} /> : 0}
              <span className="text-ember-400">{suffix}</span>
            </dd>
            <dt className="mt-3 text-sm text-mist-300">{label}</dt>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
};

export default StatsSection;
