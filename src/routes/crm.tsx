import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Filter, Plus, MoreVertical, Wand2, Activity } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";

export const Route = createFileRoute("/crm")({
  head: () => ({
    meta: [
      { title: "Pipeline de Vendas — Suite Empresarial" },
      { name: "description", content: "Gestão global de oportunidades com pontuação inteligente de leads e pipeline preditivo." },
    ],
  }),
  component: CRM,
});

type Card = { name: string; value: string; owner: string; score: number };
const PIPELINE: { stage: string; count: number; cards: Card[] }[] = [
  { stage: "Descoberta", count: 12, cards: [
    { name: "CloudScale Infraestrutura", value: "AOA 450.000", owner: "Sara Domingos", score: 94 },
    { name: "NexaLogistics Global", value: "AOA 120.000", owner: "Marco Ribeiro", score: 62 },
    { name: "Heliosfera Energia", value: "AOA 285.000", owner: "Aïcha N'Diaye", score: 78 },
  ]},
  { stage: "Qualificação", count: 8, cards: [
    { name: "DataNexus Soluções", value: "AOA 2.100.000", owner: "Elena Vaz", score: 88 },
    { name: "Orbit Alimentos", value: "AOA 640.000", owner: "Marcos Holt", score: 71 },
  ]},
  { stage: "Proposta", count: 5, cards: [
    { name: "Verdant Holdings", value: "AOA 3.800.000", owner: "Priya Shankar", score: 91 },
    { name: "Kolibri Carga Aérea", value: "AOA 1.250.000", owner: "Félix Auer", score: 56 },
  ]},
  { stage: "Negociação", count: 4, cards: [
    { name: "Atlas Marine Group", value: "AOA 5.400.000", owner: "Sara Domingos", score: 83 },
  ]},
  { stage: "Ganho", count: 9, cards: [
    { name: "Polaris Retalho", value: "AOA 980.000", owner: "Marco Ribeiro", score: 100 },
  ]},
];

function scoreClass(s: number) {
  if (s >= 80) return "bg-success/10 text-success border-success/30";
  if (s >= 60) return "bg-warning/10 text-warning border-warning/30";
  return "bg-danger/10 text-danger border-danger/30";
}

function Stat({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <div className="glass rounded-xl p-6 flex flex-col justify-between">
      <p className="label-eyebrow">{label}</p>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-accent">{value}</span>
        {delta && (
          <span className="text-success text-xs flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> {delta}
          </span>
        )}
      </div>
    </div>
  );
}

function CRM() {
  return (
    <AppShell>
      <div>
        <span className="label-eyebrow text-accent">Relação com Clientes</span>
        <h1 className="text-3xl font-semibold mt-2">Pipeline de Vendas</h1>
        <p className="text-fg-muted">Gestão global de oportunidades com pontuação preditiva por IA.</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Stat label="Valor do Pipeline" value="AOA 12,4 Mi" delta="14%" />
        <Stat label="Taxa de Conversão" value="28,4%" delta="2,1%" />
        <div className="glass rounded-xl p-6 md:col-span-2 relative overflow-hidden">
          <p className="label-eyebrow">Crescimento de Leads por IA</p>
          <p className="mt-2 text-sm text-fg-muted max-w-md">
            As análises preditivas sugerem um <span className="text-accent font-semibold">aumento de 12%</span> nos
            leads qualificados no próximo trimestre, com base nos padrões de interacção.
          </p>
          <Activity className="absolute right-4 bottom-4 h-24 w-24 text-accent/10" />
        </div>
      </section>

      <div className="flex justify-between items-end">
        <h2 className="text-xl font-semibold">Oportunidades</h2>
        <div className="flex gap-2">
          <button className="bg-surface-2/60 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-surface-2 transition">
            <Filter className="h-4 w-4" /> Filtrar
          </button>
          <button className="bg-accent text-accent-fg px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_oklch(0.86_0.13_220/0.4)] transition">
            <Plus className="h-4 w-4" /> Novo Negócio
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2 snap-x">
        {PIPELINE.map((col) => (
          <div key={col.stage} className="min-w-[320px] flex-shrink-0 space-y-4 snap-start">
            <div className="flex justify-between items-center px-2 py-1 border-b border-border">
              <span className="text-sm font-semibold uppercase tracking-widest text-fg">{col.stage}</span>
              <span className="bg-surface-2/80 px-2 py-0.5 rounded text-[10px] font-bold">{col.count}</span>
            </div>
            {col.cards.map((c) => (
              <div
                key={c.name}
                className="glass glass-hover rounded-xl p-4 space-y-2 cursor-pointer group"
              >
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${scoreClass(c.score)}`}>
                    PONTUAÇÃO IA: {c.score}
                  </span>
                  <MoreVertical className="h-4 w-4 text-fg-subtle group-hover:text-accent transition" />
                </div>
                <h4 className="font-semibold text-sm">{c.name}</h4>
                <p className="text-[10px] text-fg-subtle font-semibold uppercase tracking-wider">
                  Valor estimado: {c.value}
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent/40 to-surface-3 grid place-items-center text-[10px] font-bold">
                    {c.owner.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="text-[11px] text-fg-muted">{c.owner}</span>
                </div>
                <button className="w-full mt-2 py-2 rounded-lg bg-accent/10 text-accent text-[11px] font-bold flex items-center justify-center gap-2 hover:bg-accent/20 transition">
                  <Wand2 className="h-3.5 w-3.5" /> Sugerir Próxima Acção
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
