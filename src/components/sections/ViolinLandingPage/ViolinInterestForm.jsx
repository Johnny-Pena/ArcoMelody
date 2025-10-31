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
  return <p className="alert alert-success text-center text-2xl text-white mt-4 font-bold">Thanks! We'll reach out within 24 hours to schedule your lesson. If you need anything sooner, contact us at info@arcomelody.com ✅</p>;
  }

  return (
    <div className="w-full flex justify-center py-2 bg-base-200">
      <div className="card bg-base-100 w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Schedule a FREE Lesson</h2>
        <p className="text-sm opacity-70 mb-6 text-center">
          Spots are limited — reserve your FREE lesson and start your musical journey!
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Full Name*</span></label>
            <input type="text" name="fullName" className="input input-bordered w-full" required />
            <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
          </div>

          {/* Last Name field removed as it's not needed */}

          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Email*</span></label>
            <input type="email" name="email" className="input input-bordered w-full" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          
          <p className="text-xs opacity-70 mb-4">
            By clicking <strong>Submit</strong>, you agree to be contacted by Arco Melody LLC about a free music lesson. Please read our
            <a href="/privacy-policy" className="text-primary underline ml-1" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            for more details.
          </p>

          <button type="submit" className="btn btn-primary w-full text-xl font-bold" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
