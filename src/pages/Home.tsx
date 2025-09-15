import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import SearchInput from "@/components/ui/search-input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  MapPin, 
  Route, 
  Zap, 
  Users, 
  ArrowRight,
  Bus,
  Navigation
} from "lucide-react";

const quickActions = [
  { name: "Horaires", icon: Clock, color: "bg-primary", route: "/schedules" },
  { name: "Itinéraires", icon: Route, color: "bg-secondary", route: "/routes" },
  { name: "Carte", icon: MapPin, color: "bg-accent", route: "/map" },
  { name: "Tickets", icon: Zap, color: "bg-success", route: "/payments" },
];

const busLines = [
  { 
    id: "L1", 
    name: "Centre-ville ↔ Ouaga 2000",
    color: "bg-primary",
    nextBus: "5 min",
    frequency: "15 min",
    price: "200 FCFA"
  },
  { 
    id: "L2", 
    name: "Gare ↔ Université",
    color: "bg-secondary", 
    nextBus: "12 min",
    frequency: "20 min",
    price: "250 FCFA"
  },
  { 
    id: "L3", 
    name: "Wemtenga ↔ Secteur 30",
    color: "bg-accent",
    nextBus: "8 min", 
    frequency: "18 min",
    price: "200 FCFA"
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // TODO: Implement search logic
  };

  return (
    <MainLayout title="Moovy">
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-hero rounded-2xl p-6 text-white shadow-strong">
          <div className="flex items-center gap-3 mb-4">
            <Bus size={32} className="text-white" />
            <div>
              <h2 className="text-2xl font-bold">Bienvenue sur Moovy!</h2>
              <p className="text-white/90">Votre transport urbain connecté</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <p className="text-sm text-white/80">Lignes actives</p>
              <p className="text-xl font-bold">12</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <p className="text-sm text-white/80">Utilisateurs</p>
              <p className="text-xl font-bold">2.5k+</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchInput 
          placeholder="D'où à où voulez-vous aller ?"
          onSearch={handleSearch}
        />

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Actions rapides</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card 
                  key={action.name} 
                  className="cursor-pointer hover:shadow-medium transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 text-center">
                    <div className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <p className="font-medium">{action.name}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bus Lines */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Lignes populaires</h3>
            <Button variant="ghost" size="sm">
              Voir tout <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {busLines.map((line) => (
              <Card 
                key={line.id} 
                className="cursor-pointer hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`${line.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">{line.id}</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{line.name}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            Toutes les {line.frequency}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={12} />
                            {line.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">
                        {line.nextBus}
                      </Badge>
                      <p className="text-xs text-muted-foreground">Prochain bus</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Live Info */}
        <Card className="bg-gradient-secondary text-white">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Navigation size={20} />
              Info trafic en temps réel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white/90 mb-3">
              🚦 Embouteillages signalés sur l'axe Avenue Kwame Nkrumah
            </p>
            <p className="text-sm text-white/90">
              ✅ Trafic fluide sur toutes les autres lignes
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}