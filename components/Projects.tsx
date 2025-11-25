export default function Projects() {
    const Projects = [
        {
            "name": "Ecover",
            "image": "/project-ecover.png",
            "tech": ["headless", "bigcommerce", "next.js", "tailwind", "storyblok", "typescript"],
            "description": "Ecover is a major European retailer of eco-friendly cleaning products. This build features localization, an intense storyblok configuration, and complicated components. It was a delight to be able to contribute to this project."
        },
        {
            "name": "Mrs Meyers",
            "image": "/project-meyers.png",
            "tech": ["bigcommerce", "javascript"],
            "description": "Built on legacy code, Mrs Meyers packs a lot of complexity into a bigcommerce build."
        },
        {
            "name": "Plant Therapy",
            "image": "/project-planttherapy.png",
            "tech": ["shopify", "javascript"],
            "description": "This Shopify Plus build required a lot of collaboration with the client to build out metafields and subscriptions in a way that are user friendly - both for the merchant and the end user. I was the lead developer on this project and enjoyed collaborating with the client, account manager and designer to find everything we need for a perfect build."
        }
    ]
  return (
    <section className="pt-16 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-6xl mx-auto w-full">
        <h2 id="projects" className="text-4xl font-bold text-center">Projects</h2>
        <p className="text-2xl text-center max-w-4xl mx-auto">Collaboration is central to success. Below is a selection of clients I've worked with & projects I've built.</p>
        <div>
            {Projects.map(project => {
                return (
                    <div className="my-16 min-w-[360px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
                            <img src={project.image} alt={project.name} className="w-full h-auto rounded-3xl mb-4"/>
                            <div>
                                <h3 className="text-xl font-bold">{project.name}</h3>
                                <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
                                <ul className="flex flex-wrap">{project.tech.map(tech => {
                                    return (<li key={tech}>
                                        <div className="bg-(--color-accent) inline-block py-1 px-4 mr-2 mb-2 rounded-3xl font-bold text-white">{tech}</div></li>)
                                })}</ul>
                                </div>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}
