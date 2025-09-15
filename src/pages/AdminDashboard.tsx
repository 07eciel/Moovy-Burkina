import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Bus, 
  DollarSign, 
  TrendingUp,
  Settings,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  UserPlus,
  Plus,
  Search,
  Filter,
  Download
} from "lucide-react";

const stats = [
  { title: "Utilisateurs actifs", value: "2,547", change: "+12%", icon: Users, color: "text-primary" },
  { title: "Lignes actives", value: "12", change: "+2", icon: Bus, color: "text-secondary" },
  { title: "Revenus (mois)", value: "1.2M FCFA", change: "+8%", icon: DollarSign, color: "text-success" },
  { title: "Trajets (jour)", value: "847", change: "+15%", icon: TrendingUp, color: "text-warning" },
];

const recentUsers = [
  { id: 1, name: "Kofi Ouédraogo", email: "kofi@email.com", status: "active", joinDate: "15 Nov", trips: 127 },
  { id: 2, name: "Aminata Traoré", email: "aminata@email.com", status: "active", joinDate: "14 Nov", trips: 89 },
  { id: 3, name: "Ibrahim Sawadogo", email: "ibrahim@email.com", status: "suspended", joinDate: "13 Nov", trips: 45 },
  { id: 4, name: "Fatou Compaoré", email: "fatou@email.com", status: "active", joinDate: "12 Nov", trips: 203 },
];

const busLines = [
  { 
    id: "L1", 
    name: "Centre-ville ↔ Ouaga 2000",
    status: "active",
    lastUpdate: "Il y a 5 min",
    dailyTrips: 156,
    revenue: "31.2k FCFA"
  },
  { 
    id: "L2", 
    name: "Gare ↔ Université",
    status: "maintenance",
    lastUpdate: "Il y a 2 h",
    dailyTrips: 89,
    revenue: "22.3k FCFA"
  },
  { 
    id: "L3", 
    name: "Wemtenga ↔ Secteur 30",
    status: "active",
    lastUpdate: "Il y a 1 min",
    dailyTrips: 134,
    revenue: "26.8k FCFA"
  },
];

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-gradient-hero text-white shadow-strong">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">Dashboard Administrateur</h1>
              <p className="text-white/80">Gestion de la plateforme Moovy</p>
            </div>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              <Settings size={18} className="mr-2" />
              Paramètres
            </Button>
          </div>
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <Icon size={20} className="text-white" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-medium transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UserPlus size={24} className="text-white" />
              </div>
              <p className="font-medium">Ajouter utilisateur</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-medium transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Plus size={24} className="text-white" />
              </div>
              <p className="font-medium">Nouvelle ligne</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-medium transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="bg-accent w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Download size={24} className="text-white" />
              </div>
              <p className="font-medium">Exporter données</p>
            </CardContent>
          </Card>
        </div>

        {/* Users Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users size={20} />
                Gestion des utilisateurs
              </CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher un utilisateur..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-64"
                  />
                </div>
                <Button size="sm" variant="outline">
                  <Filter size={16} />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-medium text-sm">{user.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{user.trips} trajets</p>
                      <p className="text-xs text-muted-foreground">Inscrit le {user.joinDate}</p>
                    </div>
                    
                    <Badge 
                      variant={user.status === 'active' ? 'default' : 'destructive'}
                      className={user.status === 'active' ? 'bg-success' : ''}
                    >
                      {user.status === 'active' ? 'Actif' : 'Suspendu'}
                    </Badge>
                    
                    <Button size="sm" variant="outline">
                      Gérer
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bus Lines Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bus size={20} />
              Gestion des lignes de bus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {busLines.map((line) => (
                <div key={line.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">{line.id}</span>
                    </div>
                    <div>
                      <p className="font-medium">{line.name}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {line.lastUpdate}
                        </span>
                        <span>{line.dailyTrips} trajets/jour</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">{line.revenue}</p>
                      <p className="text-xs text-muted-foreground">Revenus jour</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {line.status === 'active' ? (
                        <CheckCircle size={16} className="text-success" />
                      ) : (
                        <AlertTriangle size={16} className="text-warning" />
                      )}
                      <Badge 
                        variant={line.status === 'active' ? 'default' : 'secondary'}
                        className={line.status === 'active' ? 'bg-success' : 'bg-warning'}
                      >
                        {line.status === 'active' ? 'Actif' : 'Maintenance'}
                      </Badge>
                    </div>
                    
                    <Button size="sm" variant="outline">
                      Modifier
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card className="border-warning/50 bg-warning/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertTriangle size={20} />
              Alertes système
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                <AlertTriangle size={16} className="text-warning" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Ligne L2 en maintenance</p>
                  <p className="text-xs text-muted-foreground">Maintenance programmée jusqu'à 18h</p>
                </div>
                <Button size="sm" variant="outline">
                  Résoudre
                </Button>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <CheckCircle size={16} className="text-success" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Mise à jour système terminée</p>
                  <p className="text-xs text-muted-foreground">Version 2.1.0 déployée avec succès</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}