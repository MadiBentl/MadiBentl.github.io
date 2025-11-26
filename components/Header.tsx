export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="p-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex gap-x-2 lg:gap-x-8 justify-end">
          <a href="#projects" className="text-sm/6 font-semibold text-gray-800 px-1 hover:bg-(--color-accent) hover:text-white">Projects</a>
          <a href="#about" className="text-sm/6 font-semibold text-gray-800 px-1 hover:bg-(--color-accent) hover:text-white">About Me</a>
          <a href="#contact" className="text-sm/6 font-semibold text-gray-800 px-1 hover:bg-(--color-accent) hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}
