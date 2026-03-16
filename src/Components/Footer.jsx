import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#123a96] text-white">
      {/* dotted pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* wave lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-180px] top-[-30px] h-[220px] w-[700px] rotate-[-8deg] rounded-full border-t-4 border-[#7ea8ff]/20" />
        <div className="absolute right-[-120px] top-[8px] h-[210px] w-[660px] rotate-[-8deg] rounded-full border-t-4 border-[#5f8df1]/25" />
        <div className="absolute right-[-100px] top-[26px] h-[200px] w-[620px] rotate-[-8deg] rounded-full border-t-4 border-[#f2cf67]/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-0">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          {/* About */}
          <div>
            <h3 className="text-[26px] font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link to="/about" className="hover:text-yellow-300 transition">
                  • Company Overview
                </Link>
              </li>
              {/* <li>
                <Link to="/careers" className="hover:text-yellow-300 transition">
                  • Careers
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[26px] font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link
                  to="/services//investment-advisory"
                  className="hover:text-yellow-300 transition"
                >
                  • Investment Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/services/wealth-management"
                  className="hover:text-yellow-300 transition"
                >
                  • Wealth Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/financial-planning"
                  className="hover:text-yellow-300 transition"
                >
                  • Financial Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[26px] font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/80" />
                <span>info.coimbatore@rudronilfinserv.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/80" />
                <span>+91 7894561238</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-white/80 mt-0.5" />
                <span>Coimbatore</span>
              </li>
            </ul>
          </div>

          {/* Careers */}
          {/* <div>
            <h3 className="text-[26px] font-semibold mb-4">Careers</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link to="/careers" className="hover:text-yellow-300 transition">
                  • Join Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-yellow-300 transition">
                  • Current Openings
                </Link>
              </li>
            </ul>
          </div> */}

          <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="h-14 w-auto"
            />
          </Link>
        </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3 text-[11px] text-white/80 text-center md:text-left">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/30 text-sm font-bold">
              R
            </div>

            <p>
              © 2026 Rudronil Financial Services Private Limited. All rights
              reserved. Privacy Policy · Terms · Services
            </p>
          </div>

          {/* Right Social */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-white/80 hover:text-yellow-300 transition"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-yellow-300 transition"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-yellow-300 transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white hover:bg-yellow-400 hover:text-[#123a96] transition"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white hover:bg-yellow-400 hover:text-[#123a96] transition"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white hover:bg-yellow-400 hover:text-[#123a96] transition"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}