export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <nav className="flex gap-6">
          <a href="#home" className="hover:text-gray-300 transition">Home</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
