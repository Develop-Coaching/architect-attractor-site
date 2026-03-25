import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "We Pull Live Planning Data",
    description:
      "Every week, Architect Attractor scans new planning applications in your chosen local authority areas. Residential extensions, new builds, commercial fit-outs — whatever matches your ideal project type.",
    detail: "Automated weekly scans across UK local authorities",
    image: "/images/architect-plans.jpg",
    imageAlt: "Architectural plans and blueprints",
  },
  {
    number: "02",
    title: "We Enrich & Reach Out",
    description:
      "We identify the architect behind each application and build a complete contact profile. Then, using proven outreach sequences written for construction, we send personalised emails from your email address.",
    detail: "Name, email, phone, firm, project type, estimated value",
    image: "/images/meeting.jpg",
    imageAlt: "Professional business meeting",
  },
  {
    number: "03",
    title: "You Take the Meeting",
    description:
      "When an architect replies, you get notified immediately. You meet, talk about their project, and start building the kind of referral relationship that generates work for years.",
    detail: "Meetings typically start booking within 30 days",
    image: "/images/residential-build.jpg",
    imageAlt: "UK residential construction project",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-1 bg-dc-yellow mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dc-dark leading-tight mb-6">
            How It Fills Your Pipeline in{" "}
            <span className="text-dc-blue">3 Steps</span>
          </h2>
          <p className="text-lg text-gray-600">
            No bidding against five other builders. No shared leads. No pay-per-click gamble.
            Targeted, professional outreach that positions you as the go-to builder in your area.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-7xl font-black text-dc-blue leading-none block mb-2">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold text-dc-dark mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-dc-blue bg-dc-blue/5 px-4 py-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {step.detail}
                </p>
              </div>

              {/* Image */}
              <div className={`relative rounded-xl overflow-hidden shadow-lg ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="aspect-[4/3]">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Step number overlay */}
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-dc-yellow rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-dc-dark font-extrabold text-xl">{step.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-dc-yellow hover:brightness-110 text-dc-dark font-extrabold px-8 py-4 rounded text-lg transition-all shadow-lg shadow-dc-yellow/20"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
