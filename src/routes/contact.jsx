import ContactForm from "../components/Contactus"; 

export const meta = () => {
    return [
        { title: "Arco Melody | Contact Us" },
        { name: "description", content: "Get in touch with Arco Melody. Contact us for violin lessons, guitar lesson, inquiries, and more." },
        { name: "keywords", content: "Jenny Peña, Jenny Pena, violinist, violin teacher, Johnny Peña, Johnny Pena, guitarist, guitar teacher, professional violinist, professional guitarist, music achievements" },
        { property: "og:title", content: "Arco Melody | Contact Us" },
        { property: "og:description", content: "Get in touch with Arco Melody. Contact us for violin lessons, guitar lesson, inquiries, and more." },
        { property: "og:image", content: "/assets/images/Arco-Melody-Logo(Music-is-Joy-No.1)40x40px" },
        { property: "og:url", content: "https://arcomelody.com/contact" }, 
        { property: "og:type", content: "website" },
        { rel: "canonical", href: "https://arcomelody.com/contact" }
    ];
    };

export default function Contact() {
    return (
        <div className="bg-base-200 flex flex-col justify-center items-center pt-20 px-4 w-full md:min-h-screen">
        <img
        src="/images/Arco-Melody-Logo(Music-is-Joy-No.1)40x40px.png"
        alt="Arco Melody Logo"
        className="w-40 h-40 object-contain mb-8"
        />
        <h1 className="text-center text-5xl font-bold mb-4">Contact Us</h1>
        <ContactForm />
        </div>
    );
}