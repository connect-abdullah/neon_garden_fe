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
      <div className="flex items-center justify-between gap-3 p-6">
        <h3 className="text-[1.3rem] transition-colors duration-300 group-hover:text-neonpink">{title}</h3>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-plum/5 text-plum transition-all duration-300 group-hover:bg-neonpink group-hover:text-white">
          <ArrowRight size={17} aria-hidden="true" />
        </span>
      </div>
      <span className="sr-only">{label}</span>
    </Link>
  )
}
