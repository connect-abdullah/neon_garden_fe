import { useMemo, useState } from 'react'
import GalleryCard from '../cards/GalleryCard.jsx'
import Lightbox from '../Lightbox.jsx'
import Button from '../ui/Button.jsx'
import { Plus } from '../icons.jsx'

// Pinterest-style responsive masonry with filters, incremental "Load More",
// lazy-loaded images, skeletons and a built-in lightbox.
export default function GalleryMasonry({
  items = [],
  filters = [],
  initialCount = 24,
  step = 16,
  showFilters = true,
}) {
  const [filter, setFilter] = useState('all')
  const [count, setCount] = useState(initialCount)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () => items.filter((t) => filter === 'all' || t.cat === filter),
    [items, filter],
  )
  const visible = filtered.slice(0, count)
  const srcs = filtered.map((t) => t.src)
  const hasMore = count < filtered.length

  const changeFilter = (value) => {
    setFilter(value)
    setCount(initialCount)
  }

  const step2 = (d) =>
    setLightboxIndex((i) => (i === null ? i : (i + d + srcs.length) % srcs.length))

  return (
    <>
      {showFilters && filters.length > 0 && (
        <div className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2 no-scrollbar sm:mx-0 sm:mb-10 sm:flex-wrap sm:justify-center sm:gap-2.5 sm:overflow-visible sm:px-0">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => changeFilter(f.value)}
              aria-pressed={filter === f.value}
              className={`shrink-0 rounded-full border px-3.5 py-2 text-[.68rem] font-semibold uppercase tracking-[.08em] transition-all duration-300 sm:px-[22px] sm:py-2.5 sm:text-[.8rem] ${
                filter === f.value
                  ? 'border-forest bg-forest text-white'
                  : 'border-border bg-white text-body hover:border-forest hover:text-forest'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4">
        {visible.map((t, i) => (
          <GalleryCard key={t.src} src={t.src} alt={t.alt} onClick={() => setLightboxIndex(i)} />
        ))}
      </div>

      {hasMore && step > 0 && (
        <div className="mt-12 flex justify-center">
          <Button variant="primary" icon={Plus} onClick={() => setCount((c) => c + step)}>
            Load More
          </Button>
        </div>
      )}

      <Lightbox
        images={srcs}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => step2(-1)}
        onNext={() => step2(1)}
      />
    </>
  )
}
