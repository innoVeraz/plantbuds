import background from "../../../../public/heroimg.png";
import Heading from "@/components/Heading";
import Image from "next/image";
import Button from "@/components/buttons/Button";

export default function LandingPage() {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center bg-cover bg-center bg-backgroundGreen relative">
        <Image
          src={background}
          alt="plants background"
          objectFit="cover"
          layout="fill"
          className="absolute top-0 left-0 w-full h-screen"
        />

        <div className="relative md:flex md:flex-col md:gap-20">
          <Heading
            level={1}
            variant="light"
            size="text-6xl"
            fontFamily="sergio"
          >
            Plant services to your doorstep
          </Heading>
          <div className="flex justify-center gap-10 ">
            <Button variant="primary">NEW HERE</Button>
            <Button variant="primary">LOG IN</Button>
          </div>
        </div>
      </section>
    </>
  );
}
