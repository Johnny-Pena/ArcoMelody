import FirstLessonScript from '../components/forms/FirstLessonComponent';

export const meta = () => {
  return [
    { title: "Arco Melody | Meet and Greet" },
    { name: "description", content: "Schedule a meet and greet with Arco Melody's professional music teachers. Start your musical journey today!" },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, Johnny Peña, Johnny Pena, guitarist, guitar teacher, professional violinist, professional guitarist, music achievements, meet and greet" },
    { property: "og:title", content: "Arco Melody | Meet and Greet" },
    { property: "og:description", content: "Schedule a meet and greet with Arco Melody's professional music teachers. Start your musical journey today!" },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://arcomelody.com/meetandgreet" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/meetandgreet" }
  ];
};

export default function FirstLessonPage() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 mt-14 px-4 w-full">
            <FirstLessonScript />
        </div>
    );
}