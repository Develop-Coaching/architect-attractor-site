"use client";

import { useState, useEffect } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg px-4 py-3 safe-bottom">
      <a
        href="#pricing"
        className="block w-full text-center bg-dc-yellow hover:bg-dc-yellow/90 text-dc-dark font-bold py-3.5 rounded-lg text-base transition-colors"
      >
        Get Started — From £247/mo
      </a>
    </div>
  );
}
