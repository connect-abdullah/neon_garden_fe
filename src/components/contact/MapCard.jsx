import { MapPin } from '../icons.jsx'

// Embedded map inside a premium glass-bordered card with a floating location badge.
export default function MapCard({ mapEmbed, address, title = 'Visit our studio' }) {
  return (
    <div className="relative overflow-hidden rounded-tokenlg border border-line/70 bg-white p-2 shadow-card">
      <div className="relative h-[380px] overflow-hidden rounded-[22px] bg-cream2 sm:h-[440px]">
        <iframe
          title="Neon Garden Event Hire location"
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0"
        />
        {/* floating location badge */}
        <div className="glass pointer-events-none absolute bottom-4 left-4 right-4 flex items-center gap-3.5 rounded-2xl p-4 shadow-soft sm:right-auto sm:max-w-[360px]">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-neonpink to-plum text-white">
            <MapPin size={20} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <strong className="block font-serif text-[1.05rem] font-medium text-plum">{title}</strong>
            <span className="block truncate text-[.85rem] text-inksoft">{address}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
