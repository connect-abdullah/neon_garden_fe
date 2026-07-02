import { Link } from 'react-router-dom'

// The "NG · Neon Garden / Event Hire" lockup, used in nav and footer.
export default function Brand({ className = '', smallTone = 'text-golddeep' }) {
  return (
    <Link
      to="/"
      aria-label="Neon Garden Event Hire home"
      className={`flex items-center gap-3 font-serif text-[1.5rem] leading-none ${className}`}
    >
      <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#ff4d9d,#2b1233_70%)] font-serif text-[1.1rem] text-white shadow-[0_0_0_4px_rgba(255,77,157,.12)]">
        NG
      </span>
      <span>
        Neon Garden
        <small className={`mt-0.5 block font-sans text-[.62rem] uppercase tracking-[.28em] ${smallTone}`}>
          Event Hire
        </small>
      </span>
    </Link>
  )
}
