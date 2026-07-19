import { cn } from '../../utils/cn';
import { SITE } from '../../constants';

/** Inline SVG brand mark + wordmark. `compact` tightens size when navbar shrinks. */
const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-2.5">
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={cn('transition-all duration-500', compact ? 'h-8 w-8' : 'h-9 w-9')}
    >
      <rect width="32" height="32" rx="7" className="fill-ember-500" />
      <path d="M9 23V9h3.4l3.6 5.4L19.6 9H23v14h-3.4v-8l-3.6 5.2L12.4 15v8H9z" fill="#0B1120" />
    </svg>
    <span
      className={cn(
        'font-display font-semibold tracking-tight text-white transition-all duration-500',
        compact ? 'text-lg' : 'text-xl',
      )}
    >
      {SITE.name.split(' ')[0]}
      <span className="text-ember-400">.</span>
    </span>
  </span>
);

export default Logo;
