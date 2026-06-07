export function CrossIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} aria-hidden="true" fill="none">
      <line x1="30" y1="0" x2="30" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="6" y1="26" x2="54" y2="26" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function StarBurst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="none">
      <g stroke="currentColor" strokeWidth="0.6">
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI) / 12;
          const x2 = 60 + Math.cos(a) * 56;
          const y2 = 60 + Math.sin(a) * 56;
          return <line key={i} x1="60" y1="60" x2={x2} y2={y2} />;
        })}
      </g>
      <circle cx="60" cy="60" r="2" fill="currentColor" />
    </svg>
  );
}

export function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <circle cx="48" cy="48" r="46" fill="white" />
      <polygon points="40,32 70,48 40,64" fill="#020403" />
    </svg>
  );
}
