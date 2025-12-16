"use client";

import {
  Phone,
  Calendar,
  Utensils,
  FileText,
  ShoppingBag,
  MapPin,
  Building2,
  BarChart,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Restaurant Reservations",
    description:
      "Book reservations, amend bookings, and handle inquiries effortlessly.",
    icon: Utensils,
  },
  {
    title: "Medical Appointments",
    description:
      "Schedule appointments, handle urgent queries and prevent no-shows.",
    icon: Calendar,
  },
  {
    title: "Service Bookings",
    description: "Schedule services, handle rescheduling and customer prep.",
    icon: Phone,
  },
  {
    title: "Business Inquiries",
    description:
      "Handle inbound calls, route effectively and provide information.",
    icon: Building2,
  },
  {
    title: "Order & Delivery",
    description: "Take orders, track delivery status and handle modifications.",
    icon: ShoppingBag,
  },
  {
    title: "Event Planning",
    description:
      "Coordinate guest lists, handle RSVPs and manage event details.",
    icon: FileText,
  },
];

const aiFeatures = [
  {
    title: "Data Collection",
    description:
      "Collects customer data efficiently and accurately for your CRM.",
    icon: Database,
  },
  {
    title: "Task Analyst",
    description:
      "Analyzes calls and provides summaries and actionable insights.",
    icon: BarChart,
  },
  {
    title: "Process Automation",
    description: "Automates repetitive tasks, freeing up your human staff.",
    icon: MapPin,
  },
];

const allServices = [...services, ...aiFeatures];

const cardThemes = [
  {
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
  },
  {
    gradient: "from-cyan-500/20 to-teal-500/5",
    border: "border-cyan-500/50",
  },
  {
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
  },
  {
    gradient: "from-orange-500/20 to-red-500/5",
    border: "border-orange-500/20",
  },
  {
    gradient: "from-green-500/20 to-emerald-500/5",
    border: "border-green-500/20",
  },
  {
    gradient: "from-pink-500/20 to-rose-500/5",
    border: "border-pink-500/20",
  },
  {
    gradient: "from-yellow-500/20 to-amber-500/5",
    border: "border-yellow-500/20",
  },
  {
    gradient: "from-indigo-500/20 to-violet-500/5",
    border: "border-indigo-500/20",
  },
  {
    gradient: "from-red-500/20 to-orange-500/5",
    border: "border-red-500/20",
  },
];

function ServiceCard({
  title,
  description,
  icon: Icon,
  delay,
  gradient,
  border,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl border ${border} bg-gradient-to-br ${gradient} backdrop-blur-sm hover:opacity-90 transition-opacity group`}
    >
      <div className="h-12 w-12 rounded-lg bg-background/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="h-6 w-6 text-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl machina font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Concierge Services
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Essential services handled by our advanced AI voice agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
                gradient={theme.gradient}
                border={theme.border}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
