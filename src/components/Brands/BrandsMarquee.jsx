import { TRUSTED_BRANDS } from '../../constants';
import Marquee from '../common/Marquee';

/** "Trusted by" strip — infinite wordmark marquee just below the hero. */
const BrandsMarquee = () => (
  <section aria-label="Brands that trust us" className="border-y border-white/10 bg-ink-900/60 py-8">
    <div className="wrap">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-mist-400">
        Trusted by growth teams at
      </p>
      <Marquee slow>
        {TRUSTED_BRANDS.map((brand) => (
          <span
            key={brand}
            className="whitespace-nowrap font-display text-xl font-semibold text-mist-400/70 transition-colors hover:text-white sm:text-2xl"
          >
            {brand}
          </span>
        ))}
      </Marquee>
    </div>
  </section>
);

export default BrandsMarquee;
