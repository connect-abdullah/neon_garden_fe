import { Link } from 'react-router-dom'
import { Container } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'
import PackageRow from '../components/packages/PackageRow.jsx'
import CTA from '../components/CTA.jsx'
import { PACKAGES } from '../data/packages.js'
import { WA_ENQUIRE } from '../data/site.js'

export default function Packages() {
  return (
    <>
      <section className="bg-ivory pb-10 pt-[130px] md:pb-16 md:pt-[190px]">
        <Container>
          <p className="text-center text-sm uppercase tracking-[0.1em] text-body">Packages</p>
          <h1 className="mt-4 text-center font-serif uppercase text-forest">Our Styling Packages</h1>
          <p className="mx-auto mt-5 max-w-[640px] text-center text-body">
            Curated styling packages for engagements, birthdays, weddings and intimate celebrations across Melbourne.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 border-b border-forest pb-1 text-sm uppercase tracking-[0.08em] text-forest">
              Explore Picnic Packages <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 border-y border-border md:mt-12">
            {PACKAGES.map((item) => (
              <PackageRow key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Ready to book?"
        title="Let's design your celebration"
        description="Tell us your date, venue and guest count — we'll recommend the best styling direction and package for your event."
        buttonText="Plan My Event"
        buttonTo="/contact"
        secondaryText="WhatsApp Us"
        secondaryHref={WA_ENQUIRE}
        rounded
      />
    </>
  )
}
