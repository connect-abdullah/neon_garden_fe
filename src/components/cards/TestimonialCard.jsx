import { Quote, Star, BadgeCheck } from '../icons.jsx'

function initialsOf(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

// Pick a stable brand gradient per name so avatars feel varied but on-brand.
const GRADIENTS = [
  'from-neonpink to-plum',
  'from-gold to-golddeep',
  'from-blushdeep to-neonpink',
  'from-plum to-inksoft',
  'from-greendeep to-plum',
]
function gradientFor(name = '') {
  let sum = 0
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i)
  return GRADIENTS[sum % GRADIENTS.length]
}

export default function TestimonialCard({
  name,
  location,
  company,
  detail,
  quote,
  rating = 5,
  service,
  verified = false,
  avatar,
  showRating = true,
  showCompany = true,
}) {
  const sub = location || company || detail
  return (
    <article className="card-hover relative flex h-full flex-col justify-between overflow-hidden rounded-tokenlg border border-line/70 bg-white p-7 shadow-card hover:border-neonpink/30 hover:shadow-cardhover">
      <Quote
        size={64}
        className="pointer-events-none absolute -right-2 -top-3 text-neonpink/10"
        aria-hidden="true"
      />

      <div className="relative">
        {showRating && (
          <div className="mb-4 flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? 'fill-gold text-gold' : 'text-line'}
                aria-hidden="true"
              />
            ))}
          </div>
        )}
        <p className="font-serif text-[1.12rem] italic leading-relaxed text-inksoft">“{quote}”</p>
        {service && (
          <span className="mt-4 inline-block rounded-full bg-cream2 px-3 py-1 text-[.7rem] font-semibold uppercase tracking-[.12em] text-golddeep">
            {service}
          </span>
        )}
      </div>

      <div className="relative mt-6 flex items-center gap-3.5 border-t border-line/70 pt-5">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            loading="lazy"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br ${gradientFor(
              name,
            )} font-serif text-[1.05rem] text-white`}
            aria-hidden="true"
          >
            {initialsOf(name)}
          </span>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <strong className="truncate font-serif text-[1.1rem] font-medium text-plum">{name}</strong>
            {verified && (
              <BadgeCheck size={16} className="shrink-0 text-neonpink" aria-label="Verified" />
            )}
          </div>
          {showCompany && sub && <span className="block truncate text-[.85rem] text-muted">{sub}</span>}
        </div>
      </div>
    </article>
  )
}
