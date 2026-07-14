import { Navigate, useParams } from 'react-router-dom'
import { Container, Button } from '../components/ui.jsx'
import CTA from '../components/CTA.jsx'
import HireProductCard from '../components/cards/HireProductCard.jsx'
import { getHireItemBySlug, getHireProducts } from '../data/hireItems.js'

export default function HireItemDetail() {
  const { slug } = useParams()
  const item = getHireItemBySlug(slug)

  if (!item || item.mode === 'comingSoon') {
    return <Navigate to="/hire-items" replace />
  }

  const products = item.mode === 'catalog' ? getHireProducts(item) : []

  return (
    <>
      <section className="bg-ivory pb-8 pt-[110px] md:pb-10 md:pt-[130px]">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.08em] text-body">Hire Collection</p>
            <h1 className="mt-3 font-serif uppercase leading-[0.98] text-forest">{item.title}</h1>
            <p className="mt-3 text-sm text-body md:text-base">{item.text}</p>
          </div>
        </Container>
      </section>

      {item.mode === 'catalog' ? (
        <section className="bg-white py-10 md:py-14">
          <Container>
            <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
              {products.map((product) => (
                <HireProductCard key={`${product.title}-${product.image}`} product={product} />
              ))}
            </div>
          </Container>
        </section>
      ) : (
        <section className="bg-white py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-sans text-xl text-forest md:text-2xl">Made around your brief</h2>
              <p className="mt-4 text-sm leading-relaxed text-body md:text-base">{item.contactBlurb}</p>
              <Button to="/contact" variant="primary" className="mt-8">
                Contact Us
              </Button>
            </div>
          </Container>
        </section>
      )}

      <CTA
        title={`Ready to hire ${item.title.toLowerCase()}?`}
        description="Tell us your date, venue and vision and we will recommend the right pieces for your event."
        buttonText="Start Your Enquiry"
        buttonTo="/contact"
        fullWidth
        rounded={false}
      />
    </>
  )
}
