import React from "react";
import { Code, House, FolderGit2, ShieldUser } from "lucide-react";
import { Button } from "../ui/button";

const AppBar = () => {
  return (
    <div className="z-10 font-josefin w-full min-h-16 bg-white flex flex-row items-center justify-start p-3.5 pr-10 pl-10 border border-gray-200 gap-x-10 shadow-bottom">
      <Button
        className="hover:bg-gray-100 cursor-pointer flex flex-row gap-x-2 items-center justify-center p-1 border-0"
        // onClick={() => onNavigate("hero")}
      >
        <House className="mb-0.5" />
        <span className="leading-none font-josefin font-semibold text-md -mb-0.5">
          Madison Weber
        </span>
      </Button>
      <div style={{ marginLeft: "auto" }} />
      <Button
        className="hover:bg-gray-100 flex cursor-pointer flex-row gap-x-2 items-center justify-center p-1 border-0"
        // onClick={() => onNavigate("about")}
      >
        <ShieldUser />
        <span className="text-md leading-0 -mb-0.5">About</span>
      </Button>
      <Button
        className="hover:bg-gray-100 flex cursor-pointer flex-row gap-x-2 items-center justify-center p-1 border-0"
        // onClick={() => onNavigate("skills")}
      >
        <Code />
        <span className="text-md leading-0 -mb-0.5">Skills</span>
      </Button>
      <Button
        className="hover:bg-gray-100 flex cursor-pointer flex-row gap-x-2 items-center justify-center p-1 border-0"
        // onClick={() => onNavigate("projects")}
      >
        <FolderGit2 />
        <span className="text-md leading-0 -mb-0.5">Projects</span>
      </Button>
    </div>
  );
};

export default AppBar;
