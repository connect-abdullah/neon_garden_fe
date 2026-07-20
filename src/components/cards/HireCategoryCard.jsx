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
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 top-[26%] flex -translate-y-1/2 items-center justify-center bg-black/50 px-5 py-4 backdrop-blur-[3px] sm:py-5">
        <h2 className="text-center font-sans text-base font-semibold tracking-wide text-white sm:text-lg">
          {title}
        </h2>
      </div>
    </>
  )

  const cls = 'relative block aspect-[4/3] overflow-hidden rounded-tokenlg bg-cream2'

  if (linked && href) {
    return (
      <Link to={href} className={cls}>
        {content}
      </Link>
    )
  }

  return <article className={cls}>{content}</article>
}
