"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { DownloadIcon, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaMobile,
  FaFileWord,
  FaFilePdf,
} from "react-icons/fa";

export default function Contact() {
  // Floating background animation state
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setBgPosition({ x: e.clientX / 20, y: e.clientY / 20 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="mt-5 md:mt-15 p-10">
      <section className="relative text-center">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl"
          animate={{ x: bgPosition.x, y: bgPosition.y }}
          transition={{ type: "tween", stiffness: 100 }}
        />

        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 relative z-10"
        >
          Get in Touch
        </motion.h2>

        {/* Description with Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col justify-center items-center gap-2 text-lg text-gray-600 dark:text-gray-300 mb-6 relative z-10"
        >
          <div>
            <Image
              src="/profile-pic.png"
              alt="profile pic"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div>
            <p>K.satish1223@gmail.com</p>
            <p>+91-9985245648</p>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-4 relative z-10"
        >
          Feel free to reach out through any of the platforms below!
        </motion.p>

        {/* Contact Links with Scroll Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 relative z-10"
        >
          <AnimatedLink
            href="mailto:k.satish1223@gmail.com"
            icon={<Mail size={24} className="text-blue-500" />}
            label="Email"
          />
          <AnimatedLink
            href="tel:+91-9985245648"
            icon={<FaMobile size={24} className="text-blue-500" />}
            label="Mobile"
          />
          <AnimatedLink
            href="https://www.linkedin.com/in/satish-kumar-kalla-9b5011b2/"
            icon={<FaLinkedin size={24} className="text-blue-600" />}
            label="LinkedIn"
          />
          <AnimatedLink
            href="https://github.com/SatishKalla"
            icon={<FaGithub size={24} />}
            label="GitHub"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="m-5 primary-bg-color cursor-pointer relative text-white">
                <DownloadIcon /> Download Resume
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => window.open("/resume-word.docx", "_blank")}
              >
                <FaFileWord className="text-blue-600" /> Word
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => window.open("/resume-pdf.pdf", "_blank")}
              >
                <FaFilePdf className="text-red-600" /> Pdf
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </section>
    </div>
  );
}

// Contact Link Component with Scroll Effect
function AnimatedLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, rotate: 3 }}
      transition={{ duration: 0.3 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-2 border rounded-lg shadow-md hover:shadow-lg transition dark:bg-gray-800"
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}
