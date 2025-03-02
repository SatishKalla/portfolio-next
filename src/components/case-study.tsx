"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, DownloadIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CaseStudy() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2 rounded-md border px-4 py-2 shadow-sm bg-gray-100 dark:bg-gray-800 dark:shadow-[0_2px_6px_#0ac5b2]"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">Modernization with MongoDB</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon">
              {isOpen && (
                <ChevronUp className="up-down-arrow-size rounded bg-white dark:text-black" />
              )}
              {!isOpen && (
                <ChevronDown className="up-down-arrow-size rounded bg-white dark:text-black" />
              )}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "120px" : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <CollapsibleContent className="space-y-2">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-4">
              <p>
                Legacy applications are often difficult to maintain and upgrade.
                In this case study, learn how MongoDB helped a cylinder
                manufacturer modernize their legacy application and migrate to a
                cloud-native architecture. Modernizing these legacy applications
                with MongoDB brings many benefits, including: scalability,
                flexibility, and agility.
              </p>
              <Button
                className="primary-bg-color cursor-pointer text-white"
                onClick={() => window.open("/case-study.pptx", "_blank")}
              >
                <DownloadIcon /> Download
              </Button>
            </div>
          </CollapsibleContent>
        </motion.div>
      </Collapsible>
    </>
  );
}
