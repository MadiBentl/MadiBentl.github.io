export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-items-end p-6 lg:px-8">
        <div className="flex gap-x-2 lg:gap-x-8">
          <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:bg-(--color-magenta) hover:text-white">Projects</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:bg-(--color-magenta) hover:text-white">About Me</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:bg-(--color-magenta) hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}
