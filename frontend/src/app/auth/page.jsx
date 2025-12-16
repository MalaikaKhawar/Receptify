"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/components/auth/login-form";
import { SignupForm } from "@/components/auth/signup-form";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { VerifyOtpForm } from "@/components/auth/verify-otp-form";

function AuthContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { view, setView, currentStep, setStep } = useAuthStore();

  // Sync URL -> Store on Mount
  useEffect(() => {
    const ViewParam = searchParams.get("view");
    const StepParam = searchParams.get("step");

    if (ViewParam === "signup" || ViewParam === "login") {
      setView(ViewParam);
    }

    if (StepParam && !isNaN(StepParam)) {
      setStep(parseInt(StepParam));
    }
  }, []); // Run only on mount

  // Sync Store -> URL
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("view", view);
    if (view === "signup") {
      params.set("step", currentStep.toString());
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [view, currentStep, router]);

  const renderContent = () => {
    switch (view) {
      case "login":
        return <LoginForm />;
      case "signup":
        return <SignupForm />;
      case "forgot-password":
        return <ForgotPasswordForm />;
      case "verify-otp":
        return <VerifyOtpForm />;
      default:
        return <LoginForm />;
    }
  };

  return <AuthLayout>{renderContent()}</AuthLayout>;
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <AuthContent />
    </Suspense>
  );
}
