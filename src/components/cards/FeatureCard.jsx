import { Sparkles } from '../icons.jsx'

// Icon + title + text card for "Our Approach", "Why Choose Us", etc.
export default function FeatureCard({ icon: Icon = Sparkles, title, text, description, align = 'left' }) {
  const body = text || description
  const isCenter = align === 'center'
  return (
    <div
      className={`card-hover group h-full rounded-tokenlg border border-line/70 bg-white p-8 shadow-card hover:border-neonpink/30 hover:shadow-cardhover ${
        isCenter ? 'text-center' : ''
      }`}
    >
      <div
        className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blush to-neonpink text-white shadow-soft transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3 ${
          isCenter ? 'mx-auto' : ''
        }`}
      >
        <Icon size={24} aria-hidden="true" />
      </div>
      <h4 className="mb-2.5 text-[1.25rem]">{title}</h4>
      {body && <p className="text-[.95rem] leading-relaxed">{body}</p>}
    </div>
  )
}
