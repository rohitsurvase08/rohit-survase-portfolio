"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Understand the Problem",
    description: "Clarify requirements, identify constraints, and define the scope of work.",
  },
  {
    number: "02",
    title: "Define Requirements",
    description: "Break down features, user stories, and technical specifications.",
  },
  {
    number: "03",
    title: "Plan & Break Down Tasks",
    description: "Organize work into phases, tasks, and manageable implementation steps.",
  },
  {
    number: "04",
    title: "AI-Assisted Implementation",
    description: "Use AI tools to explore options, generate code, and implement components.",
  },
  {
    number: "05",
    title: "Review Generated Code",
    description: "Read, understand, and validate AI-generated output for correctness.",
  },
  {
    number: "06",
    title: "Test & Validate",
    description: "Run tests, check functionality, verify responsive behavior, and validate edge cases.",
  },
  {
    number: "07",
    title: "Debug & Investigate",
    description: "Identify errors, evaluate suggested fixes, and ensure reliability.",
  },
  {
    number: "08",
    title: "Document Changes",
    description: "Write clear comments, update documentation, and record decisions.",
  },
  {
    number: "09",
    title: "Version Control",
    description: "Commit changes with meaningful messages using Git and GitHub where configured.",
  },
  {
    number: "10",
    title: "Iterate & Improve",
    description: "Gather feedback, refine implementations, and continuously improve based on testing.",
  },
];

const Workflow = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const steps = sectionRef.current.querySelectorAll(".workflow-step");
      if (steps.length > 0) {
        gsap.fromTo(steps,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
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
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="section-heading mb-10 md:mb-14 max-w-4xl">
          <span className="text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-fg-muted mb-3 block">
            AI-Assisted Development Workflow
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-fg mb-6"
            style={{ letterSpacing: "-0.05em" }}
          >
            How I Work
          </h2>
          <p className="text-base md:text-lg text-fg-muted leading-relaxed max-w-3xl">
            Ai Assistance Accelerates The Development Process, But Generated Code Still Needs Human Review, Testing, And Validation. Here's My Practical Workflow For Building Software With Ai-Powered Tools:
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-4 md:space-y-5">
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="workflow-step group relative bg-bg-alt border border-theme-border rounded-2xl p-5 md:p-6 lg:p-7 transition-all duration-300 hover:border-accent hover:bg-accent-soft/10"
            >
              <div className="flex items-start gap-4 md:gap-5">
                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-soft flex items-center justify-center text-accent font-bold text-sm md:text-base transition-all group-hover:bg-accent group-hover:text-bg">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="flex-grow pt-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-fg mb-2 transition-colors group-hover:text-accent">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-fg-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="absolute left-[2.9rem] md:left-[3.4rem] top-full w-[2px] h-4 md:h-5 bg-theme-border" />
              )}
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-10 md:mt-12 p-5 md:p-6 bg-accent-soft/20 border border-accent/30 rounded-xl">
          <p className="text-sm md:text-base text-fg leading-relaxed">
            <span className="font-semibold text-accent">Important:</span> AI-Assisted Development Is A Working Method, Not Proof Of Mastery Of Every Underlying Technology. AI-Generated Output Can Contain Errors And Needs Human Review, Testing, And Validation. AI Cannot Be Relied On To Build Every Type Of Application Unaided.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
