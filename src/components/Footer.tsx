export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-8 mt-auto">
      <div className="text-sm text-[#A0AEC0] font-medium mb-4 md:mb-0">
        © 2021, Made with <span className="text-red-500">❤️</span> by{" "}
        <a
          href="#"
          className="font-bold text-[#2D3748] hover:text-[#4FD1C5] transition-colors"
        >
          Creative Tim
        </a>{" "}
        &{" "}
        <a
          href="#"
          className="font-bold text-[#2D3748] hover:text-[#4FD1C5] transition-colors"
        >
          Simple
        </a>{" "}
        for a better web
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8 text-sm text-[#A0AEC0] font-medium">
        <li>
          <a href="#" className="hover:text-[#2D3748] transition-colors">
            Creative Tim
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#2D3748] transition-colors">
            Simple
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#2D3748] transition-colors">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#2D3748] transition-colors">
            License
          </a>
        </li>
      </ul>
    </footer>
  );
}
