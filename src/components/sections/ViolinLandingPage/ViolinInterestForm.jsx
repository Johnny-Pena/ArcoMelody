import { useForm, ValidationError } from '@formspree/react';

export default function ViolinInterestForm() {
  const [state, handleSubmit] = useForm("mblzpzwn");

  const gtag_report_conversion = (callback) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17649907971/iFzRCMGIja0bEIPykOBB',
        'value': 1.0,
        'currency': 'USD',
        'event_callback': callback
      });
    } else {
      // Fallback if gtag is not available
      callback();
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Use official Google Ads conversion tracking
    gtag_report_conversion(() => {
      // Call the original Formspree handler after conversion is tracked
      handleSubmit(event);
    });
  };

  if (state.succeeded) {
    return <p className="text-center text-green-600 mt-4">Thanks! We'll reach out within the next 24 hours. Please reach out to us again at info@arcomelody.com if you need anything else. 🎶</p>;
  }

  return (
    <div className="w-full flex justify-center py-8 bg-base-200">
      <div className="card bg-base-100 w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Share your info and we’ll reach out to schedule a lesson.</h2>
        <p className="text-sm opacity-70 mb-6 text-center">
          
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="form-control mb-4">
            <label className="label"><span className="label-text">First Name*</span></label>
            <input type="text" name="firstName" className="input input-bordered w-full" required />
            <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
          </div>

          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Last Name*</span></label>
            <input type="text" name="lastName" className="input input-bordered w-full" required />
            <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
          </div>

          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Email*</span></label>
            <input type="email" name="email" className="input input-bordered w-full" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-control mb-4">
              <label className="label cursor-pointer">
                <input type="checkbox" name="marketingConsent" className="checkbox mr-3 scale-100 checkbox-primary" />
                <span className="label-text text-md">
                  I agree to receive marketing emails from <br /> Arco Melody LLC.
                  <a href="/privacy-policy" className="text-primary underline ml-1" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </span>
              </label>
          </div>

          <p className="text-xs opacity-70 mb-4">
            By clicking Submit, you consent to allow Arco Melody LLC to store and process the personal information submitted above to provide you content and marketing communications.
          </p>

          <button type="submit" className="btn btn-primary w-full" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
