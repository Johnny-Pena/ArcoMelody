import { useState } from 'react';
import ViolinInterestForm from './ViolinInterestForm';

export default function ViolinHero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="hero bg-base-100 min-h-[70vh] pt-20">
        <div className="hero-content flex-col lg:flex-row max-w-6xl mx-auto px-4">
          {/* Instructor Photo */}
          <div className="lg:w-1/3">
            <img
              src="/images/jenny-downtown-2025-512.webp"
              srcSet="/images/jenny-downtown-2025-256.webp 256w, /images/jenny-downtown-2025-512.webp 512w, /images/jenny-downtown-2025-1024.webp 1024w"
              sizes="(max-width: 640px) 100vw, 33vw"
              className="w-full max-w-sm rounded-lg shadow-2xl mx-auto"
              alt="Jenny Peña - Professional Violin Teacher with violin in downtown Austin"
              loading="eager"
              width="512"
              height="auto"
            />
          </div>
          
          {/* Content */}
          <div className="lg:w-2/3 lg:pl-8">
            <h1 className="text-4xl font-bold mb-4 lg:text-5xl">
              Virtual Violin Lessons with Jenny Peña
            </h1>
            <p className="text-xl mb-6">
              Learn violin online with a <strong>Suzuki-registered teacher</strong> who has 15+ years of experience teaching students of all ages.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="badge badge-primary">Suzuki-Registered</div>
              <div className="badge badge-secondary">Bachelor of Music Degree</div>
              <div className="badge badge-accent">15+ Years Experience</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowForm(true)}
                className="btn btn-primary btn-lg"
              >
                Fill out violin interest form
              </button>
            </div>
            
            <p className="text-sm mt-4 opacity-70">
              ✓ No experience needed ✓ Flexible scheduling ✓ Ages 8+ Welcome
            </p>
          </div>
        </div>
      </div>
      
      {/* Inline ViolinInterestForm - positioned below hero */}
      {showForm && (
        <div className="bg-base-100 py-8">
          <div className="w-full max-w-4xl mx-auto px-4">
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
              <ViolinInterestForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}