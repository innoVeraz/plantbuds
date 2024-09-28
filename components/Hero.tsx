import Image from "next/image";
import background from "../public/plantsbackground.jpg";

export default function Hero() {
  return (
    <Image
      src={background}
      alt="hand drawn various plants in green against white background"
      layout="fill"
      objectFit="fit"
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
