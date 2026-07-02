import { Link } from 'react-router-dom'

// The "NG · Neon Garden / Event Hire" lockup, used in nav and footer.
export default function Brand({ className = '', smallTone = 'text-golddeep' }) {
  return (
    <Link
      to="/"
      aria-label="Neon Garden Event Hire home"
      className={`flex items-center gap-3 font-serif text-[1.5rem] leading-none ${className}`}
    >
      <img
        src="/assets/images/ng-001.jpg"
        alt="Neon Garden Event Hire"
        className="h-[42px] w-[42px] shrink-0 rounded-full object-cover shadow-[0_0_0_4px_rgba(255,77,157,.12)]"
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
