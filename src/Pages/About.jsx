import {
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  BadgeCheck,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Financial Guidance",
      desc: "We build confidence through transparent advice, ethical planning, and dependable investment support.",
    },
    {
      icon: Target,
      title: "Goal-Based Planning",
      desc: "Every client has different dreams. We create strategies aligned with your short-term and long-term goals.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused Strategy",
      desc: "Our approach balances opportunity and risk to help you grow wealth with discipline and clarity.",
    },
    {
      icon: Users,
      title: "Client-Centered Approach",
      desc: "We believe strong relationships create strong results, so every recommendation begins with understanding you.",
    },
  ];

  const stats = [
    { value: "1200+", label: "Happy Clients" },
    { value: "10+", label: "Years of Experience" },
    { value: "25+", label: "Expert Advisors" },
    { value: "1500+", label: "Investment Plans" },
  ];

  const values = [
    "Integrity in every recommendation",
    "Personalized financial planning",
    "Long-term relationship building",
    "Clear and honest communication",
    "Smart wealth creation strategies",
    "Focused support for every client",
  ];

  return (
    <div className="bg-[#f6f8fc] text-[#1d275f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-yellow-300 font-semibold tracking-wide uppercase text-sm">
              About Rudronil
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Financial Confidence for Every Future
            </h1>

            <p className="mt-6 text-lg text-blue-100 leading-8 max-w-2xl">
              At Rudronil Financial Services, we help individuals and families
              make smarter financial decisions through personalized planning,
              trusted guidance, and disciplined investment strategies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition">
                Get Consultation
              </button>

              <button className="border border-white/30 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition">
                Explore Our Services
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[520px] rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold">Why We Exist</h3>
              <p className="mt-4 text-blue-100 leading-7">
                Financial planning should not feel complicated or intimidating.
                We exist to simplify wealth management, create clarity, and help
                our clients move forward with confidence.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-1 h-5 w-5 text-yellow-300" />
                  <p>Personalized investment guidance for every stage of life</p>
                </div>
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-1 h-5 w-5 text-yellow-300" />
                  <p>Professional support rooted in trust and transparency</p>
                </div>
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-1 h-5 w-5 text-yellow-300" />
                  <p>Smart strategies designed for stability and long-term growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              A modern financial partner for ambitious individuals
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Rudronil Financial Services is dedicated to helping clients build,
              protect, and manage their wealth with confidence. We combine
              thoughtful planning with a client-first mindset, offering support
              that is practical, transparent, and focused on real results.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              Whether you are beginning your investment journey, planning for
              long-term financial security, or seeking smarter portfolio
              strategies, our team works to provide solutions that feel both
              reliable and easy to understand.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:-translate-y-1 transition"
                >
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-gray-600 leading-7 text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-blue-50 p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
            <p className="mt-4 text-gray-700 leading-8">
              To empower people with financial clarity through honest advice,
              strategic planning, and tailored investment solutions that support
              long-term success.
            </p>
          </div>

          <div className="rounded-3xl bg-yellow-50 p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
            <p className="mt-4 text-gray-700 leading-8">
              To become a trusted financial partner known for helping clients
              transform uncertainty into confidence and aspirations into
              achievable financial milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-3xl p-8 md:p-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-3xl md:text-4xl font-bold text-yellow-300">
                  {item.value}
                </h3>
                <p className="mt-2 text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Our Values
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            The principles behind our work
          </h2>
          <p className="mt-4 text-gray-600 leading-8">
            Our success is built on trust, discipline, and a commitment to
            helping clients feel secure in every financial decision they make.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-start gap-3"
            >
              <div className="mt-1 h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <BadgeCheck className="h-4 w-4" />
              </div>
              <p className="text-gray-700 font-medium">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Let’s Grow Together
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Start your financial journey with confidence
            </h2>
            <p className="mt-4 text-gray-600 leading-8 max-w-2xl">
              Discover a smarter way to plan, invest, and grow your wealth with
              guidance tailored to your financial ambitions.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition">
            Book a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section> */}
    </div>
  );
}