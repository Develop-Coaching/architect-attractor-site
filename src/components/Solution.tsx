const components = [
  {
    label: "Core",
    name: "Architect Attractor",
    price: "£247/mo",
    borderColor: "border-dc-blue",
    labelBg: "bg-dc-blue text-white",
    description:
      "Automated weekly feed of new planning applications in your target area. Data enrichment: architect name, firm, contact details, project type, estimated value. Personalised email outreach sequences to architects.",
    features: [
      "Planning data monitoring",
      "Contact enrichment",
      "Automated email outreach",
      "Reply notifications",
      "Performance reporting",
    ],
  },
  {
    label: "Add-on",
    name: "FlowBuild CRM",
    price: "£197/mo",
    borderColor: "border-dc-yellow",
    labelBg: "bg-dc-yellow text-dc-dark",
    description:
      "White-labelled, construction-specific CRM built on GoHighLevel. Pipeline management from first contact through to project won. Automated follow-ups, unified inbox, calendar booking, and reporting.",
    features: [
      "Full pipeline management",
      "Automated follow-ups",
      "Unified inbox (email, SMS, calls)",
      "Calendar booking",
      "Mobile app for site",
    ],
  },
  {
    label: "Partner",
    name: "VA Outreach",
    price: "£450+VAT/mo",
    borderColor: "border-dc-dark",
    labelBg: "bg-dc-dark text-white",
    description:
      "A dedicated virtual assistant calls architects on your behalf, qualifies opportunities, and books meetings directly into your calendar. Delivered by our specialist partner, Construct Virtual.",
    features: [
      "Phone follow-up on all replies",
      "Lead qualification",
      "Meeting booking",
      "Call recording & QA",
      "Weekly summary reports",
    ],
  },
];

export default function Solution() {
  return (
    <section className="py-20 lg:py-28 bg-dc-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-1 bg-dc-yellow mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
            Architects With Live Planning Applications Have Clients Who Need a Builder{" "}
            <span className="text-dc-yellow">Right Now</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            When an architect submits a planning application, their client has budget, a committed
            project, and needs a builder. That is a warm introduction waiting to happen — not a cold
            lead.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {components.map((comp) => (
            <div
              key={comp.name}
              className={`bg-white rounded-xl p-7 shadow-lg border-t-4 ${comp.borderColor} flex flex-col`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded ${comp.labelBg}`}>
                  {comp.label}
                </span>
                <span className="text-lg font-extrabold text-dc-dark">{comp.price}</span>
              </div>

              <h3 className="text-xl font-bold text-dc-dark mb-3">{comp.name}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-1 text-sm">{comp.description}</p>

              <ul className="space-y-2.5">
                {comp.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="w-5 h-5 text-green-600 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-dc-dark font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-dc-blue hover:bg-dc-blue-dark text-white font-extrabold px-8 py-4 rounded text-lg transition-all shadow-lg"
          >
            See the Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
