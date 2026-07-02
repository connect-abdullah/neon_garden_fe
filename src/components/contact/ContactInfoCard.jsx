import { ArrowUpRight } from '../icons.jsx'

// Single contact method card (phone, email, studio, etc.).
export default function ContactInfoCard({ icon: Icon, title, text, href, external }) {
  const inner = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blush to-neonpink text-white shadow-soft transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
        {Icon && <Icon size={20} aria-hidden="true" />}
      </span>
      <div className="min-w-0 flex-1">
        <h4 className="mb-0.5 text-[1.05rem]">{title}</h4>
        <p className="break-words text-[.95rem] text-inksoft transition-colors group-hover:text-neonpink">{text}</p>
      </div>
      {href && (
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-neonpink"
          aria-hidden="true"
        />
      )}
    </>
  )

  const cls =
    'card-hover group flex items-start gap-4 rounded-tokenlg border border-line/70 bg-white p-5 shadow-card hover:border-neonpink/30 hover:shadow-cardhover'

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={cls}
      >
        {inner}
      </a>
    )
  }
  return <div className={cls}>{inner}</div>
}
