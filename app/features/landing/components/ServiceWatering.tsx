import React from "react";
import SwingingKettle from "./SwingingKettle";
import plant from "../../../../public/plant.svg";
import Heading from "@/components/Heading";
import Image from "next/image";

export default function ServiceWatering() {
  return (
    <div className="h-screen ">
      <div className=" ">
        <Heading level={1} variant="light" size="text-6xl">
          Care when you cant be there
        </Heading>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <SwingingKettle />
        <Image src={plant} alt="plant" width={300} />
      </div>
    </div>
  );
}
