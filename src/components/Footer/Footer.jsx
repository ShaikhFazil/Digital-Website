import { Link } from 'react-router-dom';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS, SERVICES, SITE } from '../../constants';
import Logo from '../Navbar/Logo';

const SOCIALS = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'Twitter / X', icon: Twitter, href: 'https://twitter.com' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
];

/** Global footer: brand blurb, quick links, services, contact, socials, legal. */
const Footer = () => (
  <footer className="border-t border-white/10 bg-ink-900">
    <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
      <div className="lg:col-span-4">
        <Link to="/" aria-label={`${SITE.name} — home`} className="inline-block rounded-md">
          <Logo />
        </Link>
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist-300">
          A full-service digital agency uniting marketing, engineering, cloud and AI under one
          roof — built to move the metrics that matter.
        </p>
        <ul className="mt-6 flex gap-3">
          {SOCIALS.map(({ label, icon: Icon, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-mist-300 transition-colors hover:border-ember-400 hover:text-ember-400"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label="Footer — company" className="lg:col-span-2">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Company</h3>
        <ul className="mt-5 space-y-2.5">
          {NAV_LINKS.filter(({ path }) => path !== '/').map(({ label, path }) => (
            <li key={path}>
              <Link to={path} className="text-sm text-mist-300 transition-colors hover:text-ember-400">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Footer — services" className="lg:col-span-3">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Services</h3>
        <ul className="mt-5 space-y-2.5">
          {SERVICES.map(({ id, title }) => (
            <li key={id}>
              <Link
                to="/services"
                className="text-sm text-mist-300 transition-colors hover:text-ember-400"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:col-span-3">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
        <address className="mt-5 space-y-2.5 text-sm not-italic text-mist-300">
          <p>{SITE.address}</p>
          <p>
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-ember-400">
              {SITE.email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}
              className="transition-colors hover:text-ember-400"
            >
              {SITE.phone}
            </a>
          </p>
        </address>
        <Link
          to="/contact"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-400"
        >
          Start a project
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-xs text-mist-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p>Crafted with React, GSAP &amp; a lot of coffee.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
