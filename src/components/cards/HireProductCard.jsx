import Button from '../ui/Button.jsx'
import { formatHirePrice } from '../../data/hireItems.js'

function compactValue(value) {
  return String(value)
    .replace(/\s*including GST/gi, '')
    .replace(/\s*inc\.?\s*GST/gi, '')
    .trim()
}

function PriceBlock({ price }) {
  const rows = formatHirePrice(price)
  if (!rows.length) return null

  return (
    <div className="space-y-0.5">
      {rows.map((row) => (
        <p
          key={`${row.label}-${row.value}`}
          className="text-[11px] leading-snug text-forest sm:text-xs md:text-[13px]"
        >
          {row.label ? (
            <>
              <span className="text-muted">{row.label}</span>
              <span className="text-muted"> · </span>
              {compactValue(row.value)}
            </>
          ) : (
            compactValue(row.value)
          )}
        </p>
      ))}
      <p className="pt-0.5 text-[9px] uppercase tracking-[0.06em] text-muted sm:text-[10px]">
        Inc. GST
      </p>
    </div>
  )
}

export default function HireProductCard({ product }) {
  const hasDisplay = Boolean(product.display)

  return (
    <article className="card-hover group flex h-full w-full flex-col overflow-hidden rounded-xl border border-line/60 bg-white shadow-card hover:border-neonpink/30 hover:shadow-cardhover sm:rounded-tokenlg">
      <div className="relative aspect-square overflow-hidden bg-cream2 sm:aspect-[4/3]">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] sm:object-contain sm:p-2"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-2.5 sm:gap-2.5 sm:p-4">
        <h3 className="font-sans text-[0.8rem] leading-snug text-forest transition-colors duration-300 group-hover:text-neonpink sm:text-[1.05rem]">
          {product.title}
        </h3>

        <div className="flex min-h-0 flex-1 flex-col gap-2 sm:gap-2.5">
          {product.description && (
            <div>
              <p className="text-[9px] uppercase tracking-[0.08em] text-muted sm:text-[10px]">Description</p>
              <p className="mt-1 text-[11px] leading-snug text-body sm:text-xs sm:leading-relaxed md:text-[13px]">
                {product.description}
              </p>
            </div>
          )}

          {hasDisplay && (
            <div className="border-t border-border/70 pt-2 sm:pt-2.5">
              <p className="text-[9px] uppercase tracking-[0.08em] text-muted sm:text-[10px]">Display</p>
              <p className="mt-1 text-[11px] leading-snug text-body sm:text-xs sm:leading-relaxed md:text-[13px]">
                {product.display}
              </p>
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2 border-t border-border/70 pt-2 sm:flex-row sm:items-end sm:justify-between sm:gap-2 sm:pt-3">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[9px] uppercase tracking-[0.08em] text-muted sm:text-[10px]">Price</p>
            <PriceBlock price={product.price} />
          </div>
          <Button
            to="/contact"
            variant="primary"
            size="sm"
            className="w-full !px-2.5 !py-2 text-[0.6rem] sm:w-auto sm:!px-3 sm:text-[0.65rem]"
          >
            <span className="sm:hidden">Enquire</span>
            <span className="hidden sm:inline">Enquire Now</span>
          </Button>
        </div>
      </div>
    </article>
  )
}
