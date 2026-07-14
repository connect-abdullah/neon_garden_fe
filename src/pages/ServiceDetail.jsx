import { Link, Navigate, useParams } from 'react-router-dom'
import { Container, Button } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'
import GalleryMasonry from '../components/gallery/GalleryMasonry.jsx'
import { CONTACT, WA_ENQUIRE } from '../data/site.js'
import { siteImages } from '../data/images.js'
import { getServiceBySlug, SERVICES } from '../data/services.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const related = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 2)
  const ctaImage = siteImages.packageCta

  return (
    <>
      <section className="bg-ivory pb-12 pt-[120px] md:pb-20 md:pt-[150px]">
        <Container>
          <div className="grid gap-6 bg-blush p-4 md:grid-cols-[1.4fr_380px] md:gap-8 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.08em] text-body">Styling Service</p>
              <h1 className="mt-3 font-serif uppercase leading-[0.98] text-forest md:mt-4">{service.title}</h1>
              <p className="mt-4 max-w-[70ch] text-base text-body md:text-[17px]">{service.shortDescription}</p>
            </div>
            <aside className="bg-white p-5 md:p-6">
              <h2 className="font-sans text-xl text-forest md:text-2xl">Service Details</h2>
              <p className="mt-2 text-sm text-body">A quick overview before you enquire.</p>
              <Button to="/contact" variant="primary" className="mt-6 w-full md:mt-8">
                Enquire About This Service
              </Button>
            </aside>
          </div>

          {service.showcase?.length > 0 && (
            <div className="mt-4">
              <GalleryMasonry
                items={service.showcase}
                showFilters={false}
                initialCount={8}
                step={0}
                columnsClass="columns-2 gap-2 sm:gap-3 md:columns-3 lg:columns-4"
              />
            </div>
          )}

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
            <div>
              <h2 className="font-sans text-2xl text-forest md:text-3xl">Service Overview</h2>
              <p className="mt-4 max-w-[72ch] text-body">{service.overview}</p>

              {service.hireLinks?.length > 0 && (
                <>
                  <h3 className="mt-8 font-sans text-xl text-forest md:text-2xl">Hire pieces</h3>
                  <ul className="mt-4 space-y-3 text-sm text-body md:text-base">
                    {service.hireLinks.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to} className="inline-flex items-center gap-2 text-forest">
                          <strong>{link.label}</strong> <ArrowRight size={14} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {service.pairings?.length > 0 && (
                <>
                  <h3 className="mt-8 font-sans text-xl text-forest md:text-2xl">It can be paired up with</h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-body md:text-base">
                    {service.pairings.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </>
              )}

              {service.note && <p className="mt-8 text-sm text-body md:text-base">{service.note}</p>}
            </div>

            <aside className="h-fit bg-blush p-5 md:p-6">
              <h3 className="font-sans text-lg text-forest md:text-xl">You May Also Like</h3>
              <div className="mt-4 divide-y divide-border">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className="flex items-center justify-between gap-4 py-4 text-sm text-forest"
                  >
                    <span>{item.title}</span>
                    <ArrowRight size={15} className="shrink-0" />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="mt-10 bg-ivory md:relative md:mt-16 md:overflow-hidden md:bg-transparent">
        <div className="relative">
          <img
            src={ctaImage}
            alt="Floral event decor"
            className="h-56 w-full object-cover object-center sm:h-72 md:h-[420px]"
          />
          <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(0,20,14,0.18)_0%,rgba(0,20,14,0.55)_100%)] md:block" />
        </div>
        <Container className="relative px-4 py-8 md:absolute md:inset-0 md:grid md:place-items-center md:px-6 md:py-0">
          <div className="mx-auto w-full max-w-3xl bg-white p-6 text-center shadow-soft md:p-12 md:shadow-none">
            <p className="text-xs uppercase tracking-[0.08em] text-muted">Let&apos;s Plan Your Event</p>
            <h2 className="mt-4 font-serif uppercase text-forest">Ready To Book This Service?</h2>
            <p className="mt-4 text-sm text-body md:text-base">
              Share your date, venue and vision and we will send a tailored proposal.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:mt-8">
              <Button to="/contact" variant="primary" className="w-full sm:w-auto">
                Enquire Now
              </Button>
              <Button href={CONTACT.instagram} variant="light" className="w-full sm:w-auto">
                Visit Instagram
              </Button>
              <Button href={WA_ENQUIRE} variant="ghost" className="w-full sm:w-auto">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
