import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTA from '../components/CTA.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import { Container, Button, Eyebrow } from '../components/ui.jsx'
import ServiceCard from '../components/cards/ServiceCard.jsx'
import HireCard from '../components/cards/HireCard.jsx'
import ImageCard from '../components/cards/ImageCard.jsx'
import FeatureCard from '../components/cards/FeatureCard.jsx'
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel.jsx'
import {
  ArrowRight,
  Sparkles,
  Gem,
  HeartHandshake,
  Heart,
  Flower2,
  Star,
  Users,
  InstagramIcon,
  WhatsAppIcon,
} from '../components/icons.jsx'
import { CONTACT, WA_ENQUIRE, WA_COLLAB } from '../data/site.js'
import {
  STATS,
  FEATURED_SERVICES,
  HIRE_COLLECTION,
  INSPIRATION,
  WHY_HOME,
  INSTA_STRIP,
  TESTIMONIALS,
} from '../data/home.js'

const SERVICE_ICONS = {
  Weddings: Heart,
  'Birthday Décor': Sparkles,
  'Nikah & Henna': Flower2,
  'Baby Showers': Heart,
  Engagements: Star,
  'Bridal Showers': Gem,
}

const WHY_ICONS = [Sparkles, Gem, HeartHandshake]

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Melbourne · Premium Event Hire"
        backgroundImage="/hero_section.jpeg"
        imageAlt="Neon 'And we danced all night' sign glowing amid florals at a Neon Garden event"
        overlayOpacity={0.85}
        scrollHint
        title={
          <>
            Premium Event Hire{' '}
            <span className="bg-gradient-to-r from-neonpink via-[#ffb6e0] to-neongreen bg-clip-text italic text-transparent [text-shadow:0_0_50px_rgba(255,77,157,.4)]">
              &amp; Styling
            </span>
            <br /> in Melbourne
          </>
        }
        subtitle="From glowing neon backdrops to lush vertical gardens, we design bespoke event styling that turns weddings, nikahs, birthdays and every celebration into an unforgettable moment."
      >
        <div className="flex max-w-full flex-wrap justify-center gap-3 sm:gap-3.5">
          <Button className="text-[10px] sm:text-sm px-2 py-2 sm:px-5 sm:py-2" variant="gold" to="/services" iconRight={ArrowRight}>
            Explore Services
          </Button>
          <Button className="text-[10px] sm:text-sm px-2 py-2 sm:px-5 sm:py-2" variant="light" to="/gallery">
            View Gallery
          </Button>
          <Button
            variant="whatsapp"
            href={WA_ENQUIRE}
            icon={WhatsAppIcon}
            className="hidden sm:inline-flex"
          >
            WhatsApp Us
          </Button>
        </div>
      </Hero>

      {/* About teaser + stats */}
      <section className="py-[70px] lg:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[90px]">
            <Reveal className="relative">
              <div className="overflow-hidden rounded-tokenlg shadow-lg2">
                <img
                  src="/assets/images/ng-016.jpg"
                  alt="Floral arch and vertical garden styling for a Melbourne wedding"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
                />
              </div>
              <div className="absolute -bottom-5 right-3 grid h-[120px] w-[120px] place-items-center rounded-full bg-white p-4 text-center font-serif text-[.78rem] leading-tight text-plum shadow-lg2 sm:-bottom-7 sm:-right-7 sm:h-[160px] sm:w-[160px] sm:text-[.95rem]">
                <div>
                  <Counter
                    target={10}
                    suffix="+"
                    className="block text-[1.6rem] text-neonpink sm:text-[2.2rem]"
                  />
                  Years of styling magic
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <Eyebrow>About Neon Garden</Eyebrow>
              <h2 className="mb-[18px] mt-3">Where elegant détails meet a soft glow of neon.</h2>
              <p className="mb-3.5 text-[1.05rem]">
                From intimate proposals to grand wedding receptions, our Melbourne studio designs complete event
                experiences — beautiful backdrops, lush vertical gardens, custom signage and styling that feels
                effortless and editorial.
              </p>
              <p className="mb-3.5 text-[1.05rem]">
                Every event is curated by hand, with a feminine, modern aesthetic and a deep love for detail.
              </p>
              <div className="mt-[18px] flex flex-wrap gap-3.5">
                <Button variant="primary" to="/about" iconRight={ArrowRight}>
                  Our Story
                </Button>
                <Button variant="ghost" to="/contact">
                  Plan My Event
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-[50px] grid grid-cols-2 gap-[18px] rounded-tokenlg bg-white px-[18px] py-[34px] text-center shadow-card sm:gap-[30px] sm:px-[30px] sm:py-[50px] md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <Counter
                  target={s.value}
                  suffix={s.suffix}
                  className="block font-serif text-[clamp(2rem,4vw,3rem)] text-neonpink"
                />
                <span className="text-[.78rem] uppercase tracking-[.18em] text-muted">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Featured services */}
      <section className="bg-cream2 py-[70px] lg:py-28">
        <Container>
          <SectionHeader eyebrow="Featured Services" title="Styling for every celebration" description="Tailored décor concepts and full-service event styling for Melbourne's most loved moments." />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-7">
            {FEATURED_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) + 1} className="min-w-0 w-full">
                <ServiceCard {...s} icon={SERVICE_ICONS[s.title]} to="/services" ctaLabel="Discover" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Hire collection */}
      <section className="py-[70px] lg:py-28">
        <Container>
          <SectionHeader eyebrow="Hire Collection" title="Curated pieces for every story" description="Backdrops, gardens, frames and neon — handpicked elements that bring your vision to life." />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-7">
            {HIRE_COLLECTION.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) + 1} className="min-w-0 w-full">
                <HireCard {...c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Trending inspiration */}
      <section className="bg-cream2 py-[70px] lg:py-28">
        <Container>
          <SectionHeader eyebrow="Trending Inspiration" title="Moments worth styling for" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INSPIRATION.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) + 1} className="min-w-0 w-full">
                <ImageCard {...p} eyebrow="Inspiration" to="/packages" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-[70px] lg:py-28">
        <Container>
          <SectionHeader eyebrow="Why Choose Us" title="The Neon Garden difference" />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_HOME.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) + 1} className="min-w-0 w-full">
                <FeatureCard icon={WHY_ICONS[i % WHY_ICONS.length]} title={w.title} text={w.text} align="center" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Instagram strip */}
      <section className="bg-cream2 py-[70px] lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="From Instagram"
            title="Recent moments we styled"
            description={
              <>
                Follow{' '}
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="text-neonpink">
                  {CONTACT.instagramHandle}
                </a>{' '}
                for daily inspiration — or DM us for a collab.
              </>
            }
          />
          <Reveal className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {INSTA_STRIP.map((src, i) => (
              <a
                key={src}
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group relative block aspect-square overflow-hidden rounded-token"
              >
                <img
                  src={src}
                  alt={`Event styling moment ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,rgba(255,77,157,.85),rgba(43,18,51,.7))] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <InstagramIcon size={26} />
                </span>
              </a>
            ))}
          </Reveal>
          <div className="mt-[30px] flex flex-wrap justify-center gap-3.5">
            <Button variant="primary" to="/gallery" iconRight={ArrowRight}>
              View Full Gallery
            </Button>
            <Button variant="ghost" href={WA_COLLAB}>
              DM for Collab
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="relative max-w-full overflow-hidden bg-gradient-to-br from-plum to-plumdark py-[70px] text-white lg:py-28">
        <span className="pointer-events-none absolute -left-[100px] -top-[100px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,77,157,.18),transparent_70%)]" />
        <span className="pointer-events-none absolute -bottom-[100px] -right-[100px] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(180,242,90,.12),transparent_70%)]" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Kind Words"
            title="Loved by Melbourne's celebrants"
            tone="light"
            titleClass="text-white"
          />
        </Container>
        <div className="relative w-full max-w-full overflow-hidden">
          <TestimonialCarousel testimonials={TESTIMONIALS} speed="slow" direction="left" pauseOnHover showRating showCompany />
        </div>
      </section>

      {/* CTA */}
      <CTA
        backgroundVariant="plum"
        icon={Sparkles}
        title="Ready to plan something beautiful?"
        description="Tell us your date, your vision and your venue — we'll craft a styling package that feels uniquely yours."
      >
        <Button variant="light" to="/contact" iconRight={ArrowRight}>
          Plan My Event
        </Button>
        <Button variant="whatsapp" href={WA_ENQUIRE} icon={WhatsAppIcon}>
          WhatsApp Us
        </Button>
      </CTA>
    </>
  )
}
