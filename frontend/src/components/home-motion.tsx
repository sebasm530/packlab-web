'use client';

import { useEffect } from 'react';

/** Progressive enhancement: the server-rendered content is always visible. */
export function HomeMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const animation = entry.target.animate([
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 550, delay: Number((entry.target as HTMLElement).dataset.reveal || 0), fill: 'backwards', easing: 'cubic-bezier(.22,1,.36,1)' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.pack-home-home [data-reveal]').forEach(element => observer.observe(element));
    const cancel = () => { if (preference.matches) { observer.disconnect(); animations.forEach(animation => animation.cancel()); } };
    preference.addEventListener('change', cancel);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); preference.removeEventListener('change', cancel); };
  }, []);
  return null;
}
