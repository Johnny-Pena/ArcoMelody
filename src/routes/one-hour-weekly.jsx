import OneHourWeekly from '../components/forms/OneHourWeekly';

export const meta = () => {
  return [
    { title: "Arco Melody | One Hour Weekly Lesson" },
    { name: "description", content: "Schedule a one hour weekly lesson with Arco Melody's professional music teachers. Start your musical journey today!" },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, Johnny Peña, Johnny Pena, guitarist, guitar teacher, professional violinist, professional guitarist, music achievements, one hour weekly lesson" },
    { property: "og:title", content: "Arco Melody | One Hour Weekly Lesson" },
    { property: "og:description", content: "Schedule a one hour weekly lesson with Arco Melody's professional music teachers. Start your musical journey today!" },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://arcomelody.com/one-hour-weekly" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/one-hour-weekly" }
  ];
};

export default function OneHourWeeklyPage() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 mt-14 px-4 w-full">
            <OneHourWeekly />
        </div>
    );
}