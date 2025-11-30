import { Code, House, FolderGit2, ShieldUser } from 'lucide-react';
import { Button } from '../ui/button';
import { PAGES } from '@/routes';

interface AppBarProps {
  currentPage: string;
  handleGoToPage: (pageName: string) => void;
}

const AppBar = ({ currentPage, handleGoToPage }: AppBarProps) => {
  return (
    <div className="z-10 gap-x-2 md:gap-x-10 font-josefin w-full min-h-16 bg-white flex flex-row items-center justify-start p-3.5 pr-10 pl-10 border border-gray-200 shadow-bottom">
      <Button
        className={`hover:bg-gray-50 cursor-pointer flex-row gap-x-2 items-center justify-center p-1 flex } ${
          currentPage === PAGES.LANDING && 'bg-gray-100'
        }`}
        onClick={() => handleGoToPage(PAGES.LANDING)}
      >
        <House
          className={`mb-0.5 transition-colors ${
            currentPage === PAGES.LANDING && 'text-secondary-500'
          }`}
        />
        <p className="leading-none font-josefin font-semibold text-md -mb-0.5 sm:block hidden">
          Madison Weber
        </p>
      </Button>
      <div style={{ marginLeft: 'auto' }} />
      <Button
        className={`hover:bg-gray-50 cursor-pointer flex flex-row gap-x-2 items-center justify-center p-1} ${
          currentPage === PAGES.ABOUT && 'bg-gray-100'
        }`}
        onClick={() => handleGoToPage(PAGES.ABOUT)}
      >
        <ShieldUser
          className={`mb-0.5 transition-colors ${
            currentPage === PAGES.ABOUT && 'text-secondary-500'
          }`}
        />
        <p className="text-md leading-0 -mb-0.5 sm:block hidden">About</p>
      </Button>
      <Button
        className={`hover:bg-gray-50 cursor-pointer flex flex-row gap-x-2 items-center justify-center p-1} ${
          currentPage === PAGES.STACK && 'bg-gray-100'
        }`}
        onClick={() => handleGoToPage(PAGES.STACK)}
      >
        <Code
          className={`mb-0.5 transition-colors ${
            currentPage === PAGES.STACK && 'text-secondary-500'
          }`}
        />
        <p className="text-md leading-0 -mb-0.5 sm:block hidden">Tech Stack</p>
      </Button>
      <Button
        className={`hover:bg-gray-50 cursor-pointer flex flex-row gap-x-2 items-center justify-center p-1} ${
          currentPage === PAGES.PROJECTS && 'bg-gray-100'
        }`}
        onClick={() => handleGoToPage(PAGES.PROJECTS)}
      >
        <FolderGit2
          className={`mb-0.5 transition-colors ${
            currentPage === PAGES.PROJECTS && 'text-secondary-500'
          }`}
        />
        <p className="text-md leading-0 -mb-0.5 sm:block hidden">Projects</p>
      </Button>
    </div>
  );
};

export default AppBar;
