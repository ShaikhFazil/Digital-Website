import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '../../animations/variants.jsx';
import { FAQS } from '../../constants';
import SectionHeading from '../common/SectionHeading.jsx';
import FAQItem from './FAQItem.jsx';

/** FAQ accordion — one panel open at a time. */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = useCallback(
    (index) => setOpenIndex((current) => (current === index ? -1 : index)),
    [],
  );

  return (
    <section className="section" aria-label="Frequently asked questions">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear on every first call"
            lead="Anything else? Ask on a 30-minute intro call — no pitch deck, just answers."
          />
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="space-y-4 lg:col-span-8"
        >
          {FAQS.map(({ q, a }, index) => (
            <motion.div key={q} variants={staggerItem}>
              <FAQItem
                id={index}
                question={q}
                answer={a}
                open={openIndex === index}
                onToggle={() => toggle(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
