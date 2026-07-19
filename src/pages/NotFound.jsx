import { motion } from 'framer-motion';
import { blurReveal, fadeUp } from '../animations/variants.jsx';
import PageTransition from '../components/common/PageTransition.jsx';
import Button from '../components/common/Button.jsx';

/** 404 page with animated glitch-style numerals. */
const NotFound = () => (
  <PageTransition>
    <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-24">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[26rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-500/10 blur-[120px]"
      />
      <div className="wrap relative text-center">
        <motion.p
          variants={blurReveal}
          initial="hidden"
          animate="visible"
          className="font-display text-[7rem] font-bold leading-none text-white sm:text-[11rem]"
        >
          4<span className="text-ember-400">0</span>4
        </motion.p>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.15} className="heading-md mt-4">
          This page took a strategic pivot
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="mx-auto mt-4 max-w-md text-mist-300"
        >
          The URL you followed doesn&rsquo;t exist anymore — or never did. Either way, the good
          stuff is one click away.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="outline">
            Talk to us
          </Button>
        </motion.div>
      </div>
    </section>
  </PageTransition>
);

export default NotFound;
