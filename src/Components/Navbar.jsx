import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";



export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="h-14 w-auto"
            />
          </Link>
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">

          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/">Home</Link>

          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/about">About</Link>
          </li>

          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <Link to="/services">Services</Link>
          </li>

          {/* <li className="hover:text-blue-600 cursor-pointer">
            Investment Solutions
          </li> */}

          {/* <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/blogs">Blogs</Link>
          </li> */}

          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/contactpage">Contact</Link>
          </li>

        </ul>


        {/* CTA Button */}
        <div className="hidden md:flex">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow hover:scale-105 transition">
            <Link to="/contactpage">Get Consultation</Link>
          </button>
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">

          <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">

            <li> <Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            {/* <li>Investment Solutions</li> */}
            {/* <li><Link to="/blogs">Blogs</Link></li> */}
            <li> <Link to="/contactpage">Contact</Link></li>

            <button className="bg-yellow-400 text-black py-2 rounded-lg font-semibold">
              Get Consultation
            </button>

          </ul>

        </div>
      )}

    </nav>
  );
}