"use client";

import { motion } from "framer-motion";

const steps = [
  {
    order: 1,
    title: "Define What You Want",
    description:
      "Tell us about your business, upload documents and knowledge base.",
  },
  {
    order: 2,
    title: "AI Gets Intelligence",
    description:
      "Our system analyzes your data to create a custom AI assistant.",
  },
  {
    order: 3,
    title: "Connect Your Number",
    description: "Link your Twilio number or buy one through our dashboard.",
  },
  {
    order: 4,
    title: "Get Your Receptionist",
    description: "Your AI receptionist is live, handling calls 24/7.",
  },
];

const cardThemes = [
  {
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500",
    shadow: "shadow-blue-500/20",
  },
  {
    gradient: "from-cyan-500/20 to-teal-500/5",
    border: "border-cyan-500/50",
    iconBg: "bg-cyan-500",
    shadow: "shadow-cyan-500/20",
  },
  {
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500",
    shadow: "shadow-purple-500/20",
  },
  {
    gradient: "from-orange-500/20 to-red-500/5",
    border: "border-orange-500/20",
    iconBg: "bg-orange-500",
    shadow: "shadow-orange-500/20",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl machina font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            How Receptify Works
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Get started in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center text-center relative z-10 p-6 rounded-2xl border ${theme.border} bg-gradient-to-br ${theme.gradient} backdrop-blur-sm shadow-sm`}
              >
                <div
                  className={`w-16 h-16 rounded-full ${theme.iconBg} text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg ${theme.shadow}`}
                >
                  {step.order}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-border -z-10" />
        </div>
      </div>
    </section>
  );
}
