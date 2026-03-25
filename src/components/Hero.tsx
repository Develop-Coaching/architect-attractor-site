import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-dc-dark overflow-hidden">
      {/* Full-bleed construction background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dc-dark/80 via-dc-dark/90 to-dc-dark" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text — centred on mobile, left-aligned on desktop */}
          <div className="text-center lg:text-left">
            <div className="w-16 h-1 bg-dc-yellow mb-6 mx-auto lg:mx-0" aria-hidden="true" />

            <p className="text-dc-yellow font-bold text-sm uppercase tracking-widest mb-4">
              For UK Builders Doing £1M–5M
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6">
              Stop Chasing Leads. Start Getting Introduced to Architects Who Already Have Clients{" "}
              <span className="text-dc-yellow">Ready to Build.</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Architect Attractor automatically finds architects with live planning applications,
              reaches out on your behalf, and puts qualified meetings in your diary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-dc-yellow hover:brightness-110 text-dc-dark font-extrabold px-8 py-4 rounded text-lg transition-all shadow-lg shadow-dc-yellow/20"
              >
                See How It Works
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded text-lg transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              No long-term contracts. Cancel anytime. Most builders see their first architect meetings
              within 30 days.
            </p>
          </div>

          {/* Demo video — right column on desktop, below text on mobile */}
          <div id="demo" className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <div className="aspect-video relative bg-dc-dark">
              <Image
                src="/images/residential-build.jpg"
                alt="UK residential construction project"
                fill
                className="object-cover opacity-40"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-dc-yellow rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                    <svg className="w-8 h-8 text-dc-dark ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">Watch the 3-Minute Demo</p>
                  <p className="text-gray-400 text-xs mt-1">[Embed Wistia / YouTube video here]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
