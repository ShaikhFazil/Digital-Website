import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';
import { fadeUp, VIEWPORT_ONCE } from '../../animations/variants.jsx';
import { INDUSTRIES } from '../../constants';
import SectionHeading from '../common/SectionHeading.jsx';
import LazyImage from '../common/LazyImage.jsx';
import 'swiper/css';
import 'swiper/css/free-mode';

/** Industries carousel — free-mode Swiper with image-zoom hover cards. */
const IndustriesSection = () => (
  <section className="section overflow-hidden" aria-label="Industries we serve">
    <div className="wrap">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Industries"
          title="Deep context in the markets that move fastest"
        />
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="max-w-sm text-sm text-mist-300"
        >
          Playbooks, benchmarks and compliance know-how for thirteen verticals — so week one
          feels like month six.
        </motion.p>
      </div>
    </div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      custom={0.15}
      className="mt-12 pl-5 sm:pl-8 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))]"
    >
      <Swiper
        modules={[FreeMode, Autoplay, A11y]}
        slidesPerView="auto"
        spaceBetween={20}
        freeMode
        loop
        speed={800}
        autoplay={{ delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: true }}
        a11y={{ enabled: true }}
        className="!overflow-visible"
      >
        {INDUSTRIES.map(({ id, name, note, image }) => (
          <SwiperSlide key={id} className="!w-64 sm:!w-72">
            <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
              <LazyImage
                src={image}
                alt={`${name} industry`}
                className="absolute inset-0"
                imgClassName="transition-transform duration-700 group-hover:scale-110"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl font-semibold text-white">{name}</h3>
                <p className="mt-1.5 max-h-0 overflow-hidden text-sm text-mist-300 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                  {note}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </section>
);

export default IndustriesSection;
