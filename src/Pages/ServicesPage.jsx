import {
  BriefcaseBusiness,
  ClipboardList,
  Wallet,
  TrendingUp,
  Landmark,
  BadgeDollarSign,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    desc: "Expert financial guidance designed to help you make informed investment decisions with confidence.",
    icon: BriefcaseBusiness,
  },
  {
    slug: "financial-planning",
    title: "Financial Planning",
    desc: "Personalized planning solutions for wealth creation, retirement readiness, and future stability.",
    icon: ClipboardList,
  },
  {
    slug: "wealth-management",
    title: "Wealth Management",
    desc: "Comprehensive wealth strategies focused on preserving, growing, and managing your assets effectively.",
    icon: Wallet,
  },
  {
    slug: "portfolio-strategy",
    title: "Portfolio Strategy",
    desc: "Well-structured portfolio recommendations to align with your risk profile and long-term objectives.",
    icon: TrendingUp,
  },
  {
    slug: "sub-broking",
    title: "Sub Broking",
    desc: "Reliable sub broking support with seamless execution and client-focused financial assistance.",
    icon: Landmark,
  },
  {
    slug: "mutual-funds",
    title: "Mutual Funds",
    desc: "Carefully selected mutual fund options tailored to your goals, timeline, and investment comfort.",
    icon: BadgeDollarSign,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f6f7fc] text-[#1d275f]">

      {/* Banner */}
      <section className="relative overflow-hidden bg-[#123c99]">

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-8">
          <h1 className="text-3xl md:text-[42px] font-bold text-white">
            Our Services
          </h1>

          <p className="mt-4 text-sm text-white/90">
            Home <span className="mx-2">›</span> Services
          </p>
        </div>

      </section>


      {/* Intro */}
      <section className="relative overflow-hidden">

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-8">

          <p className="max-w-4xl text-[17px] leading-8 text-[#4b5563]">
            We offer a comprehensive suite of financial services to help you
            achieve your investment goals and secure your financial future.
          </p>


          {/* Cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[14px] border border-[#e3e6f2] bg-white/90 p-6 shadow-[0_8px_24px_rgba(20,37,63,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(20,37,63,0.12)]"
                >

                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(245,248,255,0.92))]" />

                  <div className="relative">

                    {/* Icon + Title */}
                    <div className="mb-4 flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] shadow-sm">
                        <Icon
                          className="h-7 w-7 text-blue-600"
                          strokeWidth={2}
                        />
                      </div>

                      <h3 className="text-[26px] font-semibold leading-[1.1] text-[#1d275f]">
                        {service.title}
                      </h3>

                    </div>


                    {/* Description */}
                    <p className="min-h-[72px] text-[15px] leading-7 text-[#667085]">
                      {service.desc}
                    </p>


                    {/* Learn More */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1e4aa8] transition group-hover:gap-3"
                    >
                      Learn More
                      <ChevronRight className="h-4 w-4" />
                    </Link>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="relative overflow-hidden bg-[#123c99]">

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <h2 className="text-[24px] md:text-[34px] font-bold text-white">
                Ready to Get Started?
              </h2>

              <p className="mt-2 max-w-[560px] text-[15px] leading-7 text-white/90">
                Book your free consultation with our expert advisors to explore
                the best investment opportunities for you.
              </p>
            </div>


            <Link
              to="/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-[#d4b355] bg-[#f1cd68] px-8 text-[17px] font-semibold text-[#1d275f] shadow-[0_8px_18px_rgba(0,0,0,0.10)] transition hover:brightness-105"
            >
              Get Free Consultation
            </Link>

          </div>
        </div>

      </section>

    </div>
  );
}