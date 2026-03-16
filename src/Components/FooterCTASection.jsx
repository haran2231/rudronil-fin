import {
  Facebook,
  Twitter,
  Globe,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import { Link } from "react-router-dom";


export default function FooterCTASection() {
  return (
    <section className="w-full">

      {/* CTA Banner */}
      <div className="relative overflow-hidden bg-[#113b97] px-6 py-10 md:px-12">

        {/* dotted pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* wave lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-14 left-[36%] h-[220px] w-[780px] rotate-[-8deg] rounded-full border-t-4 border-[#7fa8ff]/30" />
          <div className="absolute -top-2 left-[45%] h-[200px] w-[720px] rotate-[-8deg] rounded-full border-t-4 border-[#5b88ea]/35" />
          <div className="absolute top-3 left-[52%] h-[180px] w-[660px] rotate-[-8deg] rounded-full border-t-4 border-[#3f6fd3]/35" />
          <div className="absolute top-5 left-[50%] h-[160px] w-[680px] rotate-[-8deg] rounded-full border-t-2 border-[#f3cc63]/80" />
        </div>

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Start Your Investment Journey Today
            </h2>

            <p className="text-white/90 mt-2">
              More opportunities, greater wealth, expert consultation.
            </p>
          </div>

          <button className="bg-[#f2cf67] border border-[#d5b453] text-[#1c2756] font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-[1.02] transition">
            <Link to="/contactpage">Book a Free Consultation</Link>
          </button>

        </div>

      </div>


      {/* Footer Bottom */}
      {/* <div className="bg-[#f5f6fb] px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <p className="text-gray-600 text-sm">
          © 2026 Rudronil Financial Services Private Limited. All rights reserved · Privacy Policy · Terms of Service
        </p>

        <div className="flex items-center gap-4">

          <Facebook className="w-5 h-5 text-gray-500" />
          <Twitter className="w-5 h-5 text-gray-500" />
          <Globe className="w-5 h-5 text-gray-500" />

          <div className="flex gap-3 ml-3">

            <div className="bg-[#284a9f] text-white w-8 h-8 rounded-full flex items-center justify-center">
              <Facebook size={16}/>
            </div>

            <div className="bg-[#284a9f] text-white w-8 h-8 rounded-full flex items-center justify-center">
              <BriefcaseBusiness size={16}/>
            </div>

            <div className="bg-[#284a9f] text-white w-8 h-8 rounded-full flex items-center justify-center">
              <Mail size={16}/>
            </div>

          </div>

        </div>

      </div> */}

    </section>
  );
}