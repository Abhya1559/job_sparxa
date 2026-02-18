import { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-teal-600">
            MyLogo
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-teal-600 font-medium hover:text-teal-800"
            >
              Home
            </a>
            <a
              href="#"
              className="text-teal-600 font-medium hover:text-teal-800"
            >
              About
            </a>
            <a
              href="/dashboard"
              className="text-teal-600 font-medium hover:text-teal-800"
            >
              Dashboard
            </a>
            <a
              href="/profile"
              className="text-teal-600 font-medium hover:text-teal-800"
            >
              Profile
            </a>
            <Button variant={"default"} className="bg-teal-500">
              Login
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 p-4">
            <a href="/" className="text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              About
            </a>
            <a href="/dashboard" className="text-gray-600 hover:text-black">
              Dashboard
            </a>
            <a href="/profile" className="text-gray-600 hover:text-black">
              Profile
            </a>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
