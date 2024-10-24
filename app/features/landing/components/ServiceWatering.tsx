import React from "react";
import SwingingKettle from "./SwingingKettle";
import plant from "../../../../public/plant.svg";
import Heading from "@/components/Heading";
import Image from "next/image";

export default function ServiceWatering() {
  return (
    <section className="h-screen flex flex-col gap-10 justify-center items-center bg-backgroundGreen md:gap-20">
      <div className=" ">
        <Heading level={1} variant="light" size="text-6xl" fontFamily="sergio">
          Care when you cant be there
        </Heading>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <SwingingKettle />
        <Image src={plant} alt="plant" width={300} />
      </div>
    </section>
  );
}
