// Small uppercase label with a leading rule. `tone` switches the accent colour.
export default function Eyebrow({ children, tone = 'gold', className = '', center = false }) {
  const color =
    tone === 'light'
      ? 'text-blush'
      : tone === 'pink'
        ? 'text-neonpink'
        : 'text-golddeep'
  return (
    <span
      className={`inline-flex items-center font-sans text-[.78rem] font-semibold uppercase tracking-[.22em] ${color} ${
        center ? 'justify-center' : ''
      } ${className}`}
    >
      {children}
    </span>
  )
}
