import { useState } from "react";
import { IoIosHome, IoIosMenu, IoIosClose } from "react-icons/io";
import { IoStatsChartSharp, IoCardSharp, IoRocket } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";
import { FaUserLarge, FaFile } from "react-icons/fa6";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ href = "#", icon: Icon, label }: any) => (
    <a
      href={href}
      onClick={() => setIsOpen(false)}
      className="
        group flex items-center w-full p-3 rounded-xl
        font-medium cursor-pointer transition-all
        hover:bg-white hover:shadow-md
      "
    >
      <div className="mr-4 grid place-items-center">
        <Icon
          size={36}
          className="
            bg-white text-teal-500 p-1.5 rounded-lg
            transition-all shadow-sm
            group-hover:bg-teal-500
            group-hover:text-white
            group-hover:scale-110
          "
        />
      </div>

      <span className="text-sm text-blue-gray-700 group-hover:text-blue-gray-900">
        {label}
      </span>
    </a>
  );

  return (
    <>
      <div
        className="
        lg:hidden
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-4 py-3
        bg-white/95 backdrop-blur
        border-b
      "
      >
        <span className="font-bold text-sm tracking-wide">PURITY UI</span>

        <button onClick={() => setIsOpen(!isOpen)} className="text-teal-500">
          {isOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-16 lg:top-0          
          left-0 z-50
          h-[calc(100vh-4rem)] lg:h-auto
          w-72
          bg-[#F8F9FA] lg:bg-transparent
          p-4
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-4 mb-6">
          <h5 className="text-sm font-bold text-blue-gray-900">
            PURITY UI DASHBOARD
          </h5>
          <div className="h-px mt-4 bg-linear-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        <nav className="flex flex-col gap-1">
          <NavItem icon={IoIosHome} label="Dashboard" href="/dashboard" />
          <NavItem icon={IoStatsChartSharp} label="Tables" />
          <NavItem icon={IoCardSharp} label="Billing" />
          <NavItem icon={AiFillTool} label="RTL" />

          <p className="mt-8 mb-2 ml-4 text-xs font-bold uppercase tracking-widest text-blue-gray-400">
            Account Pages
          </p>

          <NavItem icon={FaUserLarge} label="Profile" href="/profile" />
          <NavItem icon={FaFile} label="Sign In" />
          <NavItem icon={IoRocket} label="Sign Up" />

          <div className="relative w-full mt-8 rounded-2xl bg-teal-400 p-6 text-white overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full border border-white/20" />
            <div className="absolute -top-2 -right-2 w-24 h-24 rounded-full border border-white/20" />

            <div className="relative z-10">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-500 font-bold">?</span>
              </div>

              <h3 className="text-sm font-semibold">Need help?</h3>
              <p className="text-xs text-white/90 mb-4">
                Please check our docs
              </p>

              <button
                className="
                w-full bg-white text-gray-800
                font-semibold py-3 rounded-xl text-sm
                hover:bg-gray-100 transition
              "
              >
                DOCUMENTATION
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
