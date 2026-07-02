import { Link } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import { ArrowRight } from '../icons.jsx'

// Premium image service card with optional icon badge, tag and CTA.
export default function ServiceCard({
  img,
  title,
  text,
  description,
  tag,
  icon: Icon,
  alt,
  to = '/contact',
  ctaLabel = 'Enquire Now',
  ctaTo,
}) {
  const body = text || description
  return (
    <article className="card-hover group flex h-full w-full flex-col overflow-hidden rounded-tokenlg border border-line/60 bg-white shadow-card hover:border-neonpink/30 hover:shadow-cardhover">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream2">
        <Link to={to} aria-label={title} className="block h-full w-full">
          <img
            src={img}
            alt={alt || title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-plum/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </Link>
        {tag && (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[.58rem] font-semibold uppercase tracking-[.14em] text-plum shadow-soft backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-[.68rem]">
            {tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 pb-5 sm:gap-3 sm:p-[26px] sm:pb-[30px]">
        <h3 className="text-[1.05rem] transition-colors duration-300 group-hover:text-neonpink sm:text-[1.3rem]">
          {title}
        </h3>
        {body && <p className="hidden text-[.95rem] leading-relaxed sm:block">{body}</p>}
        <div className="mt-auto hidden pt-2 sm:block">
          <Button variant="ghost" size="sm" to={ctaTo || to} iconRight={ArrowRight}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  )
}
