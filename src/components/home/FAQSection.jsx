import { useState } from 'react'
import { Plus } from '../icons.jsx'

export default function FAQSection({ items }) {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[980px] px-5 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.1em] text-body">FAQ</p>
        <h2 className="mx-auto mt-5 max-w-[820px] text-center font-sans text-forest">
          Everything you need to know before booking
        </h2>
        <div className="mt-12 border-y border-border">
          {items.map((item, index) => {
            const id = `faq-item-${index}`
            const isOpen = openIndex === index
            return (
              <div key={item.q} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  className="grid w-full grid-cols-[56px_1fr_28px] items-center gap-4 px-2 py-7 text-left md:py-10"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-xs tracking-[0.08em] text-muted">{String(index + 1).padStart(3, '0')}</span>
                  <span className="text-xl text-forest md:text-2xl">{item.q}</span>
                  <Plus
                    size={18}
                    aria-hidden="true"
                    className={`justify-self-end text-forest transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                <div
                  id={id}
                  className={`overflow-hidden pr-10 transition-all duration-300 ${isOpen ? 'max-h-48 pb-7 pl-[72px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-body">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
