import { Link } from 'react-router-dom'
import { Container, Button } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'
import { WA_ENQUIRE } from '../data/site.js'
import { ABOUT_PROCESS, ABOUT_VALUES } from '../data/about.js'
import { siteImages } from '../data/images.js'

export default function About() {
  return (
    <>
      <section className="relative flex min-h-[50svh] items-end overflow-hidden pb-12 pt-[150px] text-white md:pt-[180px]">
        <img
          src={siteImages.about.hero}
          alt="Neon Garden styled wedding reception"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,20,14,0.12)_0%,rgba(0,20,14,0.42)_45%,rgba(0,20,14,0.78)_100%)]" />
        <Container className="relative">
          <p className="text-xs uppercase tracking-[0.1em] text-white/85">About Neon Garden</p>
          <h1 className="mt-5 max-w-[18ch] font-serif uppercase leading-[0.95] text-white">
            Premium event styling with editorial detail.
          </h1>
          <p className="mt-6 max-w-[70ch] text-white/90">
            Neon Garden Event Hire creates elegant event styling and hire experiences across Melbourne — from intimate proposals to full reception styling, with careful attention to florals, backdrops and guest-facing details.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 border-b border-white pb-1 text-sm uppercase tracking-[0.08em]"
          >
            Start Your Enquiry <ArrowRight size={16} />
          </Link>
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
            <div className="overflow-hidden lg:justify-self-end">
              <img
                src={siteImages.about.feature}
                alt="Complete styled event table with floral installation"
                className="aspect-[4/5] w-full max-w-[520px] object-cover lg:aspect-[5/6] lg:max-h-[580px] lg:max-w-none"
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
