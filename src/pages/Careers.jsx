import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, MapPin } from 'lucide-react';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '../animations/variants.jsx';
import { JOBS, SITE } from '../constants';
import PageHero from '../components/common/PageHero.jsx';
import PageTransition from '../components/common/PageTransition.jsx';
import ContactCTA from '../components/CTA/ContactCTA.jsx';

const PERKS = [
  'Hybrid-first with quarterly team weeks',
  'Learning budget of ₹1L per year',
  'Performance bonus tied to pod results',
  'Top-tier health cover for you + family',
  'No-meeting Wednesdays, protected',
  'Sabbatical after every four years',
];

/** Careers page: perks list + open role board. */
const Careers = () => (
  <PageTransition>
    <PageHero
      eyebrow="Careers"
      title="Do the best work of your career, in good company"
      lead="Small pods, senior peers and clients who actually listen. If you're allergic to hand-offs and vanity metrics, you'll fit right in."
    />

    <section className="section pt-0" aria-label="Benefits">
      <div className="wrap">
        <span className="eyebrow">Life at Stratos</span>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PERKS.map((perk) => (
            <motion.li
              key={perk}
              variants={staggerItem}
              className="card-surface px-6 py-5 text-sm font-medium text-mist-200"
            >
              {perk}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>

    <section className="section bg-ink-900/40" aria-label="Open positions">
      <div className="wrap">
        <span className="eyebrow">Open roles</span>
        <h2 className="heading-lg mt-4">We&rsquo;re hiring across {new Set(JOBS.map((j) => j.dept)).size} teams</h2>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-10 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10"
        >
          {JOBS.map(({ id, title, dept, type, location }) => (
            <motion.li key={id} variants={staggerItem}>
              <a
                href={`mailto:${SITE.email}?subject=Application: ${encodeURIComponent(title)}`}
                className="group flex flex-col gap-3 bg-ink-900/50 px-6 py-6 transition-colors hover:bg-ink-800 sm:flex-row sm:items-center sm:justify-between sm:px-8"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-ember-400">
                    {title}
                  </h3>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-mist-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" aria-hidden />
                      {dept} · {type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {location}
                    </span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ember-400">
                  Apply now
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-8 text-sm text-mist-400">
          Don&rsquo;t see your role? Pitch us anyway at{' '}
          <a href={`mailto:${SITE.email}`} className="font-medium text-ember-400 hover:underline">
            {SITE.email}
          </a>
          . Great people create their own openings here.
        </p>
      </div>
    </section>

    <ContactCTA />
  </PageTransition>
);

export default Careers;
