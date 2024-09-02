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
        Master Web Development
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Dive into our hands-on web development courses and elevate your coding skills. 
          Whether you're a beginner starting from scratch or a seasoned developer looking to sharpen your skills, 
          join us to unlock your full potential in the world of tech.
          <br />
          <br />
          <span className="py-10">
            <Link href={"/courses"} className="mt-10">
              <Button>Explore courses</Button>{" "}
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
