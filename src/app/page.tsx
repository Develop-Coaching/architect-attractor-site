import StickyNav from "../components/StickyNav";
import MobileCTA from "../components/MobileCTA";
import ExitIntent from "../components/ExitIntent";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import SocialProof from "../components/SocialProof";
import ROICalculator from "../components/ROICalculator";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <StickyNav />
      <MobileCTA />
      <ExitIntent />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <HowItWorks />
        <SocialProof />
        <ROICalculator />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
