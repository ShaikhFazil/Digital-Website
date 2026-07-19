import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '../animations/variants.jsx';
import { BLOG_POSTS } from '../constants';
import PageHero from '../components/common/PageHero.jsx';
import PageTransition from '../components/common/PageTransition.jsx';
import LazyImage from '../components/common/LazyImage.jsx';
import ContactCTA from '../components/CTA/ContactCTA.jsx';

/** Blog index: card grid with category chips and read times. */
const Blogs = () => (
  <PageTransition>
    <PageHero
      eyebrow="Blog"
      title="Field notes from the front line of growth"
      lead="Playbooks, teardowns and hard-won lessons from live engagements — published when we learn something worth sharing, not on a content calendar."
    />
    <section className="section pt-0" aria-label="Articles">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {BLOG_POSTS.map(({ id, title, excerpt, category, date, readTime, image }) => (
          <motion.article
            key={id}
            variants={staggerItem}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="group card-surface flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-ember-500/10"
          >
            <div className="relative overflow-hidden">
              <LazyImage
                src={image}
                alt=""
                className="aspect-[16/9]"
                imgClassName="transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-semibold text-ember-400 backdrop-blur">
                {category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs text-mist-400">
                <time dateTime={date}>{date}</time>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden />
                  {readTime} read
                </span>
              </div>
              <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-ember-400">
                {title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-mist-300">{excerpt}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
    <ContactCTA />
  </PageTransition>
);

export default Blogs;
