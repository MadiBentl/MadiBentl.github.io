import { Linkedin, Github } from "flowbite-react-icons/solid";
import { Envelope } from "flowbite-react-icons/outline";

export default function SocialMedia() {
    const socialMedias = [
        {
            "name": "github",
            "icon": Github,
            "link": "https://github.com/MadiBentl"
        },
        {
            "name": "Linkedin",
            "icon": Linkedin,
            "link": "https://ca.linkedin.com/in/madison-b-a9220990"
        },
        {
            "name": "email",
            "icon": Envelope,
            "link": "mailto:mb.madisonbentley@gmail.com"
        },
    ]
  return (
    <div className="flex flex-col items-center p-8">
      <h2 id="contact" className="text-4xl md:text-5xl font-bold text-gray-800 text-center">Let&apos;s Collaborate</h2>
      <ul className="flex justify-center gap-8 p-0 m-0 list-none">
        {socialMedias.map(socialMedia => {
          const IconComponent = socialMedia.icon;
          return (
            <li key={socialMedia.name} className="block p-4">
              <a href={socialMedia.link} target="_blank" rel="noopener noreferrer">
                <IconComponent size={48} color="var(--color-blue)" aria-hidden="true"/>
                <span className="sr-only">{socialMedia.name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
