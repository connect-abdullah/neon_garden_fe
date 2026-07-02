import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import Reveal from '../components/Reveal.jsx'
import { Container, Button, Eyebrow } from '../components/ui.jsx'
import { ArrowRight, CheckCircle, WhatsAppIcon } from '../components/icons.jsx'
import { WA_ENQUIRE } from '../data/site.js'
import { HIRE_ITEMS } from '../data/hireItems.js'

export default function HireItems() {
  return (
    <>
      <PageHero
        breadcrumb="Hire Items"
        eyebrow="Our Collection"
        title="Premium pieces, ready for your event"
        subtitle="Explore our signature collection of backdrops, vertical gardens, frames and neon — hire individually or as a styled package."
      />

      <section className="py-[70px] lg:py-28">
        <Container>
          <div className="flex flex-col gap-8 lg:gap-12">
            {HIRE_ITEMS.map((item, i) => (
              <Reveal
                key={item.title}
                className="card-hover grid overflow-hidden rounded-tokenlg border border-line/60 bg-white shadow-card hover:shadow-cardhover md:grid-cols-2"
              >
                <div className={`group aspect-[5/4] overflow-hidden md:aspect-auto ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={item.img}
                    alt={`${item.title} for hire Melbourne`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>
                <div className={`flex flex-col justify-center gap-4 p-8 sm:p-[50px] ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Eyebrow>Hire Collection</Eyebrow>
                  <h2 className="text-[clamp(1.7rem,3vw,2.4rem)]">{item.title}</h2>
                  <p className="text-[1.05rem] leading-relaxed">{item.text}</p>
                  <ul className="my-1 flex flex-col gap-2.5">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-inksoft">
                        <CheckCircle size={19} className="mt-0.5 shrink-0 text-greendeep" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-3.5">
                    <Button variant="primary" to="/contact" iconRight={ArrowRight}>
                      Enquire Now
                    </Button>
                    <Button variant="ghost" href={WA_ENQUIRE} icon={WhatsAppIcon}>
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        backgroundVariant="plum"
        title="Not sure what you need?"
        description="Send us your event details — we'll suggest the perfect combination of hire items and styling."
      >
        <Button variant="light" to="/contact" iconRight={ArrowRight}>
          Get Recommendations
        </Button>
        <Button variant="whatsapp" href={WA_ENQUIRE} icon={WhatsAppIcon}>
          WhatsApp Us
        </Button>
      </CTA>
    </>
  )
}
