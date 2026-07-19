import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getIcon } from '../../utils/icons';
import { staggerItem } from '../../animations/variants.jsx';
import LazyImage from '../common/LazyImage.jsx';

/**
 * Single service card: image zoom on hover, lift + shadow, icon chip,
 * and a capability list. Memoized — content is static per render.
 */
const ServiceCard = memo(({ service }) => {
  const Icon = getIcon(service.icon);

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group card-surface flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-ember-500/10"
    >
      <div className="relative overflow-hidden">
        <LazyImage
          src={service.image}
          alt={`${service.title} at Stratos Digital`}
          className="aspect-[16/9]"
          imgClassName="transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950/80 text-ember-400 backdrop-blur">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="heading-md">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-mist-300">{service.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist-300"
            >
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/services"
          className="group/link mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ember-400"
          aria-label={`Explore ${service.title} services`}
        >
          Explore service
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
