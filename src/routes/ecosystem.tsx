import { createFileRoute } from "@tanstack/react-router";
import {
  Network, Boxes, Wallet, Users, GraduationCap, Stethoscope, Pill, Hotel,
  UtensilsCrossed, Scissors, Wrench, Snowflake, HardHat, PaintBucket,
  Building, Truck, MessageSquare, BarChart3, Filter, Settings, ArrowRight,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Modular Ecosystem — Enterprise Suite" },
      { name: "description", content: "Activate or deactivate any module — CRM, ERP, Finance, HR, Industry verticals, and more." },
    ],
  }),
  component: Ecosystem,
});

type Mod = { icon: typeof Network; title: string; desc: string; status: "Active" | "Available" | "Beta" };

const MODULES: Mod[] = [
  { icon: Network, title: "Customer Relations", desc: "Unified pipeline with predictive lead scoring and global contact sync.", status: "Active" },
  { icon: Boxes, title: "Enterprise Planning", desc: "Integrated resource scheduling and manufacturing execution at scale.", status: "Active" },
  { icon: Wallet, title: "Financial Core", desc: "Automated ledger, tax compliance, multi-currency treasury management.", status: "Active" },
  { icon: Users, title: "Human Capital", desc: "Talent acquisition, payroll automation, and workforce analytics.", status: "Active" },
  { icon: GraduationCap, title: "Ed-Tech Link", desc: "Enrollment, grading, and virtual tutors for institutions of any size.", status: "Available" },
  { icon: Stethoscope, title: "Clinical Suite", desc: "Patient records, scheduling, and AI clinical assistant.", status: "Available" },
  { icon: Pill, title: "Pharma Track", desc: "Batches, expirations, and intelligent consumption forecasting.", status: "Available" },
  { icon: Hotel, title: "Hospitality OS", desc: "Reservations, housekeeping, and occupancy forecasting.", status: "Beta" },
  { icon: UtensilsCrossed, title: "Restaurant Flow", desc: "Tables, kitchen, delivery, and waste-control intelligence.", status: "Available" },
  { icon: Scissors, title: "Salon & Barbershop", desc: "Bookings, commissions, and WhatsApp confirmations.", status: "Available" },
  { icon: Wrench, title: "Auto Workshop", desc: "Work orders, AI-assisted diagnostics, and maintenance history.", status: "Available" },
  { icon: Snowflake, title: "Refrigeration Tech", desc: "Installations, equipment, contracts, and service rounds.", status: "Available" },
  { icon: HardHat, title: "Welding & Trades", desc: "Sites, teams, materials, and live budget tracking.", status: "Available" },
  { icon: PaintBucket, title: "Painting Crews", desc: "Schedules, customers, materials, and cost control.", status: "Available" },
  { icon: Building, title: "Construction", desc: "Projects, engineers, contracts, and material logistics.", status: "Beta" },
  { icon: Truck, title: "Logistics & Fleet", desc: "Routes, fuel, deliveries, and AI route optimization.", status: "Active" },
  { icon: MessageSquare, title: "WhatsApp Business AI", desc: "Chatbot, campaigns, billing, audio-to-text, and human handoff.", status: "Active" },
  { icon: BarChart3, title: "Business Intelligence", desc: "KPIs, executive dashboards, and predictive comparisons.", status: "Active" },
];

const STATUS_STYLES: Record<Mod["status"], string> = {
  Active: "bg-success/10 text-success border-success/30",
  Available: "bg-surface-3/30 text-fg-muted border-border",
  Beta: "bg-accent/10 text-accent border-accent/30",
};

function ModuleCard({ m }: { m: Mod }) {
  const active = m.status === "Active";
  return (
    <div className={`glass glass-hover rounded-xl p-6 flex flex-col relative ${active ? "" : "opacity-90"}`}>
      <div className="absolute top-4 right-4">
        <span className={`flex h-2 w-2 rounded-full ${active ? "bg-success animate-pulse" : m.status === "Beta" ? "bg-accent" : "bg-fg-subtle"}`} />
      </div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 border ${active ? "bg-accent/15 border-accent/30" : "bg-surface-3/30 border-border"}`}>
        <m.icon className={`h-6 w-6 ${active ? "text-accent" : "text-fg-muted"}`} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
      <p className="text-sm text-fg-muted mb-8 line-clamp-2">{m.desc}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase tracking-wider border ${STATUS_STYLES[m.status]}`}>
          {m.status}
        </span>
        <button className="text-accent-strong hover:text-accent transition">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function Ecosystem() {
  return (
    <AppShell>
      <div className="flex items-end justify-between">
        <div>
          <span className="label-eyebrow text-accent">Module Management</span>
          <h1 className="text-3xl font-semibold mt-2">Modular Ecosystem</h1>
          <p className="text-fg-muted mt-1">
            Every module is independent yet fully integrated. Activate what you need.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-border text-fg-muted rounded-lg hover:bg-surface-2/60 transition text-sm">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface/80 border border-border rounded-lg hover:bg-surface-2/60 transition text-sm">
            <Settings className="h-4 w-4" /> Configure Architecture
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MODULES.map((m) => <ModuleCard key={m.title} m={m} />)}
      </div>
    </AppShell>
  );
}
