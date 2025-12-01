"use client"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#1a3a52] via-[#2a5073] to-[#1a3a52] text-white py-40 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4a574] opacity-5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <div className="mb-4">
          <span className="inline-block bg-[#d4a574] text-[#1a3a52] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Welcome to Excellence
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Strategic Real Estate <span className="text-[#d4a574]">Solutions</span> for Business & Investment
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Expert consultancy, research, and deal execution across key sectors including energy, manufacturing, renewable
          energy, and commercial real estate.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-[#d4a574] text-[#1a3a52] px-8 py-4 rounded font-semibold hover:bg-[#c9945f] transition text-base">
            Explore Services
          </button>
          <button className="border-2 border-[#d4a574] text-[#d4a574] px-8 py-4 rounded font-semibold hover:bg-[#d4a574] hover:text-[#1a3a52] transition text-base">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
