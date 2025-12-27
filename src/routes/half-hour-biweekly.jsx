import HalfHourBiWeekly from '../components/forms/HalfHourBiWeekly';

export const meta = () => {
  return [
    { title: "Arco Melody | Half Hour Bi-Weekly Lesson" },
    { name: "description", content: "Schedule a half hour bi-weekly lesson with Arco Melody's professional music teachers. Start your musical journey today!" },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, Johnny Peña, Johnny Pena, guitarist, guitar teacher, professional violinist, professional guitarist, music achievements, half hour bi-weekly lesson" },
    { property: "og:title", content: "Arco Melody | Half Hour Bi-Weekly Lesson" },
    { property: "og:description", content: "Schedule a half hour bi-weekly lesson with Arco Melody's professional music teachers. Start your musical journey today!" },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://arcomelody.com/half-hour-biweekly" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/half-hour-biweekly" }
  ];
};

export default function HalfHourBiWeeklyPage() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 mt-14 px-4 w-full">
            <HalfHourBiWeekly />
        </div>
    );
}
