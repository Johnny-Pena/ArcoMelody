import CoreValuesCard from "../components/cards/CoreValuesCard";

export const meta = () => {
  return [
    { title: "Arco Melody - Core Values" },
    { name: "description", content: "Learn about the core values of Arco Melody, a virtual violin and guitar studio based in Texas. Explore our commitment to joy, connection, purpose, and growth in music." },
    { name: "keywords", content: "core values, music education, joy, connection, purpose, growth" },
    { property: "og:title", content: "Arco Melody - Core Values" },
    { property: "og:description", content: "Discover the core values that guide Arco Melody in providing exceptional music education and fostering a love for music." },
    { property: "og:image", content: "/assets/images/Arco-Melody-Logo(Music-is-Joy-No.1)40x40px.png" },
    { property: "og:url", content: "https://arcomelody.com/core-values" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/core-values" }
  ];
}

export default function CoreValues() {
  return (
    <div className="flex flex-col items-center justify-center bg-base-200 mt-14 px-4 w-full">
      <h1 className="text-5xl font-bold mt-16 mb-8">Our Core Values</h1>
      <img
        src="/images/Arco-Melody-Logo(Music-is-Joy-No.1)40x40px.png"
        alt="Arco Melody Logo"
        className="w-40 h-40 object-contain mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl justify-items-center">
        <CoreValuesCard />
      </div>
    </div>
  );
}