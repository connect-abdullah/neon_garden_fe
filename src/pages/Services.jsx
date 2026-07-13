import ServiceRow from '../components/services/ServiceRow.jsx'
import { Container } from '../components/ui.jsx'
import { SERVICES } from '../data/services.js'

export default function Services() {
  return (
    <>
      <section className="bg-ivory pb-16 pt-[160px] md:pt-[190px]">
        <Container>
          <p className="text-center text-sm uppercase tracking-[0.1em] text-body">Services</p>
          <h1 className="mt-4 text-center font-serif uppercase text-forest">Styling Services</h1>
          <p className="mx-auto mt-6 max-w-[820px] text-center text-body">
            Choose from our signature styling services or create something bespoke. We design, deliver and
            install styling that feels elegant and intentional.
          </p>

          <div className="mt-12 border-y border-border bg-white">
            {SERVICES.map((item) => (
              <ServiceRow key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
