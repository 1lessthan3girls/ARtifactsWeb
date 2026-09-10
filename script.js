import apkUrl from './src/app-apk/ARtifactsTest2.apk';

// Download button functionality
export const handleDownload = () => {
  window.location.assign(apkUrl);
};