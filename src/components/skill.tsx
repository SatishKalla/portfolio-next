"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Skill({
  category,
  icon,
  skills,
}: {
  category: string;
  icon: React.ReactElement;
  skills: {
    name: string;
    icon: React.ReactElement;
  }[];
}) {
  return (
    <Card
      key={category}
      className="p-4 bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-[0_2px_6px_#0ac5b2]"
    >
      <CardContent className="px-2">
        <div className="flex justify-center items-center gap-3 mb-4">
          {icon}
          <h2 className="text-xl font-semibold">{category}</h2>
        </div>
        <motion.div
          className="flex col-2 flex-wrap gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1, duration: 0.3 },
            },
          }}
        >
          {skills.map(({ name, icon }) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Badge
                key={name}
                className="flex items-center gap-1 px-3 py-1 bg-white text-black"
              >
                {icon} {name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
