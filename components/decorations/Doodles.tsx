"use client";

export function Pencil({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
    </svg>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="30"
      viewBox="0 0 120 30"
      fill="none"
    >
      <path
        d="M2 15 Q 15 2, 30 15 T 60 15 T 90 15 T 118 15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Circle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <circle
        cx="30"
        cy="30"
        r="25"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="10 5"
      />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
    >
      <path
        d="M5 20 Q 20 10, 40 20 T 75 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M65 15 L 75 20 L 65 25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Dots({ className }: { className?: string }) {
  return (
    <div className={className}>
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className="inline-block w-2 h-2 mx-1 rounded-full bg-current"
        />
      ))}
    </div>
  );
}

export function Underline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 20"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M3 10 Q 50 3, 100 10 T 197 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
