'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JobsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-roboto font-bold text-white mb-8 tracking-wide">
            Jobs
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl font-roboto">
            Thank you for your interest in working at Fernando Menis. We are continuously searching for talented people
            to join our international team. All applications will be considered in the order they are received.
          </p>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="pb-20 px-12">
        <div className="max-w-6xl mx-auto">

          {/* How to Apply */}
          <div className="mb-16">
            <h2 className="text-3xl font-roboto font-bold text-white mb-8">
              How to Apply
            </h2>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Your application should include the following documents:
              </p>

              <ol className="space-y-4 pl-6">
                <li className="flex gap-4">
                  <span className="text-red-600 font-bold">1.</span>
                  <span className="leading-relaxed">
                    A cover letter in which you explain your motivation to work for Fernando Menis
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-600 font-bold">2.</span>
                  <span className="leading-relaxed">
                    A complete resume including nationality and birth date
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-600 font-bold">3.</span>
                  <span className="leading-relaxed">
                    Excerpts from your portfolio, particularly projects that show your personal approach to architecture
                    and other projects that show your special skills
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-600 font-bold">4.</span>
                  <span className="leading-relaxed">
                    Letters of recommendation, Graduation certificates (Bachelor, Master)
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-3xl font-roboto font-bold text-white mb-8">
              Contact Information
            </h2>

            <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
              <p className="text-gray-300 leading-relaxed mb-6">
                If you prefer to send your application by postal mail please use the following address:
                <br />
                <span className="text-sm text-gray-400">(note that only printed portfolios can be considered)</span>
              </p>

              <div className="text-gray-300 space-y-1 font-roboto">
                <p className="text-white font-medium text-lg">Fernando Menis SLPU</p>
                <p>Human Resources</p>
                <p>Calle Puerta Canseco, 25, 2B</p>
                <p>38003 Santa Cruz de Tenerife</p>
                <p>Islas Canarias, España</p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-300 mb-2">Email:</p>
                <a
                  href="mailto:info@menis.es"
                  className="text-red-600 hover:text-red-500 transition-colors duration-300 text-lg"
                >
                  info@menis.es
                </a>
              </div>
            </div>
          </div>

          {/* Current Openings Section */}
          <div className="border-t border-white/10 pt-12 mt-16">
            <h2 className="text-3xl font-roboto font-bold text-white mb-8">
              Current Openings
            </h2>

            <div className="space-y-6">
              {/* Example Job Listing - Can be updated with actual positions */}
              <div className="border border-white/10 p-8 hover:border-red-600 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-roboto font-medium text-white">
                    Architect / Designer
                  </h3>
                  <span className="text-sm text-gray-400 font-roboto">Full-time</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We are looking for talented architects and designers to join our team in Santa Cruz de Tenerife.
                  Experience with large-scale projects and proficiency in Rhino, AutoCAD, and visualization software preferred.
                </p>
                <button className="text-red-600 hover:text-red-500 transition-colors duration-300 font-roboto tracking-wider">
                  APPLY NOW →
                </button>
              </div>

              {/* Placeholder for no current openings */}
              <div className="bg-white/5 border border-white/10 p-8 text-center">
                <p className="text-gray-400 text-lg font-roboto">
                  No current openings at this time. Please check back later or send us your application for future opportunities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
