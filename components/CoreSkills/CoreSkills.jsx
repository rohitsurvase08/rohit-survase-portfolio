"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOP_20_SKILLS = [
  "AI-Assisted Software Development",
  "Web Development",
  "App Development",
  "Python Programming",
  "AI Tool Utilization",
  "Prompt Engineering",
  "Rapid Software Prototyping",
  "Frontend Development",
  "Backend Development",
  "UI/UX Design & Evaluation",
  "API Integration",
  "Database Fundamentals",
  "AI-Assisted Debugging",
  "Software Testing",
  "Git & GitHub",
  "Software Project Planning",
  "Feature Development",
  "Technical Research",
  "Problem Solving",
  "Product Thinking",
];

const CoreSkills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(".skill-item");
      if (items.length > 0) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

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
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-bg text-fg py-12 sm:py-16 md:py-20 px-6 sm:px-12 lg:px-20"
      style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="section-heading mb-10 md:mb-14">
          <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.28em] uppercase text-fg-muted mb-3 block">
            Top 20 Core Skills
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-fg"
            style={{ letterSpacing: "-0.05em" }}
          >
            Technical Capabilities
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {TOP_20_SKILLS.map((skill, index) => (
            <div
              key={skill}
              className="skill-item group relative bg-bg-alt border border-theme-border rounded-xl px-4 py-5 transition-all duration-300 hover:border-accent hover:bg-accent-soft/20"
            >
              <div className="flex items-start gap-3">
                <span className="text-[11px] font-bold text-fg-muted/50 group-hover:text-accent transition-colors pt-0.5 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] md:text-[15px] font-medium text-fg leading-snug group-hover:text-accent transition-colors">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSkills;
