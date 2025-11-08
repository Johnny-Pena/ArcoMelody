export default function ViolinPhoneCTA() {


  return (
    <div className="max-w-4xl mx-auto px-4 mt-8">
      <div className="bg-base-100 rounded-lg shadow-lg p-6 text-center border border-primary/20">
        <h3 className="text-xl font-semibold mb-2">Have questions about pricing or scheduling?</h3>
        <p className="text-sm opacity-70 mb-4">
          Text or Call us anytime between 9:00 AM - 5:00 PM CST.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-3">
          <a
            href="sms:+15122229644?body=Contacting Arco Melody about violin lessons."
            className="btn btn-primary btn-lg inline-flex items-center justify-center gap-2"
            aria-label="Text Arco Melody at (512) 222-9644"
            onClick={() => handleContactClick('text')}
          >
            <span className="text-xl">💬</span>
            <span>Text Us</span>
          </a>
          
          <a
            href="tel:+15122229644"
            className="btn btn-outline btn-lg inline-flex items-center justify-center gap-2"
            aria-label="Call Arco Melody at (512) 222-9644"
          >
            <span className="text-xl">📞</span>
            <span>Call (512) 222-9644</span>
          </a>
        </div>
        <p className="text-xs opacity-60">Text response same day</p>
      </div>
    </div>
  );
}