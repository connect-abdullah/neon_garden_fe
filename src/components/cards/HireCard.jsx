import { Link } from 'react-router-dom'
import { ArrowRight } from '../icons.jsx'

// Compact hire-collection card (image + title + link). Used on the Home page,
// where the row becomes horizontally scrollable on mobile.
export default function HireCard({ img, title, to = '/hire-items', label = 'View Collection' }) {
  return (
    <Link
      to={to}
      className="card-hover group flex h-full flex-col overflow-hidden rounded-tokenlg border border-line/60 bg-white shadow-card hover:border-neonpink/30 hover:shadow-cardhover"
    >
      <div className="aspect-[4/5] overflow-hidden bg-cream2">
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex items-center justify-between gap-2 p-4 sm:gap-3 sm:p-6">
        <h3 className="min-w-0 [@media(max-width:322px)]:text-[0.70rem] text-[0.95rem] leading-tight [overflow-wrap:anywhere] transition-colors duration-300 group-hover:text-neonpink sm:text-[1.3rem]">{title}</h3>
        <span className="grid [@media(max-width:319px)]:h-6 [@media(max-width:319px)]:w-6 h-8 w-8 shrink-0 place-items-center rounded-full bg-plum/5 text-plum transition-all duration-300 group-hover:bg-neonpink group-hover:text-white sm:h-9 sm:w-9">
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
      <span className="sr-only">{label}</span>
    </Link>
  )
}
