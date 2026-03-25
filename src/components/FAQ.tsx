"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does Architect Attractor actually find the architects?",
    a: "We monitor live planning application data from local authorities across the UK. When a new application is submitted — whether it is a residential extension, a new build, or a commercial project — we capture the details and identify the architect behind it. We then enrich that data with verified contact information so we can reach out to them on your behalf. You choose which local authority areas and project types you want to target, and we handle the rest.",
  },
  {
    q: "What planning data do I actually get?",
    a: "For every relevant planning application, you receive the architect's name, email address, phone number, firm name, the project type (residential, commercial, etc.), the local authority area, and an estimated project value where available. This is enriched, verified data — not a raw planning portal dump. It is ready to act on from day one.",
  },
  {
    q: "How much of my time does this take?",
    a: "Very little. The system handles the data gathering, enrichment, and outreach automatically. Your main time commitment is taking the meetings that come through — typically 2-4 per month once the system is running. We would suggest setting aside 30 minutes to an hour per week to review replies and prepare for upcoming meetings. That is it.",
  },
  {
    q: "How long before I start seeing results?",
    a: "Most builders see their first architect replies within the first 2-3 weeks. Meetings typically start booking in within 30 days. Building a strong architect referral network takes time — these are professional relationships, not one-off transactions — but the outreach engine starts working from week one. Builders who commit to the process consistently report a noticeable shift in their pipeline within the first 90 days.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. Architect Attractor is a rolling monthly subscription. You can cancel with 30 days' notice at any time. We do not lock you in because we believe the results should keep you here, not a contract.",
  },
  {
    q: "Do I get geographic exclusivity?",
    a: "We limit the number of builders targeting the same local authority areas to avoid overlap and protect the quality of outreach. During onboarding, we will discuss your target areas and confirm availability. If your preferred area is already covered by another builder in the same trade, we will work with you to find the best alternative or adjacent areas.",
  },
  {
    q: "I already have a CRM. Do I need FlowBuild?",
    a: "No. Architect Attractor works as a standalone product. If you already have a CRM you are happy with, you can use Architect Attractor on its own at £247/month and manage replies and follow-ups through your existing system. FlowBuild CRM is there for builders who want a purpose-built construction CRM included — but it is entirely optional.",
  },
  {
    q: "What is the VA Outreach add-on, and do I need it?",
    a: "VA Outreach is an optional service delivered by our specialist partner. It gives you a trained virtual assistant who follows up on architect replies by phone, qualifies the opportunity, and books meetings directly into your calendar. It is ideal for builders who are too busy on site to handle phone follow-ups themselves, or who simply want the entire process done for them. It costs £450+VAT/month on top of your Architect Attractor subscription. We will introduce you to the partner during onboarding if you are interested.",
  },
  {
    q: "What if I am not getting results?",
    a: "We review your outreach performance regularly and optimise your sequences, targeting, and messaging based on what the data tells us. If response rates are lower than expected, we adjust. That said, this is a professional relationship-building tool — it is not a magic wand. Builders who engage with the process, take the meetings, and follow up on introductions see the best results.",
  },
  {
    q: "Who is behind this? Why should I trust it?",
    a: "Architect Attractor is built by Develop Coaching, founded by Greg Wilkes. Greg has spent years working with UK construction business owners — helping them build more profitable, sustainable companies. This is not a generic marketing agency. Every part of this system is built for how UK builders actually operate. If you want to speak to Greg or the team before signing up, you are welcome to book a call.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-dc-dark pr-8">{q}</span>
        <svg
          className={`w-5 h-5 text-dc-blue shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-dc-grey-mid leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dc-dark leading-tight mb-4">
            Questions Builders Ask Before Getting Started
          </h2>
        </div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
