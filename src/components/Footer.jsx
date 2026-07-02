import { Link } from 'react-router-dom'
import Brand from './Brand.jsx'
import { Container } from './ui.jsx'
import { InstagramIcon, WhatsAppIcon, Mail, MapPin, Phone, Clock } from './icons.jsx'
import { CONTACT, FOOTER_EXPLORE, WA_ENQUIRE, WA_COLLAB } from '../data/site.js'

const linkCls = 'inline-block py-1 text-[.92rem] text-white/70 transition-colors hover:text-neonpink'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-plumdark pb-[30px] pt-20 text-white/70">
      <Container>
        <div className="mb-[50px] grid gap-[50px] md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Brand className="mb-[18px] text-white" smallTone="text-blush" />
            <p className="text-[.92rem] leading-[1.7] text-white/60">
              Premium event hire, styling and décor in Melbourne. Crafting unforgettable celebrations with elegance,
              neon and a touch of green.
            </p>
            <div className="mt-[18px] flex gap-3">
              {[
                { href: CONTACT.instagram, label: 'Instagram', Icon: InstagramIcon },
                { href: WA_ENQUIRE, label: 'WhatsApp', Icon: WhatsAppIcon },
                { href: CONTACT.emailLink, label: 'Email', Icon: Mail },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/[.06] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neonpink"
                >
                  <s.Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-[18px] font-sans text-[.85rem] uppercase tracking-[.18em] text-white">Explore</h4>
            <ul>
              {FOOTER_EXPLORE.map((l) => (
                <li key={l.to} className="mb-1">
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[18px] font-sans text-[.85rem] uppercase tracking-[.18em] text-white">Studio</h4>
            <ul className="text-[.92rem] text-white/70">
              <li className="mb-2.5 flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-neonpink" aria-hidden="true" />
                {CONTACT.address}
              </li>
              <li className="mb-2.5 flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-neonpink" aria-hidden="true" />
                <a href={CONTACT.phoneTel} className={linkCls}>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="mb-2.5 flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-neonpink" aria-hidden="true" />
                <a href={CONTACT.emailLink} className={linkCls}>
                  {CONTACT.email}
                </a>
              </li>
              <li className="mb-1 flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-neonpink" aria-hidden="true" />
                {CONTACT.hours}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-[18px] font-sans text-[.85rem] uppercase tracking-[.18em] text-white">Bookings</h4>
            <ul>
              <li className="mb-1">
                <Link to="/payments" className={linkCls}>
                  Make a Payment
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/contact" className={linkCls}>
                  Plan My Event
                </Link>
              </li>
              <li className="mb-1">
                <a href={WA_COLLAB} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  DM for Collab
                </a>
              </li>
              <li className="mb-1">
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-[.82rem] text-white/50">
          © {year} Neon Garden Event Hire · Crafted with care in Melbourne
        </div>
      </Container>
    </footer>
  )
}
