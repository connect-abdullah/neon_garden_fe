import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'
import CTA from '../components/CTA.jsx'
import HireCategoryCard from '../components/cards/HireCategoryCard.jsx'
import { HIRE_ITEMS, hireItemHref } from '../data/hireItems.js'
import { siteImages } from '../data/images.js'

export default function HireItems() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [location.hash])

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
            Backdrops, gardens, frames and custom neon — handpicked hire elements that bring your styling
            vision to life. Available as add-ons to any package or as standalone hire.
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {HIRE_ITEMS.map((item) => (
              <div key={item.slug} id={item.slug} className="scroll-mt-28">
                <HireCategoryCard
                  img={item.img}
                  title={item.title}
                  href={hireItemHref(item)}
                  linked={item.mode !== 'comingSoon'}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Need help choosing hire items?"
        description="Tell us your event details and we will recommend the best combination of hire items and styling."
        buttonText="Start Your Enquiry"
        buttonTo="/contact"
        fullWidth
        rounded={false}
      />
    </>
  )
}
