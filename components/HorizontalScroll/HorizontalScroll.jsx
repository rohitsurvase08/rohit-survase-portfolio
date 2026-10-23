"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TEXT = "Learning • Building • Improving • AI-Assisted Development • Student Projects";

const HorizontalScroll = () => {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const text = textRef.current;
    if (!wrapper || !sticky || !text) return;

    const ctx = gsap.context(() => {
      const chars = text.querySelectorAll(".hs-char");

      // Pin the section once it hits the top of the viewport, then drive the
      // horizontal text animation entirely from scroll. The pin is held for
      // the full distance the text needs to travel — i.e. however many extra
      // viewport heights it takes to scroll the heading from off-screen right
      // to fully off-screen left — so the animation never gets cut short by
      // the next section / footer arriving early. The pin only releases once
      // the animation has fully played, after which scrolling continues on
      // to the next section. Using ScrollTrigger.pin instead of
      // `position:sticky` because the parent wrapper has `overflow-x: hidden`,
      // which breaks sticky behaviour in some browsers.
      const getPinDistance = () => {
        const textWidth = text.scrollWidth;
        const viewport = window.innerWidth;
        // Distance the text must translate left so its right edge clears the
        // viewport. Kept tight (no extra multiplier) so the pin releases
        // immediately after the text exits — otherwise the user keeps
        // scrolling on an empty background before the next section appears.
        const travel = Math.max(textWidth - viewport * 0.1, viewport);
        return travel;
      };

      const scrollTween = gsap.to(text, {
        xPercent: -110,
        ease: "none",
        scrollTrigger: {
          trigger: sticky,
          start: "top top",
          end: () => "+=" + getPinDistance(),
          scrub: 0.5,
          pin: sticky,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      chars.forEach((char) => {
        gsap.from(char, {
          yPercent: gsap.utils.random(-200, 200),
          rotation: gsap.utils.random(-20, 20),
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 100%",
            end: "left 30%",
            scrub: 1,
          },
        });
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  // Split text into words and chars while preserving spaces
  const renderText = () => {
    return TEXT.split(" ").map((word, wi, arr) => (
      <span key={wi} className="hs-word" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
        {word.split("").map((char, ci) => (
          <span key={ci} className="hs-char" style={{ display: "inline-block" }}>
            {char}
          </span>
        ))}
        {wi < arr.length - 1 && <span className="hs-char" style={{ display: "inline-block" }}>&nbsp;</span>}
      </span>
    ));
  };

  return (
    <section className="Horizontal" ref={wrapperRef}>
      <div className="hs-sticky" ref={stickyRef}>
        <h3 className="Horizontal__text heading-xl" ref={textRef}>
          {renderText()}
        </h3>
      </div>
    </section>
  );
};

export default HorizontalScroll;
