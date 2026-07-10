import { Link } from 'react-router-dom'
import { Container, Button } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'
import CTA from '../components/CTA.jsx'
import FAQSection from '../components/home/FAQSection.jsx'
import TestimonialsMarquee from '../components/home/TestimonialsMarquee.jsx'
import PackageRow from '../components/packages/PackageRow.jsx'
import Counter from '../components/Counter.jsx'
import GalleryMasonry from '../components/gallery/GalleryMasonry.jsx'
import { CONTACT, WA_ENQUIRE } from '../data/site.js'
import { siteImages } from '../data/images.js'
import { FEATURED_SERVICES, STATS, TESTIMONIALS } from '../data/home.js'
import { PACKAGES } from '../data/packages.js'
import { GALLERY_FILTERS } from '../data/gallery.js'
import { FAQS } from '../data/faq.js'

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[85svh] items-end overflow-hidden pb-16 pt-[140px] text-white md:min-h-[100svh] md:pb-24">
        <img
          src={siteImages.hero}
          alt="Styled engagement event with elegant floral decor"
          className="absolute inset-0 h-full w-full object-cover object-[center_42%] md:object-[center_38%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,20,14,.72)_0%,rgba(0,20,14,.46)_45%,rgba(0,20,14,.22)_100%)]" />
        <Container className="relative">
          <p className="text-xs uppercase tracking-[0.08em] text-white/85">Melbourne Premium Event Styling</p>
          <h1 className="mt-4 max-w-[900px] font-serif uppercase leading-[0.95] text-white">
            Elegant Events <br />
            Styled With <br />
            Intention
          </h1>
          <p className="mt-6 max-w-[720px] text-white/90">
            From intimate proposals to full-scale receptions, Neon Garden creates refined styling experiences designed around your event story.
          </p>
          <Link to="/services" className="mt-10 inline-flex items-center gap-2 border-b border-white pb-1 text-sm uppercase tracking-[0.08em]">
            Explore Services <ArrowRight size={16} className="transition-transform hover:translate-x-1" />
          </Link>
        </Container>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <h2 className="mx-auto max-w-[1000px] text-center font-serif uppercase text-forest">
            Styling Celebrations With Intention, Warmth And Editorial Detail
          </h2>
          <p className="mx-auto mt-5 max-w-[740px] text-center text-body">
            We blend refined florals, sculptural backdrops and premium finishing touches to transform your venue into a seamless guest experience.
          </p>

          <div className="mt-12 hidden items-center justify-center gap-4 md:flex">
            <img
              src={siteImages.brandStory.left}
              alt="Decor detail with floral styling"
              className="h-[350px] w-[24%] object-cover"
              loading="lazy"
            />
            <img
              src={siteImages.brandStory.center}
              alt="Main event table and centerpiece styling"
              className="h-[480px] w-[42%] object-cover"
              loading="lazy"
            />
            <img
              src={siteImages.brandStory.right}
              alt="Styled catering and table details"
              className="h-[350px] w-[24%] object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-12 md:hidden">
            <img
              src={siteImages.brandStory.center}
              alt="Main event table and centerpiece styling"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <img src={siteImages.brandStory.left} alt="Decor detail with floral styling" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <img src={siteImages.brandStory.right} alt="Styled catering and table details" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mb-2 flex flex-wrap items-end justify-between gap-4 border-t border-border py-8">
            <h2 className="max-w-[620px] text-forest">Discover Services</h2>
            <Button variant="primary" to="/services">
              View All Services
            </Button>
          </div>
          <div className="grid gap-0 border-y border-border lg:grid-cols-3">
            {FEATURED_SERVICES.slice(0, 3).map((item, idx) => (
              <article key={item.title} className={`p-7 ${idx < 2 ? 'lg:border-r lg:border-border' : ''}`}>
                <img src={item.img} alt={`${item.title} setup`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <h3 className="mt-5 font-sans text-2xl text-forest">{item.title}</h3>
                <p className="mt-3 text-body">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-body">Packages</p>
              <h2 className="mt-3 text-forest">Our Styling Packages</h2>
            </div>
            <Button variant="ghost" to="/packages">
              View All Packages
            </Button>
          </div>
          <div className="border-y border-border">
            {PACKAGES.slice(0, 4).map((item) => (
              <PackageRow key={item.slug} item={item} titleTag="h3" />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden px-3 py-16 md:px-5 md:py-24">
        <img src={siteImages.statsBackground} alt="Wide styled event table scene" className="absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] object-cover object-center md:inset-5 md:h-[calc(100%-40px)] md:w-[calc(100%-40px)]" />
        <div className="absolute inset-3 bg-[linear-gradient(180deg,rgba(0,20,14,0.06)_0%,rgba(0,20,14,0.78)_58%,rgba(0,20,14,0.92)_100%)] md:inset-5" />
        <Container className="relative pt-48 md:pt-72">
          <div className="grid grid-cols-2 gap-10 md:gap-30 md:pl-16 text-white md:grid-cols-4">
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
        description="Tell us your date, venue and guest count — we'll recommend the best styling direction and package for your event."
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
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-b border-white/80 pb-1 text-sm uppercase tracking-[0.08em] text-white/90">
            {CONTACT.instagramHandle}
          </a>
        </Container>
      </section>
    </>
  )
}
