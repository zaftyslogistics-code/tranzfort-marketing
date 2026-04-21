import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img src={logo} alt="TranZfort logo" className="h-10 w-10 object-contain transition-transform group-hover:scale-105" />
      <div className="leading-tight">
        <div className={`font-display font-bold text-lg tracking-tight ${light ? "text-white" : "text-ink"}`}>
          Tran<span className="text-gradient-brand">Zfort</span>
        </div>
        <div className={`text-[10px] uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-ink-soft"}`}>
          AI Logistics
        </div>
      </div>
    </Link>
  );
}
