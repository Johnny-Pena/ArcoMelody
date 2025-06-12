import { useEffect } from 'react';

export default function FirstLessonScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.acuityscheduling.com/js/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    // Optional: cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container bg-base-100" id="login-signup-contact">
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=33858208&appointmentType=79150807"
        width="100%"
        height="800"
        frameBorder="0"
        title="Meet and Greet Scheduling"
      ></iframe>
    </div>
  );
}