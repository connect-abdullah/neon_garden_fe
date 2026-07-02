// Vertical step timeline with lucide icons. Used for "How to pay".
// steps: [{ icon, title, text }]
export default function StepTimeline({ steps = [] }) {
  if (!steps.length) return null
  return (
    <ol className="relative flex flex-col gap-8">
      {/* connecting line */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-neonpink/40 via-line to-transparent"
      />
      {steps.map((step, i) => {
        const Icon = step.icon
        return (
          <li key={step.title} className="relative flex gap-5">
            <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold to-golddeep text-white shadow-soft">
              {Icon ? <Icon size={20} aria-hidden="true" /> : <span className="font-serif">{i + 1}</span>}
            </span>
            <div className="pt-1">
              <div className="mb-1 flex items-center gap-2.5">
                <span className="font-sans text-[.72rem] font-semibold uppercase tracking-[.18em] text-golddeep">
                  Step {i + 1}
                </span>
              </div>
              <h4 className="mb-1.5 text-[1.15rem]">{step.title}</h4>
              <p className="text-[.95rem] leading-relaxed">{step.text}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
