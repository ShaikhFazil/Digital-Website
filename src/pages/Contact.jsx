import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { fadeLeft, fadeRight, VIEWPORT_ONCE } from '../animations/variants.jsx';
import { SERVICES, SITE } from '../constants';
import PageHero from '../components/common/PageHero.jsx';
import PageTransition from '../components/common/PageTransition.jsx';
import Button from '../components/common/Button.jsx';

const INPUT_CLASSES =
  'w-full rounded-xl border border-white/15 bg-ink-800/60 px-4 py-3.5 text-sm text-white placeholder:text-mist-400 transition-colors focus:border-ember-400';

const CONTACT_DETAILS = [
  { icon: MapPin, label: 'Visit', value: SITE.address },
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: 'Call', value: SITE.phone, href: `tel:${SITE.phone.replace(/[^+\d]/g, '')}` },
];

const INITIAL_FORM = { name: '', email: '', company: '', service: '', message: '' };

/** Contact page: details column + validated inquiry form (front-end only). */
const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update = useCallback(
    (field) => (e) => setForm((current) => ({ ...current, [field]: e.target.value })),
    [],
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // Front-end demo only: swap for a real API call or form service in production.
      if (form.name && form.email && form.message) setSubmitted(true);
    },
    [form],
  );

  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title="Tell us the metric. We'll bring the plan."
        lead="Share a little context and we'll come to the intro call with three concrete growth ideas prepared for your business."
      />

      <section className="section pt-0">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Contact details */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="lg:col-span-4"
          >
            <ul className="space-y-8">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ember-500/10 text-ember-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-mist-400">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="mt-1 block text-white transition-colors hover:text-ember-400">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="card-surface mt-10 p-6">
              <p className="text-sm font-semibold text-white">Response time</p>
              <p className="mt-1.5 text-sm text-mist-300">
                Every inquiry gets a human reply within one business day — usually much faster.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="lg:col-span-8"
          >
            {submitted ? (
              <div
                role="status"
                className="card-surface flex flex-col items-center gap-4 px-8 py-20 text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-ember-400" aria-hidden />
                <h2 className="heading-md">Message received</h2>
                <p className="max-w-md text-mist-300">
                  Thanks, {form.name.split(' ')[0]}. We&rsquo;ll be in touch at {form.email} within
                  one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-surface grid gap-5 p-6 sm:grid-cols-2 sm:p-9" noValidate={false}>
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-mist-200">
                    Full name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Aarav Shah"
                    value={form.name}
                    onChange={update('name')}
                    className={INPUT_CLASSES}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-mist-200">
                    Work email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="aarav@company.com"
                    value={form.email}
                    onChange={update('email')}
                    className={INPUT_CLASSES}
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-mist-200">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name"
                    value={form.company}
                    onChange={update('company')}
                    className={INPUT_CLASSES}
                  />
                </div>
                <div>
                  <label htmlFor="contact-service" className="mb-2 block text-sm font-medium text-mist-200">
                    What do you need?
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={update('service')}
                    className={INPUT_CLASSES}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map(({ id, title }) => (
                      <option key={id} value={id}>
                        {title}
                      </option>
                    ))}
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-mist-200">
                    Project details *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="What are you trying to grow, and what's in the way?"
                    value={form.message}
                    onChange={update('message')}
                    className={INPUT_CLASSES}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit">Send message</Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
