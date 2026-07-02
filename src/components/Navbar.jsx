import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Brand from './Brand.jsx'
import IconButton from './ui/IconButton.jsx'
import { MessageCircle, Menu, X, WhatsAppIcon } from './icons.jsx'
import useScrolled from '../hooks/useScrolled.js'
import { NAV_LINKS, WA_ENQUIRE } from '../data/site.js'

export default function Navbar() {
  const scrolled = useScrolled(30)
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `relative py-1.5 text-[.84rem] font-medium tracking-[.05em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-neonpink after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 ${
      isActive ? 'text-neonpink after:origin-left after:scale-x-100' : 'text-ink'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b backdrop-blur-[14px] backdrop-saturate-150 transition-[background,border-color] duration-300 ${
        scrolled ? 'border-line bg-cream/45' : 'border-transparent bg-cream/80'
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-6 px-5 py-[18px] sm:px-6">
        <Brand className="text-plum" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[30px] lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <IconButton
            icon={MessageCircle}
            label="Enquire"
            to="/contact"
            variant="soft"
            className="hidden lg:inline-grid"
          />
          <IconButton icon={WhatsAppIcon} label="Chat on WhatsApp" href={WA_ENQUIRE} variant="whatsapp" iconSize={22} />
          {/* Hamburger */}
          <IconButton
            icon={open ? X : Menu}
            label="Toggle menu"
            variant="outline"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
          />
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          className="absolute inset-x-0 top-full flex flex-col border-b border-line bg-white p-6 shadow-soft lg:hidden"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b border-line py-3.5 text-base last:border-b-0 ${
                  isActive ? 'text-neonpink' : 'text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
