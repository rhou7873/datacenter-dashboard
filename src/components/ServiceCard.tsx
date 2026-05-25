import type { Service } from "@/lib/services";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  let host: string;
  try {
    host = new URL(service.url).host;
  } catch {
    host = service.url;
  }

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="terminal-card group relative flex flex-col gap-4 p-5"
    >
      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between">

        {/* [ICON] bracket */}
        <span
          className="text-[13px] font-bold tracking-wider"
          style={{
            color: "var(--green)",
            textShadow: "var(--glow-sm)",
            letterSpacing: "0.08em",
          }}
        >
          [<span style={{ color: "var(--text)" }}>{service.icon}</span>]
        </span>

        {/* Arrow — brightens on hover via group */}
        <span
          className="text-[18px] leading-none transition-all duration-150
            group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: "var(--text-muted)" }}
          aria-hidden
        >
          ↗
        </span>
      </div>

      {/* Name + description */}
      <div className="flex flex-col gap-1.5">
        <h3
          className="text-[14px] font-bold tracking-wide"
          style={{ color: "var(--text)", letterSpacing: "0.06em" }}
        >
          {service.name.toUpperCase()}
        </h3>
        <p
          className="text-[12px] leading-relaxed"
          style={{ color: "var(--text-dim)" }}
        >
          {service.description}
        </p>
      </div>

      {/* Footer row: host + category */}
      <div
        className="mt-auto flex items-center justify-between pt-2 text-[11px]"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span
          className="font-mono tracking-tight"
          style={{ color: "var(--text-muted)" }}
        >
          {host}
        </span>
        <span
          className="tracking-[0.1em]"
          style={{ color: "var(--text-muted)" }}
        >
          //{service.category.toUpperCase()}
        </span>
      </div>

      {/* Online indicator dot */}
      <span
        className="absolute right-3 top-3 status-dot"
        aria-label="online"
      />
    </a>
  );
}
