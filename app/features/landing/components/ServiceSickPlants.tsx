import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";
import bug from "/bug.svg";
import analyze from "/analyze.png";
import recycle from "/recycle.svg";

export default function ServiceSickPlants() {
  return (
    <section className="h-screen flex flex-col gap-4 md:gap-32 justify-center items-center bg-backgroundGreen">
      <Heading level={1} variant="light" size="text-6xl" fontFamily="sergio">
        Health check
      </Heading>
      <div className="fle fle-col gap-8 md:flex md:items-center md:gap-44">
        <div className="flex flex-col items-center md:gap-16">
          <Heading level={3} variant="light" size="text-3xl" fontFamily="geist">
            We&apos;ll spot it
          </Heading>
          <Image src={bug} alt="plant with bug" width={150} />
        </div>
        <div className="flex flex-col items-center md:gap-16">
          <Heading level={3} variant="light" size="text-3xl">
            Analyze it
          </Heading>
          <Image src={analyze} alt="plant with bug" width={150} />
        </div>
        <div className="flex flex-col items-center md:gap-16">
          <Heading level={3} variant="light" size="text-3xl">
            Remove or replace it
          </Heading>
          <Image src={recycle} alt="plant with bug" width={150} />
        </div>
      </div>
    </section>
  );
}
