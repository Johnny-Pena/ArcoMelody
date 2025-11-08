import { useState } from 'react';
import GuitarInterestForm from './GuitarInterestForm';

export default function GuitarTrialButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-base-200 py-8">
      <div className="w-full max-w-4xl mx-auto px-4">
        {!showForm ? (
          <div className="text-center">
            <button 
              onClick={() => setShowForm(true)}
              className="btn btn-primary btn-xl btn-block"
            >
             Click Here To Claim Your Free 20-Min Trial
            </button>
          </div>
        ) : (
          <div className="bg-base-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Get Started with Your Free Trial</h3>
              <button 
                className="btn btn-sm btn-circle btn-ghost" 
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>
            </div>
            <GuitarInterestForm />
          </div>
        )}
      </div>
    </div>
  );
}