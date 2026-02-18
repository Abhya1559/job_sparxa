import { IoIosHome } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoCardSharp } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
export default function Sidebar() {
  return (
    <div className="w-1/6 max-h-screen flex flex-col items-start justify-between  bg-transparent">
      <div className="relative flex h-[calc(100vh-20rem)] w-full max-w-[20rem] flex-col rounded-xl bg-transparent bg-clip-border p-4 text-gray-700 ">
        <div className="p-4 mb-2">
          <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            PURITY UI DASHBOARD
          </h5>
        </div>
        <nav className="flex min-w-60 flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <a
            href="/dashboard"
            role="button"
            className="
        group
        flex items-center
        rounded-xl
        font-medium
        cursor-pointer
        w-full
        p-3
        transition-all
        hover:bg-white
         hover:shadow-xl
  "
          >
            <div className="grid mr-4 place-items-center">
              <IoIosHome
                size={36}
                className="
        bg-white
        text-teal-500
        p-1.5
        rounded-lg
        transition-all
        group-hover:bg-teal-500
        group-hover:text-white
        group-hover:scale-110
      "
              />
            </div>

            <span className="transition-colors group-hover:text-blue-gray-900">
              Dashboard
            </span>
          </a>
          <div
            role="button"
            className="
        group
        flex items-center
        rounded-xl
        font-medium
        cursor-pointer
        w-full
        p-3
        transition-all
        hover:bg-white
         hover:shadow-xl
  "
          >
            <div className="grid mr-4 place-items-center">
              <IoStatsChartSharp
                size={36}
                className="
        bg-white
        text-teal-500
        p-1.5
        rounded-lg
        transition-all
        group-hover:bg-teal-500
        group-hover:text-white
        group-hover:scale-110
      "
              />
            </div>
            Tables
          </div>
          <div
            role="button"
            className="
        group
        flex items-center
        rounded-xl
        font-medium
        cursor-pointer
        w-full
        p-3
        transition-all
        hover:bg-white
         hover:shadow-xl
  "
          >
            <div className="grid mr-4 place-items-center">
              <IoCardSharp
                size={36}
                className="
        bg-white
        text-teal-500
        p-1.5
        rounded-lg
        transition-all
        group-hover:bg-teal-500
        group-hover:text-white
        group-hover:scale-110
      "
              />
            </div>
            Billing
          </div>{" "}
          <div
            role="button"
            className="
        group
        flex items-center
        rounded-xl
        font-medium
        cursor-pointer
        w-full
        p-3
        transition-all
        hover:bg-white
         hover:shadow-xl
  "
          >
            <div className="grid mr-4 place-items-center">
              <AiFillTool
                size={36}
                className="
        bg-white
        text-teal-500
        p-1.5
        rounded-lg
        transition-all
        group-hover:bg-teal-500
        group-hover:text-white
        group-hover:scale-110
      "
              />
            </div>
            RTL
          </div>
          <h1 className="text-lg font-semibold mt-10 ">ACCOUNT PAGES</h1>
          <a
            href="/profile"
            role="button"
            className="
        group
        flex items-center
        rounded-xl
        font-medium
        cursor-pointer
        w-full
        p-3
        transition-all
        hover:bg-white
         hover:shadow-xl
  "
          >
            <div className="grid mr-4 place-items-center">
              <FaUserLarge
                size={36}
                className="
        bg-white
        text-teal-500
        p-1.5
        rounded-lg
        transition-all
        group-hover:bg-teal-500
        group-hover:text-white
        group-hover:scale-110
      "
              />
            </div>
            Profile
          </a>
          <div
            role="button"
            className="
        group
        flex items-center
        rounded-xl
        font-medium
        cursor-pointer
        w-full
        p-3
        transition-all
        hover:bg-white
         hover:shadow-xl
  "
          >
            <div className="grid mr-4 place-items-center">
              <FaFile
                size={36}
                className="
        bg-white
        text-teal-500
        p-1.5
        rounded-lg
        transition-all
        group-hover:bg-teal-500
        group-hover:text-white
        group-hover:scale-110
      "
              />
            </div>
            Sign In
          </div>
          <div
            role="button"
            className="
        group
        flex items-center
        rounded-xl
        font-medium
        cursor-pointer
        w-full
        p-3
        transition-all
        hover:bg-white
         hover:shadow-xl
  "
          >
            <div className="grid mr-4 place-items-center">
              <IoRocket
                size={36}
                className="
        bg-white
        text-teal-500
        p-1.5
        rounded-lg
        transition-all
        group-hover:bg-teal-500
        group-hover:text-white
        group-hover:scale-110
      "
              />
            </div>
            Sign up
          </div>{" "}
          <div className="relative w-72 mt-5 rounded-2xl bg-teal-400 p-6 text-white overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-white/20" />
            <div className="absolute -top-2 -right-2 w-32 h-32 rounded-full border border-white/20" />
            <div className="absolute top-10 right-6 w-20 h-20 rounded-full border border-white/20" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-500 font-bold">?</span>
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold">Need help?</h3>
              <p className="text-sm text-white/90 mb-4">
                Please check our docs
              </p>

              {/* Button */}
              <button
                className="
            w-full
            bg-white
            text-gray-800
            font-semibold
            py-3
            cursor-pointer
            rounded-xl
            text-sm
            hover:bg-gray-100
            transition
          "
              >
                DOCUMENTATION
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
