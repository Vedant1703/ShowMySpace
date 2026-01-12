"use client";

import { motion } from "framer-motion";
import FeatureCard from "./featureCard";
import {
  Hand,
  MousePointer,
  Headset,
  Globe,
} from "lucide-react";

export default function FeatureShowcase() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT – VISUAL PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center"
        >
          <span className="text-white/40">
            Visual / Video Placeholder
          </span>
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Explore your space,
              <br />
              your way
            </h2>
            <p className="text-white/70 max-w-md">
              Walk through, click, explore and present spaces across
              multiple devices — all from one XR platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FeatureCard
              title="Walkable"
              description="Move freely through your space as if it were already built."
              icon={Hand}
            />
            <FeatureCard
              title="Clickable"
              description="Interact with materials, fixtures and layouts in real time."
              icon={MousePointer}
            />
            <FeatureCard
              title="Headset"
              description="Deliver a fully immersive experience using XR headsets."
              icon={Headset}
            />
            <FeatureCard
              title="Browser"
              description="Share instantly with clients on any modern browser."
              icon={Globe}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
