import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '../../animations/variants';
import { PROCESS_STEPS } from '../../constants';
import SectionHeading from '../common/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

/**
 * The 4E process timeline.
 * A vertical progress line draws itself with scroll (GSAP scrub) while
 * each step staggers into view.
 */
const ProcessTimeline = () => {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-process-line]',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: '[data-process-list]',
            start: 'top 70%',
            end: 'bottom 55%',
            scrub: 0.6,
          },
        },
      );
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="section" aria-label="Our process">
      <div className="wrap">
        <SectionHeading
          eyebrow="The 4E process"
          title="A process that turns strategy into shipped work"
          lead="Every engagement runs the same four-stage loop — explore, engineer, execute, elevate — on a fortnightly cadence."
          align="center"
        />

        <div data-process-list className="relative mx-auto mt-16 max-w-3xl">
          {/* Track + animated progress line */}
          <div aria-hidden className="absolute bottom-6 left-6 top-6 w-px bg-white/10 sm:left-8" />
          <div
            aria-hidden
            data-process-line
            className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-ember-400 to-ember-600 sm:left-8"
          />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="space-y-12"
          >
            {PROCESS_STEPS.map(({ id, title, text }) => (
              <motion.li key={id} variants={staggerItem} className="relative flex gap-7 sm:gap-10">
                <span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ember-500/40 bg-ink-900 font-display text-sm font-semibold text-ember-400 sm:h-16 sm:w-16 sm:text-base">
                  {id}
                </span>
                <div className="pt-1 sm:pt-3">
                  <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 leading-relaxed text-mist-300">{text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
