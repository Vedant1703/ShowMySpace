"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_40px_rgba(139,92,246,0.25)]" />

      <div className="relative space-y-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-violet-600/20 text-violet-400">
          <Icon size={20} />
        </div>

        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-white/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
