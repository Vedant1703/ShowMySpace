"use client";

import { motion } from "framer-motion";
import { UserCheck, Briefcase, Settings, Users } from "lucide-react";

const ROLES = [
  {
    title: "Experience Guide",
    description: "Helps guests use technology comfortably. We keep this separate from the sales role to significantly increase customer comfort during exploration.",
    icon: UserCheck,
    cite: "318, 319"
  },
  {
    title: "Sales Expert",
    description: "The primary closer. Converts leads into customers using deep product knowledge and advanced closing expertise.",
    icon: Briefcase,
    cite: "321, 322"
  },
  {
    title: "Tech Support",
    description: "Ensures the 'Sales Machine' never stops. Maintains hardware, software, and ensures daily technical excellence.",
    icon: Settings,
    cite: "323, 324"
  },
  {
    title: "Host",
    description: "Manages the welcome and intake process, creating that critical positive first impression for every visitor.",
    icon: Users,
    cite: "325, 326"
  }
];

export default function OperationalRoles() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm">Operations</h3>
            <h2 className="text-4xl font-bold text-white">Staffing & Role Definitions</h2>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
            A specialized team structure designed to maximize customer engagement 
            and streamline the conversion process. [cite: 317]
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="mb-6 h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <role.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{role.title}</h4>
              <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                {role.description}
              </p>
              <span className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">
                Ref:
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}