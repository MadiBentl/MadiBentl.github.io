
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
    ]
  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-4xl font-bold text-gray-800 text-center">How I build</h2>
      <ul className="flex justify-center gap-8 p-0 m-0 list-none">
        {technologies.map(technology => {
          return (
            <li key={technology.name} className="block p-4">
                <p>{technology.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
