"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { createContext, useContext } from "react";

const ThemeContext = createContext<{
  isLight: boolean;
}>({ isLight: true });

export const useScrollTheme = () => useContext(ThemeContext);

export default function ScrollBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();

  // Background color animation
  const backgroundColor = useTransform(
    scrollY,
    [0, 120],
    ["#ffffff", "#0b0b2a"]
  );

  // Scroll threshold boolean
  const isLight = scrollY.get() < 80;

  return (
    <ThemeContext.Provider value={{ isLight }}>
      <motion.main
        style={{ backgroundColor }}
        className="relative min-h-screen transition-colors"
      >
        {children}
      </motion.main>
    </ThemeContext.Provider>
  );
}
