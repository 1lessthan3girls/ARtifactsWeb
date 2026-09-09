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
  // Replace this path with the real APK once it's ready
  const apkUrl = 'src/app-apk/Dummy-1.0.apk'; // Placeholder for the APK file URL
  const link = document.createElement('a');
  link.href = apkUrl;
  link.download = 'ARtifacts-0.1.apk'; // Placeholder for the APK file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};