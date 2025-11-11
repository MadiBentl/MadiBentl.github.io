export default function Projects() {
    const Projects = [
        {
            "name": "Ecover",
            "image": "",
            "tech": ["headless", "bigcommerce", "next.js", "tailwind", "storyblok", "typescript"],
            "description": "Ecover is a major European retailer of eco-friendly cleaning products. This build features localization, an intense storyblok configuration, and complicated components. It was a delight to be able to contribute to this project."
        },
        {
            "name": "Mrs Meyers",
            "image": "",
            "tech": ["bigcommerce", "javascript"],
            "description": "Built on legacy code, Mrs Meyers packs a lot of complexity into a bigcommerce build."
        },
        {
            "name": "Plant Therapy",
            "image": "",
            "tech": ["shopify", "javascript"],
            "description": "This Shopify Plus build required a lot of collaboration with the client to build out metafields and subscriptions in a way that are user friendly - both for the merchant and the end user. I was the lead developer on this project and enjoyed collaborating with the client, account manager and designer to find everything we need for a perfect build."
        }
    ]
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-l font-bold">Collaboration is central to success. Below is a selection of clients I've worked with & projects I've built.</p>
        <div>
            {Projects.map(project => {
                return (
                    <div className="my-8 w-[40vw] min-w-[360px]">
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <p>{project.description}</p>
                        <ul className="flex flex-wrap">{project.tech.map(tech => {
                            return (<li key={tech}>
                                <div className="bg-(--color-accent) inline-block py-1 px-4 mr-2 mb-2 rounded-3xl font-bold">{tech}</div></li>)
                        })}</ul>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}
