                         
import React, { useState } from 'react';
import GuitarInterestForm from './GuitarInterestForm';
                         
const GuitarTestimonialSnippets = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  const toggleTestimonial = (id) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const testimonials = [
    {
      id: 1,
      name: "Rosalinda",
      description: "Parent, Texas",
      instrument: "Son taking guitar lessons",
      preview: '"Mr. Pena is not only an amazing teacher but also a gifted musician."',
      full: '"Mr. Pena is not only an amazing teacher but also a gifted musician. He is very kind, friendly and has been great at assessing our son\'s interests to continuously keep him motivated. We highly recommend him!"',
      source: "review from another platform",
      date: "",
      avatar: "S"
    },
    {
      id: 2, 
      name: "Ximena",
      description: "Parent, Texas",
      instrument: "Daughter taking guitar lessons",
      preview: '"Mr. Johnny’s teaching style and patience have made learning the guitar a fun and enjoyable experience for my daughter Sofia."',
      full: '"Mr. Johnny’s teaching style and patience have made learning the guitar a fun and enjoyable experience for my daughter Sofia. She looked forward to her lessons each week and has shown significant progress in her skills. His dedication to nurturing a love for music in children truly shines through his lessons."',
      source: "Review from another platform",
      date: "",
      avatar: "A"
    }
  ];

  return (
    <div className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar placeholder hidden">
                    <div className="bg-primary text-primary-content rounded-full w-12">
                      <span className="text-xl">{testimonial.avatar}</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm opacity-80">{testimonial.instrument}</p>
                  </div>
                </div>
                <p className="italic text-sm">
                  {expandedTestimonials[testimonial.id] ? testimonial.full : testimonial.preview}
                </p>
                <button 
                  onClick={() => toggleTestimonial(testimonial.id)}
                  className="text-primary text-md mt-2 hover:underline self-start"
                >
                  {expandedTestimonials[testimonial.id] ? 'Read less' : 'Read full review'}
                </button>
                <div className="rating rating-sm mt-3">
                  {[...Array(5)].map((_, i) => (
                    <input key={i} type="radio" className="mask mask-star-2 bg-yellow-400" disabled checked />
                  ))}
                </div>
                <p className="text-sm opacity-80 mt-2">— {testimonial.description} • {testimonial.source} • </p>
              </div>
            </div>
          ))}
          
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-center mb-12">Ready to start your musical journey?</h2>

          <div className="max-w-2xl mx-auto">

            <GuitarInterestForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuitarTestimonialSnippets;