import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { scaleIn, VIEWPORT_ONCE } from '../../animations/variants';
import { TESTIMONIALS } from '../../constants';
import SectionHeading from '../common/SectionHeading';
import 'swiper/css';
import 'swiper/css/pagination';

/** Client testimonials — autoplaying Swiper with pagination bullets. */
const TestimonialsSlider = () => (
  <section className="section bg-ink-900/40" aria-label="Client testimonials">
    <div className="wrap">
      <SectionHeading
        eyebrow="Testimonials"
        title="What partners say after year one"
        align="center"
      />
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="mt-14"
      >
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{ delay: 5200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          a11y={{ enabled: true }}
          breakpoints={{ 768: { slidesPerView: 2 } }}
          className="!pb-14"
        >
          {TESTIMONIALS.map(({ quote, name, role, avatar }) => (
            <SwiperSlide key={name} className="!h-auto">
              <figure className="card-surface flex h-full flex-col p-7 sm:p-9">
                <Quote className="h-8 w-8 text-ember-400/60" aria-hidden />
                <blockquote className="mt-5 flex-1 leading-relaxed text-mist-200">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
                  <img
                    src={avatar}
                    alt=""
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-sm text-mist-400">{role}</p>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSlider;
