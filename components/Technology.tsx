import Image from "next/image";

export default function Technology() {
    const technologies = [
        {
            "name": "Github",
            "description": "Well documented commits, frequent pulls and pushes, and communication are are built in to my workflow.",
            "image": ""
        },
        {
            "name": "Mobile-first",
            "description": "We live in a mobile-first world, and our websites should reflect that. I build responsiveness into everything.",
            "image": ""
        },
        {
            "name": "Accessibility",
            "description": "Accessibility isn't just a 'good to have' - it's essential. I believe all websites should be usable by everyone.",
            "image": ""
        },
        {
            "name": "Collaboration",
            "description": "Programming is a team sport. I believe in documenting, commenting and keeping your code DRY and readable for current and future developers.",
            "image": ""
        },
    ]
  return (
    <>
      <Image
        src="/wave.svg"
        alt=""
        width={1200}
        height={100}
        className="w-full h-auto object-fill"
        priority
      />
      <div className="flex flex-col items-center pt-8 bg-(--color-blue)">
        <div className="max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">How I Build</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-0 m-0 list-none">
            {technologies.map(technology => {
              return (
                <li key={technology.name} className="block p-4">
                    <h3 className="text-2xl text-white">{technology.name}</h3>
                    <p className="text-l text-white">{technology.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Image
        src="/wave-bottom.svg"
        alt=""
        width={1200}
        height={100}
        className="w-full h-auto object-fill"
        priority
      />
    </>
  );
}
