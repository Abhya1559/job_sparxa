export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 py-6 mt-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs sm:text-sm text-[#A0AEC0] font-medium text-center md:text-left">
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
        </p>

        <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-xs sm:text-sm text-[#A0AEC0] font-medium">
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
      </div>
    </footer>
  );
}
