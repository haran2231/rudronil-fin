import { Users, Briefcase, ShieldCheck, TrendingUp } from "lucide-react";

export default function Stats() {
  const stats = [
    { value: "1200+", label: "Clients Served", icon: Users },
    { value: "10+", label: "Years of Experience", icon: Briefcase },
    { value: "25+", label: "Expert Advisors", icon: ShieldCheck },
    { value: "1500+", label: "Investment Plans", icon: TrendingUp },
  ];

  return (
    <section className="relative z-20 -mt-12 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">

          <div className="grid grid-cols-2 md:grid-cols-4 text-center">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`px-6 py-6 flex flex-col items-center justify-center ${
                    index !== stats.length - 1
                      ? "md:border-r border-gray-200"
                      : ""
                  } ${index < 2 ? "border-b md:border-b-0 border-gray-200" : ""}`}
                >
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
                    {item.value}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.label}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}