const stats = [
  "Trusted by UK construction businesses",
  "Planning data from 300+ local authorities",
  "First meetings within 30 days",
  "No long-term contracts",
  "Exclusive regional availability",
];

export default function TrustStrip() {
  return (
    <div className="bg-dc-yellow py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {stats.map((stat) => (
            <span key={stat} className="inline-flex items-center gap-2 text-dc-dark font-bold text-sm">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {stat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
