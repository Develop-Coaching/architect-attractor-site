"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed) {
        setShow(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    // Only trigger on desktop (mouse-based)
    if (window.matchMedia("(pointer: fine)").matches) {
      document.addEventListener("mouseleave", handleMouseLeave);
      return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, [handleMouseLeave]);

  const close = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image header */}
        <div className="relative h-40">
          <Image
            src="/images/residential-build.jpg"
            alt="UK construction project"
            fill
            className="object-cover"
            sizes="512px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dc-dark/80 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <p className="text-dc-yellow font-bold text-xs uppercase tracking-widest mb-1">Before you go</p>
            <h3 className="text-white font-extrabold text-xl leading-tight">
              See How Builders Are Filling Their Pipelines With Architect Introductions
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Watch the 3-minute demo and see exactly how Architect Attractor finds architects with
            live planning applications and reaches out on your behalf. Or book a no-pressure call
            with the team.
          </p>

          <div className="space-y-3">
            <a
              href="#demo"
              onClick={close}
              className="flex items-center justify-center w-full bg-dc-yellow hover:brightness-110 text-dc-dark font-extrabold py-3.5 rounded text-sm transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Watch the 3-Minute Demo
            </a>
            <a
              href="#contact"
              onClick={close}
              className="flex items-center justify-center w-full bg-dc-dark hover:bg-dc-dark/90 text-white font-bold py-3.5 rounded text-sm transition-all"
            >
              Book a Free Pipeline Audit Call
            </a>
          </div>

          <p className="text-gray-400 text-xs text-center mt-4">
            No spam. No commitment. Just a conversation about your pipeline.
          </p>
        </div>
      </div>
    </div>
  );
}
