import LessonsTitlePage from "../components/LessonsTitlePage";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import PricingCard from "../components/pricingCard";
import InstrumentShowcase from "../components/InstrumentShowcase";
import WhyVirtualWorks from "../components/WhyVirtualWorks";

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
            
            <LessonsTitlePage />    
            <InstrumentShowcase />
            <WhyVirtualWorks />
            <div id="pricing-section" className="pt-16">
            <PricingCard />
            </div>
            <FAQ /> 
        </div>
    );
}