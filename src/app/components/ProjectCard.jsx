import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ ImgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div id="projects ">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group  "
        style={{ background: `url(${ImgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="w-14 h-14 border-2 mr-2  relative rounded-full border-[#ABD7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 cursor-pointer absolute top-1/2 left-1/2 trasfrom -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="w-14 h-14 border-2  relative rounded-full border-[#ABD7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 cursor-pointer absolute top-1/2 left-1/2 trasfrom -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] mt-3 py-6 px-4">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-[#ABD7BE] ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
