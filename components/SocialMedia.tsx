import { Linkedin, Github } from "flowbite-react-icons/solid";
import { Envelope } from "flowbite-react-icons/outline";

export default function SocialMedia() {
    const socialMedias = [
        {
            "name": "github",
            "icon": Github,
            "link": "https://github.com/yourprofile"
        },
        {
            "name": "Linkedin",
            "icon": Linkedin,
            "link": "https://linkedin.com/in/yourprofile"
        },
        {
            "name": "email",
            "icon": Envelope,
            "link": "mailto:mb.madisonbentley@gmail.com"
        },
    ]
  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-4xl font-bold text-gray-800 text-center">Let's Collaborate</h2>
      <ul className="flex justify-center gap-8 p-0 m-0 list-none">
        {socialMedias.map(socialMedia => {
          const IconComponent = socialMedia.icon;
          return (
            <li key={socialMedia.name} className="block p-4">
              <a href={socialMedia.link}>
                <IconComponent size={48} color="green"/>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
