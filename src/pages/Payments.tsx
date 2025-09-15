import { useState } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  CreditCard, 
  Smartphone, 
  Zap, 
  Clock, 
  CheckCircle,
  Plus,
  Wallet,
  Calendar,
  ArrowDownUp
} from "lucide-react";

const paymentMethods = [
  { 
    name: "Orange Money", 
    icon: "📱", 
    balance: "5.250 FCFA",
    status: "active",
    color: "bg-orange-500"
  },
  { 
    name: "Moov Money", 
    icon: "💳", 
    balance: "1.800 FCFA",
    status: "active",
    color: "bg-blue-500"
  },
  { 
    name: "Coris Money", 
    icon: "🏦", 
    balance: "750 FCFA",
    status: "inactive",
    color: "bg-green-500"
  },
];

const subscriptions = [
  {
    name: "Premium Mensuel",
    price: "2.500 FCFA",
    features: ["Trajets illimités", "Statistiques avancées", "Support prioritaire"],
    popular: true
  },
  {
    name: "Étudiant",
    price: "1.500 FCFA", 
    features: ["Trajets illimités", "Réduction -40%", "Accès campus"],
    popular: false
  },
  {
    name: "Hebdomadaire",
    price: "800 FCFA",
    features: ["50 trajets/semaine", "Statistiques de base"],
    popular: false
  },
];

const recentTransactions = [
  { id: 1, type: "purchase", description: "Ticket ligne L1", amount: "-200 FCFA", date: "Il y a 2h", status: "completed" },
  { id: 2, type: "recharge", description: "Recharge Orange Money", amount: "+5.000 FCFA", date: "Hier", status: "completed" },
  { id: 3, type: "subscription", description: "Abonnement Premium", amount: "-2.500 FCFA", date: "15 Nov", status: "completed" },
  { id: 4, type: "purchase", description: "Ticket ligne L3", amount: "-200 FCFA", date: "16 Nov", status: "pending" },
];

export default function Payments() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [rechargeAmount, setRechargeAmount] = useState("");

  return (
    <MainLayout title="Paiements & Tickets">
      <div className="space-y-6">
        {/* Balance Overview */}
        <Card className="bg-gradient-hero text-white">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Solde total</h2>
              <p className="text-4xl font-bold">7.800 FCFA</p>
              <p className="text-white/80 text-sm mt-1">Dernière recharge: Hier</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="secondary" 
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <Plus size={18} className="mr-2" />
                Recharger
              </Button>
              <Button 
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <ArrowDownUp size={18} className="mr-2" />
                Transférer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Mes moyens de paiement</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <Card 
                key={method.name}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedMethod === method.name ? 'ring-2 ring-primary shadow-medium' : 'hover:shadow-soft'
                }`}
                onClick={() => setSelectedMethod(method.name)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{method.icon}</div>
                      <div>
                        <p className="font-medium">{method.name}</p>
                        <p className="text-sm text-muted-foreground">Solde: {method.balance}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={method.status === 'active' ? 'default' : 'secondary'}
                        className={method.status === 'active' ? 'bg-success' : ''}
                      >
                        {method.status === 'active' ? 'Actif' : 'Inactif'}
                      </Badge>
                      {selectedMethod === method.name && (
                        <CheckCircle size={20} className="text-primary" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="border-dashed border-2 cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <Plus size={24} className="mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Ajouter un nouveau moyen de paiement</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Recharge */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet size={20} />
              Recharge rapide
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="amount">Montant à recharger</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0 FCFA"
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(e.target.value)}
                className="mt-2"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[1000, 2500, 5000].map((amount) => (
                <Button 
                  key={amount}
                  variant="outline" 
                  size="sm"
                  onClick={() => setRechargeAmount(amount.toString())}
                >
                  {amount.toLocaleString()} FCFA
                </Button>
              ))}
            </div>
            
            <Button className="w-full bg-gradient-primary">
              <Zap size={18} className="mr-2" />
              Recharger maintenant
            </Button>
          </CardContent>
        </Card>

        {/* Subscriptions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Abonnements</h3>
          <div className="space-y-3">
            {subscriptions.map((sub) => (
              <Card 
                key={sub.name}
                className={`cursor-pointer transition-all duration-300 hover:shadow-medium ${
                  sub.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{sub.name}</h4>
                        {sub.popular && (
                          <Badge className="bg-primary">Populaire</Badge>
                        )}
                      </div>
                      <p className="text-lg font-bold text-primary">{sub.price}</p>
                    </div>
                    <Button size="sm">
                      S'abonner
                    </Button>
                  </div>
                  
                  <div className="space-y-1">
                    {sub.features.map((feature, index) => (
                      <p key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle size={14} className="text-success" />
                        {feature}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Transactions récentes</h3>
          <div className="space-y-2">
            {recentTransactions.map((transaction) => (
              <Card key={transaction.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        transaction.type === 'purchase' ? 'bg-destructive/10' :
                        transaction.type === 'recharge' ? 'bg-success/10' : 'bg-primary/10'
                      }`}>
                        {transaction.type === 'purchase' && <CreditCard size={18} className="text-destructive" />}
                        {transaction.type === 'recharge' && <Plus size={18} className="text-success" />}
                        {transaction.type === 'subscription' && <Calendar size={18} className="text-primary" />}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.amount.startsWith('-') ? 'text-destructive' : 'text-success'
                      }`}>
                        {transaction.amount}
                      </p>
                      <Badge 
                        variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                        className={`text-xs ${transaction.status === 'completed' ? 'bg-success' : 'bg-warning'}`}
                      >
                        {transaction.status === 'completed' ? 'Terminé' : 'En cours'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}