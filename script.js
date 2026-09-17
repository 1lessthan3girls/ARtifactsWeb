import apkUrl from './src/app-apk/artifacts.apk';

// Download button functionality
export const handleDownload = () => {
  window.location.assign(apkUrl);
};