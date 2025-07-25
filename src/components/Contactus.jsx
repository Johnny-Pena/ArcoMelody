import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyzyjkqn");
  if (state.succeeded) {
    return <p>Thanks for contacting us! We will reach out to you soon!</p>;
  }
  return (
    <div className="w-full flex flex-col bg-base-200 pt-4 pb-8">
      <div className="card bg-base-100 w-full max-w-md p-6 rounded-lg shadow-md mx-auto mt-4">
        <form onSubmit={handleSubmit} className="contact-form w-full">
          <fieldset id="fs-frm-inputs">
            <div className="form-control mb-4">
              <label htmlFor="full-name" className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                id="full-name"
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="First and Last"
                required
              />
                <ValidationError 
                prefix="Name" 
                field="name" 
                errors={state.errors} 
                />
            </div>
            <div className="form-control mb-4">
              <label htmlFor="email-address" className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                id="email-address"
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="email@domain.tld"
                required
              />
              <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors} 
              />
            </div>
            
            <div className="form-control mb-6">
              <label htmlFor="phone" className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="input input-bordered w-full"
                placeholder="Your phone number"
                required
              />
              <ValidationError 
              prefix="Phone" 
              field="phone" 
              errors={state.errors} 
              />
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
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
          </fieldset>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary w-full" disabled={state.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}