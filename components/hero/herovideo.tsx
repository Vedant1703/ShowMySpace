// "use client";

// import { motion } from "framer-motion";
// import gsap from "@/lib/gsap"

// export default function VideoHero() {
//     const handleExploreClick = () => {
//     const target = document.getElementById("explore-section");
//     if (!target) return;

//     // First: native smooth scroll (reliable)
//     target.scrollIntoView({ behavior: "smooth" });

//     // Then: subtle GSAP settle (premium feel)
//     gsap.to(window, {
//       scrollTo: {
//         y: target,
//         offsetY: 80, // accounts for navbar
//       },
//       duration: 1.2,
//       ease: "power2.out",
//     });
//   };
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
      
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 h-full w-full object-cover"
//       >
//         <source src="/assets/landing/video1.mp4" type="video/mp4" />
//       </video>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

//       {/* Content */}
//       <div className="relative z-10 flex px-10 h-full items-end md:items-center">
//         <div className="mx-auto w-full max-w-7xl px-6 pb-24 md:pb-0">
//           <motion.h1
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="
//               max-w-4xl
//               text-4xl md:text-6xl
//               font-semibold
//               leading-tight
//               text-white
//             "
//           >
//             Transform 2D Floor Plans into           
//              <br />
//             Immersive 3D Experiences
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="
//               mt-4
//               max-w-2xl
//               text-lg md:text-xl
//               text-white/90
//             "
//           >
//             Experience the future of real estate visualization with our cutting-edge technology that brings your floor plans to life in stunning 3D.
//           </motion.p>

//           <motion.button
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             onClick={handleExploreClick}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="
//               mt-8 inline-flex items-center gap-2
//               rounded-lg
//               bg-blue-600
//               px-6 py-3
//               text-white
//               font-medium
//               hover:bg-blue-500
//             "
//           >
//             Explore Now →
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import gsap from "@/lib/gsap";

export default function VideoHero() {
  const handleExploreClick = () => {
    const target = document.getElementById("process-section"); // Targeted the process section
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });

    gsap.to(window, {
      scrollTo: {
        y: target,
        offsetY: 80,
      },
      duration: 1.2,
      ease: "power2.out",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video - Replace with the asset I will generate below */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/assets/landing/hero-bg-walkthrough.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for professional contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex px-10 h-full items-end md:items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pb-24 md:pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              max-w-4xl
              text-4xl md:text-7xl
              font-bold
              leading-[1.1]
              text-white
            "
          >
            Transform 2D Plans into <br />
            <span className="text-blue-400">Stunning Immersive Realities</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="
              mt-6
              max-w-2xl
              text-lg md:text-2xl
              text-white/90
              font-light
              leading-relaxed
            "
          >
            Experience properties before they exist with photorealistic 3D walkthroughs, 
            digital twins, and VR/AR integration. Enable remote sales with 100% digital accuracy.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleExploreClick}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="
                inline-flex items-center gap-2
                rounded-lg
                bg-blue-600
                px-8 py-4
                text-white
                font-semibold
                text-lg
                hover:bg-blue-700
                transition-all
                shadow-xl shadow-blue-900/20
              "
            >
              Get Started Now →
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="
                inline-flex items-center gap-2
                rounded-lg
                bg-white/10
                backdrop-blur-md
                border border-white/20
                px-8 py-4
                text-white
                font-semibold
                text-lg
                hover:bg-white/20
                transition-all
              "
            >
              View Interactive Demo
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}