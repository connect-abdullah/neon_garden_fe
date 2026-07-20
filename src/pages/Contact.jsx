import ContactForm from '../components/contact/ContactForm.jsx'
import MapCard from '../components/contact/MapCard.jsx'
import { Container } from '../components/ui.jsx'
import { Phone, Mail, MapPin, InstagramIcon } from '../components/icons.jsx'
import { CONTACT, EVENT_TYPES, WA_ENQUIRE } from '../data/site.js'
import { siteImages } from '../data/images.js'

const DETAILS = [
  { icon: Phone, label: 'Phone / WhatsApp', value: CONTACT.phoneDisplay, href: WA_ENQUIRE, external: true },
  { icon: Mail, label: 'Email', value: CONTACT.email, href: CONTACT.emailLink },
  { icon: InstagramIcon, label: 'Instagram', value: CONTACT.instagramHandle, href: CONTACT.instagram, external: true },
  { icon: MapPin, label: 'Address', value: '14 Katandra Crescent, BROADMEADOWS VIC 3047' },
]

export default function Contact() {
  return (
    <section className="bg-ivory pb-16 pt-[140px] md:pb-24 md:pt-[170px]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-body">Contact</p>
            <h1 className="mt-4 max-w-[14ch] font-serif uppercase leading-[0.95] text-forest">
              Let&apos;s plan something beautiful.
            </h1>
            <p className="mt-6 max-w-[52ch] text-body">
              Share your date, venue, event type and styling vision. Our team will respond with availability and a tailored proposal.
            </p>

            <ul className="mt-10 space-y-5 border-t border-border pt-8">
              {DETAILS.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <item.icon size={18} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.08em] text-muted">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="mt-1 inline-block text-forest hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-forest">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

  
          </div>

          <div>
            <ContactForm eventTypes={EVENT_TYPES} />
            <img
              src={siteImages.contactFeature}
              alt="Styled event table with floral details"
              className="mt-8 aspect-[4/3] w-full object-cover lg:hidden"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          <MapCard mapEmbed={CONTACT.mapEmbed} address={CONTACT.address} />
        </div>
      </Container>
    </section>
  )
}
