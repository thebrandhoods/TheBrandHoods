export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[70svh] flex-col items-center justify-center gap-6 bg-ink"
    >
      <span className="flex flex-col items-center leading-none">
        <span className="display text-[2rem] tracking-[-0.04em] text-bone">
          TB<span className="text-accent">H</span>
        </span>
        <span className="mt-2 text-[0.5rem] font-semibold uppercase tracking-[0.4em] text-bone/45">
          The Brand Hoods
        </span>
      </span>
      <span className="relative block h-px w-40 overflow-hidden bg-white/12">
        <span className="absolute inset-y-0 left-0 w-1/3 animate-[loading-bar_1.1s_ease-in-out_infinite] bg-accent" />
      </span>
      <span className="sr-only">Loading</span>
      <style>{`@keyframes loading-bar { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }`}</style>
    </div>
  );
}
