// "use client";

// import { motion } from "framer-motion";

// export default function PresentSection() {
//   return (
//     <section className="py-32">
//       <div className="mx-auto max-w-7xl px-6 space-y-16">

//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//           <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-xl">
//             Present your space like
//             <br />
//             you're in the same room
//           </h2>

//           <button className="self-start md:self-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#0b0b2a] transition hover:bg-white/90">
//             Enviz for Sales →
//           </button>
//         </div>

//         {/* CARDS */}
//         <div className="grid md:grid-cols-2 gap-10">
          
//           {/* PUBLIC VIEWING */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             whileHover={{ y: -6 }}
//             className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-[16/10]"
//           >
//             {/* Asset placeholder */}
//             <div className="absolute inset-0 flex items-center justify-center text-white/40">
//               Public viewing visual
//             </div>

//             <div className="absolute bottom-6 left-6 text-white font-medium">
//               Public Viewing
//             </div>
//           </motion.div>

//           {/* GUIDED VIEWING */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             whileHover={{ y: -6 }}
//             className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-[16/10]"
//           >
//             {/* Asset placeholder */}
//             <div className="absolute inset-0 flex items-center justify-center text-white/40">
//               Guided viewing visual
//             </div>

//             <div className="absolute bottom-6 right-6 text-white font-medium text-right">
//               Guided Viewing
//             </div>
//           </motion.div>

//         </div>

//         {/* DESCRIPTION */}
//         <p className="max-w-xl text-white/70">
//           Easily connect with local and international clients in public and
//           guided viewing sessions.
//         </p>

//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function PresentSection() {
  return (
    <section id="sales-tools" className="py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 space-y-16">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-4">
             <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm">Remote Sales</h3>
             <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white max-w-2xl">
              Present your space like <br />
              <span className="text-neutral-500">you're in the same room</span>
            </h2>
          </div>

          <button className="self-start md:self-center rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-900/20">
            ShowMySpace for Sales →
          </button>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* PUBLIC VIEWING - WEB BASED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/10]"
          >
            <video 
              autoPlay muted loop playsInline 
              className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              src="/assets/sales/public-viewing.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 space-y-2">
              <div className="text-white text-2xl font-bold">Public Viewing</div>
              <p className="text-white/60 text-sm max-w-xs">Web-based interactive walkthroughs for global 24/7 access.</p>
            </div>
          </motion.div>

          {/* GUIDED VIEWING - LIVE CALL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/10]"
          >
            <video 
              autoPlay muted loop playsInline 
              className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              src="/assets/sales/guided-viewing.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 right-8 text-right space-y-2">
              <div className="text-white text-2xl font-bold">Guided Viewing</div>
              <p className="text-white/60 text-sm max-w-xs ml-auto">Host live-call virtual tours with multiple buyers simultaneously.</p>
            </div>
          </motion.div>

        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col md:flex-row gap-8 items-center border-t border-white/10 pt-12">
            <div className="flex -space-x-4">
                {/* Visual indicator of "Multiple Buyers" */}
                {[1,2,3].map(i => (
                    <div key={i} className="h-12 w-12 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-xs text-white">User</div>
                ))}
            </div>
            <p className="max-w-2xl text-lg text-white/70 leading-relaxed">
              Accelerate your sales cycle with unforgettable presentations. Perfect for NRI and out-of-city clients who want to explore every corner without a site visit.
            </p>
        </div>

      </div>
    </section>
  );
}