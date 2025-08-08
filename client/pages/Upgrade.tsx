import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Crown,
  Check,
  X,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Clock,
  Star,
  Zap,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Up to 5 employees",
      "Basic feedback collection",
      "Simple analytics",
      "Email support",
      "Standard NFC cards",
    ],
    limitations: [
      "Limited to 50 feedbacks/month",
      "Basic dashboard only",
      "No advanced analytics",
      "No priority support",
      "No custom branding",
    ],
    buttonText: "Current Plan",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    id: "pro",
    name: "PRO",
    price: 29,
    period: "month",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited employees",
      "Advanced feedback analytics",
      "Real-time performance metrics",
      "Priority support",
      "Custom NFC card design",
      "Advanced reporting",
      "Team management tools",
      "API access",
      "Custom branding",
      "Multiple locations",
    ],
    limitations: [],
    buttonText: "Upgrade to PRO",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 99,
    period: "month",
    description: "For large organizations",
    features: [
      "Everything in PRO",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security features",
      "SLA guarantee",
      "On-premise deployment",
      "Custom training",
      "24/7 phone support",
    ],
    limitations: [],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

const currentPlan = "free"; // This would come from user data

export default function Upgrade() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const getPrice = (plan: (typeof plans)[0]) => {
    if (plan.price === 0) return "Free";
    const price = billingCycle === "yearly" ? plan.price * 10 : plan.price; // 2 months free on yearly
    return billingCycle === "yearly" ? `$${price}/year` : `$${price}/month`;
  };

  const getSavings = (plan: (typeof plans)[0]) => {
    if (plan.price === 0 || billingCycle === "monthly") return null;
    return "Save 2 months";
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <div className="ml-20 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-card backdrop-blur-xl border-b border-border sticky top-0 z-40">
          <div className="flex items-center justify-between h-20 px-8">
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Upgrade Plan
                </h1>
                <p className="text-sm text-muted-foreground">
                  Choose the perfect plan for your business
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Current: {plans.find((p) => p.id === currentPlan)?.name}
              </Badge>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Crown className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold text-foreground">
                  Unlock Premium Features
                </h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Supercharge your customer service with advanced analytics,
                unlimited employees, and premium support that scales with your
                business.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-muted p-1 rounded-lg flex">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    billingCycle === "monthly"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                    billingCycle === "yearly"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Yearly
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs">
                    Save 17%
                  </Badge>
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`border-0 shadow-lg bg-card backdrop-blur-xl relative ${
                    plan.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-6">
                    <div className="flex items-center justify-center mb-4">
                      {plan.id === "free" && (
                        <Users className="h-8 w-8 text-muted-foreground" />
                      )}
                      {plan.id === "pro" && (
                        <Crown className="h-8 w-8 text-primary" />
                      )}
                      {plan.id === "enterprise" && (
                        <Shield className="h-8 w-8 text-purple-500" />
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <p className="text-muted-foreground">{plan.description}</p>
                    <div className="mt-4">
                      <div className="text-4xl font-bold text-foreground">
                        {getPrice(plan)}
                      </div>
                      {getSavings(plan) && (
                        <div className="text-sm text-primary font-medium">
                          {getSavings(plan)}
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">
                        Features included:
                      </h4>
                      {plan.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Limitations */}
                    {plan.limitations.length > 0 && (
                      <>
                        <Separator />
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm text-muted-foreground">
                            Limitations:
                          </h4>
                          {plan.limitations.map((limitation, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {limitation}
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    <Button
                      variant={plan.buttonVariant}
                      className="w-full mt-6"
                      disabled={plan.id === currentPlan}
                    >
                      {plan.id === currentPlan
                        ? "Current Plan"
                        : plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features Comparison */}
            <Card className="border-0 shadow-lg bg-card backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Feature Comparison
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  See what's included in each plan
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4">Features</th>
                        <th className="text-center p-4">Free</th>
                        <th className="text-center p-4">PRO</th>
                        <th className="text-center p-4">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Employee Limit</td>
                        <td className="text-center p-4">5</td>
                        <td className="text-center p-4">Unlimited</td>
                        <td className="text-center p-4">Unlimited</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Monthly Feedbacks</td>
                        <td className="text-center p-4">50</td>
                        <td className="text-center p-4">Unlimited</td>
                        <td className="text-center p-4">Unlimited</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Advanced Analytics</td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-muted-foreground mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Priority Support</td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-muted-foreground mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Custom Branding</td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-muted-foreground mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">API Access</td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-muted-foreground mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Dedicated Support</td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-muted-foreground mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-muted-foreground mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Check className="h-4 w-4 text-primary mx-auto" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help you choose the right plan
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline">
                  <CreditCard className="h-4 w-4 mr-2" />
                  View Billing Details
                </Button>
                <Button asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
