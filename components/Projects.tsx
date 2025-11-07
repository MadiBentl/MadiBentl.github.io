export default function Projects() {
    const Projects = [
        {
            "name": "Ecover",
            "image": "",
            "tech": ["headless", "bigcommerce", "next.js", "tailwind", "storyblok"],
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
            "description": "This Shopify Plus build required a lot of collaboration with the client to build out metafields and subscriptions in a way that are user friendly - both for the merchant and the end user."
        }
    ]
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-6xl mx-auto w-full">
        <h2>Projects</h2>
        <p>Collaboration is central to success. Below is a list of clients I've worked with & projects I've built.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {Projects.map(project => {
                return (
                    <div>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}
