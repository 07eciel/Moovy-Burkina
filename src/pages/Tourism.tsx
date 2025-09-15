import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import SearchInput from "@/components/ui/search-input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Camera, 
  Utensils, 
  GraduationCap,
  Building2,
  Coffee,
  Heart,
  Star,
  Clock,
  Navigation2
} from "lucide-react";

const categories = [
  { name: "Musées", icon: Camera, color: "bg-primary", count: 12 },
  { name: "Restaurants", icon: Utensils, color: "bg-secondary", count: 45 },
  { name: "Universités", icon: GraduationCap, color: "bg-accent", count: 8 },
  { name: "Services", icon: Building2, color: "bg-success", count: 28 },
];

const featuredPlaces = [
  {
    id: 1,
    name: "Musée National du Burkina Faso",
    category: "Musée",
    rating: 4.5,
    distance: "800m",
    busStop: "Arrêt Stade",
    image: "🏛️",
    description: "Découvrez la riche histoire et culture burkinabè",
    openHours: "9h - 17h",
    price: "Gratuit"
  },
  {
    id: 2,
    name: "Restaurant Le Verdoyant",
    category: "Restaurant",
    rating: 4.2,
    distance: "1.2km", 
    busStop: "Arrêt Centre-ville",
    image: "🍽️",
    description: "Cuisine locale et internationale de qualité",
    openHours: "11h - 23h",
    price: "2000-5000 FCFA"
  },
  {
    id: 3,
    name: "Université Ouaga I",
    category: "Université",
    rating: 4.0,
    distance: "3.5km",
    busStop: "Arrêt Université",
    image: "🎓",
    description: "Principal établissement d'enseignement supérieur",
    openHours: "7h - 19h",
    price: "Accès libre"
  },
];

export default function Tourism() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <MainLayout title="Tourisme & Services">
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-secondary rounded-2xl p-6 text-white shadow-strong">
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={32} className="text-white" />
            <div>
              <h2 className="text-2xl font-bold">Découvrez Ouagadougou</h2>
              <p className="text-white/90">Lieux touristiques et services</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-white/20 rounded-xl p-2 backdrop-blur-sm text-center">
              <p className="text-lg font-bold">150+</p>
              <p className="text-xs text-white/80">Lieux</p>
            </div>
            <div className="bg-white/20 rounded-xl p-2 backdrop-blur-sm text-center">
              <p className="text-lg font-bold">4.2★</p>
              <p className="text-xs text-white/80">Note moy.</p>
            </div>
            <div className="bg-white/20 rounded-xl p-2 backdrop-blur-sm text-center">
              <p className="text-lg font-bold">24/7</p>
              <p className="text-xs text-white/80">Support</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchInput 
          placeholder="Rechercher un lieu, restaurant, service..."
          onSearch={handleSearch}
        />

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Catégories</h3>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.name} 
                  className="cursor-pointer hover:shadow-medium transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 text-center">
                    <div className={`${category.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <p className="font-medium text-sm">{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.count} lieux</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Featured Places */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Lieux populaires</h3>
          
          <div className="space-y-4">
            {featuredPlaces.map((place) => (
              <Card 
                key={place.id} 
                className="cursor-pointer hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{place.image}</div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-sm">{place.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {place.category}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Star size={12} className="text-yellow-500 fill-current" />
                              <span className="text-xs text-muted-foreground">{place.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(place.id)}
                          className="p-1 h-8 w-8"
                        >
                          <Heart 
                            size={16} 
                            className={favorites.includes(place.id) ? "text-red-500 fill-current" : ""} 
                          />
                        </Button>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-3">
                        {place.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Navigation2 size={12} />
                            {place.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {place.openHours}
                          </span>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-medium text-primary">{place.price}</p>
                          <p className="text-muted-foreground">📍 {place.busStop}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Card */}
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin size={20} />
              Carte interactive
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Explorez tous les lieux sur notre carte interactive avec les arrêts de bus les plus proches.
            </p>
            <Button className="w-full bg-gradient-primary">
              Ouvrir la carte
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}