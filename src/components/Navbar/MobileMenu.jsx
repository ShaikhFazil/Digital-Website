import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '../../constants';
import { useLockBody } from '../../hooks/useLockBody';
import Logo from './Logo.jsx';

const panel = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: '100%', transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

const list = {
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/** Full-height slide-in navigation for mobile and tablet. */
const MobileMenu = ({ open, onClose }) => {
  useLockBody(open);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-sm lg:hidden"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-ink-900 px-7 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo compact />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="rounded-md p-2 text-white"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>

            <motion.ul variants={list} initial="hidden" animate="visible" className="mt-10 flex-1 space-y-1">
              {NAV_LINKS.map(({ label, path }) => (
                <motion.li key={path} variants={item}>
                  <Link
                    to={path}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-2xl font-semibold text-white transition-colors hover:bg-white/5 hover:text-ember-400"
                  >
                    {label}
                    <ArrowUpRight
                      aria-hidden
                      className="h-5 w-5 text-mist-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember-400"
                    />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={item} initial="hidden" animate="visible" className="border-t border-white/10 pt-5 text-sm text-mist-300">
              <a href={`mailto:${SITE.email}`} className="block py-1 hover:text-ember-400">
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`} className="block py-1 hover:text-ember-400">
                {SITE.phone}
              </a>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
