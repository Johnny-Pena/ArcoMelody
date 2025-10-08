import { useEffect, useRef } from 'react';

export default function FirstLessonScript() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.acuityscheduling.com/js/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Acuity appointment completion events
    const handleAcuityMessage = (event) => {
      // Verify the message is from Acuity Scheduling
      if (event.origin !== 'https://app.acuityscheduling.com') return;

      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        
        // Log appointment completion (backend webhook will handle GA tracking)
        if (data.action === 'appointment-scheduled' || data.type === 'appointment-scheduled') {
          console.log('[Acuity] Free trial lesson booked - Backend webhook will track in GA4');
        }
      } catch (error) {
        console.error('[Acuity Tracking] Error parsing message:', error);
      }
    };

    window.addEventListener('message', handleAcuityMessage);

    // Cleanup
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      window.removeEventListener('message', handleAcuityMessage);
    };
  }, []);

  // Generate iframe URL with GA linker parameter for cross-domain tracking
  const getIframeUrl = () => {
    const baseUrl = 'https://app.acuityscheduling.com/schedule.php?owner=33858208&appointmentType=79150807';
    
    // Add GA linker parameter if gtag is available
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      try {
        // Get the linker parameter from GA
        let linkerParam = '';
        window.gtag('get', 'G-5WXPY9PSN4', 'linker_param', (param) => {
          linkerParam = param;
        });
        
        // If we have a linker param, append it to the URL
        if (linkerParam) {
          return `${baseUrl}&${linkerParam}`;
        }
      } catch (error) {
        console.error('[GA] Error getting linker param:', error);
      }
    }
    
    return baseUrl;
  };



  return (
    <div className="container bg-base-100" id="login-signup-contact">
      <iframe
        ref={iframeRef}
        src={getIframeUrl()}
        width="100%"
        height="800"
        title="Meet and Greet Scheduling"
        style={{ border: 0 }}
        allow="payment"
      ></iframe>
    </div>
  );
}