import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Upload,
  Star,
  Camera,
  Video,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  XCircle,
  Home,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

const userStats = {
  points: 1250,
  approvedReviews: 24,
  pendingReviews: 3,
  rejectedReviews: 1,
  totalEarnings: 50,
  approvalRate: 95,
};

const recentReviews = [
  {
    id: 1,
    restaurant: "Café Central",
    status: "approved",
    points: 50,
    date: "2024-01-15",
  },
  {
    id: 2,
    restaurant: "Bistro du Coin",
    status: "pending",
    points: 75,
    date: "2024-01-14",
  },
  {
    id: 3,
    restaurant: "Restaurant Le Palais",
    status: "approved",
    points: 100,
    date: "2024-01-13",
  },
  {
    id: 4,
    restaurant: "Pizza Express",
    status: "rejected",
    points: 0,
    date: "2024-01-12",
  },
];

export default function EClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    C
                  </span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  ClientIn
                </span>
              </Link>
              <Badge className="ml-2 bg-primary/10 text-primary border-primary/20">
                E-Client
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Accueil
                </Link>
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>JE</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Espace E-Client
          </h1>
          <p className="text-muted-foreground">
            Partagez vos expériences et gagnez des récompenses
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {userStats.points}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Points disponibles
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {userStats.approvedReviews}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Avis validés
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {userStats.pendingReviews}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    En attente
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Wallet className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    €{userStats.totalEarnings}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Gains totaux
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Review Form */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="new-review" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="new-review">Nouvel avis</TabsTrigger>
                <TabsTrigger value="my-reviews">Mes avis</TabsTrigger>
              </TabsList>

              <TabsContent value="new-review" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Partager votre expérience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="restaurant">Nom du restaurant</Label>
                      <Input
                        id="restaurant"
                        placeholder="Ex: Restaurant Le Palais"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Note globale</Label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="review">Votre avis</Label>
                      <Textarea
                        id="review"
                        placeholder="Décrivez votre expérience en détail..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-4">
                      <Label>Médias (photos/vidéos)</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
                          <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                            <Camera className="h-8 w-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Ajouter des photos
                            </span>
                          </CardContent>
                        </Card>
                        <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
                          <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                            <Video className="h-8 w-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Ajouter des vidéos
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Publier l'avis
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="my-reviews" className="space-y-4">
                {recentReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{review.restaurant}</h3>
                        <Badge
                          variant={
                            review.status === "approved"
                              ? "default"
                              : review.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {review.status === "approved"
                            ? "Validé"
                            : review.status === "pending"
                              ? "En attente"
                              : "Rejeté"}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{review.date}</span>
                        <span className="font-medium">
                          {review.points > 0
                            ? `+${review.points} points`
                            : "Aucun point"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Stats & Conversion */}
          <div className="space-y-6">
            {/* Performance Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Taux d'approbation
                  </span>
                  <span className="font-semibold text-primary">
                    {userStats.approvalRate}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avis ce mois</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Moyenne des notes
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">4.6</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conversion Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5" />
                  <span>Conversion</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {userStats.points}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Points disponibles
                  </div>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  1000 points = €40
                </div>
                <Button className="w-full" disabled={userStats.points < 1000}>
                  Convertir en argent
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Minimum 1000 points requis pour la conversion
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Récompenses</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Client Expert</div>
                    <div className="text-xs text-muted-foreground">
                      20+ avis validés
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg opacity-50">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Influenceur</div>
                    <div className="text-xs text-muted-foreground">
                      50+ avis validés
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
