import { Link } from 'react-router-dom'
import { Container, Button } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'
import { WA_ENQUIRE } from '../data/site.js'
import { ABOUT_PROCESS, ABOUT_VALUES } from '../data/about.js'
import { siteImages } from '../data/images.js'

export default function About() {
  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden bg-black text-white md:min-h-[80svh]">
        <div className="absolute inset-0">
          {siteImages.about.hero ? (
            <img
              src={siteImages.about.hero}
              alt="Circular vertical garden with custom neon initials"
              className="h-full w-full object-cover object-[center_40%] md:object-[52%_30%]"
            />
          ) : null}
          {/* Mobile: vertical scrim for readable copy */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.55)_0%,rgba(0,0,0,.4)_45%,rgba(0,0,0,.75)_100%)] md:hidden" />
          {/* Desktop: soft left-to-right fade — text left, image on the side */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#000_0%,#000_28%,rgba(0,0,0,.85)_40%,rgba(0,0,0,.45)_52%,rgba(0,0,0,.12)_64%,transparent_78%)] md:block" />
        </div>

        <Container className="relative flex min-h-[70svh] items-end pb-16 pt-[140px] md:min-h-[80svh] md:items-center md:pb-24 md:pt-[120px]">
          <div className="max-w-[520px]">
            <p className="text-xs uppercase tracking-[0.1em] text-white/85">About Neon Garden</p>
            <h1 className="mt-5 font-serif text-[clamp(2.4rem,4.8vw,4.25rem)] uppercase leading-[0.95] text-white">
              Premium event styling with editorial detail.
            </h1>
            <p className="mt-6 max-w-[460px] text-base text-white/90">
              Neon Garden Event Hire creates elegant event styling and hire experiences across Melbourne — from intimate proposals to full reception styling, with careful attention to florals, backdrops and guest-facing details.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#c4a484] pb-1 text-sm uppercase tracking-[0.08em] text-[#c4a484]"
            >
              Start Your Enquiry <ArrowRight size={16} className="transition-transform hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16 xl:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-body">Our Approach</p>
              <h2 className="mt-5 max-w-[14ch] font-serif uppercase leading-[0.98] text-forest">
                Every event is curated by hand.
              </h2>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-body md:text-[1.2rem] md:leading-[1.7]">
                We style events around each client&apos;s palette, venue, story and occasion — balancing editorial composition with practical guest experience.
              </p>
            </div>
            <div className="overflow-hidden bg-black lg:justify-self-end">
              <img
                src={siteImages.about.feature}
                alt="I got you babe neon sign"
                className="aspect-[4/5] w-full max-w-[380px] object-contain object-center md:max-w-[420px] lg:aspect-[5/6] lg:max-h-[460px]"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-blush py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {ABOUT_VALUES.map((item) => (
              <div key={item.title}>
                <p className="text-xs uppercase tracking-[0.1em] text-body">{item.eyebrow}</p>
                <h3 className="mt-3 font-sans text-2xl text-forest">{item.title}</h3>
                <p className="mt-3 text-body">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-body">Our Process</p>
              <h2 className="mt-4 font-serif text-4xl text-forest">From first message to pack-down.</h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {ABOUT_PROCESS.map((item) => (
                <article key={item.step} className="grid gap-3 py-6 md:grid-cols-[56px_1fr]">
                  <p className="text-sm uppercase tracking-[0.08em] text-muted">{item.step}</p>
                  <div>
                    <h3 className="font-sans text-xl text-forest">{item.title}</h3>
                    <p className="mt-2 text-body">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-forest py-16 text-white">
        <Container className="text-center">
          <h2 className="font-serif uppercase text-white">Ready to plan your event?</h2>
          <p className="mx-auto mt-4 max-w-[620px] text-white/80">
            Share your celebration details and we will guide you with the best styling direction.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="light" iconRight={ArrowRight}>
              Enquire Now
            </Button>
            <Button href={WA_ENQUIRE} variant="outlineLight">
              WhatsApp Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
