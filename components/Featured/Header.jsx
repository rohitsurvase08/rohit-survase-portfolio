import { a, useSpring } from "@react-spring/web";
import { Trail } from "./TrailText";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, set] = useState();

  useEffect(() => {
    set(true);
  }, []);

  const [horizontal, api] = useSpring(() => ({ from: { transform: 'translateX(0%)' } }));

  const horizontalCallback = open => api.start({ transform: `translateX(${open ? '20%' : '0%'})` });
  return (
    <div className="w-full z-10 relative px-4 md:px-0 md:pl-6 font-semibold text-4xl sm:text-5xl md:text-[8.3rem] text-center md:text-left leading-[0.95] md:leading-none" style={{ letterSpacing: "-0.07em" }}>
      <Trail callback={horizontalCallback}>
        <a.div className="flex justify-center md:justify-start flex-wrap md:flex-nowrap" style={horizontal}>
          <div>AI-Assisted&nbsp;</div>
        </a.div>
        <div className="flex justify-center md:justify-start flex-wrap md:flex-nowrap">
          <div>Software&nbsp;</div>
          <div>Development&nbsp;</div>
        </div>
      </Trail>
    </div>
  );
};

export default Header;
