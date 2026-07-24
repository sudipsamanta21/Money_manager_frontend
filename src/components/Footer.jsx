import React from "react";
import { PiggyBank, Globe, MessageCircle, Link2, Users } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: ["Features", "Dashboard", "Pricing", "Security"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    links: ["Contact us", "Help Center", "Privacy Policy", "Terms of Service"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <PiggyBank size={22} color="#F5B324" fill="#FDE68A" strokeWidth={1.8} />
            <span className="font-bold text-white text-base">Money Manager</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Your foundation for secure, intelligent financial management.
          </p>
          <div className="flex gap-3">
            {[Globe, MessageCircle, Users, Link2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-gray-800 grid place-items-center hover:bg-gray-700"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {FOOTER_LINKS.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 pt-6 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Money Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
