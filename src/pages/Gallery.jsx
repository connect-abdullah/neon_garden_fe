import { Link } from 'react-router-dom'
import GalleryMasonry from '../components/gallery/GalleryMasonry.jsx'
import { Container, Button } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'
import { CONTACT, WA_ENQUIRE } from '../data/site.js'
import { GALLERY, GALLERY_FILTERS } from '../data/gallery.js'
import { siteImages } from '../data/images.js'

export default function Gallery() {
  return (
    <>
      <section className="relative flex min-h-[50svh] items-end overflow-hidden pb-12 pt-[150px] text-white">
        <img src={siteImages.gallery[0].src} alt="Styled event decor scene" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(0,20,14,0.52)]" />
        <Container className="relative">
          <p className="text-xs uppercase tracking-[0.08em] text-white/85">Gallery</p>
          <h1 className="mt-4 font-serif uppercase text-white">Curated Event Moments</h1>
          <p className="mt-4 max-w-[680px] text-white/90">
            A rich collection of weddings, birthdays, engagements and proposals styled by Neon Garden across Melbourne.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 border-b border-white pb-1 text-sm uppercase tracking-[0.08em]">
            Start Your Enquiry <ArrowRight size={16} />
          </Link>
        </Container>
      </section>

      <section className="bg-white py-[70px] lg:py-24">
        <Container>
          <GalleryMasonry items={GALLERY} filters={GALLERY_FILTERS} initialCount={16} step={12} />
        </Container>
      </section>

      <section className="bg-ivory px-3 py-16 md:px-5">
        <Container>
          <div className="relative overflow-hidden rounded-tokenlg border border-border bg-white px-8 py-14 text-center md:px-14 md:py-20">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage: 'radial-gradient(rgba(0,44,32,.12) 1.2px, transparent 1.2px)',
                backgroundSize: '22px 22px',
              }}
            />
            <div className="relative mx-auto max-w-[820px]">
              <p className="text-xs uppercase tracking-[0.1em] text-body">Your event</p>
              <h2 className="mt-5 font-serif uppercase text-forest">Want your celebration in our gallery?</h2>
              <p className="mx-auto mt-4 max-w-[650px] text-body">
                Book your event styling with Neon Garden and let us create a beautiful experience worth remembering.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button variant="primary" to="/contact">
                  Book Your Event Styling
                </Button>
                <Button variant="light" href={CONTACT.instagram}>
                  View Instagram
                </Button>
                <Button variant="ghost" href={WA_ENQUIRE}>
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
