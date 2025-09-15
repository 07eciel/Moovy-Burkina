import { ReactNode } from "react";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
}

export default function MainLayout({ 
  children, 
  title, 
  showSearch, 
  showNotifications 
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        title={title} 
        showSearch={showSearch} 
        showNotifications={showNotifications} 
      />
      
      <main className="pt-20 pb-20 px-4">
        {children}
      </main>
      
      <MobileNavigation />
    </div>
  );
}