import { Link } from 'react-router-dom'

// Compact circular icon button. Requires an accessible label.
const VARIANTS = {
  solid: 'bg-plum text-white hover:bg-neonpink',
  soft: 'bg-plum/5 text-plum hover:bg-neonpink hover:text-white',
  outline: 'border border-line text-plum hover:border-neonpink hover:text-neonpink',
  ghostLight: 'text-white/80 hover:bg-white/10 hover:text-white',
  whatsapp: 'bg-whatsapp text-white hover:bg-whatsappdark',
}

const SIZES = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-[52px] w-[52px]',
}

export default function IconButton({
  icon: Icon,
  label,
  to,
  href,
  variant = 'soft',
  size = 'md',
  iconSize = 20,
  className = '',
  ...rest
}) {
  const cls = `inline-grid place-items-center rounded-full transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none ${
    VARIANTS[variant] || VARIANTS.soft
  } ${SIZES[size] || SIZES.md} ${className}`

  const inner = Icon ? <Icon size={iconSize} aria-hidden="true" /> : null

  if (to) {
    return (
      <Link to={to} aria-label={label} title={label} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={cls}
        {...rest}
      >
        {inner}
      </a>
    )
  }
  return (
    <button type="button" aria-label={label} title={label} className={cls} {...rest}>
      {inner}
    </button>
  )
}
