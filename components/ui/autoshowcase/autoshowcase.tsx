"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShowcaseItem } from "./types";

interface Props {
  items: ShowcaseItem[];
  variant?: "dark" | "light";
  interval?: number;
}

export default function AutoShowcase({
  items,
  variant = "dark",
  interval = 3000,
}: Props) {
  const [active, setActive] = useState(0);

  // auto switch
  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % items.length),
      interval
    );
    return () => clearInterval(id);
  }, [items.length, interval]);

  const theme = {
    dark: {
      bg: "bg-black",
      bg_in: "bg-neutral-900",
      card: "bg-white/5",
      text: "text-white",
      muted: "text-white/60",
      tab: "bg-white/10",
      activeTab: "bg-white/20",
    },
    light: {
      bg: "bg-white",
      bg_in: "bg-neutral-100",
      card: "bg-neutral-100",
      text: "text-[#0b0b2a]",
      muted: "text-[#0b0b2a]/60",
      tab: "bg-neutral-200",
      activeTab: "bg-neutral-300",
    },
  }[variant];

  return (
    <section id="explore-section" className={cn("py-24", theme.bg)}>
        <h2 className={cn("text-4xl font-bold text-center mb-12", theme.text)}>Explore your space, your way</h2>
      <div className={cn("mx-auto py-10 rounded-2xl  max-w-7xl px-6 space-y-12", theme.bg_in)}>
        {/* Tabs */}
        <div className="hidden md:flex gap-4">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={cn(
                "relative overflow-hidden rounded-full px-6 py-3 text-sm transition-all",
                theme.tab,
                active === i && "flex-1",
                active === i && theme.activeTab,
                theme.text
              )}
            >
              <span className="relative font-semibold z-10">{item.label}</span>

              {/* loading bar */}
              {active === i && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-violet-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: interval / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative rounded-3xl overflow-hidden border border-double-gray-700 aspect-video">
            <AnimatePresence mode="wait">
              <motion.video
                key={items[active].videoSrc}
                src={items[active].videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Text */}
          <motion.div
            key={items[active].id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={cn("space-y-6", theme.text)}
          >
            <h3 className="text-3xl font-semibold">
              {items[active].title}
            </h3>
            <p className={theme.muted}>{items[active].description}</p>

            <div className="flex gap-4">
              {items[active].stats.map((s) => (
                <div
                  key={s.label}
                  className={cn(
                    "rounded-xl px-6 py-4 text-center",
                    theme.card
                  )}
                >
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className={theme.muted}>{s.label}</div>
                </div>
              ))}
            </div>

            <button
              className={cn(
                "mt-4 inline-flex items-center gap-2 rounded-xl border px-6 py-3",
                variant === "dark"
                  ? "border-white/30"
                  : "border-black/30"
              )}
            >
              {items[active].cta} →
            </button>
          </motion.div>
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden space-y-4">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={cn(
                "rounded-2xl p-4 transition",
                theme.card
              )}
              onClick={() => setActive(i)}
            >
              <div className="font-medium">{item.label}</div>
              {active === i && (
                <p className={theme.muted}>{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
