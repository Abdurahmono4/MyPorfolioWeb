import React from "react";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-1">
        <div className="md:col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 aria-label="Rahmonjon Olimjonov" className="hero-rotation mb-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
            {["Rahmonjon Olimjonov", "Software Engineer", "MSc", "Frontend Developer"].map(label => (
              <span key={label} aria-hidden="true">{label}</span>
            ))}
          </h1>
          <div className="hero-progress" aria-hidden="true" />
          <p className="mb-4 text-lg font-medium text-purple-300">MSc student in Intelligent Engineering Systems</p>
          <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl  text-base whitespace-pre-line  ">
            I build web interfaces with React and Next.js. My engineering work explores how IoT sensors can help monitor oil pipelines remotely.
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
        </div>
        <div className="md:col-span-4 place-self-center ml-4 mt-4 lg:mt-0 "
        >
          <div className="overflow-hidden rounded-full bg-[#181818] w-[230px] max-w-full aspect-square lg:w-[350px] relative">
            <Image
              src="/image/main.png"
              alt="Rahmonjon Olimjonov"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            />
            <Image src="/image/rahmonjon-portrait.png" alt="" fill sizes="(min-width:1024px) 350px, 230px"
              className="hero-portrait object-cover object-[center_48%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
