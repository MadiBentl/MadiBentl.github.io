export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex ml-auto items-center justify-between p-6 lg:px-8">
        <div className="hidden lg:flex lg:gap-x-8">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Projects</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">About Me</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Contact</a>
        </div>
      </nav>
    </header>
  );
}
