import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function SearchInput({ 
  placeholder = "Rechercher...", 
  onSearch,
  className 
}: SearchInputProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch?.(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.(""); 
  };

  return (
    <div className={cn("relative flex items-center", className)}>
      <div className="relative flex-1">
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="pl-10 pr-10 h-12 rounded-xl border-2 bg-card shadow-soft"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted"
          >
            <X size={14} />
          </Button>
        )}
      </div>
      
      <Button 
        onClick={handleSearch}
        className="ml-2 h-12 px-6 bg-gradient-primary hover:opacity-90 transition-opacity"
      >
        Chercher
      </Button>
    </div>
  );
}