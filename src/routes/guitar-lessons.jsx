import { lazy, Suspense } from "react";

// Lazy load non-critical components to improve initial load time
const GuitarTrustBadges = lazy(() => import("../components/sections/GuitarLandingPage/GuitarTrustBadges"));
const GuitarHeroWithForm = lazy(() => import("../components/sections/GuitarLandingPage/GuitarHeroWithForm"));
const GuitarTestimonialSnippets = lazy(() => import("../components/sections/GuitarLandingPage/GuitarTestimonialSnippets"));
const PricingCard = lazy(() => import("../components/cards/pricingCard"));
const PhoneCTA = lazy(() => import("../components/sections/GuitarLandingPage/PhoneCTA"));
const FAQ = lazy(() => import("../components/FAQ"));

export const meta = () => {
  return [
    { title: "Virtual Guitar Lessons with Suzuki Teacher Johnny Peña | Free Trial | Arco Melody" },
    { name: "description", content: "Learn guitar online with Johnny Peña. 15+ years experience, personalized curriculum, flexible scheduling. FREE 20-minute trial lesson - no experience needed!" },
    { name: "keywords", content: "virtual guitar lessons, online guitar teacher, Suzuki method guitar, Johnny Peña guitar teacher, beginner guitar lessons, adult guitar lessons, guitar lessons for kids" },
    { property: "og:title", content: "Virtual Guitar Lessons with Expert Teacher | Free Trial" },
    { property: "og:description", content: "Master the guitar from home with Johnny Peña. Personalized instruction for all ages. Book your FREE trial lesson today!" },
    { property: "og:image", content: "/images/jenny-downtown-2025-512.webp" },
    { property: "og:url", content: "https://arcomelody.com/guitar-lessons" },
    { rel: "canonical", href: "https://arcomelody.com/guitar-lessons" }
  ];
};

  
export default function GuitarLessons() {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-base-200 mt-1 px-4 w-full">
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <GuitarHeroWithForm />
            </Suspense>
            
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <GuitarTrustBadges />
            </Suspense>

            {/* Lazy load below-the-fold components */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <GuitarTestimonialSnippets />
            </Suspense>
            
            <div id="pricing-section" className="pt-16">
                <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg"></div>}>
                    <PricingCard />
                </Suspense>
            </div>

            {/* Phone CTA for additional lead conversion after pricing */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <PhoneCTA />
            </Suspense>
            
            <Suspense fallback={<div className="w-full h-64 animate-pulse bg-base-300 rounded-lg"></div>}>
                <FAQ />
            </Suspense>
        </div>
        </>
    );
}
