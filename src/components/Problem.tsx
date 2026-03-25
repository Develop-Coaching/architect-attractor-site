import Image from "next/image";

const painPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Feast or famine is your default setting",
    description:
      "You are either turning work away or lying awake at 2am wondering where the next project will come from.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "No real relationships with architects",
    description:
      "The builders who always seem to have a full pipeline get recommended by architects. You know this — but you have no system for making those connections.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No time to do the outreach yourself",
    description:
      "You are already stretched thin running jobs, managing your team, and keeping the business afloat. Building an architect outreach programme from scratch is just not going to happen.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column: text + image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <div className="w-12 h-1 bg-dc-blue mb-6" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dc-dark leading-tight mb-6">
              You Did Not Start a Building Company to Spend Your Evenings Worrying About Where the
              Next Job Is Coming From
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              You know the cycle. Finish a big project, bank the profit, then the diary goes quiet. You
              scramble — chasing up old contacts, throwing money at Google Ads, paying for leads that
              five other builders are quoting on too.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-[4/3]">
              <Image
                src="/images/builder-site.jpg"
                alt="Builder reviewing plans on a UK construction site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Yellow corner accent */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-dc-yellow/90" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} aria-hidden="true" />
          </div>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-gray-50 rounded-xl p-7 border-l-4 border-red-500 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-dc-dark mb-2">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center mt-14">
          <div className="bg-dc-blue/5 border border-dc-blue/20 rounded-xl px-8 py-6">
            <p className="text-lg text-dc-dark font-semibold">
              The uncomfortable truth? Your pipeline problem is not a marketing problem.{" "}
              <span className="text-dc-blue font-extrabold">It is a relationship problem.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
