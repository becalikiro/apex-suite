import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Network, Boxes, Wallet, Users, Factory,
  Grid3x3, Menu, Search, Sparkles, Building2,
} from "lucide-react";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Painel de Controlo", icon: LayoutDashboard },
  { to: "/crm", label: "Clientes (CRM)", icon: Network },
  { to: "/erp", label: "Gestão (ERP)", icon: Boxes },
  { to: "/finance", label: "Financeiro", icon: Wallet },
  { to: "/hr", label: "Recursos Humanos", icon: Users },
  { to: "/industry", label: "Indústria", icon: Factory },
] as const;

function NavItem({ to, label, icon: Icon, active }: { to: string; label: string; icon: typeof LayoutDashboard; active: boolean }) {
  return (
    <Link
      to={to}
      className={
        "flex items-center gap-4 px-4 py-3 rounded-lg transition-colors text-sm font-medium " +
        (active
          ? "bg-accent/15 text-accent border border-accent/20"
          : "text-fg-muted hover:bg-surface-2/60 hover:text-fg")
      }
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}

export function AppShell({ children }: { children?: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex">
      <aside className="fixed left-0 top-0 h-full w-72 bg-bg/80 backdrop-blur-xl border-r border-border flex flex-col py-6 px-4 z-50">
        <div className="mb-10 px-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-accent-strong">
            SUITE<span className="text-fg-subtle">.</span>
          </h1>
          <p className="label-eyebrow mt-1 text-[10px]">Sistema Empresarial</p>
        </div>

        <nav className="flex-1 space-y-1">
          {NAV.map((n) => (
            <NavItem key={n.to} {...n} active={pathname === n.to} />
          ))}

          <div className="pt-6 mt-6 border-t border-border">
            <NavItem
              to="/ecosystem"
              label="Ecossistema"
              icon={Grid3x3}
              active={pathname === "/ecosystem"}
            />
          </div>
        </nav>

        <div className="mt-auto pt-6 px-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-strong/40 ring-2 ring-accent/30 grid place-items-center text-accent-fg font-bold">
              AE
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-accent truncate">Administrador</p>
              <p className="text-[10px] text-fg-subtle uppercase tracking-widest truncate">
                Operações Globais
              </p>
            </div>
          </div>
          <p className="mt-4 text-[10px] text-fg-subtle/60 uppercase tracking-widest font-bold">
            v4.2.0
          </p>
        </div>
      </aside>

      <main className="ml-72 flex-1 min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 h-20 bg-bg/70 backdrop-blur-xl border-b border-border flex justify-between items-center px-8">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-2/60 transition" aria-label="Abrir menu">
              <Menu className="h-5 w-5 text-accent" />
            </button>
            <h2 className="text-xl font-semibold tracking-tight">Suite Empresarial</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-surface/60 px-4 py-2 rounded-lg border border-border">
              <Building2 className="h-4 w-4 text-accent" />
              <select className="bg-transparent border-none text-sm focus:outline-none cursor-pointer pr-2">
                <option>Global Holdings, Lda.</option>
                <option>TechVision Angola</option>
                <option>RetailCore Luanda</option>
              </select>
            </div>
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-surface/40 border border-border">
              <Search className="h-4 w-4 text-fg-subtle" />
              <input
                className="bg-transparent border-none focus:outline-none text-sm w-44 placeholder:text-fg-subtle"
                placeholder="Pesquisar módulo…"
              />
            </div>
            <button className="flex items-center gap-2 bg-accent text-accent-fg px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-[0_0_20px_oklch(0.86_0.13_220/0.4)] transition">
              <Sparkles className="h-4 w-4" />
              Pesquisa IA
            </button>
          </div>
        </header>

        <div className="flex-1 p-8 max-w-[1440px] mx-auto w-full space-y-8">
          {children ?? <Outlet />}
        </div>
      </main>
    </div>
  );
}
