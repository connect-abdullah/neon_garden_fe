export default function TestimonialStripCard({ quote, name, location, service }) {
  return (
    <figure className="flex h-full w-[min(82vw,300px)] shrink-0 flex-col justify-between border border-border bg-white px-6 py-7 sm:w-[320px] md:w-[360px] md:px-7 md:py-8">
      <blockquote className="font-serif text-[1.05rem] leading-relaxed text-forest md:text-[1.12rem]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-5">
        <p className="font-sans text-sm font-medium text-forest">{name}</p>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-body">
          {location && <span>{location}</span>}
          {location && service && <span aria-hidden="true">·</span>}
          {service && <span className="uppercase tracking-[0.08em]">{service}</span>}
        </div>
      </figcaption>
    </figure>
  )
}
