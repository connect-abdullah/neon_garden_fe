import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import CTA from '../components/CTA.jsx'
import Reveal from '../components/Reveal.jsx'
import FeatureCard from '../components/cards/FeatureCard.jsx'
import { Container, Button, Eyebrow } from '../components/ui.jsx'
import {
  ArrowRight,
  Lightbulb,
  Palette,
  Truck,
  Sparkles,
  Users,
  Heart,
  Gem,
  Briefcase,
  Clock,
  WhatsAppIcon,
} from '../components/icons.jsx'
import { WA_ENQUIRE } from '../data/site.js'
import { APPROACH, WHY_ABOUT } from '../data/about.js'

const APPROACH_ICONS = [Lightbulb, Palette, Truck]
const WHY_ICONS = [Sparkles, Users, Heart, Gem, Briefcase, Clock]

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="Our Story"
        title="Designing celebrations with heart, detail and a soft glow."
        subtitle="A Melbourne-based event styling studio — equal parts editorial, modern and feminine — created to make your most loved moments feel truly unforgettable."
      />

      {/* Brand story */}
      <section className="py-[70px] lg:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[90px]">
            <Reveal>
              <div className="overflow-hidden rounded-tokenlg shadow-lg2">
                <img
                  src="/assets/images/ng-074.jpg"
                  alt="Neon Garden styled wedding arch in Melbourne"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
                />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <Eyebrow>Brand Story</Eyebrow>
              <h2 className="mb-[18px] mt-3">It started with a single neon sign — and a love for the garden.</h2>
              <p className="mb-3.5 text-[1.05rem]">
                Neon Garden Event Hire was born from a simple obsession: a soft neon glow paired with lush greenery and
                the perfect floral moment. What began as a small collection of backdrops and signs has blossomed into
                Melbourne's go-to studio for premium event hire and styling.
              </p>
              <p className="mb-3.5 text-[1.05rem]">
                We work alongside couples, families and event planners across Melbourne, transforming venues into
                beautifully curated experiences — from intimate Nikah ceremonies to grand wedding receptions and
                milestone birthdays.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission (reversed) */}
      <section className="bg-cream2 py-[70px] lg:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[90px]">
            <Reveal delay={1} className="lg:order-2">
              <div className="overflow-hidden rounded-tokenlg shadow-lg2">
                <img
                  src="/assets/images/ng-088.jpg"
                  alt="Neon 'Oh It's Perfect' sign framed by tropical greenery and balloons at a Neon Garden event"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
                />
              </div>
            </Reveal>
            <Reveal className="lg:order-1">
              <Eyebrow>Our Mission</Eyebrow>
              <h2 className="mb-[18px] mt-3">Beautiful events, effortlessly delivered.</h2>
              <p className="mb-3.5 text-[1.05rem]">
                We believe styling your event should feel exciting, not stressful. From the first enquiry through to
                pack-down, we take care of every detail with calm, creative energy — so you can be fully present on the
                day that matters.
              </p>
              <p className="mb-3.5 text-[1.05rem]">
                Our promise is simple: design that feels editorial, service that feels personal, and memories that feel
                forever.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-[70px] lg:py-28">
        <Container>
          <SectionHeader eyebrow="Our Approach" title="Styled by hand. Designed for you." />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {APPROACH.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) + 1}>
                <FeatureCard icon={APPROACH_ICONS[i % APPROACH_ICONS.length]} title={a.title} text={a.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-cream2 py-[70px] lg:py-28">
        <Container>
          <SectionHeader eyebrow="Why Customers Choose Us" title="Premium event hire — without the fuss" />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ABOUT.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) + 1}>
                <FeatureCard icon={WHY_ICONS[i % WHY_ICONS.length]} title={w.title} text={w.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA
        backgroundVariant="plum"
        icon={Heart}
        title="Let's create something unforgettable"
        description="Whether you have a clear vision or just a feeling — we'd love to bring it to life with you."
      >
        <Button variant="light" to="/contact" iconRight={ArrowRight}>
          Enquire Now
        </Button>
        <Button variant="whatsapp" href={WA_ENQUIRE} icon={WhatsAppIcon}>
          WhatsApp Us
        </Button>
      </CTA>
    </>
  )
}
