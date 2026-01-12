// "use client";

// import {
//   Monitor,
//   Building2,
//   PencilRuler,
//   User,
//   Home,
// } from "lucide-react";
// import UseCaseCard from "./usecaseCard";
// import { motion } from "framer-motion";

// export default function UseCasesSection() {
//   return (
//     <section className="py-32">
//       <div className="mx-auto max-w-7xl px-6 space-y-16">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-semibold"
//         >
//           Explore how Enviz works for you
//         </motion.h2>

//         {/* Grid */}
//         <div
//           className="
//             grid
//             gap-6
//             sm:grid-cols-2
//             lg:grid-cols-4
//             xl:grid-cols-5
//           "
//         >
//           <UseCaseCard
//             title="ArchViz / CGI Studios"
//             description="Create industry leading lifelike XR experiences for any device."
//             icon={Monitor}
//           />
//           <UseCaseCard
//             title="Property Developer"
//             description="Boost your off-the-plan sales with increased buyer confidence."
//             icon={Building2}
//           />
//           <UseCaseCard
//             title="Architects / Designers"
//             description="Communicate your vision across devices like never before."
//             icon={PencilRuler}
//           />
//           <UseCaseCard
//             title="Agents"
//             description="Accelerate your sales cycle with unforgettable presentations."
//             icon={User}
//           />
//           <UseCaseCard
//             title="Home Builders"
//             description="Showcase configurable homes with stunning realism."
//             icon={Home}
//           />
//         </div>

//         {/* Progress bar */}
//         <div className="relative h-[2px] w-full bg-white/10">
//           <div className="absolute left-0 top-0 h-full w-1/3 bg-lime-300" />
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import {
  Monitor,
  Building2,
  PencilRuler,
  User,
  Home,
  Briefcase,
  Search
} from "lucide-react";
import UseCaseCard from "./usecaseCard";
import { motion } from "framer-motion";

export default function UseCasesSection() {
  return (
    <section id="solutions" className="py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 space-y-16">

        {/* Heading */}
        <div className="space-y-4">
          <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm text-center">Stakeholders</h3>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Who Benefits From <span className="text-blue-500">ShowMySpace</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          <UseCaseCard
            title="Developers & Builders"
            description="Sell projects before completion. Showcase properties with digital twins to drive early bookings."
            icon={Building2}
          />
          <UseCaseCard
            title="Brokers & Realtors"
            description="Close deals faster with immersive tours. Replace dull photos with interactive experiences."
            icon={Briefcase}
          />
          <UseCaseCard
            title="Buyers & Investors"
            description="Explore properties remotely. Compare layouts and staged interiors for confident decisions."
            icon={Search}
          />
          <UseCaseCard
            title="Architects & Planners"
            description="Use digital twins for design validation and optimize spaces early in the planning phase."
            icon={PencilRuler}
          />
          <UseCaseCard
            title="ArchViz Studios"
            description="Create industry-leading lifelike XR experiences using Autodesk 3ds Max and Unreal Engine."
            icon={Monitor}
          />
        </div>

        {/* Professional progress bar matching the hero theme */}
        <div className="relative h-[1px] w-full bg-white/10">
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-0 h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
          />
        </div>

      </div>
    </section>
  );
}