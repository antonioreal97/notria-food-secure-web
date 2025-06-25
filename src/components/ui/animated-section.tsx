import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in' | 'bounce-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const animationClasses = {
  'fade-in': {
    initial: 'opacity-0',
    animate: 'opacity-100 animate-in fade-in',
  },
  'slide-up': {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0 animate-in slide-in-from-bottom',
  },
  'slide-left': {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0 animate-in slide-in-from-right',
  },
  'slide-right': {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0 animate-in slide-in-from-left',
  },
  'scale-in': {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100 animate-in zoom-in',
  },
  'bounce-in': {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100 animate-in zoom-in-95',
  },
};

export const AnimatedSection = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: AnimatedSectionProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const animationConfig = animationClasses[animation];
  const isAnimated = isIntersecting;

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-500 ease-out',
        isAnimated ? animationConfig.animate : animationConfig.initial,
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}; 