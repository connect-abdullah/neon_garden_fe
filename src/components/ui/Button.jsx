import { Link } from 'react-router-dom'

// Unified button/link. Renders <Link> (to), <a> (href) or <button> automatically.
const BASE =
  'group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold uppercase tracking-[.08em] whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60'

const VARIANTS = {
  primary: 'bg-plum text-white shadow-soft hover:bg-neonpink hover:text-white hover:shadow-cardhover',
  gold: 'bg-gradient-to-br from-gold to-golddeep text-white shadow-soft hover:brightness-105 hover:text-white hover:shadow-cardhover',
  ghost: 'bg-transparent text-plum border border-plum/70 hover:bg-plum hover:text-white',
  light: 'bg-white text-plum shadow-soft hover:text-neonpink hover:shadow-cardhover',
  outlineLight: 'bg-transparent text-white border border-white/50 hover:bg-white hover:text-plum',
  whatsapp: 'bg-whatsapp text-white shadow-soft hover:bg-whatsappdark hover:text-white',
}

const SIZES = {
  lg: 'px-8 py-4 text-[.9rem]',
  md: 'px-[26px] py-3.5 text-[.85rem]',
  sm: 'px-[18px] py-2.5 text-[.75rem]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  icon: Icon,
  iconRight: IconRight,
  iconSize = 18,
  className = '',
  children,
  ...rest
}) {
  const cls = `${BASE} ${VARIANTS[variant] || VARIANTS.primary} ${SIZES[size] || SIZES.md} ${className}`

  const inner = (
    <>
      {Icon && <Icon size={iconSize} className="shrink-0" aria-hidden="true" />}
      {children}
      {IconRight && (
        <IconRight
          size={iconSize}
          className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} className={cls} {...rest}>
      {inner}
    </button>
  )
}
