"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    name: "LinkAudit",
    href: "https://github.com/rohitsurvase08/linkaudit",
    role: "Next.js 14 • PostgreSQL • Pg-Boss • Playwright",
    kind: "Active Development",
    note: "Automated link health monitoring platform for websites and YouTube channels. Features comprehensive link discovery, HTTP status verification with redirect tracking, SSRF protection, affiliate detection across 40+ networks, and revenue risk classification. Built with Next.js 14, PostgreSQL job queue (pg-boss), and 433+ tests ensuring security and reliability.",
    image: null,
  },
  {
    name: "Student Result Analysis System",
    href: "https://github.com/rohitsurvase08/student-result-management-system",
    role: "Flask 3.0 • PostgreSQL • Chart.js • Bcrypt",
    kind: "Production Ready",
    note: "Comprehensive web-based academic result management system with secure admin portal, automated grade calculations, and performance analytics. Features student/subject/marks CRUD operations, visual Chart.js dashboards, public result lookup with roll number + DOB authentication, professional report generation, and Bcrypt password security. Deployed on Render with Supabase PostgreSQL. Includes 226 tests covering authentication, CRUD operations, and security measures.",
    image: null,
  },
  {
    name: "NotiQ",
    href: null,
    role: "Flutter 3.24 • FastAPI • Gemini AI • PostgreSQL",
    kind: "In Development",
    note: "AI-powered mobile study-notes application that transforms rough handwritten classroom notes into structured, study-ready material. Backend uses FastAPI with Gemini 3.8 Flash for intelligent note expansion, Supabase PostgreSQL for auth and subscriptions, and Redis for job state management. Frontend built with Flutter/Dart featuring on-device SQLite storage, local PDF/DOCX export, and Riverpod state management. Implements strict CI/CD with 80% test coverage floor, metered subscription plans (10–500 pages/month), and append-only accounting ledger for usage tracking.",
    image: null,
  },
];

const VENTURES = [
  {
    name: "Corporate & Business Websites",
    role: "Professional Brand Presence",
    href: "https://devendhargopagoni.netlify.app/",
    kind: "Capability",
    note: "Custom business websites designed with clean sections, service presentations, and SEO best practices.",
  },
  {
    name: "SaaS Platforms & Admin Dashboards",
    role: "Scalable Application Architecture",
    href: "https://nomoredms.vercel.app/",
    kind: "Capability",
    note: "Web apps with user authentication, resource management, database integration, and high performance.",
  },
  {
    name: "AI Applications & Workflow Automation",
    role: "OpenAI • Chatbots • WhatsApp & CRM",
    href: null,
    kind: "Capability",
    note: "AI agents, smart chatbots, automated CRM pipelines, and intelligent API workflows.",
  },
  {
    name: "High-Converting Landing Pages",
    role: "UI/UX & Performance Optimization",
    href: null,
    kind: "Capability",
    note: "Fast-loading landing pages built to solve real business problems and transform ideas into production applications.",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const Row = ({ item, index }) => {
  const hasLink = Boolean(item.href);
  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? { href: item.href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <li className="pj-row">
      <Wrapper
        className={`pj-link${hasLink ? "" : " pj-link--static"}`}
        {...wrapperProps}
      >
        <span className="pj-num">{String(index + 1).padStart(2, "0")}</span>
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-14 sm:w-28 sm:h-18 object-contain bg-white/5 rounded-xl border border-white/10 shrink-0"
          />
        )}
        <div className="pj-meta">
          <span className="pj-name">{item.name}</span>
          {item.role && <span className="pj-role">{item.role}</span>}
          {item.note && <span className="pj-note">{item.note}</span>}
        </div>
        <span className="pj-kind">{item.kind}</span>
        <span className="pj-arrow" aria-hidden="true">
          {hasLink ? <ArrowIcon /> : <span className="pj-dot">•</span>}
        </span>
      </Wrapper>
    </li>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = sectionRef.current.querySelectorAll(".pj-row");
      gsap.from(rows, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      const titles = sectionRef.current.querySelectorAll(".pj-title");
      gsap.from(titles, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-section" ref={sectionRef}>
      <div className="pj-head">
        <span className="pj-label">Featured Projects</span>
        <h2 className="pj-title">My Work</h2>
      </div>

      <ul className="pj-list">
        {PROJECTS.map((p, i) => (
          <Row key={p.name} item={p} index={i} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
