"use client";

import { motion } from "framer-motion";

const logos = [
  "RayWhite",
  "Sekisui House",
  "The Agency",
  "GJ Gardner",
  "Hall & Hart",
];

export default function TrustedBy() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center space-y-8">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/70 uppercase tracking-widest text-sm"
        >
          Trusted by
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-10">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-white/40 text-lg font-semibold"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
