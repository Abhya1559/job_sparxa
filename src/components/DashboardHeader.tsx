import { Button } from "./ui/button";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

export default function DashboardHeader() {
  return (
    <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center space-x-1 text-sm text-gray-400">
          <span>Pages</span>
          <span>/</span>
          <span className="font-medium text-gray-900">Dashboard</span>
        </div>

        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4">
        <div className="relative w-full sm:w-64">
          <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />

          <input
            type="text"
            placeholder="Search..."
            className="
              w-full
              pl-10 pr-4 py-2
              text-sm
              border border-gray-300
              rounded-lg
              bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-teal-400
              focus:border-transparent
            "
          />
        </div>

        <Button
          variant="ghost"
          className="text-gray-600 flex items-center gap-2"
        >
          <FaUserLarge />
          <span className="hidden sm:inline">Sign In</span>
        </Button>

        <div className="flex items-center gap-3 text-gray-600">
          <IoMdSettings className="cursor-pointer" />
          <BsBellFill className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
