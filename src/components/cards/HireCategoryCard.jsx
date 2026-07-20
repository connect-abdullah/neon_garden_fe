import { Link } from 'react-router-dom'

// Hire category card — full-bleed image with centered label overlay (reference design).
export default function HireCategoryCard({ img, title, href, linked = true }) {
  const content = (
    <>
      <img
        src={img}
        alt={`${title} available for hire in Melbourne`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-3 sm:py-4">
        <h2 className="text-center font-sans text-sm text-white sm:text-base">{title}</h2>
      </div>
    </>
  )

  const cls =
    'group relative block aspect-[16/10] overflow-hidden rounded-token bg-cream2'

  if (linked && href) {
    return (
      <Link to={href} className={cls}>
        {content}
      </Link>
    )
  }

  return <article className={cls}>{content}</article>
}
