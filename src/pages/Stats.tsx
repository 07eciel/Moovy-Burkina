import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  MapPin,
  Clock,
  Leaf,
  Award,
  Target,
  Zap,
  Route
} from "lucide-react";

const monthlyStats = [
  { month: "Oct", trips: 28, amount: 5600 },
  { month: "Nov", trips: 42, amount: 8400 },
  { month: "Déc", trips: 35, amount: 7000 },
];

const achievements = [
  { name: "Explorateur", description: "25 trajets effectués", icon: "🗺️", unlocked: true },
  { name: "Éco-warrior", description: "50kg CO₂ économisés", icon: "🌱", unlocked: true },
  { name: "Régulier", description: "100 trajets au total", icon: "🚌", unlocked: false },
  { name: "Premium", description: "Abonné depuis 3 mois", icon: "⭐", unlocked: true },
];

const favoriteRoutes = [
  { name: "Maison → Université", count: 45, line: "L2", time: "25 min" },
  { name: "Centre-ville → Travail", count: 32, line: "L1", time: "15 min" },
  { name: "Gare → Marché", count: 18, line: "L3", time: "20 min" },
];

export default function Stats() {
  const totalTrips = 127;
  const totalSaved = 15400;
  const co2Saved = 42;
  const avgRating = 4.8;

  return (
    <MainLayout title="Mes Statistiques">
      <div className="space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-4 text-center">
              <Zap size={24} className="mx-auto mb-2" />
              <p className="text-2xl font-bold">{totalTrips}</p>
              <p className="text-sm text-white/80">Trajets totaux</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-secondary text-white">
            <CardContent className="p-4 text-center">
              <Leaf size={24} className="mx-auto mb-2" />
              <p className="text-2xl font-bold">{co2Saved} kg</p>
              <p className="text-sm text-white/80">CO₂ évité</p>
            </CardContent>
          </Card>
          
          <Card className="bg-success text-white">
            <CardContent className="p-4 text-center">
              <TrendingUp size={24} className="mx-auto mb-2" />
              <p className="text-2xl font-bold">{totalSaved.toLocaleString()}</p>
              <p className="text-sm text-white/80">FCFA économisés</p>
            </CardContent>
          </Card>
          
          <Card className="bg-warning text-white">
            <CardContent className="p-4 text-center">
              <Award size={24} className="mx-auto mb-2" />
              <p className="text-2xl font-bold">{avgRating}★</p>
              <p className="text-sm text-white/80">Note moyenne</p>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 size={20} />
              Évolution mensuelle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyStats.map((stat, index) => (
                <div key={stat.month} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{stat.month} 2024</p>
                      <p className="text-sm text-muted-foreground">{stat.trips} trajets</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold">{stat.amount.toLocaleString()} FCFA</p>
                    <div className="w-20 h-2 bg-muted rounded-full mt-1">
                      <div 
                        className="h-full bg-gradient-primary rounded-full"
                        style={{ width: `${(stat.trips / 50) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Favorite Routes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route size={20} />
              Mes trajets favoris
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {favoriteRoutes.map((route, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <span className="text-secondary font-bold text-sm">{route.line}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{route.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {route.time}
                        <span className="mx-1">•</span>
                        {route.count} fois
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-16 h-2 bg-muted rounded-full">
                    <div 
                      className="h-full bg-gradient-secondary rounded-full"
                      style={{ width: `${(route.count / 50) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card className="bg-gradient-secondary text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf size={20} />
              Impact environnemental
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold">127</p>
                <p className="text-sm text-white/80">Trajets éco-responsables</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">42 kg</p>
                <p className="text-sm text-white/80">CO₂ non émis</p>
              </div>
            </div>
            
            <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
              <p className="text-sm text-white/90 mb-2">
                🌱 Équivalent à planter <strong>3 arbres</strong> cette année !
              </p>
              <p className="text-xs text-white/80">
                Continuez ainsi pour un impact encore plus positif sur l'environnement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award size={20} />
              Mes récompenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg border-2 text-center ${
                    achievement.unlocked 
                      ? 'bg-primary/5 border-primary/20' 
                      : 'bg-muted/50 border-muted'
                  }`}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <p className={`font-medium text-sm ${
                    achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {achievement.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {achievement.description}
                  </p>
                  {achievement.unlocked && (
                    <Badge variant="default" className="mt-2 bg-success">
                      Débloqué
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target size={20} />
              Objectifs du mois
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">50 trajets ce mois</p>
                  <p className="text-sm text-muted-foreground">35/50</p>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div className="h-full bg-gradient-primary rounded-full" style={{ width: '70%' }} />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">15kg CO₂ économisés</p>
                  <p className="text-sm text-muted-foreground">12/15</p>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div className="h-full bg-gradient-secondary rounded-full" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-4 bg-gradient-primary">
              Voir tous les défis
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}