import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceCard from '../components/cards/ServiceCard.jsx'
import { Container, Button } from '../components/ui.jsx'
import { ArrowRight, WhatsAppIcon } from '../components/icons.jsx'
import { WA_ENQUIRE } from '../data/site.js'
import { SERVICES } from '../data/services.js'

export default function Services() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="Event Styling Services"
        title="Styling, décor & complete event experiences"
        subtitle="Choose from our signature services or design something entirely bespoke. Every event is styled by hand with a premium feminine touch."
      />

      <section className="py-[70px] lg:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-7">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) + 1} className="min-w-0 w-full">
                <ServiceCard {...s} tag="Service" ctaLabel="Enquire Now" to="/contact" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        backgroundVariant="blush"
        title="Book your event styling"
        description="Tell us about your celebration and we'll respond within 24 hours with a tailored proposal."
      >
        <Button variant="primary" to="/contact" iconRight={ArrowRight}>
          Plan My Event
        </Button>
        <Button variant="whatsapp" href={WA_ENQUIRE} icon={WhatsAppIcon}>
          WhatsApp Us
        </Button>
      </CTA>
    </>
  )
}
