import apkUrl from './src/app-apk/Dummy-1.0.apk';

// Animation observer for fade-in effects on scroll
export const setupScrollAnimation = () => {
  const animateItems = document.querySelectorAll('section, .feature-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  animateItems.forEach((item) => observer.observe(item));

  return () => observer.disconnect();
};

// Download button functionality
export const handleDownload = () => {
  window.location.assign(apkUrl);
};