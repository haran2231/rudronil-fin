import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#f6f7fc] px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1d275f]">Service not found</h2>
        <p className="mt-3 text-gray-600">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/services"
          className="mt-6 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f7fc] text-[#1d275f]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-sm text-white/80">
            Home <span className="mx-2">›</span>
            Services <span className="mx-2">›</span>
            <span className="text-white">{service.title}</span>
          </p>

          <h1 className="mt-5 text-4xl font-bold md:text-5xl">
            {service.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-[#1d275f]">Overview</h2>
            <p className="mt-5 text-[17px] leading-8 text-gray-600">
              {service.intro}
            </p>
          </div>

          <div className="rounded-3xl bg-blue-50 p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-[#1d275f]">
              Key Benefits
            </h2>
            <div className="mt-6 space-y-4">
              {service.benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-blue-700" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 pb-14 md:px-8">
        <h2 className="text-3xl font-bold text-[#1d275f] text-center">
          What We Offer
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#1d275f]">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-7">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8 md:pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold">Ready to Move Forward?</h2>
          <p className="mt-4 max-w-3xl text-blue-100 leading-8">
            {service.cta}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}