// "use client";

// import { motion } from "framer-motion";

// export default function MarqueeCTA() {
//   return (
//     <div className="overflow-hidden bg-lime-300 py-10">
//       <motion.div
//         initial={{ x: 0 }}
//         animate={{ x: "-50%" }}
//         transition={{
//           repeat: Infinity,
//           duration: 20,
//           ease: "linear",
//         }}
//         className="flex gap-16 whitespace-nowrap text-[#0b0b2a] text-3xl md:text-5xl font-semibold"
//       >
//         {Array.from({ length: 8 }).map((_, i) => (
//           <span key={i}>Demo a space →</span>
//         ))}
//         {Array.from({ length: 8 }).map((_, i) => (
//           <span key={`dup-${i}`}>Demo a space →</span>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function MarqueeCTA() {
  // Phrases pulled directly from brochure highlights
  const phrases = [
    "100% Digital Accuracy",
    "Digital Twin Creation",
    "Experience Before Reality",
    "Remote Property Sales",
    "Immersive 3D Walkthroughs",
    "Interactive Customization"
  ];

  return (
    // Changed to a professional blue gradient to match the Hero theme
    <div className="overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 py-12">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 30, // Slower for better readability
          ease: "linear",
        }}
        className="flex gap-16 whitespace-nowrap text-white text-3xl md:text-5xl font-bold uppercase tracking-tighter"
      >
        {/* Render phrases twice for seamless looping */}
        {[...phrases, ...phrases].map((text, i) => (
          <span key={i} className="flex items-center gap-8">
            {text} <span className="text-blue-300">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}