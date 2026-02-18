import { Button } from "./ui/button";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { BsBellFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import {
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineUserAdd,
  HiOutlineShoppingCart,
} from "react-icons/hi";
export default function DashboardHeader() {
  const dashboardStats = [
    {
      title: "Today's Moneys",
      value: "$53,000",
      change: "+55%",
      positive: true,
      icon: HiOutlineCurrencyDollar,
    },
    {
      title: "Today's Users",
      value: "2,300",
      change: "+5%",
      positive: true,
      icon: HiOutlineUserGroup,
    },
    {
      title: "New Clients",
      value: "+3,020",
      change: "-14%",
      positive: false,
      icon: HiOutlineUserAdd,
    },
    {
      title: "Total Sales",
      value: "$173,000",
      change: "+8%",
      positive: true,
      icon: HiOutlineShoppingCart,
    },
  ];

  return (
    <div className="mt-5 flex items-center justify-between">
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center space-x-1 text-sm text-gray-400">
          <span>Pages</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">Dashboard</span>
        </div>
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="flex items-center justify-center mr-10 space-x-0">
        <div className="relative w-64">
          {/* Icon */}
          <IoSearchSharp
            className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-gray-400
          text-lg
          pointer-events-none
        "
          />

          {/* Input */}
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

        <Button variant={"ghost"} className="text-gray-600 cursor-pointer">
          <FaUserLarge />
          Sign In
        </Button>
        <div className="space-x-4 flex text-gray-600 cursor-pointer">
          <IoMdSettings />
          <BsBellFill />
        </div>
      </div>
    </div>
  );
}
