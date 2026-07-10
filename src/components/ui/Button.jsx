import { Link } from 'react-router-dom'

// Unified button/link. Renders <Link> (to), <a> (href) or <button> automatically.
const BASE =
  'group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold uppercase tracking-[.08em] whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60'

const VARIANTS = {
  primary: 'bg-forest text-white hover:bg-forest-deep',
  gold: 'bg-forest text-white hover:bg-forest-deep',
  ghost: 'bg-transparent text-forest border border-forest/65 hover:bg-forest hover:text-white',
  light: 'bg-white text-forest border border-border hover:bg-ivory',
  outlineLight: 'bg-transparent text-white border border-white/50 hover:bg-white hover:text-forest',
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
