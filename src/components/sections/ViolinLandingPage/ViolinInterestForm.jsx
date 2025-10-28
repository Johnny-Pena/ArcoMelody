import { useForm, ValidationError } from '@formspree/react';

export default function ViolinInterestForm() {
  const [state, handleSubmit] = useForm("mblzpzwn");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    // Submit form first, then track conversion to avoid blocking
    handleSubmit(event);
    
    // Track conversion asynchronously without blocking form submission
    try {
      if (typeof window !== 'undefined' && 
          typeof window.gtag === 'function' && 
          document.readyState === 'complete') {
        
        // Use requestAnimationFrame to ensure gtag runs after DOM updates
        requestAnimationFrame(() => {
          try {
            window.gtag('event', 'conversion', {
              'send_to': 'AW-17649907971/iFzRCMGIja0bEIPykOBB',
              'value': 1.0,
              'currency': 'USD'
              // Removed event_callback to avoid DOM timing issues
            });
            console.log('Google Ads conversion tracked successfully');
          } catch (gtagError) {
            console.warn('Google Ads conversion tracking failed:', gtagError);
            // Form submission already completed, so this doesn't affect user experience
          }
        });
      }
    } catch (error) {
      console.warn('Conversion tracking setup error:', error);
      // Form submission already completed, so this doesn't affect user experience
    }
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

          {/* Last Name field removed as it's not needed */}

          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Email*</span></label>
            <input type="email" name="email" className="input input-bordered w-full" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          
          <p className="text-xs opacity-70 mb-4">
            By clicking <strong>Submit</strong>, you agree to be contacted by Arco Melody LLC about a free music lesson. Read our
            <a href="/privacy-policy" className="text-primary underline ml-1" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>.
          </p>

          <button type="submit" className="btn btn-primary w-full" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
