"use client";

import { useState } from "react";

const comparisonRows: [string, string, string][] = [
  ["Planning data & monitoring", "£500–1,000/mo", "Included"],
  ["Data enrichment & research", "£500–1,500/mo", "Included"],
  ["Email outreach & copywriting", "£397–1,397/mo", "Included"],
  ["CRM", "£97–500/mo", "£197/mo"],
  ["VA / BDM", "£3,000–4,000/mo", "£450+VAT/mo"],
  ["Your time", "10–15 hrs/week", "Under 1 hr/week"],
  ["Total monthly cost", "£4,897–7,897/mo", "£847/mo"],
];

export default function ROICalculator() {
  const [projectValue, setProjectValue] = useState(150000);
  const [projectsPerYear, setProjectsPerYear] = useState(2);
  const [plan, setPlan] = useState<"aa" | "full">("full");

  const annualCost = plan === "aa" ? 247 * 12 : 397 * 12;
  const totalRevenue = projectValue * projectsPerYear;
  const roi = Math.round(((totalRevenue - annualCost) / annualCost) * 100);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dc-dark leading-tight mb-6">
            The Maths Speaks for Itself
          </h2>
          <p className="text-lg text-dc-grey-mid">
            One architect project can pay for years of this service. Drag the
            sliders to see your potential return.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Controls */}
            <div className="space-y-8">
              {/* Plan toggle */}
              <div>
                <label className="block text-sm font-semibold text-dc-dark mb-3">
                  Your plan
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPlan("aa")}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                      plan === "aa"
                        ? "bg-dc-blue text-white"
                        : "bg-dc-grey-light text-dc-dark hover:bg-gray-200"
                    }`}
                  >
                    AA Only (£247/mo)
                  </button>
                  <button
                    onClick={() => setPlan("full")}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                      plan === "full"
                        ? "bg-dc-blue text-white"
                        : "bg-dc-grey-light text-dc-dark hover:bg-gray-200"
                    }`}
                  >
                    AA + CRM (£397/mo)
                  </button>
                </div>
              </div>

              {/* Project value slider */}
              <div>
                <label className="block text-sm font-semibold text-dc-dark mb-1">
                  Average project value from architect introduction
                </label>
                <p className="text-2xl font-bold text-dc-blue mb-3">
                  £{projectValue.toLocaleString()}
                </p>
                <input
                  type="range"
                  min={50000}
                  max={2000000}
                  step={10000}
                  value={projectValue}
                  onChange={(e) => setProjectValue(Number(e.target.value))}
                  className="w-full accent-dc-blue"
                  aria-label="Average project value"
                />
                <div className="flex justify-between text-xs text-dc-grey-mid mt-1">
                  <span>£50,000</span>
                  <span>£2,000,000</span>
                </div>
              </div>

              {/* Projects per year */}
              <div>
                <label className="block text-sm font-semibold text-dc-dark mb-1">
                  Projects won per year from architect relationships
                </label>
                <p className="text-2xl font-bold text-dc-blue mb-3">
                  {projectsPerYear} project{projectsPerYear > 1 ? "s" : ""}
                </p>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={projectsPerYear}
                  onChange={(e) => setProjectsPerYear(Number(e.target.value))}
                  className="w-full accent-dc-blue"
                  aria-label="Projects won per year"
                />
                <div className="flex justify-between text-xs text-dc-grey-mid mt-1">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-dc-dark rounded-2xl p-8 text-white flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    Your annual investment
                  </p>
                  <p className="text-2xl font-bold">
                    £{annualCost.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    Revenue from architect-introduced projects
                  </p>
                  <p className="text-2xl font-bold text-dc-yellow">
                    £{totalRevenue.toLocaleString()}
                  </p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-gray-400 text-sm mb-1">
                    Return on investment
                  </p>
                  <p className="text-4xl font-bold text-dc-yellow">
                    {roi.toLocaleString()}%
                  </p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  And unlike Google Ads, the relationships you build with
                  architects compound over time. Year two is better than year
                  one.
                </p>
              </div>
            </div>
          </div>

          {/* Cost comparison */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-dc-dark mb-6 text-center">
              Doing It Yourself vs. Architect Attractor
            </h3>

            {/* Desktop table */}
            <table className="hidden sm:table w-full text-left">
              <thead>
                <tr className="border-b-2 border-dc-blue">
                  <th className="py-3 pr-4 text-sm font-semibold text-dc-dark">
                    &nbsp;
                  </th>
                  <th className="py-3 px-4 text-sm font-semibold text-dc-dark">
                    DIY
                  </th>
                  <th className="py-3 pl-4 text-sm font-semibold text-dc-blue">
                    Full Stack
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {comparisonRows.map(([item, diy, aa], i) => (
                  <tr
                    key={item}
                    className={`border-b border-gray-100 ${i === comparisonRows.length - 1 ? "font-bold" : ""}`}
                  >
                    <td className="py-3 pr-4 text-dc-dark">{item}</td>
                    <td className="py-3 px-4 text-dc-grey-mid">{diy}</td>
                    <td className="py-3 pl-4 text-dc-blue font-semibold">
                      {aa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile stacked cards */}
            <div className="sm:hidden space-y-3">
              {comparisonRows.map(([item, diy, aa], i) => (
                <div
                  key={item}
                  className={`rounded-lg p-4 ${i === comparisonRows.length - 1 ? "bg-dc-blue/10 border border-dc-blue/20" : "bg-dc-grey-light"}`}
                >
                  <p className={`text-sm text-dc-dark ${i === comparisonRows.length - 1 ? "font-bold" : "font-medium"} mb-2`}>
                    {item}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-dc-grey-mid">DIY: {diy}</span>
                    <span className="text-dc-blue font-semibold">{aa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-dc-yellow hover:bg-dc-yellow/90 text-dc-dark font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Building Your Architect Network
          </a>
        </div>
      </div>
    </section>
  );
}
