"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function UseCaseCard({
  title,
  description,
  icon: Icon,
}: UseCaseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        relative
        rounded-2xl
        border border-white/10
        bg-white/5
        p-6
        backdrop-blur-md
        flex
        flex-col
        gap-4
      "
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-violet-500/15 text-violet-400">
        <Icon size={22} />
      </div>

      {/* Text */}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed">
        {description}
      </p>

      {/* Arrow */}
      <ArrowUpRight
        className="absolute top-6 right-6 text-violet-400"
        size={18}
      />
    </motion.div>
  );
}
