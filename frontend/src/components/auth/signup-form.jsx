"use client";

import * as React from "react";

import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  User,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SignupForm() {
  const {
    currentStep,
    totalSteps,
    setStep,
    activeTheme,
    signupData,
    updateSignupData,
  } = useAuthStore();

  const [errors, setErrors] = React.useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!signupData.orgName)
      newErrors.orgName = "Organization Name is required";
    if (!signupData.phone) newErrors.phone = "Phone number is required";
    if (!signupData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(signupData.email))
      newErrors.email = "Email is invalid";
    if (!signupData.password) newErrors.password = "Password is required";
    else if (signupData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (signupData.password !== signupData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!signupData.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setStep(currentStep + 1);
      }
    } else if (currentStep < totalSteps) {
      setStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setStep(currentStep - 1);
  };

  const handleChange = (field, value) => {
    updateSignupData({ [field]: value });
  };

  if (!activeTheme) return null;

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-bold tracking-tight">Create an account</h2>
        <p className="text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full ${activeTheme.primary} transition-all duration-300 ease-in-out`}
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="orgName">Organization Name</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/70" />
                      <Input
                        id="orgName"
                        className={`pl-10 ${
                          errors.orgName ? "border-red-500" : ""
                        }`}
                        value={signupData.orgName}
                        onChange={(e) => {
                          handleChange("orgName", e.target.value);
                          if (errors.orgName)
                            setErrors({ ...errors, orgName: "" });
                        }}
                        placeholder="Enter company name"
                      />
                    </div>
                    {errors.orgName && (
                      <p className="text-xs text-red-500">{errors.orgName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Cell No</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/70" />
                      <Input
                        id="phone"
                        className={`pl-10 ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        value={signupData.phone}
                        onChange={(e) => {
                          handleChange("phone", e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        placeholder="Enter phone number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    className={errors.email ? "border-red-500" : ""}
                    value={signupData.email}
                    onChange={(e) => {
                      handleChange("email", e.target.value);
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      className={errors.password ? "border-red-500" : ""}
                      value={signupData.password}
                      onChange={(e) => {
                        handleChange("password", e.target.value);
                        if (errors.password)
                          setErrors({ ...errors, password: "" });
                      }}
                      placeholder="Create secure password"
                    />
                    {errors.password && (
                      <p className="text-xs text-red-500">{errors.password}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className={errors.confirmPassword ? "border-red-500" : ""}
                      value={signupData.confirmPassword}
                      onChange={(e) => {
                        handleChange("confirmPassword", e.target.value);
                        if (errors.confirmPassword)
                          setErrors({ ...errors, confirmPassword: "" });
                      }}
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && (
                      <p className="text-xs text-red-500">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/70" />
                    <Input
                      id="address"
                      className={`pl-10 ${
                        errors.address ? "border-red-500" : ""
                      }`}
                      value={signupData.address}
                      onChange={(e) => {
                        handleChange("address", e.target.value);
                        if (errors.address)
                          setErrors({ ...errors, address: "" });
                      }}
                      placeholder="Enter business address"
                    />
                  </div>
                  {errors.address && (
                    <p className="text-xs text-red-500">{errors.address}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Label className="text-base">
                  How many people work at your organization?
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["1-10", "11-50", "51-200", "201-500", "500+"].map(
                    (size) => (
                      <div
                        key={size}
                        onClick={() => handleChange("companySize", size)}
                        className={`cursor-pointer rounded-lg border p-4 flex items-center justify-between  transition-colors cursor-pointer ${
                          signupData.companySize === size
                            ? `${activeTheme.border} bg-secondary/50`
                            : ""
                        }`}
                      >
                        <span className="font-medium">{size} Employees</span>
                        {signupData.companySize === size && (
                          <CheckCircle2
                            className={`h-5 w-5 ${activeTheme.text}`}
                          />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Label className="text-base">How did you hear about us?</Label>
                <div className="space-y-3">
                  {[
                    "Social Media (LinkedIn, Twitter)",
                    "Search Engine (Google)",
                    "Referral from Friend",
                    "Advertisement",
                    "Other",
                  ].map((source) => (
                    <div
                      key={source}
                      onClick={() => handleChange("referralSource", source)}
                      className={`cursor-pointer rounded-lg border p-4 flex items-center justify-between hover:border-primary transition-colors ${
                        signupData.referralSource === source
                          ? `${activeTheme.border} bg-secondary/50`
                          : ""
                      }`}
                    >
                      <span className="font-medium">{source}</span>
                      {signupData.referralSource === source && (
                        <CheckCircle2
                          className={`h-5 w-5 ${activeTheme.text}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`cursor-pointer ${
            currentStep === 1 ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <Button
          onClick={handleNext}
          className={`${activeTheme.primary} hover:opacity-90 text-white min-w-[120px]`}
        >
          {currentStep === totalSteps ? "Create Account" : "Next"}
          {currentStep !== totalSteps && (
            <ArrowRight className="ml-2 h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
