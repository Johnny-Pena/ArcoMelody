import { useEffect } from 'react';

export default function SignUpScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.acuityscheduling.com/js/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container bg-base-100" id="login-signup-contact">
      <iframe
        src="https://app.acuityscheduling.com/catalog.php?owner=33858208"
        width="100%"
        height="800"
        frameBorder="0"
        style={{ maxHeight: 'none', overflow: 'hidden', height: '1567px !important' }}
      ></iframe>
    </div>
  );
}