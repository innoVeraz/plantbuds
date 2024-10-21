import Image from "next/image";
import React from "react";
import kettle from "../../../../public/swing.svg";

export default function SwingingKettle() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        alt="swing"
        className="animate-swing"
        src={kettle}
        width={150}
        height={150}
      />
    </div>
  );
}
