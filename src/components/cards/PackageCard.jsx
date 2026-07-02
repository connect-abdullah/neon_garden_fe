import { Link } from 'react-router-dom'
import { ArrowUpRight } from '../icons.jsx'

// Package card with number badge, image, title and reveal-on-hover description.
export default function PackageCard({ num, title, text, img, to = '/contact', price }) {
  return (
    <Link
      to={to}
      className="card-hover group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-tokenlg bg-cream2 shadow-card hover:shadow-cardhover"
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(43,18,51,.9))]" />

      {num && (
        <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 font-serif text-[.9rem] text-white backdrop-blur-sm sm:left-5 sm:top-5 sm:h-11 sm:w-11 sm:text-[1.05rem]">
          {num}
        </span>
      )}
      <span className="absolute right-3 top-3 hidden h-11 w-11 translate-y-1 place-items-center rounded-full bg-neonpink text-white opacity-0 shadow-soft transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:grid sm:right-5 sm:top-5">
        <ArrowUpRight size={20} aria-hidden="true" />
      </span>

      <div className="relative p-4 text-white sm:p-7 lg:p-8">
        <small className="mb-1 block text-[.62rem] font-semibold uppercase tracking-[.18em] text-blush sm:mb-1.5 sm:text-[.7rem] sm:tracking-[.22em]">
          {price ? price : 'Styling Package'}
        </small>
        <h3 className="text-[1rem] leading-tight text-white sm:text-[1.55rem]">{title}</h3>
        {text && (
          <p className="mt-1.5 text-[.78rem] leading-snug text-white/85 sm:mt-2 sm:max-h-0 sm:overflow-hidden sm:text-[.92rem] sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:max-h-[140px] sm:group-hover:opacity-100">
            {text}
          </p>
        )}
      </div>
    </Link>
  )
}
