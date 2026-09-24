export default function SiteStatus() {
  return (
    <aside
      aria-label="Site status"
      className="flex max-w-[560px] flex-col gap-3 rounded-2xl border border-[#e6e5fc] bg-[#f8f8ff] px-5 py-[18px]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-sm font-semibold text-[#4a46d6]">
          <span className="h-2 w-2 rounded-full bg-[#5b57e8] shadow-[0_0_0_4px_#e6e5fc]" />
          Work in Progress
        </div>
        <span className="text-xs text-[#6f6f7a] font-[450]">v2.0</span>
      </div>
      <div className="text-sm leading-[1.5] font-[450]">
        I'm rebuilding this site. Projects and writing are on the way.
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[#ececf6]">
        <div className="relative h-1.5 w-[35%] overflow-hidden rounded-full bg-[#5b57e8]">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
    </aside>
  );
}
