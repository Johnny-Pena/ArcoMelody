import SignUpScript from '../components/SignUpScript';

export const meta = () => {
  return [
    { title: "Arco Melody | Sign Up" },
    { name: "description", content: "Sign up for violin lessons with Jenny Peña, a professional violinist and experienced teacher. Start your musical journey today with personalized instruction and expert guidance." },
    { name: "keywords", content: "Jenny Peña, Jenny Pena, sign up, violin lessons, violin teacher, learn violin, professional violinist, music lessons" },
    { property: "og:title", content: "Arco Melody | Sign Up" },
    { property: "og:description", content: "Sign up for violin lessons with Jenny Peña, a professional violinist and experienced teacher. Start your musical journey today with personalized instruction and expert guidance." },
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