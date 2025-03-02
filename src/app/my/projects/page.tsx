"use client";

import Project from "@/components/project";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import PageWrapper from "@/components/page-warpper";

import projects from "@/data/projects";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <PageWrapper>
      <section className="p-5">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold mb-3">Projects</h2> -{" "}
          <span>Worked on</span>
        </div>
        <Separator className="dark:bg-white" />
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Project project={project}></Project>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  );
}
