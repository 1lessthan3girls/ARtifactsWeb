import apkUrl from './src/app-apk/Dummy-1.0.apk';

// Download button functionality
export const handleDownload = () => {
  window.location.assign(apkUrl);
};