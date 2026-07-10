import { Link } from 'react-router-dom'

// The Neon Garden logo lockup, used in nav and footer.
export default function Brand({ className = '', smallTone = 'text-golddeep' }) {
  return (
    <Link
      to="/"
      aria-label="Neon Garden Event Hire home"
      className={`flex items-center gap-3 font-serif text-[1.5rem] leading-none ${className}`}
    >
      <img
        src="/favicon-512.png"
        alt="Neon Garden Event Hire"
        className="h-11 w-11 shrink-0 rounded-full object-cover"
      />
      <span>
        Neon Garden
        <small className={`mt-0.5 block font-sans text-[.62rem] uppercase tracking-[.28em] ${smallTone}`}>
          Event Hire
        </small>
      </span>
    </Link>
  )
}
