import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactInfoCard from '../components/contact/ContactInfoCard.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import MapCard from '../components/contact/MapCard.jsx'
import { Container } from '../components/ui.jsx'
import { Phone, Mail, MapPin, WhatsAppIcon, InstagramIcon } from '../components/icons.jsx'
import { CONTACT, EVENT_TYPES, waLink } from '../data/site.js'

const INFO = [
  { icon: Phone, title: 'Phone', href: CONTACT.phoneTel, text: CONTACT.phoneDisplay },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    href: waLink("Hi Neon Garden, I'd love to enquire about event styling."),
    text: 'Chat instantly on WhatsApp',
    external: true,
  },
  { icon: Mail, title: 'Email', href: CONTACT.emailLink, text: CONTACT.email },
  { icon: MapPin, title: 'Studio', text: CONTACT.address },
  {
    icon: InstagramIcon,
    title: 'Instagram',
    href: CONTACT.instagram,
    text: `${CONTACT.instagramHandle} — DM for Collab`,
    external: true,
  },
]

export default function Contact() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Let's Talk"
        title="Plan your event with us"
        subtitle="Tell us about your celebration — we'll reply within 24 hours with availability and a styling proposal."
      />

      <section className="py-[70px] lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-[50px]">
            <Reveal className="flex flex-col gap-4">
              {INFO.map((item) => (
                <ContactInfoCard key={item.title} {...item} />
              ))}
            </Reveal>

            <Reveal delay={1}>
              <ContactForm eventTypes={EVENT_TYPES} />
            </Reveal>
          </div>

          <Reveal className="mt-10 lg:mt-[60px]">
            <MapCard mapEmbed={CONTACT.mapEmbed} address={CONTACT.address} />
          </Reveal>
        </Container>
      </section>
    </>
  )
}
