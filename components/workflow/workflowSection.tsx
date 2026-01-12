// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import WorkflowItem from "./workflowItem";

// const ITEMS = [
//   "Floor plans",
//   "Architectural models",
//   "CGI / ArchViz models",
// ];

// export default function WorkflowSection() {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="py-32">
//       <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT – TEXT + ACCORDION */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="space-y-8"
//         >
//           <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
//             From floor plans to complex
//             <br />
//             CGI models, we’ve got you covered
//           </h2>

//           <div className="space-y-4">
//             {ITEMS.map((item, i) => (
//               <WorkflowItem
//                 key={item}
//                 title={item}
//                 isActive={active === i}
//                 onClick={() => setActive(i)}
//               />
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT – VISUAL PLACEHOLDER */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative aspect-[4/3] rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center"
//         >
//           <span className="text-white/40">
//             Visual / Viewer Placeholder
//           </span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkflowItem from "./workflowItem";

// Detailed items based on the 5-Step Process in the brochure
const ITEMS = [
  {
    title: "01 Input Collection",
    description: "Provide 2D floor plans, elevations, and sections. Share material references and design moodboards to ensure precision.",
    asset: "/assets/process/input.jpg"
  },
  {
    title: "02 3D Model Creation",
    description: "We build complete wall-floor-ceiling structures using Autodesk 3ds Max, adding furnishing and ultra-realistic textures.",
    asset: "/assets/process/modelling.jpg"
  },
  {
    title: "03 Lighting & Rendering",
    description: "Fine-tuning natural and artificial lighting to create perfect ambient optimization and realistic material reflections.",
    asset: "/assets/process/lighting.jpg"
  },
  {
    title: "04 Platform Publishing",
    description: "Creating web-based interactive walkthroughs that are VR-ready and mobile-compatible for global access.",
    asset: "/assets/process/publishing.jpg"
  },
  {
    title: "05 Sales Integration",
    description: "Integrating guided tours, live-call capabilities, and analytics hotspots to boost your sales conversions significantly.",
    asset: "/assets/process/sales.jpg"
  }
];

export default function WorkflowSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT – TEXT + ACCORDION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm">Our Process</h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Transforming your vision <br />
              <span className="text-neutral-500">into immersive reality</span>
            </h2>
          </div>

          <div className="space-y-2">
            {ITEMS.map((item, i) => (
              <WorkflowItem
                key={item.title}
                title={item.title}
                description={item.description} // Pass description to WorkflowItem
                isActive={active === i}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT – DYNAMIC VISUAL */}
        <motion.div
          className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={ITEMS[active].asset}
              alt={ITEMS[active].title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          {/* Subtle overlay to keep it professional */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}