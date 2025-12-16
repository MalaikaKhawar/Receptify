"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For individual testing",
    features: [
      "1 AI Agent",
      "50 Calls/month",
      "Basic Support",
      "Standard Voice",
    ],
    notIncluded: ["Custom Knowledge Base", "API Access", "Analytics"],
    buttonText: "Start Free Trial",
    popular: false,
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    description: "For small businesses",
    features: [
      "3 AI Agents",
      "500 Calls/month",
      "Priority Support",
      "Custom Knowledge Base",
      "Premium Neural Voices",
    ],
    notIncluded: ["API Access", "White Labelling"],
    buttonText: "Upgrade to Pro",
    popular: true,
    gradient: "from-cyan-500/20 to-teal-500/5",
    border: "border-cyan-500/50",
  },
  {
    name: "Premium",
    price: "$100",
    period: "/month",
    description: "For scaling enterprises",
    features: [
      "Unlimited AI Agents",
      "Unlimited Calls",
      "24/7 Dedicated Support",
      "Custom Knowledge Base",
      "API Access",
      "White Labelling",
      "Analytics Dashboard",
    ],
    notIncluded: [],
    buttonText: "Get Premium",
    popular: false,
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl machina font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Start free, upgrade when you need more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border ${plan.border} p-8 bg-gradient-to-br ${plan.gradient} backdrop-blur-sm flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">
                  {plan.period}
                </span>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center text-muted-foreground/60"
                  >
                    <X className="h-5 w-5 mr-3 flex-shrink-0 text-red-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/signup"
                className={`w-full inline-flex h-11 items-center justify-center rounded-md px-8 text-[16px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
                  plan.popular
                    ? "bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/20"
                    : "bg-white text-black hover:bg-white/80 shadow-lg shadow-gray-500/20"
                }`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
