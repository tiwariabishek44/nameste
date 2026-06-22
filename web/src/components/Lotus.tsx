type LotusProps = { className?: string; strokeWidth?: number };

/** Hand-drawn lotus line-mark — the brand signature. Inherits currentColor. */
export default function Lotus({ className = "", strokeWidth = 1.25 }: LotusProps) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* centre petal */}
      <path d="M32 5c-3.4 6.2-3.4 18.6 0 28 3.4-9.4 3.4-21.8 0-28Z" />
      {/* inner side petals */}
      <path d="M32 33c-5-4.4-9-12-9.4-19.2C27 16.2 30.4 23.6 32 33Z" />
      <path d="M32 33c5-4.4 9-12 9.4-19.2C37 16.2 33.6 23.6 32 33Z" />
      {/* outer side petals */}
      <path d="M32 33c-7.6-2.2-14-7-17.2-13.4C21 20.8 27.6 25.6 32 33Z" />
      <path d="M32 33c7.6-2.2 14-7 17.2-13.4C43 20.8 36.4 25.6 32 33Z" />
      {/* water line */}
      <path d="M12 35.5c5 1.6 10 2.4 20 2.4s15-.8 20-2.4" opacity="0.6" />
    </svg>
  );
}
