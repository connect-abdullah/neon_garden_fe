import { Container, Button } from '../ui.jsx'
import { FEATURED_SERVICES } from '../../data/home.js'

/** Homepage featured services strip — kept for future reuse; not rendered on Home currently. */
export default function DiscoverServices() {
  return (
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
  )
}
