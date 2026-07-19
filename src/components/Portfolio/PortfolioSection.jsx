import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '../../animations/variants.jsx';
import { PORTFOLIO } from '../../constants';
import SectionHeading from '../common/SectionHeading.jsx';
import LazyImage from '../common/LazyImage.jsx';

/** Featured case studies grid with image zoom + hover lift. */
const PortfolioSection = ({ limit = 4, heading = true }) => (
  <section className="section" aria-label="Case studies">
    <div className="wrap">
      {heading && (
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Results our clients put in their board decks"
          />
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ember-400"
          >
            All case studies
            <ArrowUpRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {PORTFOLIO.slice(0, limit).map((project) => (
          <motion.article
            key={project.id}
            variants={staggerItem}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="group card-surface overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-ember-500/10"
          >
            <Link to="/case-studies" className="block" aria-label={`Read case study: ${project.title}`}>
              <div className="relative overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={`${project.client} project visual`}
                  className="aspect-[16/10]"
                  imgClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-5 top-5 rounded-full bg-ink-950/80 px-3.5 py-1.5 text-xs font-medium text-mist-200 backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="heading-md text-balance">{project.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist-300">{project.summary}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-ember-500/10 px-4 py-2 text-sm font-semibold text-ember-400">
                  <TrendingUp className="h-4 w-4" aria-hidden />
                  {project.result}
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
