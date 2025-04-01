import LessonsTitlePage from "../components/LessonsTitlePage";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import PricingCard from "../components/pricingCard";

export const meta = () => {
  return [
    { title: "Arco Melody | Lessons" },
    { name: "description", content: "Discover violin lessons with Jenny Peña, a professional violinist and experienced teacher. Learn to play the violin with personalized instruction and expert guidance. Join our lessons today and start your musical journey!" },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violin lessons, violin teacher, learn violin, professional violinist, music lessons" },
    { property: "og:title", content: "Arco Melody" },
    { property: "og:description", content: "Discover violin lessons with Jenny Peña, a professional violinist and experienced teacher. Learn to play the violin with personalized instruction and expert guidance. Join our lessons today and start your musical journey!" },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://arcomelody.com/lessons" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/lessons" }
  ];
};

  
export default function Lessons() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 mt-14">
            <LessonsTitlePage />    
            <Testimonials  />
            <div id="pricing-section" className="pt-16">
            <PricingCard />
            </div>
            <FAQ /> 
        </div>
    );
}