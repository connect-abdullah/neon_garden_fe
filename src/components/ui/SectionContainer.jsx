import Container from './Container.jsx'

// A full-width section with consistent vertical rhythm + optional background tone.
// Keeps section spacing uniform across every page.
const TONES = {
  cream: 'bg-cream',
  cream2: 'bg-cream2',
  white: 'bg-white',
  plum: 'bg-gradient-to-br from-plum to-plumdark text-white',
  none: '',
}

const SPACING = {
  sm: 'py-14 lg:py-20',
  md: 'py-[70px] lg:py-28',
  lg: 'py-24 lg:py-36',
}

export default function SectionContainer({
  tone = 'none',
  spacing = 'md',
  className = '',
  containerClassName = '',
  contained = true,
  children,
  id,
  ...rest
}) {
  return (
    <section
      id={id}
      className={`relative ${TONES[tone] || ''} ${SPACING[spacing] || SPACING.md} ${className}`}
      {...rest}
    >
      {contained ? <Container className={containerClassName}>{children}</Container> : children}
    </section>
  )
}
