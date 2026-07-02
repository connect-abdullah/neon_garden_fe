import { motion, useReducedMotion } from 'framer-motion'
import Container from './ui/Container.jsx'
import Button from './ui/Button.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import Breadcrumb from './Breadcrumb.jsx'

// One reusable hero for every page.
// Two backgrounds: image (full-bleed, light text) or gradient (inner pages, dark text).
const SIZES = {
  full: 'min-h-[92vh] pt-[150px] pb-24 sm:min-h-screen',
  large: 'pt-[150px] pb-[110px] sm:pt-[190px] sm:pb-[120px]',
  compact: 'pt-[140px] pb-[70px] sm:pt-[180px] sm:pb-[96px]',
  page: 'min-h-[320px] pt-[140px] pb-16 sm:min-h-[380px] sm:pt-[180px] sm:pb-20',
}

function renderCTA(cta, fallbackVariant) {
  if (!cta) return null
  const { label, to, href, variant = fallbackVariant, icon, iconRight, ...rest } = cta
  return (
    <Button to={to} href={href} variant={variant} icon={icon} iconRight={iconRight} {...rest}>
      {label}
    </Button>
  )
}

export default function Hero({
  variant,
  eyebrow,
  title,
  subtitle,
  description,
  backgroundImage,
  imageAlt = '',
  showBreadcrumb = false,
  breadcrumbItems = [],
  alignment = 'center',
  overlayOpacity = 0.6,
  size,
  cta,
  secondaryCTA,
  scrollHint = false,
  children,
}) {
  const reduce = useReducedMotion()
  const hasImage = Boolean(backgroundImage)
  const isPage = variant === 'page' || size === 'page'
  const heroSize = SIZES[size] || (isPage ? SIZES.page : hasImage ? SIZES.full : SIZES.compact)
  const isCenter = alignment === 'center'
  const tone = hasImage ? 'light' : 'gold'
  const contentMaxW = isPage ? 'max-w-[780px]' : isCenter ? 'max-w-[900px]' : 'max-w-[760px]'

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      className={`relative flex items-center overflow-hidden ${heroSize} ${
        hasImage ? 'text-white' : 'bg-gradient-to-br from-cream2 to-blush'
      }`}
    >
      {/* Background */}
      {hasImage ? (
        <>
          <div className="absolute inset-0 -z-20">
            <img
              src={backgroundImage}
              alt={imageAlt}
              className="h-full w-full object-cover saturate-[1.05]"
            />
          </div>
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: `linear-gradient(180deg, rgba(43,18,51,${overlayOpacity * 0.4}) 0%, rgba(43,18,51,${
                overlayOpacity * 0.75
              }) 55%, rgba(43,18,51,${Math.min(overlayOpacity + 0.2, 0.95)}) 100%)`,
            }}
          />
        </>
      ) : (
        <>
          <span className="pointer-events-none absolute -right-[120px] -top-[120px] h-[400px] w-[400px] animate-floatSlow rounded-full bg-[radial-gradient(circle,rgba(255,77,157,.18),transparent_70%)]" />
          <span className="pointer-events-none absolute -bottom-[160px] -left-[80px] h-[340px] w-[340px] animate-floatSlow rounded-full bg-[radial-gradient(circle,rgba(180,242,90,.22),transparent_70%)] [animation-delay:1.5s]" />
        </>
      )}

      <Container className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={`flex flex-col ${
            isCenter ? `mx-auto ${contentMaxW} items-center text-center` : `${contentMaxW} items-start text-left`
          }`}
        >
          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <motion.div variants={item} className="mb-5">
              <Breadcrumb items={breadcrumbItems} tone={hasImage ? 'light' : 'dark'} />
            </motion.div>
          )}

          {eyebrow && (
            <motion.div variants={item} className="mb-4">
              <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            </motion.div>
          )}

          <motion.h1
            variants={item}
            className={`${hasImage ? 'text-white' : ''} ${isCenter ? '' : 'max-w-[16ch]'}`}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={item}
              className={`mt-5 max-w-[640px] text-[1.05rem] leading-relaxed ${
                hasImage ? 'text-white/85' : 'text-muted'
              }`}
            >
              {subtitle}
            </motion.p>
          )}

          {description && (
            <motion.p
              variants={item}
              className={`mt-3 max-w-[600px] text-[1rem] leading-relaxed ${
                hasImage ? 'text-white/75' : 'text-inksoft'
              }`}
            >
              {description}
            </motion.p>
          )}

          {(cta || secondaryCTA) && (
            <motion.div
              variants={item}
              className={`mt-8 flex flex-wrap gap-3.5 ${isCenter ? 'justify-center' : ''}`}
            >
              {renderCTA(cta, hasImage ? 'gold' : 'primary')}
              {renderCTA(secondaryCTA, hasImage ? 'outlineLight' : 'ghost')}
            </motion.div>
          )}

          {children && (
            <motion.div variants={item} className={`mt-6 ${isCenter ? 'w-full' : ''}`}>
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>

      {scrollHint && (
        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 text-[.7rem] uppercase tracking-[.3em] text-white/70">
          Scroll
          <span className="h-10 w-px animate-scrollLine bg-white/50" />
        </div>
      )}
    </section>
  )
}
