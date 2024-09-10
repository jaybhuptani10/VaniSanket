import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center  justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        VaniSanket
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
        Experience seamless communication with our innovative platform that converts Indian Sign Language (ISL) into text and audio, and vice versa. Our cutting-edge technology bridges the gap between sign language users and the wider world, making communication accessible and effortless. Whether you need ISL translations for videos, audio, or live interactions, our platform empowers you to connect without barriers. Join us in revolutionizing inclusive communication through technology.
          <br />
          <br />
          <span className="py-10">
            <Link href={"/"} className="mt-10">
              <Button>Explore Our Tech</Button>{" "}
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
