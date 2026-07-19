import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { STATS } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=75';

const HEADLINE_LINES = ['We build brands', 'that outperform', 'their market.'];

/**
 * Home hero.
 * - Line-by-line masked text reveal (GSAP timeline)
 * - Background glow drifts with scroll (parallax)
 * - Right-hand image unmasks via clip-path
 * - Animated scroll indicator
 */
const Hero = () => {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('[data-hero-line]', {
        yPercent: 110,
        duration: 1,
        stagger: 0.12,
        delay: 0.2,
      })
        .from('[data-hero-fade]', { opacity: 0, y: 24, duration: 0.8, stagger: 0.1 }, '-=0.5')
        .fromTo(
          '[data-hero-image]',
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: 1.1, ease: 'power3.inOut' },
          '-=0.9',
        );

      // Parallax: glow + image drift as the hero scrolls away
      gsap.to('[data-hero-glow]', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('[data-hero-image]', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scope}
      aria-label="Introduction"
      className="relative overflow-hidden pb-20 pt-36 md:pt-44 lg:min-h-screen lg:pb-28"
    >
      {/* Ambient background: grid texture + drifting ember glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_75%)]"
      />
      <div
        aria-hidden
        data-hero-glow
        className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-ember-500/15 blur-[130px]"
      />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p data-hero-fade className="eyebrow">
            Full-service digital agency
          </p>

          <h1 className="heading-xl mt-6">
            {HEADLINE_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden py-0.5">
                <span data-hero-line className="block">
                  {i === 2 ? (
                    <>
                      their <span className="text-ember-400">market.</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p data-hero-fade className="mt-7 max-w-xl text-lg leading-relaxed text-mist-300">
            Marketing, engineering, cloud and AI — one accountable team, one dashboard, and a
            single obsession: the metric your business runs on.
          </p>

          <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/contact">Book a strategy call</Button>
            <Button to="/case-studies" variant="outline">
              See our results
            </Button>
          </div>

          {/* Compact stat strip */}
          <dl data-hero-fade className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7">
            {STATS.slice(0, 3).map(({ value, suffix, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {value}
                  {suffix}
                </dd>
                <dd className="mt-1 text-xs text-mist-400">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Reveal-masked hero image */}
        <div className="relative lg:col-span-5">
          <div
            data-hero-image
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={HERO_IMAGE}
              alt="The Stratos Digital team collaborating around a strategy board"
              className="h-full w-full object-cover"
              fetchpriority="high"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent" />
          </div>

          {/* Floating badge */}
          <div
            data-hero-fade
            className="card-surface absolute -bottom-6 -left-6 hidden items-center gap-3 px-5 py-4 sm:flex"
          >
            <span className="relative flex h-3 w-3">
              <span aria-hidden className="absolute inset-0 rounded-full bg-ember-400 animate-pulse-ring" />
              <span className="relative h-3 w-3 rounded-full bg-ember-400" />
            </span>
            <p className="text-sm font-medium text-white">
              Accepting new projects for Q4 2026
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-mist-400">Scroll</span>
        <span className="h-10 w-px overflow-hidden bg-white/15">
          <motion.span
            className="block h-4 w-px bg-ember-400"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
