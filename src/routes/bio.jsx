import BioComp from '../components/BioComp';
export const meta = () => {
  return [
    { title: "Arco Melody | Bio" },
    { name: "description", content: "Learn about Arco Melody, a virtual violin and guitar studio based in Texas. Explore our collaborative teaching style and join us on a musical journey." },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, Johnny Peña, Johnny Pena, guitarist, guitar teacher, professional violinist, professional guitarist, music achievements" },
    { property: "og:title", content: "Arco Melody | Bio" },
    { property: "og:description", content: "Learn about Arco Melody, a virtual violin and guitar studio based in Texas. Explore our collaborative teaching style and join us on a musical journey." },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://arcomelody.com/bio" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/bio" }
  ];
};

export default function Bio() {
  return (
      <div className="flex flex-col items-center bg-base-200 min-h-screen pt-8 px-4 w-full">
        <BioComp />
      </div>
  );
}