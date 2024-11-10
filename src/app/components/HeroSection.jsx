"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white text-4xl mb-4  sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 ">
              Hello, I am {}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Olimjonov Rahmonjon",
                1000,
                "Web Developer",
                1000,
                "Student",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl  text-base whitespace-pre-line  ">
            A motivated Frontend Developer with a strong commitment to
            contributing to a highly collaborative work environment.
          </p>
          <div>
            <Link href="#email">
              <button
                className="rounded-full px-6 py-3 mr-4  w-full bg-gradient-to-br from-primary-500 via-indigo-500 to-secondary-500 sm:w-fit  hover:bg-slate-200 text-white"
                id="contact"
              >
                Hire me
              </button>
            </Link>
            <button className="rounded-full px-1 py-1 bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500  w-full sm:w-fit hover:bg-slate-800 text-white  mt-3">
              <Link download="Olimjonov_Rahmonjon_CV.pdf" href="/cv/my-cv.pdf">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                  Download CV
                </span>
              </Link>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center ml-4 mt-4 lg:mt-0 "
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/image/main.png"
              alt="Profile Pic"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
