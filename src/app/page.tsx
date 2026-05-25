import { Clock } from "@/components/Clock";
import { ServiceCard } from "@/components/ServiceCard";
import { categoryOrder, services } from "@/lib/services";

export default function Home() {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: services.filter((s) => s.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="flex-1" style={{ background: "var(--bg)" }}>
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 sm:py-16">

        {/* ── Terminal header ─────────────────────────────────────── */}
        <header className="mb-14">

          {/* Top bar */}
          <div
            className="mb-5 flex items-center justify-between text-[11px]"
            style={{
              borderBottom: "1px solid var(--border)",
              paddingBottom: "10px",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            <span>CLUSTER.ADMIN // HOMELAB</span>
            <span style={{ color: "var(--text-dim)" }}>
              <Clock />
            </span>
          </div>

          {/* Shell prompt */}
          <div className="mb-3 text-[13px]" style={{ color: "var(--text-dim)" }}>
            <span style={{ color: "var(--green-dim)" }}>root</span>
            <span>@</span>
            <span style={{ color: "var(--text)" }}>homelab</span>
            <span>:</span>
            <span style={{ color: "#5577ff" }}>~</span>
            <span>{"$ "}</span>
            <span style={{ color: "var(--green)" }}>./dashboard --list-all --format=grid</span>
          </div>

          {/* Title */}
          <h1
            className="mb-4 text-2xl font-bold tracking-[0.12em] sm:text-3xl"
            style={{ color: "var(--green)", textShadow: "var(--glow-sm)" }}
          >
            HOMELAB CLUSTER
          </h1>

          {/* Status row */}
          <div
            className="mb-4 flex flex-wrap gap-x-8 gap-y-2 text-[12px]"
            style={{ color: "var(--text-dim)" }}
          >
            <span className="flex items-center gap-2">
              <span className="status-dot" />
              STATUS:{" "}
              <span style={{ color: "var(--green)" }} className="glow-text">
                ONLINE
              </span>
            </span>
            <span>
              APPLICATIONS:{" "}
              <span style={{ color: "var(--green)" }}>{services.length}</span>
            </span>
            <span>
              CATEGORIES:{" "}
              <span style={{ color: "var(--green)" }}>{grouped.length}</span>
            </span>
            <span>
              UPTIME:{" "}
              <span style={{ color: "var(--green)" }}>99.97%</span>
            </span> 
          </div>

          {/* Description */}
          <p className="text-[12px]" style={{ color: "var(--text-dim)" }}>
            &gt; Quick access to admin applications running on the homelab cluster.
            <br />
            &gt; Click any application node to open its interface in a new tab.
          </p>
        </header>

        {/* ── Service groups ──────────────────────────────────────── */}
        <div className="flex flex-col gap-12">
          {grouped.map(({ category, items }) => (
            <section key={category}>

              {/* Section header */}
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="text-[11px] font-bold tracking-[0.15em]"
                  style={{ color: "var(--green)", textShadow: "var(--glow-sm)" }}
                >
                  [{category.toUpperCase()}]
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: "var(--border)" }}
                />
                <span
                  className="text-[11px] font-mono tabular-nums"
                  style={{ color: "var(--text-muted)" }}
                >
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <footer
          className="mt-16 flex items-center justify-between pt-5 text-[11px]"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--text-muted)",
          }}
        >
          <span>
            {services.length} services configured &nbsp;·&nbsp; edit{" "}
            <code
              style={{
                color: "var(--green)",
                background: "rgba(0,255,65,0.06)",
                padding: "2px 6px",
                border: "1px solid var(--border)",
                letterSpacing: "0.02em",
              }}
            >
              src/lib/services.ts
            </code>
          </span>
          <span className="flex items-center gap-1" style={{ color: "var(--text-dim)" }}>
            root@homelab:~${" "}
            <span className="cursor-blink">█</span>
          </span>
        </footer>

      </div>
    </div>
  );
}
