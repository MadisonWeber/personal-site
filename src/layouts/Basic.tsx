import AppBar from "@/components/custom/AppBar";
import ContactMe from "@/components/custom/ContactMe";

interface LayoutProps {
  children: React.ReactNode;
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

const BasicLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen max-h-screen overscroll-none w-full flex flex-col items-start font-sf-pro">
      <AppBar />
      <div className="flex-1 w-full overflow-y-auto border scroll-snap-container">
        {children}
      </div>
      <ContactMe />
    </div>
  );
};

export default BasicLayout;
