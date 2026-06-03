import { createFileRoute } from "@tanstack/react-router";
import {
  Wallet, Receipt, PiggyBank, TrendingUp, TrendingDown, Bot,
  UserPlus, FileText, BarChart3, ArrowRight,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Painel Executivo — Suite Empresarial" },
      { name: "description", content: "Indicadores financeiros em tempo real, KPIs e análises inteligentes do negócio." },
    ],
  }),
  component: Dashboard,
});

const bars = [40, 55, 45, 70, 85, 60, 50, 40];

function KPI({ icon: Icon, label, value, delta, trend, tone }: {
  icon: typeof Wallet; label: string; value: string; delta: string;
  trend: "up" | "down"; tone: "accent" | "warning" | "danger";
}) {
  const toneBg = { accent: "bg-accent/15", warning: "bg-warning/15", danger: "bg-danger/15" }[tone];
  const toneFg = { accent: "text-accent", warning: "text-warning", danger: "text-danger" }[tone];
  const trendColor = trend === "up" ? "text-success" : "text-danger";
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-lg ${toneBg}`}>
          <Icon className={`h-5 w-5 ${toneFg}`} />
        </div>
        <span className={`flex items-center gap-1 text-xs font-semibold ${trendColor}`}>
          <TrendIcon className="h-3.5 w-3.5" />
          {delta}
        </span>
      </div>
      <div>
        <p className="label-eyebrow">{label}</p>
        <h4 className="text-3xl font-semibold mt-1">{value}</h4>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <AppShell>
      {/* Banner de inteligência */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface to-surface-2 p-8 border border-accent/20">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none bg-gradient-to-l from-accent to-transparent" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-accent">
              <Bot className="h-5 w-5" />
              <span className="label-eyebrow text-accent">Inteligência de Negócio</span>
            </div>
            <h3 className="text-2xl font-semibold">
              A receita subiu 12% nas regiões da África Austral este trimestre.
            </h3>
            <p className="text-fg-muted">
              A análise estratégica sugere aumentar a capacidade da cadeia de fornecimento em Luanda em 15%
              para responder à procura prevista para o 4.º trimestre. A IA estima uma melhoria potencial
              de 4,2% na margem através do encaminhamento logístico automatizado.
            </p>
          </div>
          <button className="shrink-0 bg-accent text-accent-fg px-6 py-3 rounded-lg font-semibold text-sm hover:bg-accent-strong transition">
            Ver Relatório Detalhado
          </button>
        </div>
      </section>

      {/* KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPI icon={Wallet} label="Receita Total" value="AOA 12.482.000" delta="+8,4%" trend="up" tone="accent" />
        <KPI icon={PiggyBank} label="Lucro Líquido" value="AOA 4.120.500" delta="+3,2%" trend="up" tone="warning" />
        <KPI icon={Receipt} label="Despesas Operacionais" value="AOA 2.840.200" delta="-1,5%" trend="down" tone="danger" />
      </section>

      {/* Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 glass rounded-xl p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-semibold">Análise de Fluxo de Caixa</h3>
              <p className="text-sm text-fg-muted">Desempenho mensal previsto vs. real</p>
            </div>
            <div className="flex gap-1 bg-surface-2/40 p-1 rounded-lg">
              {["1M", "6M", "1A"].map((p, i) => (
                <button
                  key={p}
                  className={
                    "px-3 py-1 rounded text-xs font-semibold " +
                    (i === 0 ? "bg-accent/15 text-accent" : "text-fg-muted hover:text-fg")
                  }
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full min-h-[260px] flex items-end gap-3">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-accent/30 to-accent transition-all hover:from-accent hover:to-accent-strong"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-fg-subtle font-semibold tracking-widest">
            {["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO"].map((m) => <span key={m}>{m}</span>)}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass rounded-xl p-6">
            <h3 className="label-eyebrow mb-4">Ações Rápidas</h3>
            <div className="space-y-3">
              {[
                { icon: UserPlus, label: "Adicionar Novo Lead" },
                { icon: FileText, label: "Criar Factura" },
                { icon: BarChart3, label: "Gerar Relatório" },
              ].map((a) => (
                <button
                  key={a.label}
                  className="w-full flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/5 hover:border-accent/30 transition text-left group"
                >
                  <div className="flex items-center gap-3">
                    <a.icon className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">{a.label}</span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-fg-subtle group-hover:translate-x-1 transition" />
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-xl p-6 flex-1">
            <h3 className="label-eyebrow mb-4">Actividade Recente</h3>
            <ul className="space-y-4">
              {[
                { who: "Sara Domingos", what: "fechou negócio · CloudScale", when: "há 2 min", color: "bg-success" },
                { who: "Marco Ribeiro", what: "adicionou 14 leads", when: "há 18 min", color: "bg-accent" },
                { who: "Elena Vaz", what: "aprovou factura #4821", when: "há 1 h", color: "bg-warning" },
                { who: "Auto-RPA", what: "sincronizou o stock", when: "há 3 h", color: "bg-fg-subtle" },
              ].map((a, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className={`mt-1.5 h-2 w-2 rounded-full ${a.color}`} />
                  <div className="flex-1">
                    <p className="text-sm"><span className="font-semibold">{a.who}</span> <span className="text-fg-muted">{a.what}</span></p>
                    <p className="text-[11px] text-fg-subtle uppercase tracking-wider">{a.when}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
