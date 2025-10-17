import { lazy, Suspense } from "react";

// Lazy load non-critical components to improve initial load time
const ViolinTrustBadges = lazy(() => import("../components/sections/ViolinLandingPage/ViolinTrustBadges"));
const ViolinHero = lazy(() => import("../components/sections/ViolinLandingPage/ViolinHero"));
const ViolinTrialButton = lazy(() => import("../components/sections/ViolinLandingPage/ViolinTrialButton"));
const ViolinTestimonialSnippets = lazy(() => import("../components/sections/ViolinLandingPage/ViolinTestimonialSnippets"));
const PricingCard = lazy(() => import("../components/cards/pricingCard"));
const ViolinPhoneCTA = lazy(() => import("../components/sections/ViolinLandingPage/ViolinPhoneCTA"));
const FAQ = lazy(() => import("../components/FAQ"));

export const meta = () => {
  return [
    { title: "Virtual Violin Lessons with Suzuki Teacher Jenny Peña | Free Trial | Arco Melody" },
    { name: "description", content: "Learn violin online with Suzuki-registered teacher Jenny Peña. 15+ years experience, personalized curriculum, flexible scheduling. FREE 20-minute trial lesson - no experience needed!" },
    { name: "keywords", content: "virtual violin lessons, online violin teacher, Suzuki method violin, Jenny Peña violin teacher, beginner violin lessons, adult violin lessons, violin lessons for kids" },
    { property: "og:title", content: "Virtual Violin Lessons with Expert Teacher | Free Trial" },
    { property: "og:description", content: "Master the violin from home with Suzuki-registered teacher Jenny Peña. Personalized instruction for all ages. Book your FREE trial lesson today!" },
    { property: "og:image", content: "/images/jenny-downtown-2025-512.webp" },
    { property: "og:url", content: "https://arcomelody.com/violin-lessons" },
    { rel: "canonical", href: "https://arcomelody.com/violin-lessons" }
  ];
};

  
export default function ViolinLessons() {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-base-200 mt-1 px-4 w-full">
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <ViolinHero />
            </Suspense>
            
            <Suspense fallback={<div className="w-full h-24 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <ViolinTrialButton />
            </Suspense>
            
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <ViolinTrustBadges />
            </Suspense>

            {/* Lazy load below-the-fold components */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <ViolinTestimonialSnippets />
            </Suspense>
            
            <div id="pricing-section" className="pt-16">
                <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg"></div>}>
                    <PricingCard />
                </Suspense>
            </div>

            {/* Phone CTA for additional lead conversion after pricing */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <ViolinPhoneCTA />
            </Suspense>
            
            <Suspense fallback={<div className="w-full h-64 animate-pulse bg-base-300 rounded-lg"></div>}>
                <FAQ />
            </Suspense>
        </div>
        </>
    );
}
