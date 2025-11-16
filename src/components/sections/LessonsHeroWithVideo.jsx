import { lazy, Suspense } from 'react';

const YouTubeFacade = lazy(() => import('../YouTubeFacade'));
const LessonsTestimonialSnippet = lazy(() => import('./LessonsLandingPage/LessonsTestimonialSnippet'));

const LessonsHeroWithVideo = () => {
  return (
    <section className="hero min-h-[calc(100vh-4rem)] bg-base-200 pt-8 lg:pt-6 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Info */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Master Your Favorite Instrument Online
            </h1>
            
            <p className="text-lg lg:text-xl opacity-70">
              Join students worldwide learning violin, guitar, and more through personalized online lessons. 
              Whether you're a complete beginner or advancing your skills, we'll help you achieve your musical goals.
            </p>

            {/* Instrument Icons - Visual Only */}
            <div className="flex gap-6 text-4xl">
              <span title="Violin">🎻</span>
              <span title="Guitar">🎸</span>
              <span title="Music">🎼</span>
            </div>

            <ul className="space-y-3 text-base lg:text-lg opacity-70">
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>One-on-one instruction tailored to your learning style</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Flexible scheduling that fits your busy life</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Learn from anywhere with just an internet connection</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Proven methods that make learning enjoyable and effective</span>
              </li>
            </ul>

            <div className="pt-4">
              <a 
                href="/firstlesson" 
                className="btn btn-primary btn-lg text-lg px-8"
              >
                Book Your FREE Trial Lesson
              </a>
            </div>
          </div>

          {/* Right Column - Video and Testimonial */}
          <div className="flex flex-col gap-6">
            {/* Video */}
            <div className="w-full">
              <Suspense fallback={
                <div className="aspect-video w-full bg-base-300 rounded-lg flex items-center justify-center">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              }>
                <YouTubeFacade 
                  videoId="dQw4w9WgXcQ"
                  title="Why Choose Online Music Lessons"
                />
              </Suspense>
            </div>

            {/* Testimonial */}
            <Suspense fallback={
              <div className="bg-base-100 rounded-lg p-6 shadow-lg">
                <span className="loading loading-spinner loading-md"></span>
              </div>
            }>
              <LessonsTestimonialSnippet />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonsHeroWithVideo;
