import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrolled } from '../../hooks/useScrolled';
import { cn } from '../../utils/cn';
import { NAV_LINKS, SITE } from '../../constants';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

/**
 * Sticky navbar.
 * - Transparent over the hero, solid + blurred after scrolling
 * - Shrinks in height on scroll
 * - Hamburger opens the full-screen mobile menu
 */
const Navbar = () => {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled
            ? 'border-b border-white/10 bg-ink-950/85 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            'wrap flex items-center justify-between transition-[padding] duration-500',
            scrolled ? 'py-3' : 'py-5 md:py-7',
          )}
        >
          <Link to="/" aria-label={`${SITE.name} — home`} className="rounded-md">
            <Logo compact={scrolled} />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                      'after:absolute after:inset-x-4 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ember-400 after:transition-transform after:duration-300 hover:after:scale-x-100',
                      isActive ? 'text-ember-400' : 'text-mist-200 hover:text-white',
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}
              className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-mist-200 transition-colors hover:border-ember-400 hover:text-ember-400 xl:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {SITE.phone}
            </a>
            <Link
              to="/contact"
              className="hidden rounded-full bg-ember-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-ember-400 lg:inline-flex"
            >
              Get in touch
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="rounded-md p-2 text-white lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
