import React from "react";
import Link from "next/Link";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      {" "}
      <div className="container p-12 flex justify-between  ">
        <span className="text-slate-600">LOGO</span>
        <p className="text-slate-600">
          2024 My porfolio website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
