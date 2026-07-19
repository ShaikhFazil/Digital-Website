import { useState } from 'react';
import { cn } from '../../utils/cn';

/**
 * Lazily loaded image with a blur-up shimmer while loading.
 * Always pass a meaningful `alt`.
 */
const LazyImage = ({ src, alt, className, imgClassName, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-ink-800', className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-[opacity,filter,transform] duration-700',
          loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md',
          imgClassName,
        )}
        {...rest}
      />
    </div>
  );
};

export default LazyImage;
