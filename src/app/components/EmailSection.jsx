"use client";

import React, { useState } from "react";
import GitHubIcon from "../../../public/github256.svg";
import LinkedIn from "../../../public/in.svg";
import Link from "next/link";
import Image from "next/image";
import Telegram from "../../../public/telegram.png";
const EmailSection = () => {
  // State'lar: xabar yuborilganmi yoki xatolik yuz berishi
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // Xatolik xabari
  const [successMessage, setSuccessMessage] = useState(null); // Muvaffaqiyatli yuborilgan xabar

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formdagi qiymatlarni olish
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // So'rovni yuborish uchun konfiguratsiya
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setSuccessMessage("Your message has been sent successfully!"); // Muvaffaqiyatli xabar
        setEmailSubmitted(true);
      } else {
        // Agar status 200 bo'lmasa, xatolikni ko'rsatish
        setErrorMessage(
          resData.error || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again."); // Tashqi xatoliklar uchun
    }
  };

  return (
    <section
      id="email"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-0"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Get in touch</h5>
        <p className="text-[#ABD7BE] mb-4 max-w-md">
          For frontend work or questions about my projects, email{" "}
          <a className="underline break-all" href="mailto:olimjonovrahmonjon20@gmail.com">olimjonovrahmonjon20@gmail.com</a>
          {" "}or contact me on Telegram at <a className="underline" href="https://t.me/auraByte_x">@auraByte_x</a>.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Abdurahmono4">
            <Image
              src={GitHubIcon}
              alt="GitHub Icon"
              width={50}
              height={50}
              className="text-white bg-white rounded"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rahmonjonolimjonov/">
            <Image
              src={LinkedIn}
              alt="LinkedIn Icon"
              width={50}
              height={50}
              className="text-white bg-white rounded"
            />
          </Link>
          <Link href="https://t.me/auraByte_x">
            <Image
              src={Telegram}
              alt="Telegram Icon"
              width={50}
              height={50}
              className="text-white bg-white rounded"
            />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Xatolik va muvaffaqiyatli yuborish xabarlarini ko'rsatish */}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          {successMessage && (
            <div className="text-green-500">{successMessage}</div>
          )}

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Tell me about your project."
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5 h-32"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
