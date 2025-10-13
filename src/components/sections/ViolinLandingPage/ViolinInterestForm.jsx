import { useForm, ValidationError } from '@formspree/react';

export default function ViolinInterestForm() {
  const [state, handleSubmit] = useForm("mblzpzwn");

  if (state.succeeded) {
    return <p className="text-center text-green-600 mt-4">Thanks! We'll reach out soon. 🎶</p>;
  }

  return (
    <div className="w-full flex justify-center py-8 bg-base-200">
      <div className="card bg-base-100 w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Want to Learn, But Not Ready to Schedule?</h2>
        <p className="text-sm opacity-70 mb-6 text-center">
          Share your info and we’ll reach out when you’re ready.
        </p>
        <form onSubmit={handleSubmit}>
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

            <div className="form-control mb-6">
              <label htmlFor="message" className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="textarea textarea-bordered w-full"
                placeholder="Your message here..."
                required
              />
              <ValidationError 
              prefix="Message" 
              field="message" 
              errors={state.errors} 
              />
            </div>

          <div className="form-control mb-4">
            <label className="label cursor-pointer">
              <input type="checkbox" name="marketingConsent" required className="checkbox mr-3 scale-100" />
              <span className="label-text text-sm">
                I agree to receive marketing emails from Arco Melody LLC. 
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
