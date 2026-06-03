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
      { title: "Ecossistema Modular — Suite Empresarial" },
      { name: "description", content: "Active ou desactive qualquer módulo — CRM, ERP, Financeiro, RH, verticais de indústria e muito mais." },
    ],
  }),
  component: Ecosystem,
});

type Mod = { icon: typeof Network; title: string; desc: string; status: "Activo" | "Disponível" | "Beta" };

const MODULES: Mod[] = [
  { icon: Network, title: "Relação com Clientes", desc: "Pipeline unificado com pontuação preditiva de leads e sincronização global de contactos.", status: "Activo" },
  { icon: Boxes, title: "Planeamento Empresarial", desc: "Agendamento integrado de recursos e execução de manufactura à escala.", status: "Activo" },
  { icon: Wallet, title: "Núcleo Financeiro", desc: "Razão automatizado, conformidade fiscal e tesouraria multi-moeda.", status: "Activo" },
  { icon: Users, title: "Capital Humano", desc: "Recrutamento, automação salarial e análise da força de trabalho.", status: "Activo" },
  { icon: GraduationCap, title: "Educação", desc: "Matrículas, avaliações e tutores virtuais para instituições de qualquer dimensão.", status: "Disponível" },
  { icon: Stethoscope, title: "Saúde Clínica", desc: "Processos clínicos, marcações e assistente clínico de IA.", status: "Disponível" },
  { icon: Pill, title: "Farmácia", desc: "Lotes, validades e previsão inteligente de consumo.", status: "Disponível" },
  { icon: Hotel, title: "Hotelaria", desc: "Reservas, governanta e previsão de ocupação.", status: "Beta" },
  { icon: UtensilsCrossed, title: "Restauração", desc: "Mesas, cozinha, entregas e controlo de desperdício inteligente.", status: "Disponível" },
  { icon: Scissors, title: "Salão e Barbearia", desc: "Marcações, comissões e confirmações por WhatsApp.", status: "Disponível" },
  { icon: Wrench, title: "Oficina Auto", desc: "Ordens de serviço, diagnóstico assistido por IA e histórico de manutenção.", status: "Disponível" },
  { icon: Snowflake, title: "Refrigeração", desc: "Instalações, equipamentos, contratos e rondas de assistência.", status: "Disponível" },
  { icon: HardHat, title: "Soldadura e Ofícios", desc: "Obras, equipas, materiais e controlo de orçamento em tempo real.", status: "Disponível" },
  { icon: PaintBucket, title: "Equipas de Pintura", desc: "Agendas, clientes, materiais e controlo de custos.", status: "Disponível" },
  { icon: Building, title: "Construção Civil", desc: "Projectos, engenheiros, contratos e logística de materiais.", status: "Beta" },
  { icon: Truck, title: "Logística e Frota", desc: "Rotas, combustível, entregas e optimização de rotas com IA.", status: "Activo" },
  { icon: MessageSquare, title: "WhatsApp Business IA", desc: "Chatbot, campanhas, facturação, áudio para texto e transferência para agente.", status: "Activo" },
  { icon: BarChart3, title: "Business Intelligence", desc: "KPIs, painéis executivos e comparações preditivas.", status: "Activo" },
];

const STATUS_STYLES: Record<Mod["status"], string> = {
  "Activo": "bg-success/10 text-success border-success/30",
  "Disponível": "bg-surface-3/30 text-fg-muted border-border",
  "Beta": "bg-accent/10 text-accent border-accent/30",
};

function ModuleCard({ m }: { m: Mod }) {
  const active = m.status === "Activo";
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
        <button className="text-accent-strong hover:text-accent transition" aria-label="Abrir módulo">
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
          <span className="label-eyebrow text-accent">Gestão de Módulos</span>
          <h1 className="text-3xl font-semibold mt-2">Ecossistema Modular</h1>
          <p className="text-fg-muted mt-1">
            Cada módulo é independente, mas totalmente integrado. Active aquilo de que precisa.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-border text-fg-muted rounded-lg hover:bg-surface-2/60 transition text-sm">
            <Filter className="h-4 w-4" /> Filtrar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface/80 border border-border rounded-lg hover:bg-surface-2/60 transition text-sm">
            <Settings className="h-4 w-4" /> Configurar Arquitectura
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MODULES.map((m) => <ModuleCard key={m.title} m={m} />)}
      </div>
    </AppShell>
  );
}
