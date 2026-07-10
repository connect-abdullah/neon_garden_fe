import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronRight } from '../icons.jsx'

export default function PackageRow({ item, titleTag: TitleTag = 'h2' }) {
  const url = `/packages/${item.slug}`

  return (
    <article className="border-b border-border last:border-b-0">
      <div className="hidden lg:grid lg:grid-cols-[minmax(220px,260px)_1.2fr_1fr_80px]">
        <Link to={url} className="group block h-full overflow-hidden">
          <img
            src={item.listImage}
            alt={`${item.title} package setup`}
            className="h-full min-h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </Link>
        <div className="border-r border-border p-6 md:p-8">
          <TitleTag className="font-sans text-2xl text-forest">{item.title}</TitleTag>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.08em] text-body">
              {item.guestRange}
            </span>
            <span className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.08em] text-body">
              {item.price}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <ul className="list-disc space-y-2 pl-5 text-sm text-body">
            {item.inclusionsPreview.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <Link
          to={url}
          aria-label={`View ${item.title} package`}
          className="group grid min-h-full place-items-center border-l border-border bg-forest text-white transition-colors hover:bg-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        >
          <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="space-y-5 py-8 lg:hidden">
        <TitleTag className="font-sans text-[1.65rem] leading-tight text-forest">{item.title}</TitleTag>
        <div className="flex flex-wrap gap-2.5">
          <span className="rounded-full border border-border bg-white px-4 py-2 text-sm text-body">{item.guestRange}</span>
          <span className="rounded-full border border-border bg-white px-4 py-2 text-sm text-body">{item.price}</span>
        </div>
        <Link to={url} className="group block overflow-hidden rounded-md">
          <img
            src={item.listImage}
            alt={`${item.title} package setup`}
            className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </Link>
        <Link
          to={url}
          aria-label={`View ${item.title} package`}
          className="grid h-14 w-full place-items-center rounded-md border border-border bg-white text-forest transition-colors hover:border-forest hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        >
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
