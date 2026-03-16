import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, User, MessageSquare, Briefcase } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      await emailjs.sendForm(
        "service_lh21mnp",
        "template_eoau6v9",
        formRef.current,
        "VpnPf1sCIefn3gmAr"
      );

      setResult("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setResult("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f6f7fc] text-[#1d275f]">
      {/* Top Banner */}
      <section className="relative overflow-hidden bg-[#123c99]">
        {/* dot pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* wave lines */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-60px] bottom-[-50px] h-[180px] w-[540px] rounded-[100%] border-t-2 border-[#7ea8ff]/30 rotate-[2deg]" />
          <div className="absolute left-[120px] bottom-[-30px] h-[150px] w-[520px] rounded-[100%] border-t-2 border-[#5d89ef]/35 rotate-[2deg]" />
          <div className="absolute left-[180px] bottom-[-10px] h-[130px] w-[470px] rounded-[100%] border-t-2 border-[#f0cb67]/70 rotate-[2deg]" />
        </div>

        {/* right image */}
        <div className="absolute right-0 top-0 h-full w-[48%] hidden md:block">
          {/* <img
            src="/images/contact-banner-finance.png"
            alt="Financial growth"
            className="h-full w-full object-cover opacity-95"
          /> */}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-8">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-[42px] font-bold text-white">
              Contact Us
            </h1>

            <p className="mt-4 text-sm text-white/90">
              Home <span className="mx-2">›</span> Contact
            </p>
          </div>
        </div>
      </section>

      {/* breadcrumb strip */}
      {/* <section className="border-b border-[#e6e8f2] bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-[#6b7280] md:px-8">
          Home <span className="mx-2">›</span>
          <span className="text-[#1d275f] font-medium">Contact</span>
        </div>
      </section> */}

      {/* Main Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8f9fd_0%,#f3f5fb_100%)]" />
          <div className="absolute left-0 bottom-0 h-[220px] w-[280px] bg-[radial-gradient(circle_at_bottom_left,rgba(90,130,235,0.10),transparent_65%)]" />
          <div className="absolute right-0 top-0 h-[240px] w-[360px] bg-[radial-gradient(circle_at_top_right,rgba(90,130,235,0.08),transparent_65%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div>
              <h2 className="text-[34px] font-bold text-[#1d275f]">
                Send Us a Message
              </h2>

              <p className="mt-4 max-w-[420px] text-[16px] leading-7 text-[#6b7280]">
                We offer a comprehensive suite of financial services to help you
                achieve your investment strategies.
              </p>

              <form ref={formRef} onSubmit={sendEmail} className="mt-8 space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8b92ad]" />
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    className="h-12 w-full rounded-md border border-[#d9ddeb] bg-white px-12 text-[15px] text-[#1d275f] outline-none placeholder:text-[#9aa1b8] shadow-sm focus:border-[#4c73d8]"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8b92ad]" />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="h-12 w-full rounded-md border border-[#d9ddeb] bg-white px-12 text-[15px] text-[#1d275f] outline-none placeholder:text-[#9aa1b8] shadow-sm focus:border-[#4c73d8]"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8b92ad]" />
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Phone"
                    required
                    className="h-12 w-full rounded-md border border-[#d9ddeb] bg-white px-12 text-[15px] text-[#1d275f] outline-none placeholder:text-[#9aa1b8] shadow-sm focus:border-[#4c73d8]"
                  />
                </div>

                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8b92ad]" />
                  <select
                    name="service"
                    required
                    className="h-12 w-full appearance-none rounded-md border border-[#d9ddeb] bg-white px-12 pr-10 text-[15px] text-[#6b7280] outline-none shadow-sm focus:border-[#4c73d8]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Service Interested
                    </option>
                    <option>Investment Advisory</option>
                    <option>Financial Planning</option>
                    <option>Wealth Management</option>
                    <option>Portfolio Strategy</option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8b92ad]">
                    ▾
                  </span>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-[#8b92ad]" />
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Message"
                    required
                    className="w-full rounded-md border border-[#d9ddeb] bg-white px-12 py-3 text-[15px] text-[#1d275f] outline-none placeholder:text-[#9aa1b8] shadow-sm focus:border-[#4c73d8] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="ml-[66px] inline-flex min-w-[170px] items-center justify-center rounded-md border border-[#d4b355] bg-[#f1cd68] px-6 py-3 text-[16px] font-semibold text-[#1d275f] shadow-[0_8px_18px_rgba(0,0,0,0.10)] transition hover:brightness-105 disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {result && (
                  <p className="ml-[66px] text-sm font-medium text-blue-700">
                    {result}
                  </p>
                )}
              </form>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-[34px] font-bold text-[#1d275f]">
                Reach Out to Us
              </h2>

              <div className="mt-5 space-y-4 text-[16px] text-[#44506d]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#2853b8]" />
                  <p>Coimbatore</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[#2853b8]" />
                  <p>+91 78945612378</p>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-[#2853b8]" />
                  <p>info.coimbatore@rudronilfinserv.com</p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-md border border-[#d9ddeb] bg-white shadow-sm">
                <div className="h-[330px] w-full">
                  <iframe
                    title="Rudronil Financial Services Map"
                    src="https://www.google.com/maps?q=Business%20City&z=14&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}