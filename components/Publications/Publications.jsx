"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PUBLICATIONS = [
  {
    name: "Python: Fundamentals & Core Concepts",
    subtitle: "Based on My Personal Learning Journey",
    type: "Technical Learning Resource",
    pages: "216 Pages",
    year: "2026",
    language: "English + Marathi Mix",
    description: "A comprehensive Python learning resource based on personal notes created during my journey of learning Python as my first programming language. Covers Python fundamentals including variables, data types, operators, control flow, functions, collections, object-oriented programming, file handling, exception handling, and modules. Designed for beginners with no prior programming experience, providing a strong foundation for advanced Python topics.",
    topics: [
      "Python Syntax & Basics",
      "Data Structures (Lists, Tuples, Sets, Dicts)",
      "Control Flow & Loops",
      "Functions & Recursion",
      "Lambda, Map, Filter & Reduce",
      "Exception Handling",
      "Modules & Packages",
      "Object-Oriented Programming",
      "Best Practices & Pythonic Code"
    ],
    downloadLink: "/python-fundamentals-core-concepts.pdf",
  },
];

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Publications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".pub-card");
      if (cards.length > 0) {
        gsap.fromTo(cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      const titles = sectionRef.current.querySelectorAll(".pub-title");
      if (titles.length > 0) {
        gsap.fromTo(titles,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="publications-section"
      ref={sectionRef}
      className="w-full px-6 sm:px-12 lg:px-20 py-12 md:py-16 lg:py-20"
      style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 md:mb-14">
          <span className="text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-fg-muted mb-3 block">
            Technical Writing
          </span>
          <h2
            className="pub-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{
              fontFamily: "'Druk Condensed', 'Bebas Neue', 'Barlow Condensed', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            Publications
          </h2>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {PUBLICATIONS.map((pub, index) => (
            <article
              key={index}
              className="pub-card group bg-bg-alt border border-border rounded-2xl lg:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Book Cover / Visual */}
                <div
                  className="w-full lg:w-80 xl:w-96 flex-shrink-0 p-6 sm:p-10 lg:p-12 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
                >
                  <img
                    src="/book_image.webp"
                    alt="Python: Fundamentals & Core Concepts Book Cover"
                    className="w-full max-w-[200px] sm:max-w-[280px] h-auto object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow p-6 sm:p-8 lg:p-10">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent-soft text-accent text-xs font-semibold rounded-full uppercase tracking-wide">
                      {pub.type}
                    </span>
                    <span className="text-sm text-fg-muted">{pub.pages}</span>
                    <span className="text-sm text-fg-muted">•</span>
                    <span className="text-sm text-fg-muted">{pub.year}</span>
                    <span className="text-sm text-fg-muted">•</span>
                    <span className="text-sm text-fg-muted">{pub.language}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-fg mb-2 leading-tight">
                    {pub.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base md:text-lg text-fg-muted italic mb-6">
                    {pub.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base md:text-lg text-fg-muted leading-relaxed mb-6">
                    {pub.description}
                  </p>

                  {/* Topics Covered */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-fg-muted mb-3">
                      Topics Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pub.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-bg border border-border rounded-lg text-sm text-fg hover:bg-accent-soft hover:border-accent transition-colors duration-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={pub.downloadLink}
                    download="Python-Fundamentals-Core-Concepts-Rohit-Survase.pdf"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 group/btn"
                    aria-label={`Download ${pub.name} PDF`}
                  >
                    <span className="w-5 h-5 group-hover/btn:translate-y-0.5 transition-transform duration-300">
                      <DownloadIcon />
                    </span>
                    <span>Download Pdf (216 Pages)</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 px-6 py-4 bg-accent-soft/30 border border-accent-soft rounded-xl">
          <p className="text-sm md:text-base text-fg-muted leading-relaxed">
            <strong className="text-fg">Note:</strong> This book represents my personal learning journey with Python as my first programming language. 
            It focuses on building a strong foundation in Python fundamentals and is designed for beginners with no prior programming experience. 
            The material is organized to serve as both a learning guide and a quick reference for study and revision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;
