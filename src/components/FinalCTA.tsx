"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Push to FlowBuild CRM / GHL webhook
    // Example: POST to your GHL webhook URL with { email, region }
    // const res = await fetch('https://YOUR_GHL_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, region }),
    // });

    // Fire Meta Pixel lead event
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (typeof win.fbq === "function") {
      win.fbq("track", "Lead", {
        content_name: "Architect Attractor",
        content_category: "landing_page_cta",
      });
    }

    // Fire GA4 event
    if (typeof win.gtag === "function") {
      win.gtag("event", "generate_lead", {
        event_category: "conversion",
        event_label: region,
      });
    }

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-dc-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dc-yellow rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
          Your Competitors Are Already Building Architect Relationships.{" "}
          <span className="text-dc-yellow">
            The Question Is Whether You Will, Too.
          </span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
          Every month you wait is another month of planning applications going
          live in your area — with architects recommending other builders instead
          of you.
        </p>

        <p className="text-gray-400 text-base max-w-xl mx-auto mb-10">
          One architect project can pay for years of this service. The only risk
          is doing nothing.
        </p>

        {submitted ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 max-w-lg mx-auto">
            <svg
              className="w-12 h-12 text-green-400 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">
              You&apos;re in.
            </h3>
            <p className="text-gray-300">
              We&apos;ll be in touch within 24 hours to get you set up. Check
              your inbox.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-4"
          >
            <div>
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-dc-yellow focus:ring-2 focus:ring-dc-yellow"
              />
            </div>

            <div className="relative">
              <label htmlFor="cta-region" className="sr-only">
                Select your region
              </label>
              <select
                id="cta-region"
                required
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-5 py-4 pr-12 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-dc-yellow focus:ring-2 focus:ring-dc-yellow appearance-none"
              >
              <option value="" disabled className="text-dc-dark">
                Select your region
              </option>
              <option value="london" className="text-dc-dark">
                London & South East
              </option>
              <option value="south-west" className="text-dc-dark">
                South West
              </option>
              <option value="midlands" className="text-dc-dark">
                Midlands
              </option>
              <option value="east" className="text-dc-dark">
                East of England
              </option>
              <option value="north-west" className="text-dc-dark">
                North West
              </option>
              <option value="north-east" className="text-dc-dark">
                North East & Yorkshire
              </option>
              <option value="wales" className="text-dc-dark">
                Wales
              </option>
              <option value="scotland" className="text-dc-dark">
                Scotland
              </option>
            </select>
              <svg
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>

            {/* Regional scarcity message */}
            {region && (
              <div className="bg-dc-yellow/10 border border-dc-yellow/30 rounded-lg p-3 text-left">
                <p className="text-dc-yellow text-sm font-semibold">
                  Limited availability in your region
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  We limit builders per local authority area to protect outreach
                  quality. Spots in your region are limited — secure yours
                  before a competitor does.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-dc-yellow hover:bg-dc-yellow/90 text-dc-dark font-bold py-4 rounded-lg text-lg transition-colors"
            >
              Get Started With Architect Attractor
            </button>
          </form>
        )}

        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center text-gray-400 hover:text-white text-sm transition-colors"
          >
            Book a Call With the Team — No Pressure, No Pitch
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        <p className="text-gray-500 text-xs mt-8">
          No setup fees. No long-term contracts. Cancel anytime. Onboarding
          takes less than a week.
        </p>
      </div>
    </section>
  );
}
