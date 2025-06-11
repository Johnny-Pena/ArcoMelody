import LessonsTitlePage from "../components/LessonsTitlePage";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import PricingCard from "../components/pricingCard";

export const meta = () => {
  return [
    { title: "Arco Melody | Lessons" },
    { name: "description", content: "Discover music lessons with Arco Melody, where our teachers are professional musicians and experienced educators. Join us today and start your musical journey!" },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, Johnny Peña, Johnny Pena, guitarist, guitar teacher, professional violinist, professional guitarist, music achievements" },
    { property: "og:title", content: "Arco Melody" },
    { property: "og:description", content: "Discover music lessons with Arco Melody, where our teachers are professional musicians and experienced educators. Join us today and start your musical journey!" },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://arcomelody.com/lessons" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/lessons" }
  ];
};

  
export default function Lessons() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 mt-14 px-4 w-full">
            <h1 className="text-3xl font-bold mt-16 mb-8 sm:text-5xl">Virtual Music Lessons</h1>
            <LessonsTitlePage />    
            <Testimonials  />
            <div id="pricing-section" className="pt-16">
            <PricingCard />
            </div>
            <FAQ /> 
        </div>
    );
}