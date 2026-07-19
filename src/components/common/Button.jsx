import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const VARIANTS = {
  primary:
    'bg-ember-500 text-ink-950 hover:bg-ember-400 shadow-lg shadow-ember-500/25',
  outline:
    'border border-white/25 text-white hover:border-ember-400 hover:text-ember-400',
  ghost: 'text-white hover:text-ember-400',
};

const MAGNET_STRENGTH = 0.3;

/**
 * Site-wide CTA button.
 * - Magnetic hover (follows the cursor slightly on desktop)
 * - Click ripple
 * - Arrow slides in from the left on hover
 * Renders a <Link> when `to` is provided, otherwise a <button>.
 */
const Button = ({ to, href, variant = 'primary', className, children, onClick, ...rest }) => {
  const ref = useRef(null);

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el || window.matchMedia('(hover: none)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * MAGNET_STRENGTH;
    const y = (e.clientY - rect.top - rect.height / 2) * MAGNET_STRENGTH;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const handleLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  }, []);

  const handleClick = useCallback(
    (e) => {
      // Ripple: a positioned span that expands and fades out
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height) * 2;
        ripple.className =
          'pointer-events-none absolute rounded-full bg-white/30 animate-[ripple_0.6s_ease-out_forwards]';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }
      onClick?.(e);
    },
    [onClick],
  );

  const classes = cn(
    'group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5',
    'text-sm font-semibold transition-[background-color,border-color,color,transform] duration-300 will-change-transform',
    VARIANTS[variant],
    className,
  );

  const content = (
    <>
      {/* Arrow slides in while the label shifts right */}
      <ArrowRight
        aria-hidden
        className="absolute left-5 h-4 w-4 -translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      />
      <span className="relative transition-transform duration-300 group-hover:translate-x-3">
        {children}
      </span>
      <ArrowRight
        aria-hidden
        className="relative h-4 w-4 transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0"
      />
    </>
  );

  const shared = {
    ref,
    className: classes,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick: handleClick,
    ...rest,
  };

  if (to) {
    return (
      <Link to={to} {...shared}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} {...shared}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" {...shared}>
      {content}
    </button>
  );
};

export default Button;
