import {
  ChevronRight,
  BadgeCheck,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";


const features = [
  {
    icon: BadgeCheck,
    title: "Expert\nFinancial\nAdvisors",
    desc: "Professional financial guidance backed by experience to help you make smarter investment decisions.",
  },
  {
    icon: ClipboardList,
    title: "Customized\nInvestment Plans",
    desc: "Carefully tailored investment strategies designed around your goals, timeline, and risk profile.",
  },
  {
    icon: ShieldCheck,
    title: "Secure\nInvestment\nStrategies",
    desc: "Modern and trusted financial approaches focused on stability, risk control, and long-term confidence.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term\nGrowth Planning",
    desc: "Structured wealth-building plans that support sustainable financial growth for future success.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#f6f8fc]">
      {/* Top Banner */}
      <div className="relative overflow-hidden bg-[#0f3b97]">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          />
        </div>

        {/* Decorative waves */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[35%] h-[220px] w-[900px] rotate-[-8deg] rounded-[100%] border-t-4 border-[#7aa4ff]/30" />
          <div className="absolute top-[5%] left-[42%] h-[220px] w-[850px] rotate-[-8deg] rounded-[100%] border-t-4 border-[#6c95f5]/35" />
          <div className="absolute top-[18%] left-[48%] h-[180px] w-[760px] rotate-[-8deg] rounded-[100%] border-t-4 border-[#4c73d3]/40" />
          <div className="absolute top-[18%] left-[50%] h-[150px] w-[700px] rotate-[-8deg] rounded-[100%] border-t-2 border-[#f3cf67]/70" />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-12">
          <div className="grid items-center gap-6 md:grid-cols-[1.1fr_420px]">
            <div className="text-white">
              <h2 className="text-[34px] font-bold leading-tight md:text-[38px]">
                Why Choose Us
              </h2>
              <p className="mt-3 max-w-[650px] text-[15px] leading-7 text-white/90 md:text-[16px]">
                Trust Rudronil Financial Services to guide you with expert advice,
                personalized planning, and secure investment strategies.
              </p>
            </div>

            <div className="flex md:justify-end">
              <button className="min-h-[58px] w-full rounded-xl border border-[#d6b650] bg-[#f2cf67] px-6 text-[18px] font-semibold text-[#1a244f] shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition hover:scale-[1.01] md:w-[330px]">
                <Link to="/contactpage">Book a Free Consultation</Link> 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative overflow-hidden">
        {/* subtle background design */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7f8fc_0%,#f4f6fb_100%)]" />
          <div className="absolute left-0 bottom-0 h-[220px] w-[320px] bg-[radial-gradient(circle_at_bottom_left,rgba(109,149,255,0.12),transparent_65%)]" />
          <div className="absolute right-0 top-0 h-[260px] w-[380px] bg-[radial-gradient(circle_at_top_right,rgba(109,149,255,0.10),transparent_65%)]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(59,130,246,0.10) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-14">
          <div className="text-center">
            <h3 className="text-[34px] font-bold leading-tight text-[#1d275f] md:text-[36px]">
              Why Choose Us
            </h3>
            <p className="mx-auto mt-4 max-w-[900px] text-[15px] leading-7 text-[#4b5563] md:text-[16px]">
              Trust Rudronil Financial Services to help you optimize your portfolio,
              enhance wealth across time, and secure investment strategies.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[18px] border border-white/70 bg-white/85 p-6 shadow-[0_10px_30px_rgba(20,37,63,0.10)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(20,37,63,0.14)]"
                >
                  {/* Card overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(245,248,255,0.88))]" />
                  <div className="absolute bottom-0 left-0 h-20 w-28 rounded-tr-[80px] bg-[radial-gradient(circle_at_bottom_left,rgba(242,207,103,0.13),transparent_70%)]" />
                  <div className="absolute right-0 bottom-0 h-24 w-36 rounded-tl-[90px] bg-[radial-gradient(circle_at_bottom_right,rgba(85,132,235,0.10),transparent_70%)]" />

                  <div className="relative">
                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#edf3ff] shadow-sm">
                        <Icon className="h-8 w-8 text-[#2563eb]" strokeWidth={2} />
                      </div>

                      <h4 className="whitespace-pre-line text-[22px] font-semibold leading-[1.15] text-[#1d275f]">
                        {item.title}
                      </h4>
                    </div>

                    <p className="min-h-[72px] text-[14px] leading-6 text-[#667085]">
                      {item.desc}
                    </p>

                    <button className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1e4aa8] transition group-hover:gap-3">
                      Learn More
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}