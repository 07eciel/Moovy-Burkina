import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bus, MapPin, User, CreditCard, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Bus", href: "/", icon: Bus },
  { name: "Tourism", href: "/tourism", icon: MapPin },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Pay", href: "/payments", icon: CreditCard },
  { name: "Stats", href: "/stats", icon: BarChart3 },
];

export default function MobileNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2 px-4">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300",
                isActive 
                  ? "bg-gradient-primary text-primary-foreground shadow-medium" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon 
                size={20} 
                className={cn(
                  "mb-1 transition-transform duration-300",
                  isActive && "scale-110"
                )} 
              />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}