import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";
import bug from "../../../../public/bug.svg";
import analyze from "../../../../public/analyze.svg";
import recycle from "../../../../public/recycle.svg";

export default function ServiceSickPlants() {
  return (
    <>
      <Heading level={1} variant="light" size="text-6xl">
        Health check
      </Heading>
      <div className="bg-backgroundGreen">
        <Heading level={3} variant="light" size="text-3xl">
          We spot it
        </Heading>
        <Image src={bug} alt="plant with bug" width={100} className="" />
        <Heading level={3} variant="light" size="text-3xl">
          Analyze it
        </Heading>
        <Image src={analyze} alt="plant with bug" width={100} className="" />
        <Heading level={3} variant="light" size="text-3xl">
          Remove and replace it
        </Heading>
        <Image src={recycle} alt="plant with bug" width={100} className="" />
      </div>
    </>
  );
}
