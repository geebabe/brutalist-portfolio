export function OrnamentDivider() {
  return (
    <div className="flex items-center gap-3 my-12 opacity-40">
      <div className="flex-1 h-px bg-border-mid" />
      <span className="text-violet font-mono text-xs tracking-widest">◈</span>
      <div className="w-8 h-px bg-border-mid" />
      <span className="text-violet-dim font-mono text-xs">◈</span>
      <div className="w-4 h-px bg-border-mid" />
      <span className="text-violet-dim font-mono text-[10px]">◈</span>
    </div>
  )
}
