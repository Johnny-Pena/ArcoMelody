import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track pageview on route change
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-5WXPY9PSN4', {
        page_path: location.pathname + location.search,
      });
    } else {
      console.warn('Google Analytics is not initialized.');
    }
  }, [location]);

  return null; 
}