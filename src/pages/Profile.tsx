import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Settings, 
  CreditCard, 
  Shield, 
  Bell, 
  HelpCircle,
  LogOut,
  Edit,
  Star,
  Gift,
  Zap,
  Leaf
} from "lucide-react";

const userStats = [
  { label: "Trajets", value: "127", icon: Zap, color: "text-primary" },
  { label: "Économisés", value: "15.4k FCFA", icon: Gift, color: "text-success" },
  { label: "CO₂ évité", value: "42 kg", icon: Leaf, color: "text-secondary" },
  { label: "Note", value: "4.8★", icon: Star, color: "text-yellow-500" },
];

const menuItems = [
  { name: "Mes informations", icon: User, href: "/profile/info" },
  { name: "Paramètres", icon: Settings, href: "/profile/settings" },
  { name: "Paiements & Cartes", icon: CreditCard, href: "/profile/payments" },
  { name: "Sécurité", icon: Shield, href: "/profile/security" },
  { name: "Notifications", icon: Bell, href: "/profile/notifications" },
  { name: "Aide & Support", icon: HelpCircle, href: "/profile/help" },
];

export default function Profile() {
  return (
    <MainLayout title="Mon Profil" showSearch={false}>
      <div className="space-y-6">
        {/* Profile Header */}
        <Card className="bg-gradient-hero text-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-16 w-16 border-2 border-white/30">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-white/20 text-white text-xl font-bold">
                  KO
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h2 className="text-xl font-bold">Kofi Ouédraogo</h2>
                <p className="text-white/80">kofi.ouedraogo@email.com</p>
                <p className="text-white/80">+226 70 12 34 56</p>
                
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Premium
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Étudiant
                  </Badge>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20"
              >
                <Edit size={18} />
              </Button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {userStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="bg-white/20 rounded-xl p-3 backdrop-blur-sm text-center"
                  >
                    <Icon size={20} className={`${stat.color} mx-auto mb-1`} />
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className="text-xs text-white/80">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="cursor-pointer hover:shadow-medium transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 text-center">
              <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CreditCard size={24} className="text-white" />
              </div>
              <p className="font-medium text-sm">Recharger compte</p>
              <p className="text-xs text-muted-foreground">Solde: 2.500 FCFA</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-medium transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 text-center">
              <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Gift size={24} className="text-white" />
              </div>
              <p className="font-medium text-sm">Mes récompenses</p>
              <p className="text-xs text-muted-foreground">1.240 points</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Mon compte</h3>
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={item.name}
                  className="cursor-pointer hover:shadow-soft transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-muted w-10 h-10 rounded-lg flex items-center justify-center">
                          <Icon size={18} className="text-muted-foreground" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Membership */}
        <Card className="bg-gradient-secondary text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star size={20} />
              Abonnement Premium
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white/90 mb-4">
              Profitez de trajets illimités, de statistiques détaillées et d'un support prioritaire.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold">2.500 FCFA/mois</p>
                <p className="text-xs text-white/80">Renouvelé le 15/12/2024</p>
              </div>
              <Button variant="secondary" size="sm">
                Gérer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card className="border-destructive/20">
          <CardContent className="p-4">
            <Button 
              variant="ghost" 
              className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut size={18} className="mr-2" />
              Se déconnecter
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}