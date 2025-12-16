"use client";

import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";

export function ForgotPasswordForm() {
  const { activeTheme, setView } = useAuthStore();

  if (!activeTheme) return null;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-bold tracking-tight">Forgot Password</h2>
        <p className="text-muted-foreground">
          Enter your email address and we'll send you a 6-digit code to reset
          your password.
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          // Simulate API call
          setView("verify-otp");
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/70" />
            <Input
              id="email"
              placeholder="Enter registered email"
              className="pl-10"
              type="email"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className={`w-full ${activeTheme.primary} hover:opacity-90 transition-opacity text-white`}
        >
          Send Code
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>

      <Button
        variant="ghost"
        className="w-full"
        onClick={() => setView("login")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Login
      </Button>
    </div>
  );
}
