import { Link } from 'react-router-dom'
import { ChevronRight } from './icons.jsx'

// Elegant, reusable breadcrumb. Last item is rendered as the current page.
// items: [{ label, to }]  — the final item's `to` is ignored.
export default function Breadcrumb({ items = [], tone = 'light', className = '' }) {
  if (!items.length) return null

  const isLight = tone === 'light'
  const base = isLight ? 'text-white/70' : 'text-muted'
  const linkHover = 'transition-colors hover:text-neonpink'
  const current = isLight ? 'text-white' : 'text-plum'
  const sep = isLight ? 'text-white/40' : 'text-muted/50'

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[.78rem] font-medium uppercase tracking-[.16em] ${base}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-x-1.5">
              {last || !item.to ? (
                <span className={current} aria-current={last ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className={linkHover}>
                  {item.label}
                </Link>
              )}
              {!last && <ChevronRight size={13} className={sep} aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
