"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [ts, setTs] = useState<string>("");

  useEffect(() => {
    const fmt = () =>
      new Date().toISOString().replace("T", " ").slice(0, 19);

    setTs(fmt());
    const id = setInterval(() => setTs(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  // Render nothing until hydrated to avoid SSR mismatch
  if (!ts) return null;

  return (
    <span>
      <span style={{ color: "var(--text-dim)" }}>{ts}</span>{" "}
      <span style={{ color: "var(--text-muted)" }}>UTC</span>
    </span>
  );
}
