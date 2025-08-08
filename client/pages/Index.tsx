import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Users,
  BarChart3,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Award,
  Link as LinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

import ResizeObserver from 'resize-observer-polyfill';

if (typeof window !== 'undefined' && !window.ResizeObserver) {
  // @ts-ignore
  window.ResizeObserver = ResizeObserver;
}


export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  C
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">
                ClientIn
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                to="#solutions"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
              </Link>
              <Link
                to="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/e-client"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                E-Client
              </Link>
              <Button asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Révolutionnez votre service client
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Transformez chaque interaction en{" "}
              <span className="text-primary">opportunité</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              ClientIn révolutionne la qualité du service avec nos cartes NFC
              personnalisées. Permettez à vos clients de donner leur avis
              instantanément et boostez la performance de vos équipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/signup">
                  <Zap className="mr-2 h-5 w-5" />
                  Démarrer maintenant
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Voir la démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une solution simple et efficace en 3 étapes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <LinkIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                1. Carte NFC personnalisée
              </h3>
              <p className="text-muted-foreground">
                Chaque employé reçoit une carte NFC unique reliée à son profil
                professionnel
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Scan instantané</h3>
              <p className="text-muted-foreground">
                Les clients scannent avec leur smartphone (aucune app
                nécessaire) et laissent un avis
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                3. Analyse en temps réel
              </h3>
              <p className="text-muted-foreground">
                Recevez instantanément les retours sur votre plateforme de
                gestion centralisée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fonctionnalités avancées
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour optimiser votre service client
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gestion d'équipe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Profils complets avec informations RH, performance et
                  formation pour un suivi optimal
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Feedback client</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notes et commentaires instantanés avec anonymat optionnel pour
                  une transparence totale
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Analytics avancés
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tableaux de bord et rapports détaillés pour analyser les
                  performances en temps réel
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Système de badges
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Récompenses et distinctions pour motiver vos équipes et
                  reconnaître l'excellence
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Sécurité & Privacy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Protection des données et conformité RGPD garanties pour une
                  sécurité maximale
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Temps réel</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notifications instantanées et mises à jour en direct pour une
                  réactivité optimale
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* E-Client Section */}
      <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                E-Client Platform
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Plateforme dédiée aux jeunes entrepreneurs
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                E-Client offre aux jeunes entrepreneurs un espace exclusif pour
                partager leurs expériences dans les restaurants et commerces,
                avec un système de récompenses financières.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span className="text-muted-foreground">
                    Carte NFC personnalisée pour chaque membre
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span className="text-muted-foreground">
                    Avis avec photos et vidéos
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span className="text-muted-foreground">
                    Système de points convertibles en argent
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span className="text-muted-foreground">
                    Interface simple et intuitive
                  </span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/e-client">Découvrir E-Client</Link>
              </Button>
            </div>
            <div className="lg:pl-12">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-lg p-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        €50
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Revenus moyens/mois
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Avis validés
                      </span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Points disponibles
                      </span>
                      <span className="font-semibold">1,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Taux d'approbation
                      </span>
                      <span className="font-semibold text-primary">95%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à révolutionner votre service client ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez les entreprises qui font confiance à ClientIn pour
            améliorer leur satisfaction client et booster leurs équipes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/signup">Commencer gratuitement</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8"
            >
              <Link to="/contact">Contacter un expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    C
                  </span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  ClientIn
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Révolutionnez votre service client avec nos solutions NFC
                innovantes.
              </p>
              <p className="text-sm text-muted-foreground">
                CEO & Founder: AMAM ABIR
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cartes NFC
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/e-client"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    E-Client
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Presse
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Support client
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Status
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2025 ClientIn. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
