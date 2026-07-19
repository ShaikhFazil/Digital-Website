import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, staggerContainer, staggerItem, VIEWPORT_ONCE } from '../animations/variants';
import PageHero from '../components/common/PageHero';
import PageTransition from '../components/common/PageTransition';
import StatsSection from '../components/Stats/StatsSection';
import ProcessTimeline from '../components/Process/ProcessTimeline';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import ContactCTA from '../components/CTA/ContactCTA';
import LazyImage from '../components/common/LazyImage';

const VALUES = [
  { title: 'Radical clarity', text: 'Plain-language reporting, honest forecasts and bad news delivered early.' },
  { title: 'Craft over volume', text: 'Fewer clients, deeper work. We cap pods so seniors stay hands-on.' },
  { title: 'Compounding curiosity', text: '10% of every week is reserved for experiments that keep our playbooks ahead.' },
  { title: 'Skin in the game', text: 'Performance-linked pricing available on every retainer. We bet on our own work.' },
];

const TEAM_IMAGE =
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=70';

/** About page: story, values, stats, process. */
const About = () => (
  <PageTransition>
    <PageHero
      eyebrow="About us"
      title="A studio built by operators, for operators"
      lead="Stratos Digital was founded in 2014 by three people who kept meeting the same problem from different sides: a marketer, an engineer and a strategist, each tired of watching good ideas die between agencies."
    />

    <section className="section pt-0">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE}>
          <LazyImage
            src={TEAM_IMAGE}
            alt="The Stratos Digital team during a quarterly planning session"
            className="aspect-[4/3] rounded-3xl border border-white/10"
          />
        </motion.div>
        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE}>
          <span className="eyebrow">Our story</span>
          <h2 className="heading-lg mt-4">From three freelancers to a 120-person pod system</h2>
          <p className="mt-5 leading-relaxed text-mist-300">
            We started as a three-person crew shipping websites and campaigns from a co-working
            space in Lower Parel. Twelve years on, we&rsquo;re 120 specialists across marketing,
            engineering, cloud and AI — still organised into small pods, still allergic to
            hand-offs, and still measured on the same thing: whether the client&rsquo;s number
            went up.
          </p>
          <p className="mt-4 leading-relaxed text-mist-300">
            Along the way we&rsquo;ve shipped 480+ projects, collected 38 industry awards and,
            more importantly, kept 96% of our clients year over year.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section bg-ink-900/40" aria-label="Our values">
      <div className="wrap">
        <span className="eyebrow">What we believe</span>
        <h2 className="heading-lg mt-4 max-w-2xl">Values we hire, promote and fire by</h2>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map(({ title, text }, index) => (
            <motion.li key={title} variants={staggerItem} className="card-surface p-7">
              <span className="font-display text-sm font-semibold text-ember-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist-300">{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>

    <StatsSection />
    <WhyChooseUs />
    <ProcessTimeline />
    <ContactCTA />
  </PageTransition>
);

export default About;
