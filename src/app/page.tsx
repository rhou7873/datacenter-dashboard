import { Clock } from "@/components/Clock";
import { ApplicationNode } from "@/components/ApplicationNode";
import { categoryOrder, applicationsw } from "@/lib/applications";

export default function Home() {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: applicationsw.filter((s) => s.category === category),
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
            <span>DATACENTER.ADMIN</span>
            <span style={{ color: "var(--text-dim)" }}>
              <Clock />
            </span>
          </div>

          {/* Title */}
          <h1
            className="mb-4 text-2xl font-bold tracking-[0.12em] sm:text-3xl"
            style={{ color: "var(--green)", textShadow: "var(--glow-sm)" }}
          >
            DATACENTER
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
              <span style={{ color: "var(--green)" }}>{applicationsw.length}</span>
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
            &gt; Quick access to administration applications running in the datacenter.
            <br />
            &gt; Click any node to open its interface in a new tab.
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
                  <ApplicationNode key={service.id} service={service} />
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
        </footer>

      </div>
    </div>
  );
}
