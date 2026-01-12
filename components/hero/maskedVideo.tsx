// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const masks = [
//   "/masks/frame-rect.svg",
//   "/masks/frame-oval.svg",
//   "/masks/frame-visor.svg",
//   "/masks/frame-rounded.svg",
// ];

// export default function MaskedVideo() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((i) => (i + 1) % masks.length);
//     }, 2600);

//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div className="relative mx-auto max-w-5xl">
//       <AnimatePresence mode="wait">
//         <motion.video
//           key={masks[index]}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-auto"
//           initial={{ opacity: 0, scale: 0.96 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.04 }}
//           transition={{ duration: 0.9, ease: "easeInOut" }}
//           style={{
//             WebkitMaskImage: `url(${masks[index]})`,
//             WebkitMaskRepeat: "no-repeat",
//             WebkitMaskPosition: "center",
//             WebkitMaskSize: "contain",
//             maskImage: `url(${masks[index]})`,
//             maskRepeat: "no-repeat",
//             maskPosition: "center",
//             maskSize: "contain",
//           }}
//         >
//           <source src="public/assets/landing/video1.mp4" type="video/mp4" />
//         </motion.video>
//       </AnimatePresence>

//       {/* glow frame */}
//       <div className="pointer-events-none absolute inset-0 rounded-[48px] border border-violet-500/40 shadow-[0_0_60px_rgba(139,92,246,0.35)]" />
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// const MASKS = {
//   vr: "/masks/vr.svg",
//   desktop: "/masks/desktop.svg",
//   tablet: "/masks/tablet.svg",
//   mobile: "/masks/mobile.svg",
// };
const MASKS = {
  vr: {
    mask: "/masks/vr-mask.svg",
    border: "/masks/vr-border.svg",
  },
  desktop: {
    mask: "/masks/desktop-mask.svg",
    border: "/masks/desktop-border.svg",
  },
  tablet: {
    mask: "/masks/tablet-mask.svg",
    border: "/masks/tablet-border.svg",
  },
  mobile: {
    mask: "/masks/mobile-mask.svg",
    border: "/masks/mobile-border.svg",
  },
};


type MaskKey = keyof typeof MASKS;

export default function MaskedVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMask, setActiveMask] = useState<MaskKey>("desktop");

  // Auto switch every 3s
  useEffect(() => {
    const order: MaskKey[] = ["vr", "desktop", "tablet", "mobile"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % order.length;
      animateMask(order[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const animateMask = (mask: MaskKey) => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 0.96,
      duration: 0.35,
      ease: "power2.out",
      onComplete: () => {
        setActiveMask(mask);
        gsap.to(containerRef.current!, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-4xl aspect-video"
    >
       {/* OUTER GLOW FRAME */}
    <div className="absolute inset-0 rounded-[28px] 
      border border-violet-500/60 
      shadow-[0_0_60px_rgba(139,92,246,0.55)]"
    />

    {/* MID FRAME */}
    <div className="absolute inset-[6px] rounded-[22px] 
      border border-violet-400/40"
    />

    {/* INNER FRAME */}
    <div className="absolute inset-[12px] rounded-[16px] 
      border border-white/10"
    />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[0.9]"
        style={{
          WebkitMaskImage: `url(${MASKS[activeMask]})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          maskImage: `url(${MASKS[activeMask]})`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      >
        <source src="/assets/landing/video1.mp4" type="video/mp4" />
      </video>
    <div className="absolute inset-0 pointer-events-none">
  <img
    src={MASKS[activeMask].border}
    className="w-full h-full"
  />
  <div className="absolute inset-0 blur-xl bg-violet-500/20" />
</div>

      {/* Optional glow frame */}
      <div className="pointer-events-none absolute inset-0 rounded-[48px] border border-violet-500/40 shadow-[0_0_80px_rgba(139,92,246,0.35)]" />
    </div>

  );
}
