import { useState } from 'react'
import { Maximize2 } from '../icons.jsx'

// Masonry gallery tile with skeleton loading + hover zoom. Opens the lightbox.
export default function GalleryCard({ src, alt = 'Neon Garden styled event', onClick }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-token bg-cream2 shadow-card transition-shadow duration-500 hover:shadow-cardhover"
    >
      {!loaded && <span className="skeleton absolute inset-0 z-10" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(43,18,51,.6))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-4 right-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white/90 text-plum opacity-0 shadow-soft backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <Maximize2 size={18} aria-hidden="true" />
      </span>
    </button>
  )
}
