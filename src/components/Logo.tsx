import { Link } from "@tanstack/react-router";
import shortLogo from "@/assets/shortlogo.svg";

export function DoveIcon({ className = "" }: { className?: string }) {
  return (
    <img src={shortLogo} alt="" className={className} aria-hidden="true" />
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 text-foreground ${className}`}>
      <DoveIcon className="h-9 w-12 shrink-0" />
      <span className="text-[14px] font-bold leading-[1.1] tracking-[0.02em] uppercase">
        Церква
        <br />
        Благодать
      </span>
    </Link>
  );
}
