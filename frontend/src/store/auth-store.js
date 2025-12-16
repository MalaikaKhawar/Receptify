import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      view: "login", // 'login' | 'signup'
      setView: (view) => set({ view }),

      // Signup Flow
      currentStep: 1,
      totalSteps: 3,
      signupData: {
        orgName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        address: "",
        companySize: "",
        referralSource: "",
      },

      setStep: (step) => set({ currentStep: step }),
      updateSignupData: (data) =>
        set((state) => ({
          signupData: { ...state.signupData, ...data },
        })),

      // Theme
      activeTheme: null,
      setActiveTheme: (theme) => set({ activeTheme: theme }),
    }),
    {
      name: "auth-storage", // unique name
      partialize: (state) => ({
        view: state.view,
        currentStep: state.currentStep,
        signupData: state.signupData,
      }), // Don't persist theme so it's random on reload/new session, but keep form data
    }
  )
);
