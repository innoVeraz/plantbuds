"use client";

import Heading from "@/components/ui/headings/Heading";
import { motion } from "framer-motion";

export default function ServiceReplanting() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      className="relative h-screen w-full flex flex-col"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/replant.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-12 left-0 w-full flex justify-center items-center z-10 md:bottom-24">
        <Heading level={1} variant="light" size="text-6xl" fontFamily="sergio">
          We will do the dirty work
        </Heading>
      </div>
    </motion.section>
  );
}
