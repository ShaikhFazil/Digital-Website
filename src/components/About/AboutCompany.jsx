import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeLeft, fadeRight, VIEWPORT_ONCE } from '../../animations/variants';
import Button from '../common/Button';
import LazyImage from '../common/LazyImage';

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  'One accountable pod across strategy, media and engineering',
  'Fortnightly sprints with a live, always-on KPI dashboard',
  'Senior specialists on every account — no bait-and-switch',
];

const IMAGES = {
  main: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=70',
  inset: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=70',
};

/** "About the company" split section with parallax images and checklist. */
const AboutCompany = () => {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle counter-parallax between the two images
      gsap.to('[data-parallax-main]', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      gsap.to('[data-parallax-inset]', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="section">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image cluster (fades in from the left) */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="relative"
        >
          <div data-parallax-main>
            <LazyImage
              src={IMAGES.main}
              alt="Strategists reviewing a campaign performance dashboard together"
              className="aspect-[4/3] rounded-3xl border border-white/10"
            />
          </div>
          <div
            data-parallax-inset
            className="absolute -bottom-10 -right-4 w-2/5 sm:-right-8"
          >
            <LazyImage
              src={IMAGES.inset}
              alt="A design review sketching session at the Stratos studio"
              className="aspect-square rounded-2xl border-4 border-ink-950 shadow-2xl shadow-black/40"
            />
          </div>
          <div className="card-surface absolute -top-5 left-5 px-5 py-3">
            <p className="font-display text-2xl font-semibold text-ember-400">12+</p>
            <p className="text-xs text-mist-300">years of craft</p>
          </div>
        </motion.div>

        {/* Copy (fades in from the right) */}
        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE}>
          <span className="eyebrow">About the agency</span>
          <h2 className="heading-lg mt-4 text-balance">
            The agency structure was broken. So we rebuilt it.
          </h2>
          <p className="mt-5 leading-relaxed text-mist-300">
            Most companies juggle a marketing agency, a dev shop and a cloud consultancy — and
            spend half their time refereeing between them. Stratos Digital puts strategists,
            engineers and media buyers in one pod with one shared target, so ideas ship instead
            of stalling in hand-offs.
          </p>
          <ul className="mt-7 space-y-3.5">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-mist-200">
                <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-ember-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Button to="/about" variant="outline" className="mt-9">
            More about us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
