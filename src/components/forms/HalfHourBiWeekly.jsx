import { useEffect } from 'react';

export default function OneHourWeekly() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.acuityscheduling.com/js/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full bg-base-100" id="login-signup-contact" style={{ height: '90vh' }}>
      <iframe
        src="https://app.acuityscheduling.com/catalog.php?owner=33858208&action=addCart&clear=1&id=1847283"
        width="100%"
        title="One Hour Weekly Lesson Booking"
        style={{ width: '100%', height: '100%', border: 0 }}
        allow="payment"
      ></iframe>
    </div>
  );
}