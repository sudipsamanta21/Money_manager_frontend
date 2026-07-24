import  { useState } from "react";
import { Menu, X } from "lucide-react";
import {assets} from "../assets/assets.js";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Contact us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-100 border-b border-gray-100 shadow-sm rounded-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <div className="flex items-center gap-2">
          {/*<PiggyBank size={22} color="#F5B324" fill="#FDE68A" strokeWidth={1.8} />*/}
          {/*<img src={assets.logo} alt="logo" className="h-10 w-10" />*/}
          <img
              src={assets.logo}
              alt="Money Manager"
              className="w-10 h-10 rounded-full border-4 border-fuchsia-100 object-contain bg-white "
          />
          <span className="font-bold text-gray-900 text-base">Money Manager</span>
        </div>

        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 text-sm font-medium hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-gray-900 text-sm font-medium hover:text-violet-600">
            Login
          </a>
          <a
            href="/Signup"
            className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 text-sm font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#login" className="text-gray-900 text-sm font-medium py-1">
            Login
          </a>
          <a
            href="#get-started"
            className="bg-violet-600 text-white rounded-lg px-5 py-2.5 text-sm font-semibold text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
export default Navbar;
