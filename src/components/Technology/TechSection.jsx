import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { getIcon } from '../../utils/icons';
import { fadeLeft, staggerContainer, staggerItem, VIEWPORT_ONCE } from '../../animations/variants';
import { TECH_PILLARS } from '../../constants';
import Button from '../common/Button';
import LazyImage from '../common/LazyImage';

gsap.registerPlugin(ScrollTrigger);

const TECH_IMAGE =
  'https://images.unsplash.com/photo-1620825141088-a1ee9f8ad1a3?auto=format&fit=crop&w=1400&q=70';

/** AI / technology showcase with parallax image and pillar list. */
const TechSection = () => {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-tech-img]',
        { scale: 1.15 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: scope.current,
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
        },
      );
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="section relative overflow-hidden" aria-label="AI and technology">
      <div
        aria-hidden
        className="absolute right-[-15%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-ember-500/8 blur-[120px]"
      />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE}>
          <span className="eyebrow">AI &amp; technology</span>
          <h2 className="heading-lg mt-4 text-balance">
            AI that ships to production, not to slide decks
          </h2>
          <p className="mt-5 leading-relaxed text-mist-300">
            We were building ML systems before the hype cycle and we&rsquo;ll be here after it.
            Every AI engagement starts with a measurable workflow — then we build, evaluate and
            harden until it earns its place in production.
          </p>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="mt-8 space-y-5"
          >
            {TECH_PILLARS.map(({ icon, title, text }) => {
              const Icon = getIcon(icon);
              return (
                <motion.li key={title} variants={staggerItem} className="flex gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember-500/10 text-ember-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist-300">{text}</p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          <Button to="/services" className="mt-9">
            Explore AI services
          </Button>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div data-tech-img className="will-change-transform">
            <LazyImage
              src={TECH_IMAGE}
              alt="Abstract visualization of a neural network in motion"
              className="aspect-[4/5] lg:aspect-[5/6]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
