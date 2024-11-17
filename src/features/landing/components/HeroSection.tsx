"use client";

import { motion } from "framer-motion";

import background from "/public/heroimg.png";
import Heading from "@/components/ui/headings/Heading";
import Image from "next/image";

import Logo from "@/components/ui/header/Logo";

import LoginDialog from "@/features/login/components/login-dialog";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center bg-backgroundGreen relative"
      >
        <Image
          src={background}
          alt="plants background"
          objectFit="cover"
          layout="fill"
          className="absolute top-0 left-0 w-full h-screen"
        />
        <div className="absolute top-12">
          <Logo />
        </div>
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
            <Button variant="default">NEW HERE</Button>
            <LoginDialog />
          </div>
        </div>
      </motion.section>
    </>
  );
}
