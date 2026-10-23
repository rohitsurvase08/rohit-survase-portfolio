"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages & Technologies",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Dart"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Tools",
    items: ["Flask", "Node.js", "Flutter", "PostgreSQL", "Supabase", "REST APIs", "AI APIs", "Git", "GitHub"],
  },
  {
    id: "ai-workflows",
    title: "AI-Assisted Workflows",
    items: [
      "Generating code from specifications",
      "Converting requirements into tasks",
      "Developing prototypes",
      "Creating UI components",
      "Implementing features with AI",
      "Understanding unfamiliar code",
      "Investigating errors",
      "Generating test cases",
      "Preparing documentation",
      "Exploring APIs and libraries",
      "Reviewing responsiveness",
      "Iterating based on feedback",
      "Writing structured prompts",
      "Reviewing AI-generated code",
    ],
  },
  {
    id: "database",
    title: "Database & Backend",
    items: [
      "Database Design",
      "Data Modelling",
      "Database Integration",
      "API Integration",
      "Authentication Implementation",
      "Environment Configuration",
    ],
  },
  {
    id: "testing",
    title: "Testing & Deployment",
    items: [
      "Testing",
      "Debugging",
      "Error Resolution",
      "Build Validation",
      "Responsive Testing",
      "Deployment Configuration",
      "Version Control",
    ],
  },
  {
    id: "design",
    title: "UI/UX & Web Design",
    items: [
      "UI/UX Evaluation",
      "Interface Evaluation",
      "Layout Evaluation",
      "Typography",
      "Colour Theory",
      "Responsive Design",
      "Mobile-First Design",
      "Website Design",
      "Logo Design",
    ],
  },
  {
    id: "planning",
    title: "Software Engineering & Planning",
    items: [
      "Product Ideation",
      "Problem Definition",
      "Feature Planning",
      "Requirements Engineering",
      "Architecture Planning",
      "Project Planning",
      "Task Breakdown",
      "Technical Documentation",
    ],
  },
  {
    id: "research",
    title: "Research & Technical Writing",
    items: [
      "Technical Research",
      "Information Analysis",
      "Technical Writing",
      "Documentation",
      "Tutorial Writing",
      "Code Example Preparation",
    ],
  },
];

const AdditionalSkills = () => {
  const sectionRef = useRef(null);
  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heading = sectionRef.current.querySelector(".section-heading");
      if (heading) {
        gsap.fromTo(heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      const categories = sectionRef.current.querySelectorAll(".category-item");
      if (categories.length > 0) {
        gsap.fromTo(categories,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-bg text-fg py-12 sm:py-16 md:py-20 px-6 sm:px-12 lg:px-20"
      style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="section-heading mb-10 md:mb-14">
          <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.28em] uppercase text-fg-muted mb-3 block">
            Additional Skills & Technologies
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-fg mb-6"
            style={{ letterSpacing: "-0.05em" }}
          >
            Extended Capabilities
          </h2>
          <p className="text-[15px] md:text-lg text-fg-muted leading-relaxed max-w-3xl">
            Technologies, Workflows, And Skills Used Or Explored Through AI-Assisted Projects. No Proficiency Levels Are Implied—These Represent Project Experience, AI-Assisted Workflows, And Capabilities Under Development.
          </p>
        </div>

        {/* Expandable Categories */}
        <div className="space-y-3 md:space-y-4">
          {SKILL_CATEGORIES.map((category) => {
            const isOpen = openCategory === category.id;
            return (
              <div
                key={category.id}
                className="category-item bg-bg-alt border border-theme-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/50"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors hover:bg-accent-soft/10"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-fg pr-4">
                    {category.title}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-none stroke-current"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {/* Category Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="inline-block px-3 py-1.5 bg-accent-soft/30 text-fg text-[11px] md:text-[13px] rounded-lg border border-accent/20 transition-all hover:bg-accent-soft/50 hover:border-accent/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 md:mt-12 p-5 md:p-6 bg-bg-alt border border-theme-border rounded-xl">
          <p className="text-[13px] md:text-[15px] text-fg-muted leading-relaxed">
            <span className="font-semibold text-fg">Note:</span> Items Represent A Combination Of Project Experience, AI-Assisted Workflows, Technologies Used Or Explored, And Capabilities Under Development. AI Assistance Is A Development Method, Not Proof Of Mastery Of Every Underlying Technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkills;
