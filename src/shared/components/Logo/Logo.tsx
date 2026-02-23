export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="absolute inset-0 rounded-xl bg-linear-to-br from-indigo-500/20 via-cyan-400/20 to-fuchsia-500/20" />
        <span className="relative text-sm font-semibold tracking-tight">H</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">space-H</div>
        <div className="text-xs text-white/60">learn • build • ship</div>
      </div>
    </div>
  );
}