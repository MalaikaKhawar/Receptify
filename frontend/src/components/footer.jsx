"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-2">
          <Link className="mb-4 flex items-center space-x-2" href="/">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Receptify
            </span>
          </Link>
          <p className="text-muted-foreground max-w-xs mb-6">
            Your intelligent AI receptionist, handling calls and bookings 24/7
            so you can focus on growing your business.
          </p>
          <div className="flex space-x-4">
            {/* Social icons would go here */}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="hover:text-foreground transition-colors"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Showcase
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Receptify Inc. All rights reserved.
      </div>
    </footer>
  );
}
