import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container.jsx'
import Button from './ui/Button.jsx'

// One reusable CTA band for every page. Pass different props per page.
const VARIANTS = {
  plum: {
    panel: 'bg-gradient-to-br from-plum via-[#3a1745] to-plumdark text-white',
    text: 'text-white/80',
    dot: 'rgba(255,255,255,.14)',
    glow1: 'rgba(255,77,157,.28)',
    glow2: 'rgba(180,242,90,.16)',
    primary: 'light',
    secondary: 'outlineLight',
  },
  gold: {
    panel: 'bg-gradient-to-br from-gold to-golddeep text-white',
    text: 'text-white/85',
    dot: 'rgba(255,255,255,.18)',
    glow1: 'rgba(255,255,255,.3)',
    glow2: 'rgba(43,18,51,.18)',
    primary: 'light',
    secondary: 'outlineLight',
  },
  blush: {
    panel: 'bg-gradient-to-br from-blush to-blushdeep text-plum',
    text: 'text-inksoft',
    dot: 'rgba(43,18,51,.10)',
    glow1: 'rgba(255,77,157,.22)',
    glow2: 'rgba(180,242,90,.22)',
    primary: 'primary',
    secondary: 'ghost',
  },
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonLink,
  buttonIcon,
  secondaryText,
  secondaryLink,
  secondaryHref,
  backgroundVariant = 'plum',
  fullWidth = false,
  rounded = true,
  icon: Icon,
  showPattern = true,
  spacing = 'md',
  children,
}) {
  const reduce = useReducedMotion()
  const v = VARIANTS[backgroundVariant] || VARIANTS.plum
  const pad = fullWidth ? 'px-6 py-16 sm:px-10 sm:py-20 lg:py-24' : 'px-7 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20'
  const sectionSpacing = spacing === 'none' ? '' : 'py-[70px] lg:py-28'

  const buttonLinkProps = buttonLink
    ? buttonLink.startsWith('http') || buttonLink.startsWith('mailto') || buttonLink.startsWith('tel')
      ? { href: buttonLink }
      : { to: buttonLink }
    : {}

  const panel = (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden ${v.panel} ${pad} ${
        rounded && !fullWidth ? 'rounded-tokenlg' : ''
      } shadow-lg2`}
    >
      {/* dotted pattern */}
      {showPattern && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: `radial-gradient(${v.dot} 1.4px, transparent 1.4px)`,
            backgroundSize: '22px 22px',
          }}
        />
      )}
      {/* floating glows */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 animate-floatSlow rounded-full"
        style={{ background: `radial-gradient(circle, ${v.glow1}, transparent 70%)` }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 animate-floatSlow rounded-full [animation-delay:1.5s]"
        style={{ background: `radial-gradient(circle, ${v.glow2}, transparent 70%)` }}
      />

      <div className="relative mx-auto flex max-w-[720px] flex-col items-center text-center">
        {Icon && (
          <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm">
            <Icon size={26} aria-hidden="true" />
          </span>
        )}
        {title && <h2 className={backgroundVariant === 'blush' ? '' : 'text-white'}>{title}</h2>}
        {description && <p className={`mt-4 text-[1.05rem] leading-relaxed ${v.text}`}>{description}</p>}

        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          {children ? (
            children
          ) : (
            <>
              {buttonText && (
                <Button variant={v.primary} icon={buttonIcon} {...buttonLinkProps}>
                  {buttonText}
                </Button>
              )}
              {secondaryText && (
                <Button
                  variant={v.secondary}
                  {...(secondaryHref ? { href: secondaryHref } : { to: secondaryLink })}
                >
                  {secondaryText}
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className={sectionSpacing}>
      {fullWidth ? panel : <Container>{panel}</Container>}
    </section>
  )
}
