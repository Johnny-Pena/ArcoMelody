import LessonsHero from './LessonsHero';               // your hero content
import LessonsInterestForm from './LessonsInterestForm'; // modified form (see section 3)
import LessonsTestimonialSnippet from './LessonsTestimonialSnippet'; // single testimonial

export default function LessonsHeroWithForm() {
  return (
    <section className="bg-base-200">
      {/* Outer container: centers content */}
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-16">
        {/* Grid: 1 column on mobile, 2 columns on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
          {/* Column A: Hero content (left on desktop) */}
          <div className="order-1 lg:order-1">
            <LessonsHero />
          </div>

          {/* Column B: Signup card (right on desktop). */}
          <div className="order-2 lg:order-2 flex items-center justify-center">
            {/* The form component should not itself add extra page-level padding — it returns just the card */}
            <div className="w-full max-w-md space-y-4">
              <LessonsInterestForm />
              <LessonsTestimonialSnippet />        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
