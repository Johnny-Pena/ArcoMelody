// /src/components/AnalyticsTracker.jsx
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Read measurement ID from Vite env. Set VITE_MEASUREMENT_ID in .env(.local) and restart dev server.
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;

const pageTitles = {
  '/': 'Home',
  '/teacher-bios': 'Teacher Bios',
  '/contact': 'Contact',
  '/lessons': 'Lessons',
  '/signup': 'Sign Up',
  '/first-lesson': 'Free Trial Lesson',
  '/firstlesson': 'Free Trial Lesson',
  '/studio-policy': 'Studio Policy',
  '/core-values': 'Core Values',
  '/testimonials': 'Testimonials',
  '/violin-lessons': 'Violin Lessons',
};

function getTitleForPathname(pathname) {
  const normalized = pathname !== '/' && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;
  return pageTitles[normalized] || document.title || 'Arco Melody';
}

export default function AnalyticsTracker() {
  const location = useLocation();
  const lastPathRef = useRef(null);

  useEffect(() => {
    // If no measurement ID is provided, skip analytics to avoid sending invalid requests.
    if (!MEASUREMENT_ID) {
      console.warn('[AnalyticsTracker] VITE_MEASUREMENT_ID is not set — skipping analytics.');
      return;
    }

    const path = location.pathname + location.search;
    const title = getTitleForPathname(location.pathname);

    // dedupe (handles dev StrictMode double mounts and repeated navigations)
    if (lastPathRef.current === path) return;
    lastPathRef.current = path;

    let mounted = true;
    let attempts = 0;
    const maxAttempts = 25; // ~5s total (25 * 200ms)
    const delay = 200;

    const trySend = () => {
      if (!mounted) return;

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        try {
          window.gtag('config', MEASUREMENT_ID, {
            page_path: path,
            page_title: title,
            page_location: window.location.href,
          });
          window.gtag('event', 'page_view', {
            send_to: MEASUREMENT_ID,
            page_path: path,
            page_title: title,
            page_location: window.location.href,
          });
        } catch (err) {
          console.error('[AnalyticsTracker] gtag error', err);
        }
        return;
      }

      if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'pageview',
          page_path: path,
          page_title: title,
          page_location: window.location.href,
        });
        return;
      }

      attempts += 1;
      if (attempts >= maxAttempts) {
        console.warn('[AnalyticsTracker] analytics unavailable after retries — pageview not sent', { path });
        return;
      }
      setTimeout(trySend, delay);
    };

    trySend();
    return () => { mounted = false; };
  }, [location.pathname, location.search]);

  return null;
}
