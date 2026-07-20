// Compact Pinterest-style masonry for the owner-story image strip (5 tiles).
const ASPECT = {
  tall: 'aspect-[3/4]',
  wide: 'aspect-[4/3]',
  square: 'aspect-square',
}

function CollageTile({ src, alt, aspect = 'square' }) {
  return (
    <div className="mb-2 break-inside-avoid sm:mb-3">
      <div className={`overflow-hidden rounded-token bg-cream2 shadow-card ${ASPECT[aspect] || ASPECT.square}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

export default function BrandStoryCollage({ items = [] }) {
  return (
    <div className="mx-auto max-w-[680px] columns-2 gap-2 sm:max-w-[760px] sm:gap-3 md:max-w-[820px] md:columns-3">
      {items.map((item) => (
        <CollageTile key={item.src} src={item.src} alt={item.alt} aspect={item.aspect} />
      ))}
    </div>
  )
}
