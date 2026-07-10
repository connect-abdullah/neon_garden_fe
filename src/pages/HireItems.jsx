import { Link } from 'react-router-dom'
import { Container } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'
import CTA from '../components/CTA.jsx'
import { HIRE_ITEMS } from '../data/hireItems.js'
import { siteImages } from '../data/images.js'

export default function HireItems() {
  return (
    <>
      <section className="relative flex min-h-[50svh] items-end overflow-hidden pb-12 pt-[150px] text-white md:pt-[180px]">
        <img
          src={siteImages.hireItems.hero}
          alt="Sculptural frame and floral hire styling"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,20,14,0.52)]" />
        <Container className="relative">
          <p className="text-xs uppercase tracking-[0.1em] text-white/85">Hire Collection</p>
          <h1 className="mt-4 max-w-[16ch] font-serif uppercase text-white">Curated pieces for every story.</h1>
          <p className="mt-5 max-w-[70ch] text-white/90">
            Hire backdrops, gardens, frames, neon signs and styling pieces as package add-ons or standalone items for your celebration.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 border-b border-white pb-1 text-sm uppercase tracking-[0.08em]"
          >
            Start Your Enquiry <ArrowRight size={16} />
          </Link>
        </Container>
      </section>

      <section className="bg-ivory py-14 md:py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HIRE_ITEMS.map((item) => (
              <article key={item.title} className="group">
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={`${item.title} available for hire in Melbourne`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <h2 className="mt-4 font-serif text-2xl text-forest">{item.title}</h2>
                <p className="mt-2 text-sm text-body">{item.text}</p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-[0.08em] text-forest"
                >
                  Enquire <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Need help choosing hire pieces?"
        description="Tell us your event details and we will recommend the best combination of hire items and styling."
        buttonText="Start Your Enquiry"
        buttonTo="/contact"
        fullWidth
        rounded={false}
      />
    </>
  )
}
