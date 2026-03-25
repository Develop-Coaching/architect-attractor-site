export default function Pricing() {
  const checkIcon = (
    <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-1 bg-dc-blue mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dc-dark leading-tight mb-4">
            Simple, Transparent Pricing.{" "}
            <span className="text-dc-blue">No Lock-In Contracts.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits where you are now. Upgrade anytime as your pipeline grows.
          </p>
        </div>

        {/* Three pricing columns */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

          {/* Tier 1 — Architect Attractor */}
          <div className="bg-white rounded-xl p-7 border border-gray-200 flex flex-col shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-dc-blue bg-dc-blue/10 px-3 py-1 rounded">Core</span>
              <h3 className="text-xl font-bold text-dc-dark mt-4 mb-2">Architect Attractor</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-extrabold text-dc-dark">£247</span>
                <span className="text-gray-500 font-medium">/month</span>
              </div>
              <p className="text-gray-600 text-sm">
                Find and reach architects with live planning applications automatically.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Automated weekly planning application feed",
                "Full data enrichment — name, email, phone, firm",
                "Personalised email outreach sequences",
                "Reply notifications to your inbox",
                "Ongoing sequence optimisation",
                "Dedicated onboarding session",
                "Cancel anytime — no contracts",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  {checkIcon}
                  <span className="text-dc-dark">{f}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-gray-500 mb-4">
              Best for: Builders who already have a CRM or are happy managing replies from their inbox.
            </p>

            <a
              href="#contact"
              className="block w-full text-center bg-dc-dark hover:bg-dc-dark/90 text-white font-bold py-4 rounded transition-colors"
            >
              Start With Architect Attractor
            </a>
          </div>

          {/* Tier 2 — FlowBuild CRM */}
          <div className="bg-white rounded-xl p-7 border border-gray-200 flex flex-col shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-dc-dark bg-dc-yellow px-3 py-1 rounded">Add-on</span>
              <h3 className="text-xl font-bold text-dc-dark mt-4 mb-2">FlowBuild CRM</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-extrabold text-dc-dark">£197</span>
                <span className="text-gray-500 font-medium">/month</span>
              </div>
              <p className="text-gray-600 text-sm">
                Purpose-built construction CRM to manage every lead, follow-up, and opportunity.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "White-labelled CRM branded to your business",
                "Pipeline management — first contact to project win",
                "Automated follow-up sequences",
                "Unified inbox — emails, texts, and calls",
                "Calendar booking integration",
                "Reporting dashboard & mobile app",
                "AA leads flow straight into your pipeline",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  {checkIcon}
                  <span className="text-dc-dark">{f}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-gray-500 mb-4">
              Requires Architect Attractor. Add this to manage your full pipeline in one place.
            </p>

            <a
              href="#contact"
              className="block w-full text-center bg-dc-dark hover:bg-dc-dark/90 text-white font-bold py-4 rounded transition-colors"
            >
              Add FlowBuild CRM
            </a>
          </div>

          {/* Tier 3 — Bundle Deal */}
          <div className="bg-white rounded-xl p-7 border-2 border-dc-blue relative flex flex-col shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-dc-blue text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded">
              Best Value
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-white bg-dc-blue px-3 py-1 rounded">Bundle</span>
              <h3 className="text-xl font-bold text-dc-dark mt-4 mb-2">AA + FlowBuild CRM</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-dc-blue">£397</span>
                <span className="text-gray-500 font-medium">/month</span>
              </div>
              <p className="text-sm text-gray-400 mb-3"><span className="line-through">£444/mo</span> <span className="text-green-600 font-bold">Save £47/mo</span></p>
              <p className="text-gray-600 text-sm">
                The complete system — automated outreach plus a construction-specific CRM. Everything you need.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Architect Attractor",
                "Everything in FlowBuild CRM",
                "Seamless integration — leads flow automatically",
                "Single onboarding session for the full stack",
                "Priority support",
                "Cancel anytime — no contracts",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  {checkIcon}
                  <span className="text-dc-dark font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-gray-500 mb-4">
              Best for: Builders who want the full system without stitching together multiple tools. This is what we recommend.
            </p>

            <a
              href="#contact"
              className="block w-full text-center bg-dc-blue hover:bg-dc-blue-dark text-white font-bold py-4 rounded transition-colors"
            >
              Get the Full System
            </a>
          </div>
        </div>

        {/* VA Outreach Add-on */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border-l-4 border-dc-yellow">
            <div className="grid md:grid-cols-2">
              {/* Left — details */}
              <div className="p-8 lg:p-10">
                <span className="text-xs font-bold uppercase tracking-widest text-dc-dark bg-dc-yellow px-3 py-1.5 rounded">Partner Add-on</span>
                <h3 className="text-2xl font-extrabold text-dc-dark mt-4 mb-1">VA Outreach Service</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-dc-dark">£450</span>
                  <span className="text-gray-500 font-medium">+VAT/month</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  A trained virtual assistant follows up on every architect reply by phone, qualifies the
                  opportunity, and books meetings directly into your calendar. You just show up.
                  Delivered by our specialist outreach partner, Construct Virtual.
                </p>
                <p className="text-gray-500 text-xs mb-6">
                  Available alongside any tier. We make the introduction during your onboarding.
                  One-time £500 setup fee covers all integrations (delivered by DC).
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-dc-yellow hover:brightness-110 text-dc-dark font-extrabold px-6 py-3.5 rounded text-sm transition-all shadow-md"
                >
                  Ask Us About VA Outreach
                </a>
              </div>

              {/* Right — what's included */}
              <div className="bg-gray-50 border-l border-gray-200 p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-dc-dark font-bold text-sm uppercase tracking-wider mb-5">What the VA handles</p>
                <ul className="space-y-3">
                  {[
                    "Phone follow-up on all email replies and enquiries",
                    "Qualification — project type, timeline, budget, fit",
                    "Meeting booking directly into your calendar",
                    "Brief notes so you walk into meetings prepared",
                    "Call recording and quality assurance",
                    "Weekly summary report: calls, conversations, meetings",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-dc-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-dc-dark">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-dc-blue/5 border border-dc-blue/15 rounded px-5 py-4">
                  <p className="text-dc-dark font-extrabold text-sm">
                    Full stack: £397/mo (DC) + £450+VAT/mo (VA)
                  </p>
                  <p className="text-dc-blue font-bold text-sm mt-1">
                    Under £850+VAT/mo for a complete, done-for-you system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 max-w-lg mx-auto">
          No setup fees on AA or CRM. No long-term contracts. Cancel with 30 days&apos; notice.
          Your first architect meeting could pay for a full year of the service.
        </p>
      </div>
    </section>
  );
}
