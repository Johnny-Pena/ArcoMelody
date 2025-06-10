import TestimonialsFull from "../components/TestimonialsFull"


export const meta = () => {
  return [
    { title: "Arco Melody | Testimonials" },
    { name: "description", content: "Discover music lessons with Arco Melody, where our teachers are professional musicians and experienced educators. Join us today and start your musical journey!" },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, Johnny Peña, Johnny Pena, guitarist, guitar teacher, professional violinist, professional guitarist, music achievements" },
    { property: "og:title", content: "Arco Melody" },
    { property: "og:description", content: "Discover music lessons with Arco Melody, where our teachers are professional musicians and experienced educators. Join us today and start your musical journey!" },
    { property: "og:url", content: "https://arcomelody.com/testimonials" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/testimonials" }
  ];
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-base-200 mt-14 px-4 w-full">
      <h1 className="text-5xl font-bold mt-16 mb-8">Testimonials</h1>
      <TestimonialsFull />
    </div>
  );
}