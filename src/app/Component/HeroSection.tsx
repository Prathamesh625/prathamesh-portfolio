"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/assets/prathamesh.png";
import { ArrowRight, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 md:px-12 "
    >
      {/* <div className="w-full min-h-screen bg-radial from-neutral-900 to-100%% absolute"></div> */}
      <div className="max-w-4xl text-center space-y-6 z-40">
        <div className="flex justify-center">
          <Image
            src={profile} // replace with your photo
            alt="Profile"
            width={128}
            height={128}
            className="w-50 h-50 rounded-full border-2 border-neutral-700 shadow-lg object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I’m <span className="text-gray-300">Prathamesh</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          I build scalable, performant web applications with modern
          technologies. Passionate about solving real-world problems through
          clean and maintainable code.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-2">
          <Link
            href="#projects"
            className="px-5 py-2.5 bg-[#171717] text-white rounded-md text-sm border border-neutral-800 flex gap-4 items-center transform hover:scale-95 duration-200"
          >
            <span>View My Work</span>
            <ArrowRight width={15} />
          </Link>
          <Link
            href="https://www.google.com/"
            className="px-5 py-2.5 bg-[#171717] text-white rounded-md text-sm border  border-neutral-800 flex  gap-4 items-center transform hover:scale-95 duration-200"
          >
            <LinkedinIcon width={15} />
            <span>Connect With Me</span>
          </Link>
        </div>
      </div>
      <div className="bg-[#171717] max-w-96 px-5 min-h-2 text-xs flex items-center justify-center gap-2 rounded-full mt-12 border border-neutral-800">
        <span className="text-xs font-medium">
          Open for software developer position
        </span>
        <ArrowRight width={10} />
      </div>
    </section>
  );
};

export default Hero;
