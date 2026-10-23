import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const FeaturedVideo = ({refForward, ...props }) => {
  const ref = useRef(null);

  const variants = {
    initial: { scale: 1, x: 0, y: 0 },
    animate: { scale: 1.08, x: 0, y: 0 },
  };

  const { scrollYProgress } = useScroll({
    target: refForward,
    layoutEffect: false,
  });

  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={progress > 0.5 ? "animate" : "initial"}
      className="relative w-full aspect-[3/4] md:aspect-[856/1024] overflow-hidden rounded-3xl shadow-md z-30"
      {...props}
    >
      <Image
        src="/profile_image.webp"
        alt="Rohit Survase - Portfolio"
        fill
        priority
        sizes="(max-width: 768px) 80vw, 40vw"
        className="object-cover"
      />
    </motion.div>
  );
};

export default FeaturedVideo;
