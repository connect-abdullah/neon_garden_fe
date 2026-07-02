import { Link } from 'react-router-dom'

// Overlay image card with title + text revealed over a gradient.
// Used for "Trending Inspiration" and Packages grids.
export default function ImageCard({
  img,
  title,
  text,
  eyebrow,
  to,
  href,
  alt,
  ratio = 'aspect-[4/5]',
  revealText = false,
}) {
  const content = (
    <>
      <img
        src={img}
        alt={alt || title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(43,18,51,.88))]" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8">
        {eyebrow && (
          <small className="mb-2 block text-[.7rem] font-semibold uppercase tracking-[.22em] text-blush">
            {eyebrow}
          </small>
        )}
        <h3 className="text-[1.5rem] text-white">{title}</h3>
        {text && (
          <p
            className={`mt-2 text-[.92rem] text-white/85 ${
              revealText
                ? 'max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-[140px] group-hover:opacity-100'
                : ''
            }`}
          >
            {text}
          </p>
        )}
      </div>
    </>
  )

  const cls = `card-hover group relative block overflow-hidden rounded-tokenlg bg-cream2 shadow-card hover:shadow-cardhover ${ratio}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    )
  }
  return <div className={cls}>{content}</div>
}
