import {
  BriefcaseBusiness,
  ClipboardList,
  Wallet,
  TrendingUp,
  Landmark,
  BadgeDollarSign,
  ChevronRight,
  Star,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Investment Advisory",
      desc: "Expert financial guidance designed to help you make informed investment decisions with confidence.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Financial Planning",
      desc: "Personalized planning solutions for wealth creation, retirement readiness, and future stability.",
      icon: ClipboardList,
    },
    {
      title: "Wealth Management",
      desc: "Comprehensive wealth strategies focused on preserving, growing, and managing your assets effectively.",
      icon: Wallet,
    },
    {
      title: "Portfolio Strategy",
      desc: "Well-structured portfolio recommendations to align with your risk profile and long-term objectives.",
      icon: TrendingUp,
    },
    {
      title: "Sub Broking",
      desc: "Reliable sub broking support with seamless execution and client-focused financial assistance.",
      icon: Landmark,
    },
    {
      title: "Mutual Funds",
      desc: "Carefully selected mutual fund options tailored to your goals, timeline, and investment comfort.",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f8fc] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.06),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.08),_transparent_30%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1d275f] sm:text-4xl md:text-[52px]">
            Our Services
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4b5563] sm:text-base">
            Comprehensive financial advice tailored to your needs, helping you
            achieve your investment goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
          {services.slice(0, 4).map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/70 bg-white/80 p-6 shadow-[0_8px_30px_rgba(18,38,63,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(18,38,63,0.14)] xl:col-span-3"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(243,247,255,0.82))]" />

                <div className="relative">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] shadow-sm">
                      <Icon className="h-8 w-8 text-blue-600" strokeWidth={2} />
                    </div>

                    <h3 className="text-[22px] font-semibold leading-8 text-[#1d275f]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="min-h-[72px] text-sm leading-6 text-[#6b7280]">
                    {service.desc}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1f4aa8] transition group-hover:gap-3">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}

          {services.slice(4, 6).map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/70 bg-white/80 p-6 shadow-[0_8px_30px_rgba(18,38,63,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(18,38,63,0.14)] xl:col-span-3"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(243,247,255,0.82))]" />

                <div className="relative">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] shadow-sm">
                      <Icon className="h-8 w-8 text-blue-600" strokeWidth={2} />
                    </div>

                    <h3 className="text-[22px] font-semibold leading-8 text-[#1d275f]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="min-h-[72px] text-sm leading-6 text-[#6b7280]">
                    {service.desc}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1f4aa8] transition group-hover:gap-3">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}

          <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-6 shadow-[0_8px_30px_rgba(18,38,63,0.08)] xl:col-span-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(238,245,255,0.92))]" />
            <div className="absolute bottom-0 right-0 h-full w-[42%] bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_60%)]" />
            <div className="absolute left-0 top-0 h-20 w-56 rounded-br-[80px] bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.15),transparent_70%)]" />

            <div className="relative flex h-full flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-full md:max-w-[58%]">
                <div className="mb-3 flex items-center gap-1 text-[#f5c542]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <h3 className="text-[20px] font-semibold text-[#1d275f]">
                  Prastant R.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  Rudronil Financial Services helped me confidently organize my
                  investments and plan for long-term growth with expert
                  guidance.
                </p>

                <p className="mt-4 text-sm font-medium text-[#475569]">
                  Prastant R. <span className="mx-2 text-[#94a3b8]">•</span>
                  Client
                </p>
              </div>

              <div className="relative ml-auto flex w-full max-w-[240px] justify-end md:max-w-[250px]">
                <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_70%)]" />
                <img
                  src="/images/advisor-man.png"
                  alt="Advisor"
                  className="relative z-10 h-auto max-h-[220px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}