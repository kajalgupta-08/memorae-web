import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const plans = [
    {
      name: "Pro",
      price: "2.99",
      originalPrice: "4.99",
      period: "per month",
      badge: "5 MONTHS FREE",
      badgeColor: "bg-green-500",
      features: [
        "Unlimited reminders",
        "Voice notes to tasks",
        "Calendar integration",
        "Smart notifications",
      ],
      cta: "Try for Free →",
      highlight: false,
      buttonColor: "bg-primary hover:bg-primary/90",
    },
    {
      name: "Supernova",
      price: "8.99",
      originalPrice: "14.99",
      period: "per month",
      badge: "MOST POPULAR",
      badgeColor: "bg-secondary",
      features: [
        "Everything in Pro",
        "Priority support",
        "Advanced AI features",
        "Team collaboration",
        "Custom integrations",
      ],
      cta: "Try for Free →",
      highlight: true,
      buttonColor: "bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90",
    },
    {
      name: "Lifetime",
      price: "199.00",
      originalPrice: null,
      period: "",
      badge: "ONE-TIME PAYMENT",
      badgeColor: "bg-yellow-500",
      features: [
        "Everything in Supernova",
        "Lifetime access",
        "No recurring fees",
        "Future updates included",
        "VIP support",
      ],
      cta: "Activate Now →",
      highlight: false,
      buttonColor: "bg-accent hover:bg-accent/90",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Your chaos, your plan
            </h2>
            <p className="text-xl text-white/80">
              Choose how you want Memorae to help you don't lose your head.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlan(index)}
                className={`rounded-3xl p-8 backdrop-blur-sm transition-all hover:scale-105 animate-fade-up cursor-pointer ${
                  selectedPlan === index
                    ? "bg-white/20 border-2 border-white shadow-2xl ring-4 ring-white/30"
                    : plan.highlight
                    ? "bg-secondary/20 border-2 border-secondary shadow-2xl shadow-secondary/20 md:-mt-8 hover:shadow-secondary/40"
                    : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <span className={`${plan.badgeColor} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                    {plan.badge}
                  </span>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">{plan.price} $</span>
                    {plan.originalPrice && (
                      <span className="text-2xl text-white/50 line-through">{plan.originalPrice} $</span>
                    )}
                  </div>
                  <p className="text-white/70 mt-2">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`w-full ${plan.buttonColor} text-white rounded-full text-lg py-6 hover:scale-110 hover:shadow-2xl transition-all group`}
                >
                  {selectedPlan === index ? "Selected ✓" : plan.cta}
                  {selectedPlan !== index && <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
    </section>
  );
};

export default Pricing;
