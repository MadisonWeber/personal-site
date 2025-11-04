import AppBar from "@/components/custom/AppBar";
import ContactMe from "@/components/custom/ContactMe";
import { Toaster } from "@/components/ui/sonner";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  handleGoToPage: (pageName: string) => void;
}

const BasicLayout = ({
  children,
  currentPage,
  handleGoToPage,
}: LayoutProps) => {
  return (
    <div className="min-h-screen max-h-screen overscroll-none w-full flex flex-col items-start font-sf-pro">
      <AppBar currentPage={currentPage} handleGoToPage={handleGoToPage} />
      <div className="flex-1 w-full overflow-y-auto scroll-snap-container">
        {children}
      </div>
      <ContactMe />
      <Toaster position="bottom-left" />
    </div>
  );
};

export default BasicLayout;
