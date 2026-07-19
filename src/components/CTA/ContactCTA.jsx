import { motion } from 'framer-motion';
import { blurReveal, fadeUp, VIEWPORT_ONCE } from '../../animations/variants.jsx';
import Button from '../common/Button.jsx';
import { SITE } from '../../constants';

/** Full-width closing CTA band with glow backdrop. */
const ContactCTA = () => (
  <section className="section" aria-label="Start a project">
    <div className="wrap">
      <div className="relative overflow-hidden rounded-3xl border border-ember-500/20 bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-12 md:py-24">
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-ember-500/15 blur-[100px]"
        />
        <motion.h2
          variants={blurReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="heading-lg relative mx-auto max-w-2xl text-balance"
        >
          Ready to move the metric that matters?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          custom={0.12}
          className="relative mx-auto mt-5 max-w-xl text-mist-300"
        >
          Book a 30-minute strategy call. You&rsquo;ll leave with three concrete growth ideas —
          whether or not we ever work together.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          custom={0.22}
          className="relative mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button to="/contact">Book a strategy call</Button>
          <Button href={'mailto:' + SITE.email} variant="outline">
            Email us instead
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactCTA;
