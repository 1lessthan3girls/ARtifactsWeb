import apkUrl from './src/app-apk/artifacts2.apk';

// Download button functionality
export const handleDownload = () => {
  window.location.assign(apkUrl);
};