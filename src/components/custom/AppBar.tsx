import React from "react";
import { Code, House, FolderGit2, ShieldUser } from "lucide-react";
import { Button } from "../ui/button";
import { PAGES } from "@/routes";

interface AppBarProps {
  currentPage: string;
  handleGoToPage: (pageName: string) => void;
}

const AppBar = ({ currentPage, handleGoToPage }: AppBarProps) => {
  return (
    <div className="z-10 font-josefin w-full min-h-16 bg-white flex flex-row items-center justify-start p-3.5 pr-10 pl-10 border border-gray-200 gap-x-10 shadow-bottom">
      <Button
        className={`hover:bg-gray-50 cursor-pointer flex flex-row gap-x-2 items-center justify-center p-1} ${
          currentPage === PAGES.LANDING && "bg-gray-100"
        }`}
        onClick={() => handleGoToPage(PAGES.LANDING)}
      >
        <House className="mb-0.5" />
        <span className="leading-none font-josefin font-semibold text-md -mb-0.5">
          Madison Weber
        </span>
      </Button>
      <div style={{ marginLeft: "auto" }} />
      <Button
        className={`hover:bg-gray-50 cursor-pointer flex flex-row gap-x-2 items-center justify-center p-1} ${
          currentPage === PAGES.ABOUT && "bg-gray-100"
        }`}
        onClick={() => handleGoToPage(PAGES.ABOUT)}
      >
        <ShieldUser />
        <span className="text-md leading-0 -mb-0.5">About</span>
      </Button>
      <Button
        className={`hover:bg-gray-50 cursor-pointer flex flex-row gap-x-2 items-center justify-center p-1} ${
          currentPage === PAGES.SKILLS && "bg-gray-100"
        }`}
        onClick={() => handleGoToPage(PAGES.SKILLS)}
      >
        <Code />
        <span className="text-md leading-0 -mb-0.5">Skills</span>
      </Button>
      <Button
        className={`hover:bg-gray-50 cursor-pointer flex flex-row gap-x-2 items-center justify-center p-1} ${
          currentPage === PAGES.PROJECTS && "bg-gray-100"
        }`}
        onClick={() => handleGoToPage(PAGES.PROJECTS)}
      >
        <FolderGit2 />
        <span className="text-md leading-0 -mb-0.5">Projects</span>
      </Button>
    </div>
  );
};

export default AppBar;
