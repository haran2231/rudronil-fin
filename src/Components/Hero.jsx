import heroImg from "../images/herobg.jpg";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 grid md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Smart Financial Planning <br />
            For Your Future
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100">
            Professional Investment Advisory & Wealth Management Experts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition">
             <Link to="/contactpage">Get Consultation</Link> 
            </button>

            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold border border-blue-400">
              Explore Services
            </button>

          </div>

        </div>


        {/* Right Image */}
        <div className="flex justify-center md:justify-end">

          <img
            src={heroImg}
            alt="finance"
            className="w-full max-w-[580px] object-contain"
          />

        </div>

      </div>

    </section>
  );
}