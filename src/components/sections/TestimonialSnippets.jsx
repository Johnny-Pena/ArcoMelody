import { useState } from 'react';

export default function TestimonialSnippets() {
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
      name: "Sarah",
      description: "Parent, Texas",
      instrument: "Daughter taking violin for 1 year",
      preview: '"My daughter LOVES her instructor — improved tremendously in 3 months!"',
      full: '"My daughter LOVES her instructor and playing the violin! My daughter has improved tremendously. I like how sometimes my daughter can request songs that she wants to learn based on the music she likes. This is a wonderful program!"',
      source: "Google review",
      date: "",
      avatar: "S"
    },
    {
      id: 2,
      name: "Rosalinda",
      description: "Parent, Texas", 
      instrument: "Son taking guitar for 11 years",
      preview: '"Mr. Pena is an amazing teacher and gifted musician. Very kind and keeps our son motivated!"',
      full: '"Mr. Pena is not only an amazing teacher but also a gifted musician. He is very kind, friendly and has been great at assessing our son\'s interests to continuously keep him motivated. We highly recommend him!"',
      source: "Direct testimonial",
      date: "",
      avatar: "R"
    },
    {
      id: 3,
      name: "Roberta",
      description: "Adult student, New York",
      instrument: "Violin for 2 years",
      preview: '"Jenny has helped me grow as a musician starting at age 48. I really cannot say enough about her!"',
      full: '"Jenny has been my violin instructor for the last 2 years and her skills and expertise have really helped me grow as a musician. That is a lot for starting to play a new instrument at age 48. I am 50 now and I take lessons every other week using Google meets and my phone, but a laptop is ideal. I am in New York and she is in Texas, but she always works with me if things come up unexpectedly. I really cannot say enough about her! Thank you for helping me live my dream."',
      source: "Google review",
      date: "",
      avatar: "R"
    }
  ];

  return (
    <div className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
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
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-xs opacity-70">{testimonial.instrument}</p>
                  </div>
                </div>
                
                <p className="italic text-sm">
                  {expandedTestimonials[testimonial.id] ? testimonial.full : testimonial.preview}
                </p>
                
                <button 
                  onClick={() => toggleTestimonial(testimonial.id)}
                  className="text-primary text-xs mt-2 hover:underline self-start"
                >
                  {expandedTestimonials[testimonial.id] ? 'Read less' : 'Read full review'}
                </button>
                
                <div className="rating rating-sm mt-3">
                  {[...Array(5)].map((_, i) => (
                    <input 
                      key={i}
                      type="radio" 
                      className="mask mask-star-2 bg-yellow-400" 
                      disabled 
                      checked 
                    />
                  ))}
                </div>
                
                <p className="text-xs opacity-60 mt-2">
                  — {testimonial.description} • {testimonial.source} • {testimonial.date}
                </p>
              </div>
            </div>
          ))}
          
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6">Ready to start your musical journey?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/first-lesson" className="btn btn-primary btn-lg">
              Book Your Free 20-Min Trial
            </a>
            <a href="/lessons" className="btn btn-outline btn-lg">
              View All Lesson Options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
