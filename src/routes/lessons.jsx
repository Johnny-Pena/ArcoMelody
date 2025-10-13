import { lazy, Suspense } from "react";
import InstrumentShowcase from "../components/sections/InstrumentShowcase";

// Lazy load non-critical components to improve initial load time
const LessonsTitlePage = lazy(() => import("../components/LessonsTitlePage"));
const WhyVirtualWorks = lazy(() => import("../components/sections/WhyVirtualWorks"));
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
        <div className="flex flex-col items-center justify-center bg-base-200 mt-1 px-4 w-full">
            {/* Enhanced Hero Section */}
            <div className="hero-section text-center max-w-4xl mx-auto pt-16 pb-8">
                <h1 className="text-3xl font-bold mb-4 sm:text-5xl">Virtual Music Lessons</h1>
            </div>
            
            <Suspense fallback={<div className="w-full h-48 animate-pulse bg-base-300 rounded-lg mb-4"></div>}>
                <LessonsTitlePage />
            </Suspense>
            <InstrumentShowcase />
            
            {/* Lazy load below-the-fold components */}
            <Suspense fallback={<div className="w-full h-32 animate-pulse bg-base-300 rounded-lg"></div>}>
                <WhyVirtualWorks />
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