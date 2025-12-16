"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const cardThemes = [
  {
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    primary: "bg-blue-500",
    text: "text-blue-500",
  },
  {
    gradient: "from-cyan-500/20 to-teal-500/5",
    border: "border-cyan-500/50",
    primary: "bg-cyan-500",
    text: "text-cyan-500",
  },
  {
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    primary: "bg-purple-500",
    text: "text-purple-500",
  },
  {
    gradient: "from-orange-500/20 to-red-500/5",
    border: "border-orange-500/20",
    primary: "bg-orange-500",
    text: "text-orange-500",
  },
  {
    gradient: "from-green-500/20 to-emerald-500/5",
    border: "border-green-500/20",
    primary: "bg-green-500",
    text: "text-green-500",
  },
  {
    gradient: "from-pink-500/20 to-rose-500/5",
    border: "border-pink-500/20",
    primary: "bg-pink-500",
    text: "text-pink-500",
  },
];

export function AuthLayout({ children }) {
  const { view, setView, activeTheme, setActiveTheme } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set random theme if not set
    if (!activeTheme) {
      const randomTheme =
        cardThemes[Math.floor(Math.random() * cardThemes.length)];
      setActiveTheme(randomTheme);
    }
  }, [activeTheme, setActiveTheme]);

  if (!mounted || !activeTheme) return null;

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-gradient-to-br ${activeTheme.gradient}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Info */}
        <div className="hidden lg:flex flex-col space-y-6 text-foreground/80 p-8">
          <div className="space-y-2">
            <h1
              className={`text-4xl font-bold tracking-tighter machina text-transparent bg-clip-text bg-gradient-to-r ${activeTheme.primary}`}
            >
              Receptify.
            </h1>
            <p className="text-xl font-medium">Your AI-Powered Receptionist</p>
          </div>

          <div className="space-y-4">
            <FeatureItem
              title="Multi-Tenant Agents"
              desc="Manage multiple businesses from one platform."
            />
            <FeatureItem
              title="Voice AI"
              desc="Human-like conversations in English & Urdu."
            />
            <FeatureItem
              title="Smart Booking"
              desc="Automate reservations, appointments, and orders."
            />
          </div>

          <div
            className={`mt-8 p-6 rounded-2xl border ${activeTheme.border} bg-background/50 backdrop-blur-sm`}
          >
            <p className="italic text-sm">
              "Handling calls for universities, restaurants, and salons has
              never been easier."
            </p>
          </div>
        </div>

        {/* Right Side - Auth Card */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-3xl border ${activeTheme.border} bg-background/80 backdrop-blur-md shadow-2xl overflow-hidden`}
          >
            {/* Header */}
            <div className="p-6 border-b border-border/50 flex justify-between items-center">
              <div className="flex space-x-1 bg-secondary/50 p-1 rounded-lg">
                <button
                  onClick={() => setView("login")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${
                    view === "login"
                      ? `${activeTheme.primary} text-white shadow-md`
                      : "hover:bg-background/50 text-muted-foreground"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setView("signup")}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${
                    view === "signup"
                      ? `${activeTheme.primary} text-white shadow-md`
                      : "hover:bg-background/50 text-muted-foreground"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full cursor-pointer"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">{children}</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ title, desc }) {
  return (
    <div className="flex items-start">
      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60" />
      <div>
        <h3 className="font-semibold text-foreground/90">{title}</h3>
        <p className="text-sm text-foreground/60">{desc}</p>
      </div>
    </div>
  );
}
