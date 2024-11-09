"use client";

import React, { useState } from "react";
import GitHubIcon from "../../../public/github256.svg";
import LinkedIn from "../../../public/in.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-0"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 ">
        <h5 className="text-xl font-bold text-white my-2">Lets Connect </h5>
        <p className="text-[#ABD7BE] mb-4 max-w-md">
          I am currently looking for new opportunities,my inbox is always open.
          Whether you have a questions or just want to say hi, I will try my
          best to get back to you soon!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="github.com">
            <Image
              src={GitHubIcon}
              alt="git hub icon"
              width={50}
              height={50}
              className="text-white bg-white rounded"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/">
            <Image
              src={LinkedIn}
              alt="linkedin icon"
              width={50}
              height={50}
              className="text-white bg-white rounded"
            />
          </Link>
        </div>
      </div>
      <div>
        <form
          action=""
          className="flex flex-col gap-6 "
          onSubmit={handleSubmit}
        >
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
              placeholder="rr.olimjonov@gmail.com "
              className="bg-[#18191E] border border-[#33353F] placehroundedolder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full  p-2.5 "
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
              type="text "
              id="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-[#33353F] placehroundedolder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full  p-2.5 "
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
              placeholder="Hello, I'm Abdurahmon! I hope you're doing well. I'm looking forward to discussing my skills and opportunities."
              className="bg-[#18191E] border border-[#33353F] placehroundedolder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full  p-2.5 h-32"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2.5 rounded-lg w-full "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
