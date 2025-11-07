export default function AboutMe() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a web developer with over 10 years experience in the digital realm. I believe in building
              accessible products with clean, readable code. I love the collaborative aspect of web development,
              and truly believe that communication leads to great work.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Before becoming a web developer, I worked in ecommerce marketing and website management. This experience
              has allowed me to look beyond the code and evaluate the real-world impact of what I build. With every
              keystroke I ask myself "how will this help the user?" and "does the client need this?"
            </p>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <img
              src="/madison-bentley.jpg"
              alt="About Me"
              className="w-full max-w-sm rounded-lg shadow-lg object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
