import { Link } from 'react-router-dom'
import { Container, Button } from '../components/ui.jsx'
import { ChevronRight } from '../components/icons.jsx'
import { SERVICES } from '../data/services.js'

export default function Services() {
  return (
    <>
      <section className="bg-ivory pb-16 pt-[160px] md:pt-[190px]">
        <Container>
          <p className="text-center text-sm uppercase tracking-[0.1em] text-body">Services</p>
          <h1 className="mt-4 text-center font-serif uppercase text-forest">Event styling services</h1>
          <p className="mx-auto mt-6 max-w-[820px] text-center text-body">
            Choose from our signature services or create something bespoke. We design, deliver and install styling that feels elegant and intentional.
          </p>

          <div className="mt-12 border-y border-border bg-white">
            {SERVICES.map((item) => (
              <article
                key={item.title}
                className="grid border-b border-border last:border-b-0 md:grid-cols-[260px_1.6fr_80px]"
              >
                <Link to="/contact" className="group block h-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={`${item.title} styling service`}
                    className="h-full min-h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6 md:p-8">
                  <h2 className="font-sans text-2xl text-forest">{item.title}</h2>
                  <p className="mt-3 max-w-[70ch] text-body">{item.text}</p>
                  <div className="mt-6">
                    <Button to="/contact" variant="primary">
                      Enquire now
                    </Button>
                  </div>
                </div>
                <Link
                  to="/contact"
                  aria-label={`Enquire about ${item.title}`}
                  className="group grid min-h-[72px] place-items-center border-l border-border bg-forest text-white transition-colors hover:bg-forest-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest md:min-h-full"
                >
                  <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
