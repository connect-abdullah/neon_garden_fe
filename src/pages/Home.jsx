import { Link } from 'react-router-dom'
import { Container, Button } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'
import CTA from '../components/CTA.jsx'
import ServiceRow from '../components/services/ServiceRow.jsx'
import GalleryMasonry from '../components/gallery/GalleryMasonry.jsx'
import Counter from '../components/Counter.jsx'
import TestimonialsMarquee from '../components/home/TestimonialsMarquee.jsx'
import FAQSection from '../components/home/FAQSection.jsx'
import { CONTACT, WA_ENQUIRE } from '../data/site.js'
import { siteImages } from '../data/images.js'
import { STATS, TESTIMONIALS } from '../data/home.js'
import { SERVICES } from '../data/services.js'
import { GALLERY_FILTERS } from '../data/gallery.js'
import { FAQS } from '../data/faq.js'

const OWNERS_STORY = `We're a Melbourne-based couple who fell in love, got married and celebrated all little moments along the way. On our own celebration journey, we realised how important it is to create meaningful and beautiful styled events matching your vibe. Inspired by our experience, we're here to help bring your special moments to life with celebrations you'll never forget.`

export default function Home() {
  return (
    <>
      <section className="relative min-h-svh overflow-hidden bg-black text-white md:min-h-[100svh]">
        <div className="absolute inset-0">
          <img
            src={siteImages.hero}
            alt="Styled engagement lounge with Til Death neon and floral décor"
            className="h-full w-full object-cover object-[center_42%] md:object-[72%_38%]"
            fetchPriority="high"
          />
          {/* Mobile: vertical scrim for readable copy */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.55)_0%,rgba(0,0,0,.4)_45%,rgba(0,0,0,.75)_100%)] md:hidden" />
          {/* Desktop: soft left-to-right fade — no hard edge */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#000_0%,#000_28%,rgba(0,0,0,.85)_40%,rgba(0,0,0,.45)_52%,rgba(0,0,0,.12)_64%,transparent_78%)] md:block" />
        </div>

        <Container className="relative flex min-h-svh items-end pb-16 pt-[140px] md:min-h-[100svh] md:items-center md:pb-24 md:pt-[120px]">
          <div className="max-w-[520px]">
            <p className="text-xs uppercase tracking-[0.08em] text-[#c4a484]">
              Melbourne Premium Event Styling and Hire
            </p>
            <h1 className="mt-4 font-serif uppercase leading-[0.95] text-white">
              Curated for every budget
            </h1>
            <p className="mt-6 max-w-[460px] text-white/90">
              From intimate proposals, backyard event, small scale event to full-scale receptions, Neon
              Garden creates refined styling experiences designed around your event story.
            </p>
            <Link
              to="/services"
              className="mt-10 inline-flex items-center gap-2 border-b border-[#c4a484] pb-1 text-sm uppercase tracking-[0.08em] text-[#c4a484]"
            >
              Explore Services <ArrowRight size={16} className="transition-transform hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="font-serif text-lg font-semibold leading-relaxed text-forest md:text-2xl">
              {OWNERS_STORY}
            </p>
            <p className="mt-5 text-sm italic text-body">— From the owners</p>
          </div>

          <div className="mt-12">
            <GalleryMasonry
              items={siteImages.brandStoryCollage}
              filters={[]}
              initialCount={8}
              step={0}
              showFilters={false}
              columnsClass="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-body">Services</p>
              <h2 className="mt-3 text-forest">Styling Services</h2>
            </div>
            <Button variant="ghost" to="/services">
              View All Services
            </Button>
          </div>
          <div className="border-y border-border bg-white">
            {SERVICES.slice(0, 4).map((item) => (
              <ServiceRow key={item.slug} item={item} titleTag="h3" />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden px-3 py-16 md:px-5 md:py-24">
        <img
          src={siteImages.statsBackground}
          alt="Wide styled event table scene"
          className="absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] object-cover object-center md:inset-5 md:h-[calc(100%-40px)] md:w-[calc(100%-40px)]"
        />
        <div className="absolute inset-3 bg-[linear-gradient(180deg,rgba(0,20,14,0.06)_0%,rgba(0,20,14,0.78)_58%,rgba(0,20,14,0.92)_100%)] md:inset-5" />
        <Container className="relative pt-48 md:pt-72">
          <div className="grid grid-cols-2 gap-10 text-white md:grid-cols-4 md:gap-30 md:pl-16">
            {STATS.map((item) => (
              <div key={item.label}>
                <Counter
                  target={item.value}
                  suffix={item.suffix}
                  className="block font-serif text-[clamp(2.8rem,4.5vw,5rem)] leading-none text-white [text-shadow:0_10px_40px_rgba(0,0,0,.55)]"
                />
                <p className="mt-3 text-sm uppercase tracking-[0.08em] text-white/90">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-body">Gallery</p>
              <h2 className="mt-3 text-forest">Recent Moments We Styled</h2>
            </div>
            <Button variant="ghost" to="/gallery">
              View Full Gallery
            </Button>
          </div>
          <GalleryMasonry
            items={siteImages.homepageGalleryPreview}
            filters={GALLERY_FILTERS}
            initialCount={10}
            step={0}
            showFilters={false}
          />
        </Container>
      </section>

      <TestimonialsMarquee items={TESTIMONIALS} />

      <CTA
        eyebrow="Ready to book?"
        title="Let's design your celebration"
        description="Tell us your date, venue and vision — we'll recommend the best styling direction for your event."
        buttonText="Plan My Event"
        buttonTo="/contact"
        secondaryText="WhatsApp Us"
        secondaryHref={WA_ENQUIRE}
        rounded
      />

      <FAQSection items={FAQS} />

      <section className="bg-forest py-16 text-white">
        <Container className="text-center">
          <h2 className="font-serif uppercase text-white">Plan Your Event With Neon Garden</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-white/80">
            Tell us your event date and vision and our team will guide you with the best styling direction.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="light">
              Plan My Event
            </Button>
            <Button href={WA_ENQUIRE} variant="outlineLight">
              WhatsApp Us
            </Button>
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border-b border-white/80 pb-1 text-sm uppercase tracking-[0.08em] text-white/90"
          >
            {CONTACT.instagramHandle}
          </a>
        </Container>
      </section>
    </>
  )
}
