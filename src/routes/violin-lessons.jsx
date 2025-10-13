import { lazy, Suspense } from "react";

// Lazy load non-critical components to improve initial load time
const ViolinTitlePage = lazy(() => import("../components/sections/ViolinLandingPage/ViolinTitlePage"));
const ViolinWhyVirtualViolinWorks = lazy(() => import("../components/sections/ViolinLandingPage/ViolinWhyVirtualWorks"));
const PricingCard = lazy(() => import("../components/cards/pricingCard"));
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
        <div className="flex flex-col items-center justify-center bg-base-200 mt-1 px-4 w-full">
            {/* Enhanced Hero Section */}
            <div className="hero-section text-center max-w-4xl mx-auto pt-16 pb-8">
                <h1 className="text-3xl font-bold mb-4 sm:text-5xl">Virtual Violin Lessons</h1>
            </div>
            
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <ViolinTitlePage />
            </Suspense>
            
            {/* Lazy load below-the-fold components */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <ViolinWhyVirtualViolinWorks />
            </Suspense>
            
            <div id="pricing-section" className="pt-16">
                <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg"></div>}>
                    <PricingCard />
                </Suspense>
            </div>
            
            <Suspense fallback={<div className="w-full h-64 animate-pulse bg-base-300 rounded-lg"></div>}>
                <FAQ />
            </Suspense>
        </div>
    );
}
