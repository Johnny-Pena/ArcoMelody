import Hero from "../components/Hero";

export const meta = () => {
  return [
    { title: "Jenny Peña Violin" },
    { name: "description", content: "Welcome to Jenny Peña Violin. Learn to play the violin with Jenny Peña, a professional violinist and experienced teacher. Join our lessons today!" },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violin lessons, violin teacher, learn violin, professional violinist, music lessons" },
    { property: "og:title", content: "Jenny Peña Violin" },
    { property: "og:description", content: "Welcome to Jenny Peña Violin. Learn to play the violin with Jenny Peña, a professional violinist and experienced teacher. Join our lessons today!" },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://jennypenaviolin.com" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://jennypenaviolin.com" }
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
    </div>
  );
}