import { lazy, Suspense } from "react";

// Lazy load non-critical components to improve initial load time
const LessonsHeroWithForm = lazy(() => import("../components/sections/LessonsLandingPage/LessonsHeroWithForm"));
const TrustBadges = lazy(() => import("../components/sections/TrustBadges"));
const LessonsTestimonialSnippets = lazy(() => import("../components/sections/LessonsLandingPage/LessonsTestimonialSnippets"));
const LessonsPhoneCTA = lazy(() => import("../components/sections/LessonsLandingPage/LessonsPhoneCTA"));
const PricingCard = lazy(() => import("../components/cards/pricingCard"));
const FAQ = lazy(() => import("../components/FAQ"));

export const meta = () => {
  return [
    { title: "Virtual Violin & Guitar Lessons | Arco Melody - Free Trial" },
    { name: "description", content: "Professional virtual violin, viola, and guitar lessons with experienced teachers. Personalized curriculum, flexible scheduling. Book your free 20-minute trial today!" },
    { name: "keywords", content: "virtual violin lessons, online guitar lessons, Suzuki method, music lessons, Jenny Peña, Johnny Peña, free trial lesson, personalized curriculum" },
    { property: "og:title", content: "Virtual Violin & Guitar Lessons | Arco Melody" },
    { property: "og:description", content: "Professional virtual violin, viola, and guitar lessons with experienced teachers. Book your free 20-minute trial today!" },
    { property: "og:image", content: "/images/jennyDowntownAustin.jpg" },
    { property: "og:url", content: "https://arcomelody.com/lessons" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/lessons" }
  ];
};

  
export default function Lessons() {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-base-200 mt-1 px-4 w-full">
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <LessonsHeroWithForm />
            </Suspense>
            
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <TrustBadges />
            </Suspense>

            {/* Lazy load below-the-fold components */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <LessonsTestimonialSnippets />
            </Suspense>
            
            <div id="pricing-section" className="pt-16">
                <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg"></div>}>
                    <PricingCard />
                </Suspense>
            </div>

            {/* Phone CTA for additional lead conversion after pricing */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <LessonsPhoneCTA />
            </Suspense>
            
            <Suspense fallback={<div className="w-full h-64 animate-pulse bg-base-300 rounded-lg"></div>}>
                <FAQ />
            </Suspense>
        </div>
        </>
    );
}
