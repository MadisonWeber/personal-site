import { Button } from '../ui/button';
import { Github } from 'lucide-react';

const GithubLink = () => (
  <a
    href="https://github.com/MadisonWeber"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full"
  >
    <Button className="cursor-pointer rounded-full bg-white dark:bg-slate-800 hover:bg-green-50 transition duration-200 shadow-md border-black text-black font-medium h-10 w-10 hover:dark:bg-slate-700">
      <Github className="text-green-600" />
    </Button>
  </a>
);

export default GithubLink;
