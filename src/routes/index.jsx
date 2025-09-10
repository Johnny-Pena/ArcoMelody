import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import TestimonialSnippets from "../components/TestimonialSnippets";

export const meta = () => {
  return [
    { title: "Arco Melody" },
    { name: "description", content: "Welcome to Arco Melody. Join our lessons today!" },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, Johnny Peña, Johnny Pena, guitarist, guitar teacher, professional violinist, professional guitarist, music achievements" },
    { property: "og:title", content: "Arco Melody" },
    { property: "og:description", content: "Learn about Arco Melody, a virtual violin and guitar studio based in Texas. Explore our collaborative teaching style and join us on a musical journey." },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://arcomelody.com" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com" }
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <TestimonialSnippets />
    </div>
  );
}