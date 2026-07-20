import { Navigate, useParams } from 'react-router-dom'
import { Container, Button } from '../components/ui.jsx'
import CTA from '../components/CTA.jsx'
import HireProductCard from '../components/cards/HireProductCard.jsx'
import { getHireItemBySlug, getHireProducts } from '../data/hireItems.js'

const LEGACY_REDIRECTS = {
  frames: '/hire-items/backdrops',
  'floral-installations': '/hire-items',
}

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
      {products.map((product) => (
        <HireProductCard key={`${product.title}-${product.image}`} product={product} />
      ))}
    </div>
  )
}

function GroupedProducts({ products }) {
  const groups = products.reduce((acc, product) => {
    const key = product.group || 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(product)
    return acc
  }, {})

  const groupNames = Object.keys(groups)

  if (groupNames.length <= 1) {
    return <ProductGrid products={products} />
  }

  return (
    <div className="space-y-12 md:space-y-16">
      {groupNames.map((groupName) => (
        <div key={groupName}>
          <h2 className="mb-5 font-sans text-xl text-forest md:mb-6 md:text-2xl">{groupName}</h2>
          <ProductGrid products={groups[groupName]} />
        </div>
      ))}
    </div>
  )
}

export default function HireItemDetail() {
  const { slug } = useParams()

  if (LEGACY_REDIRECTS[slug]) {
    return <Navigate to={LEGACY_REDIRECTS[slug]} replace />
  }

  const item = getHireItemBySlug(slug)

  if (!item || item.mode === 'comingSoon') {
    return <Navigate to="/hire-items" replace />
  }

  const products = item.mode === 'catalog' ? getHireProducts(item) : []
  const hasGroups = products.some((product) => product.group)

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
            {hasGroups ? <GroupedProducts products={products} /> : <ProductGrid products={products} />}
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
