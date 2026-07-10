import { MapPin } from '../icons.jsx'

export default function MapCard({ mapEmbed, address, title = 'Visit our studio' }) {
  return (
    <div className="overflow-hidden border border-border bg-white">
      <div className="relative h-[360px] overflow-hidden bg-ivory sm:h-[420px]">
        <iframe
          title="Neon Garden Event Hire location"
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0"
        />
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center gap-3 border border-border bg-white/95 p-4 sm:right-auto sm:max-w-[360px]">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-white">
            <MapPin size={18} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <strong className="block font-sans text-sm font-medium text-forest">{title}</strong>
            <span className="block text-sm text-body">{address}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
