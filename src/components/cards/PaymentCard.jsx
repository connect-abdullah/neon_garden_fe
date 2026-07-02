import Button from '../ui/Button.jsx'
import { CheckCircle } from '../icons.jsx'

// Reusable payment/pricing card.
export default function PaymentCard({
  icon: Icon,
  title,
  description,
  text,
  amount,
  steps,
  badge,
  featured = false,
  button,
}) {
  const body = description || text
  return (
    <div
      className={`card-hover relative flex h-full flex-col overflow-hidden rounded-tokenlg p-6 text-center sm:p-10 ${
        featured
          ? 'border-2 border-neonpink bg-gradient-to-b from-white to-blush shadow-cardhover'
          : 'border border-line bg-white shadow-card hover:shadow-cardhover'
      }`}
    >
      {featured && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neonpink via-gold to-neongreen"
        />
      )}

      {badge && (
        <span className="absolute right-4 top-4 rounded-full bg-neonpink px-3 py-1 text-[.64rem] font-semibold uppercase tracking-[.16em] text-white shadow-soft">
          {badge}
        </span>
      )}

      {Icon && (
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-gold to-golddeep text-white shadow-soft">
          <Icon size={26} aria-hidden="true" />
        </div>
      )}

      <h3 className="mb-2.5 text-[1.35rem] sm:text-[1.5rem]">{title}</h3>
      {body && <p className="text-[.94rem] leading-relaxed">{body}</p>}
      {amount && (
        <div className="my-5 font-serif text-[2rem] leading-none text-neonpink sm:text-[2.2rem]">{amount}</div>
      )}

      {steps && steps.length > 0 && (
        <ul className="mb-6 mt-2 flex flex-col gap-2.5 text-left">
          {steps.map((s) => (
            <li key={s} className="flex items-start gap-2.5 text-[.9rem] text-inksoft">
              <CheckCircle size={18} className="mt-0.5 shrink-0 text-greendeep" aria-hidden="true" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      )}

      {button && (
        <div className="mt-auto space-y-2 pt-2">
          <Button
            variant={button.variant || (featured ? 'gold' : 'primary')}
            href={button.href}
            to={button.to}
            icon={button.icon}
            className="w-full"
          >
            {button.label}
          </Button>
          <p className="text-[.72rem] uppercase tracking-[.12em] text-muted">Secure PayPal checkout</p>
        </div>
      )}
    </div>
  )
}
