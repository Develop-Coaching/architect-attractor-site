const testimonials = [
  {
    quote:
      "[QUOTE PLACEHOLDER — Ideally covering: had inconsistent pipeline, tried other marketing, Architect Attractor changed the game, now has regular architect meetings booked]",
    name: "[BUILDER NAME]",
    company: "[COMPANY NAME]",
    location: "[LOCATION]",
    type: "Residential Extensions & New Builds",
    metric: "6 architect meetings in the first 8 weeks",
  },
  {
    quote:
      "[QUOTE PLACEHOLDER — Ideally covering: specific project value won through an architect introduction, cost of the system vs the return, would recommend to other builders]",
    name: "[BUILDER NAME]",
    company: "[COMPANY NAME]",
    location: "[LOCATION]",
    type: "Commercial & Residential",
    metric: "Won a £280,000 project from an architect introduction",
  },
  {
    quote:
      "[QUOTE PLACEHOLDER — Ideally covering: too busy running jobs to do outreach, system runs in the background, only has to show up to meetings, feels like having a BDM without the salary]",
    name: "[BUILDER NAME]",
    company: "[COMPANY NAME]",
    location: "[LOCATION]",
    type: "New Builds & Extensions",
    metric: "Under 30 minutes a week — the system does the rest",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-dc-yellow mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dc-dark leading-tight mb-4">
            Builders Like You Are Already Filling Their Pipelines
          </h2>
          <p className="text-lg text-gray-600">
            With architect introductions, not cold leads.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.metric}
              className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-dc-yellow" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mb-6 flex-1">
                <p className="text-dc-dark leading-relaxed italic text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <div className="border-t border-gray-100 pt-4">
                {/* Placeholder avatar */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-dc-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-dc-blue font-bold text-sm">
                      {t.name.charAt(1)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-dc-dark text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.company} &middot; {t.location}</p>
                  </div>
                </div>
                <div className="bg-dc-blue/5 border border-dc-blue/10 text-dc-blue text-xs font-bold px-3 py-2 rounded">
                  {t.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
