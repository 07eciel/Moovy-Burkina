import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  onMenuClick?: () => void;
}

export default function Header({ 
  title = "Moovy", 
  showSearch = true, 
  showNotifications = true,
  onMenuClick 
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-hero text-white z-40 shadow-medium">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {onMenuClick && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="text-white hover:bg-white/20"
            >
              <Menu size={20} />
            </Button>
          )}
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm text-white/80">Transport urbain moderne</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {showSearch && (
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <Search size={20} />
            </Button>
          )}
          
          {showNotifications && (
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 relative"
            >
              <Bell size={20} />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center"
              >
                3
              </Badge>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}