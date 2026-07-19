import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '../../utils/cn';

/** Single accessible accordion row with animated height + rotating icon. */
const FAQItem = ({ id, question, answer, open, onToggle }) => (
  <div className="card-surface overflow-hidden">
    <h3>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7"
      >
        <span className={cn('font-medium transition-colors', open ? 'text-ember-400' : 'text-white')}>
          {question}
        </span>
        <Plus
          aria-hidden
          className={cn(
            'h-5 w-5 shrink-0 text-mist-400 transition-transform duration-300',
            open && 'rotate-45 text-ember-400',
          )}
        />
      </button>
    </h3>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={`faq-panel-${id}`}
          role="region"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="px-6 pb-6 text-sm leading-relaxed text-mist-300 sm:px-7">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default FAQItem;
