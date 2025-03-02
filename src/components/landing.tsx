"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PageWrapper from "./page-warpper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FaFilePdf, FaFileWord } from "react-icons/fa";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";

export default function Landing() {
  const [isBroken, setIsBroken] = useState(false);
  return (
    <PageWrapper>
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-gray-500 via-gray-500 to-gray-900 text-white">
        <Image
          src="/logo.webp"
          alt="logo"
          width={120}
          height={60}
          style={{ borderRadius: "50%" }}
        />
        <motion.h1
          className="text-3xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I&apos;m <span className="name-text-color">Satish Kalla</span>
        </motion.h1>

        <motion.div
          className="relative text-4xl font-bold flex pb-2"
          initial={{
            borderBottomWidth: "2px",
            borderColor: "#0ac5b2",
          }}
          animate={
            !isBroken
              ? { borderBottomWidth: "2px", width: "100%" }
              : { borderBottomWidth: "0px", opacity: 0 }
          }
          transition={{ duration: 2, ease: "easeInOut" }}
          onAnimationComplete={() => setIsBroken(true)}
        />

        <motion.p
          className="mt-4 text-lg md:text-xl text-white-600 dark:text-white-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Full-Stack JavaScript Developer | Building Web Applications
        </motion.p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-1 md:gap-3 lg:gap-5">
          <motion.div
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold cursor-pointer hover:bg-blue-600 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/my/skills">Explore Skills</Link>
          </motion.div>
          <motion.div
            className="mt-3 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="primary-bg-color cursor-pointer text-white">
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
        </div>
      </section>
    </PageWrapper>
  );
}
