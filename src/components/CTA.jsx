import Container from './ui/Container.jsx'
import Button from './ui/Button.jsx'

export default function CTA({
  eyebrow,
  title,
  description,
  buttonText,
  buttonLink,
  buttonTo,
  secondaryText,
  secondaryHref,
  secondaryTo,
  fullWidth = false,
  rounded = true,
  children,
}) {
  const primaryProps = buttonTo
    ? { to: buttonTo }
    : buttonLink
      ? buttonLink.startsWith('http') || buttonLink.startsWith('mailto') || buttonLink.startsWith('tel')
        ? { href: buttonLink }
        : { to: buttonLink }
      : {}

  const secondaryProps = secondaryHref
    ? { href: secondaryHref }
    : secondaryTo
      ? { to: secondaryTo }
      : {}

  const panel = (
    <div
      className={`relative overflow-hidden bg-forest px-8 py-14 text-center text-white md:px-14 md:py-20 ${
        rounded && !fullWidth ? 'rounded-tokenlg border border-white/10' : ''
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,.14) 1.2px, transparent 1.2px)',
          backgroundSize: '22px 22px',
        }}
      />
      {rounded && !fullWidth && (
        <>
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/15" />
        </>
      )}
      <div className="relative mx-auto max-w-[820px]">
        {eyebrow && <p className="text-xs uppercase tracking-[0.1em] text-white/70">{eyebrow}</p>}
        {title && <h2 className="mt-5 font-serif uppercase text-white">{title}</h2>}
        {description && <p className="mx-auto mt-4 max-w-[650px] text-white/80">{description}</p>}
        {(children || buttonText || secondaryText) && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {children || (
              <>
                {buttonText && (
                  <Button variant="light" {...primaryProps}>
                    {buttonText}
                  </Button>
                )}
                {secondaryText && (
                  <Button variant="outlineLight" {...secondaryProps}>
                    {secondaryText}
                  </Button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )

  if (fullWidth) {
    return <section className="bg-forest py-16 md:py-24">{panel}</section>
  }

  return (
    <section className="bg-ivory py-16 md:py-24">
      <Container>{panel}</Container>
    </section>
  )
}
