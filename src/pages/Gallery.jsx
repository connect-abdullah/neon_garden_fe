import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import GalleryMasonry from '../components/gallery/GalleryMasonry.jsx'
import { Container, Button } from '../components/ui.jsx'
import { ArrowRight, InstagramIcon, WhatsAppIcon } from '../components/icons.jsx'
import { CONTACT, WA_COLLAB, WA_ENQUIRE } from '../data/site.js'
import { GALLERY, GALLERY_FILTERS } from '../data/gallery.js'

export default function Gallery() {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        eyebrow="Real Events"
        title="A gallery of styled moments"
        subtitle="A curated look inside the weddings, showers, birthdays and celebrations we've styled across Melbourne. Click any image to enlarge."
      >
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button variant="primary" href={CONTACT.instagram} icon={InstagramIcon}>
            View More on Instagram
          </Button>
          <Button variant="ghost" href={WA_COLLAB}>
            DM for Collab
          </Button>
        </div>
      </PageHero>

      <section className="py-[70px] lg:py-28">
        <Container>
          <GalleryMasonry items={GALLERY} filters={GALLERY_FILTERS} initialCount={24} step={16} />
        </Container>
      </section>

      <CTA
        backgroundVariant="blush"
        title="Want your event in our gallery?"
        description="Get in touch and let's create a moment worth capturing."
      >
        <Button variant="primary" to="/contact" iconRight={ArrowRight}>
          Book Your Event Styling
        </Button>
        <Button variant="whatsapp" href={WA_ENQUIRE} icon={WhatsAppIcon}>
          WhatsApp Us
        </Button>
      </CTA>
    </>
  )
}
