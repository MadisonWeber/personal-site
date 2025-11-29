import { Button } from '../ui/button';
import { Github } from 'lucide-react';

const GithubLink = () => (
  <a
    href="https://github.com/MadisonWeber"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full"
  >
    <Button className="cursor-pointer rounded-full bg-white hover:bg-green-50 transition duration-200 shadow-md border-black text-black font-medium h-10 w-10">
      <Github className="text-green-600" />
    </Button>
  </a>
);

export default GithubLink;
