import { cn } from '../../utils/cn';

/**
 * Infinite horizontal marquee. Children are duplicated once so the
 * -50% translate keyframe loops seamlessly.
 */
const Marquee = ({ children, slow = false, className }) => (
  <div className={cn('mask-fade-x overflow-hidden', className)}>
    <div
      className={cn(
        'flex w-max items-center gap-14 pr-14',
        slow ? 'animate-marquee-slow' : 'animate-marquee',
      )}
    >
      {children}
      <div aria-hidden className="flex items-center gap-14">
        {children}
      </div>
    </div>
  </div>
);

export default Marquee;
