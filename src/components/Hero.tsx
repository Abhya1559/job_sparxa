import { ArrowRight, Code2, Globe, Laptop, Rocket } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-teal-100 selection:text-teal-900 font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-16 pb-16 md:pt-32 md:pb-32 overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 md:opacity-100"></div>

        <div className="container relative mx-auto px-6">
          <div className="text-center">
            {/* Custom Tailwind Badge */}
            <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20 mb-6">
              Transforming Digital Experiences
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              We build software that <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-emerald-500">
                scales your business.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-600 mb-10">
              Premium software engineering for forward-thinking enterprises.
              From cloud architecture to high-performance web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID SERVICES --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Full-stack expertise.
            </h2>
            <p className="text-slate-600 text-md md:text-lg">
              We solve complex engineering challenges, not just code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Custom Software - Large Card */}
            <div className="md:col-span-2 p-8 md:p-10 bg-white border border-slate-200 rounded-3xl hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 bg-teal-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Custom Software Development
                </h3>
                <p className="text-slate-600 text-md md:text-lg leading-relaxed">
                  Tailor-made solutions designed to fit your unique business
                  requirements. Using React, Next.js, and Node.js.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["React", "Next.js", "TS", "Node"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] md:text-xs font-bold rounded-md uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="p-8 md:p-10 bg-slate-900 text-white rounded-3xl">
              <Globe className="text-teal-400 mb-6" size={32} />
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Cloud & DevOps
              </h3>
              <p className="text-slate-400 text-sm md:text-md">
                Scalable infrastructure on AWS and Google Cloud.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="p-8 md:p-10 bg-white border border-slate-200 rounded-3xl">
              <Laptop className="text-emerald-600 mb-6" size={32} />
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900">
                UI/UX Design
              </h3>
              <p className="text-slate-600 text-sm md:text-md">
                Accessible and high-converting user interfaces.
              </p>
            </div>

            {/* Ready to Ship - Large Card */}
            <div className="md:col-span-2 p-8 md:p-10 bg-teal-600 text-white rounded-3xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to ship?
                </h3>
                <p className="text-teal-50 text-md md:text-lg max-w-md">
                  Our agile methodology ensures your MVP is ready in weeks.
                </p>
              </div>
              <Rocket className="absolute -bottom-6 -right-6 h-32 w-32 md:h-48 md:w-48 text-white/10 group-hover:-translate-y-2 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 md:py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "100+", label: "Projects" },
              { val: "99.9%", label: "Uptime" },
              { val: "15+", label: "Countries" },
              { val: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black text-teal-600 mb-1">
                  {stat.val}
                </div>
                <div className="text-[10px] md:text-xs font-medium text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="py-16 md:py-24 bg-slate-50 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Let's build something great.
          </h2>
          <p className="text-slate-600 text-md md:text-lg mb-10">
            Currently accepting new projects for Q2 2026.
          </p>

          <div className="flex flex-col sm:flex-row bg-white p-2 rounded-2xl shadow-lg border border-slate-200 max-w-md mx-auto gap-2 sm:gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 outline-none text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-teal-500/20"
            />
            <button className="h-12 rounded-xl px-8 bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
