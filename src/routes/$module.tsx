import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Construction } from "lucide-react";

const TITLES: Record<string, string> = {
  erp: "ERP", finance: "Finance", hr: "Human Resources", industry: "Industry Verticals",
};

export const Route = createFileRoute("/$module")({
  head: ({ params }) => ({
    meta: [{ title: `${TITLES[params.module] ?? "Module"} — Enterprise Suite` }],
  }),
  component: ModulePlaceholder,
});

function ModulePlaceholder() {
  const { module } = Route.useParams();
  const title = TITLES[module] ?? module;
  return (
    <AppShell>
      <div className="glass rounded-xl p-12 text-center max-w-2xl mx-auto mt-12">
        <Construction className="h-12 w-12 text-accent mx-auto mb-4" />
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-fg-muted mt-3">
          This module is part of the Enterprise Suite ecosystem and will be enabled once configured.
        </p>
        <Link
          to="/ecosystem"
          className="inline-flex mt-6 items-center gap-2 bg-accent text-accent-fg px-5 py-2.5 rounded-lg text-sm font-semibold"
        >
          Browse modules
        </Link>
      </div>
    </AppShell>
  );
}
