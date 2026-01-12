"use client";

import { ArrowRight } from "lucide-react";

interface FooterLinksProps {
  links: string[];
}

export default function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className="space-y-4">
      {links.map((link) => (
        <li
          key={link}
          className="group flex items-center justify-between text-white/80 hover:text-white cursor-pointer transition"
        >
          <span>{link}</span>
          <ArrowRight
            size={14}
            className="opacity-0 group-hover:opacity-100 transition"
          />
        </li>
      ))}
    </ul>
  );
}
