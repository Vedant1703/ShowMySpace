"use client";

import { motion } from "framer-motion";
import { desc } from "framer-motion/client";
import { Plus, Minus } from "lucide-react";

interface WorkflowItemProps {
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export default function WorkflowItem({
  title,
  isActive,
  description,
  onClick,
}: WorkflowItemProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl border border-violet-500/20 bg-white/5 px-6 py-4 transition hover:bg-white/10"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-violet-400 font-medium">{title}</h4>
        {isActive ? (
          <Minus className="text-violet-400" size={18} />
        ) : (
          <Plus className="text-violet-400" size={18} />
        )}
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-3 text-sm text-white/70">
        {description}
        </p>
      </motion.div>
    </div>
  );
}
