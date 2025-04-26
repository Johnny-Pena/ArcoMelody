import SignUpScript from '../components/SignUpScript';

export const meta = () => {
  return [
    { title: "Arco Melody | Sign Up" },
    { name: "description", content: "Sign up for music lessons with Arco Melody, where our teachers are professional musicians and experienced educators. Join us today and start your musical journey!" },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, Johnny Peña, Johnny Pena, guitarist, guitar teacher, professional violinist, professional guitarist, music achievements" },
    { property: "og:title", content: "Arco Melody | Sign Up" },
    { property: "og:description", content: "Sign up for music lessons with Arco Melody, where our teachers are professional musicians and experienced educators. Join us today and start your musical journey!" },
    { property: "og:image", content: "/assets/images/Jenny-Website-Grey.png" },
    { property: "og:url", content: "https://arcomelody.com/bio" },
    { property: "og:type", content: "website" },
    { rel: "canonical", href: "https://arcomelody.com/bio" }
  ];
};

export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 mt-14">
            <SignUpScript />
        </div>
    );
}