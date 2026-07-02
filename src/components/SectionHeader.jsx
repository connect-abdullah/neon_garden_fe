import Eyebrow from './ui/Eyebrow.jsx'

// Reusable section heading: eyebrow + title + optional description.
// Replaces the old "SectionHead" and any decorative trailing-slash headers.
const ALIGN = {
  center: 'mx-auto text-center items-center',
  left: 'text-left items-start',
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'gold',
  titleClass = '',
  className = '',
  maxWidth = 'max-w-[760px]',
}) {
  const isCenter = align === 'center'
  return (
    <div className={`flex flex-col ${ALIGN[align] || ALIGN.center} ${isCenter ? maxWidth : ''} mb-10 sm:mb-14 ${className}`}>
      {eyebrow && (
        <div className={`mb-3.5 flex ${isCenter ? 'justify-center' : ''}`}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      {title && <h2 className={`mb-3.5 ${titleClass}`}>{title}</h2>}
      {description && (
        <p className={`text-[1.05rem] leading-relaxed ${isCenter ? 'max-w-[640px]' : ''}`}>{description}</p>
      )}
    </div>
  )
}
