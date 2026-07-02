import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import PackageCard from '../components/cards/PackageCard.jsx'
import { Container, Button } from '../components/ui.jsx'
import { ArrowRight, WhatsAppIcon } from '../components/icons.jsx'
import { WA_ENQUIRE } from '../data/site.js'
import { PACKAGES } from '../data/packages.js'

export default function Packages() {
  return (
    <>
      <PageHero
        breadcrumb="Packages"
        eyebrow="Packages & Inspiration"
        title="Trending styling packages"
        subtitle="Our most-loved styling concepts — mix, match or bundle into a full package for a complete event look."
      />

      <section className="py-[70px] lg:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.num} delay={(i % 3) + 1} className="min-w-0 w-full">
                <PackageCard {...p} to="/contact" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream2 py-[70px] lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="The Full Package"
            title="Everything you need, beautifully bundled"
            description="Skip the guesswork — our Full Package combines the backdrop, garden, frames, neon and signage into one curated styling experience."
          />
          <Reveal className="flex flex-wrap justify-center gap-3.5">
            <Button variant="primary" to="/contact" iconRight={ArrowRight}>
              Enquire About Packages
            </Button>
            <Button variant="ghost" href={WA_ENQUIRE} icon={WhatsAppIcon}>
              WhatsApp Us
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
