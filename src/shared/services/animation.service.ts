import { Injectable, ElementRef } from '@angular/core';

export interface AnimationOptions {
  duration?: string;
  delay?: string;
  threshold?: number;
  rootMargin?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private observer: IntersectionObserver | null = null;

  observeElement(
    element: ElementRef,
    animationClass: string = 'animate-fade-in-up',
    options: AnimationOptions = {}
  ): void {
    const defaultOptions: AnimationOptions = {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      ...options
    };

    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.animationDuration = options.duration || '0.6s';
            el.style.animationDelay = options.delay || '0s';
            el.classList.add(animationClass);
            el.style.opacity = '1';
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin
      }
    );

    if (element.nativeElement) {
      this.observer.observe(element.nativeElement);
    }
  }

  observeElements(
    elements: ElementRef[],
    animationClass: string = 'animate-fade-in-up',
    options: AnimationOptions = {}
  ): void {
    elements.forEach((el, index) => {
      const delay = options.delay ? `${parseFloat(options.delay) + index * 0.1}s` : `${index * 0.1}s`;
      this.observeElement(el, animationClass, { ...options, delay });
    });
  }

  animateOnScroll(element: ElementRef, animationClass: string): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element.nativeElement);
  }

  animateCounter(element: ElementRef, targetValue: number, duration: number = 2000): void {
    const el = element.nativeElement;
    const startValue = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);

      el.textContent = currentValue.toString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  animateCounterWithSuffix(
    element: ElementRef,
    targetValue: number,
    suffix: string = '',
    duration: number = 2000
  ): void {
    const el = element.nativeElement;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(targetValue * easeOutQuart);

      el.textContent = currentValue.toString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  setupParallax(element: ElementRef, speed: number = 0.5): void {
    window.addEventListener('scroll', () => {
      const rect = element.nativeElement.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      element.nativeElement.style.transform = `translateY(${rate}px)`;
    });
  }
}
