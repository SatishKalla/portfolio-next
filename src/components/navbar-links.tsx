"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ModeToggle from "./mode-toggle";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/my/skills" },
  { name: "Projects", href: "/my/projects" },
  { name: "Experience", href: "/my/experience" },
  { name: "Contact", href: "/my/contact" },
];

export default function NavbarLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex gap-5">
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link transition ${
                  pathname === link.href
                    ? "navbar-link selected font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex gap-1">
          <motion.div
            key="theme-toggle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ModeToggle />
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {!isOpen ? <Menu size={28} /> : <X size={28} />}
            </motion.div>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md p-4 border-t-2 border-t-[#0ac5b2]"
          >
            <ul className="flex flex-col space-y-4 ">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`navbar-link lock py-2 text-lg text-black transition ${
                      pathname === link.href
                        ? "navbar-link selected font-semibold"
                        : ""
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
