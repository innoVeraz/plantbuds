import Heading from "@/components/Heading";
import React from "react";

export default function ServiceReplanting() {
  return (
    <div className="relative h-screen w-full">
      {/* Videon som bakgrund */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/replant.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Headern centrerad och längst ner */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center z-10">
        <Heading level={1} variant="light" size="text-6xl">
          We will do the dirty work
        </Heading>
      </div>
    </div>
  );
}
