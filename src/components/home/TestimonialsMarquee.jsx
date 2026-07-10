import TestimonialStripCard from './TestimonialStripCard.jsx'

export default function TestimonialsMarquee({ items = [] }) {
  if (!items.length) return null

  const track = [...items, ...items]

  return (
    <section className="overflow-hidden bg-ivory py-16 md:py-20" aria-label="Client testimonials">
      <div className="mx-auto mb-10 max-w-container px-5 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.12em] text-body">Testimonials</p>
        <h2 className="mt-3 max-w-[20ch] font-serif text-forest">Loved by Melbourne celebrations</h2>
      </div>

      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ivory to-transparent sm:w-16 md:w-24"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ivory to-transparent sm:w-16 md:w-24"
        />

        <div className="overflow-hidden motion-reduce:overflow-x-auto motion-reduce:px-5 no-scrollbar">
          <ul
            className="flex w-max gap-5 motion-reduce:w-full motion-reduce:min-w-0 motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:overflow-x-auto motion-reduce:pb-2 animate-marquee-slow motion-reduce:animate-none"
            aria-label="Scrolling testimonials"
          >
            {track.map((item, index) => (
              <li key={`${item.name}-${index}`} className="motion-reduce:snap-center">
                <TestimonialStripCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
