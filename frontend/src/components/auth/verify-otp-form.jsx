"use client";

import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, ArrowRight, ArrowLeft } from "lucide-react";
import * as React from "react";

export function VerifyOtpForm() {
  const { activeTheme, setView } = useAuthStore();
  const [otp, setOtp] = React.useState("");

  if (!activeTheme) return null;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-bold tracking-tight">Verify OTP</h2>
        <p className="text-muted-foreground">
          Enter the 6-digit code sent to your email.
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          // Simulate verification
          alert("Verified!");
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="otp">One-Time Password</Label>
          <div className="relative">
            <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/70" />
            <Input
              id="otp"
              placeholder="Enter 6-digit code"
              className="pl-10 tracking-widest"
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className={`w-full ${activeTheme.primary} hover:opacity-90 transition-opacity text-white`}
        >
          Verify
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>

      <Button
        variant="ghost"
        className="w-full"
        onClick={() => setView("forgot-password")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Email
      </Button>
    </div>
  );
}
