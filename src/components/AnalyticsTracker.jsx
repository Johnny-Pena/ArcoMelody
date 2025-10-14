// /src/components/AnalyticsTracker.jsx
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Read measurement ID from Vite env. Set VITE_MEASUREMENT_ID in .env(.local) and restart dev server.
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;

const pageTitles = {
  '/': 'Home - Arco Melody Virtual Music Lessons',
  '/teacher-bios': 'Teacher Bios - Meet Our Instructors',
  '/contact': 'Contact Us - Arco Melody',
  '/lessons': 'Lessons - Virtual Music Instruction',
  '/signup': 'Sign Up - Book Your Lesson',
  '/first-lesson': 'Free Trial Lesson - Start Learning Today',
  '/firstlesson': 'Free Trial Lesson - Start Learning Today',
  '/studio-policy': 'Studio Policy - Arco Melody',
  '/core-values': 'Core Values - Our Teaching Philosophy',
  '/testimonials': 'Student Testimonials - Success Stories',
  '/violin-lessons': 'Virtual Violin Lessons with Jenny Peña',
  '/privacy-policy': 'Privacy Policy - Arco Melody',
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
          // Send page view event for SPA navigation
          window.gtag('event', 'page_view', {
            page_title: title,
            page_location: window.location.href,
            page_path: path,
          });
          
          console.log(`[AnalyticsTracker] Page view sent: ${path} - ${title}`);
        } catch (err) {
          console.error('[AnalyticsTracker] gtag error', err);
        }
        return;
      }

      // Retry if gtag is not ready yet
      attempts += 1;
      if (attempts >= maxAttempts) {
        console.warn('[AnalyticsTracker] gtag unavailable after retries — pageview not sent', { path });
        return;
      }
      setTimeout(trySend, delay);
    };

    trySend();
    return () => { mounted = false; };
  }, [location.pathname, location.search]);

  return null;
}
