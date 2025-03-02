"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LoadPages({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <main key={pathname}>{children}</main>
    </AnimatePresence>
  );
}
