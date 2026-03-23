export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="
          relative grid h-9 w-9 place-items-center
          rounded-xl border
          border-[rgb(var(--border))]
          bg-[rgb(var(--bg-soft))]
          backdrop-blur-xl
        "
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/20 via-cyan-400/20 to-fuchsia-500/20" />

        <span className="relative text-sm font-semibold tracking-tight text-[rgb(var(--fg))]">
          SH
        </span>
      </div>

      <div className="leading-tight">
        <div className="text-sm font-semibold text-[rgb(var(--fg))]">
          space-H
        </div>

        <div className="text-xs text-[rgb(var(--fg-muted))]">
          learn • build • ship
        </div>
      </div>
    </div>
  );
}