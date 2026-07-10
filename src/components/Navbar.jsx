import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Brand from './Brand.jsx'
import Button from './ui/Button.jsx'
import IconButton from './ui/IconButton.jsx'
import { ChevronRight, Menu, X } from './icons.jsx'
import useScrolled from '../hooks/useScrolled.js'
import { NAV_LINKS, WA_ENQUIRE } from '../data/site.js'

export default function Navbar() {
  const location = useLocation()
  const scrolled = useScrolled(30)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  const isHome = location.pathname === '/'
  const overlayMode = isHome && !scrolled

  const closeMenu = () => {
    setOpen(false)
    setMobileServicesOpen(false)
  }

  const linkClass = ({ isActive }) =>
    `relative py-1.5 text-[.84rem] font-medium tracking-[.05em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-forest after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 ${
      overlayMode
        ? isActive
          ? 'text-white after:bg-white after:origin-left after:scale-x-100'
          : 'text-white/90 after:bg-white/80'
        : isActive
          ? 'text-forest after:origin-left after:scale-x-100'
          : 'text-inverse'
    }`

  useEffect(() => {
    if (!servicesOpen) return undefined
    const onClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) return
      setServicesOpen(false)
    }
    window.addEventListener('mousedown', onClickOutside)
    return () => window.removeEventListener('mousedown', onClickOutside)
  }, [servicesOpen])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  const mobileLinkClass = ({ isActive }) =>
    `block py-3.5 text-base transition-colors ${isActive ? 'text-forest' : 'text-inverse'}`

  const mobileCtas = (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      <Button to="/contact" variant="primary" size="sm" className="w-full justify-center" onClick={closeMenu}>
        Plan My Event
      </Button>
      <Button href={WA_ENQUIRE} variant="ghost" size="sm" className="w-full justify-center" onClick={closeMenu}>
        WhatsApp Us
      </Button>
    </div>
  )

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b backdrop-blur-[14px] backdrop-saturate-150 transition-[background,border-color] duration-300 ${
          overlayMode ? 'border-transparent bg-transparent' : 'border-border bg-ivory/95'
        }`}
      >
        <div className="mx-auto flex max-w-container items-center justify-between gap-6 px-5 py-[18px] sm:px-6 lg:px-8">
          <Brand className={overlayMode ? 'text-white' : 'text-forest'} smallTone={overlayMode ? 'text-white/80' : 'text-body'} />

          <nav className="hidden items-center gap-[30px] lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => {
              if (!l.children) {
                return (
                  <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                    {l.label}
                  </NavLink>
                )
              }

              return (
                <div key={l.to} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    className={`relative inline-flex items-center gap-1 py-1.5 text-[.84rem] font-medium tracking-[.05em] transition-colors ${
                      overlayMode ? 'text-white hover:text-white/90' : 'text-inverse hover:text-forest'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    {l.label}
                    <ChevronRight
                      size={14}
                      aria-hidden="true"
                      className={`transition-transform ${servicesOpen ? 'rotate-90' : ''}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full mt-3 min-w-[220px] rounded-md border border-border bg-white p-2 shadow-soft">
                      <NavLink to={l.to} className="block rounded px-3 py-2 text-sm text-inverse hover:bg-ivory" onClick={() => setServicesOpen(false)}>
                        All Services
                      </NavLink>
                      {l.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className="block rounded px-3 py-2 text-sm text-inverse hover:bg-ivory"
                          onClick={() => setServicesOpen(false)}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <NavLink
              to="/contact"
              className={`hidden rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] lg:inline-flex ${
                overlayMode ? 'bg-white text-forest' : 'bg-forest text-white'
              }`}
            >
              Plan My Event
            </NavLink>
            <IconButton
              icon={open ? X : Menu}
              label="Toggle menu"
              variant="plain"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden ${
                overlayMode
                  ? 'border border-white/55 bg-black/25 text-white hover:border-white hover:bg-white/15 hover:text-white'
                  : 'border border-border bg-white text-forest hover:border-forest hover:text-forest'
              }`}
            />
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[110] bg-black/45 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      <nav
        className={`fixed inset-y-0 right-0 z-[120] flex w-[min(100vw-2.5rem,360px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-forest">Menu</p>
          <IconButton
            icon={X}
            label="Close menu"
            variant="plain"
            onClick={closeMenu}
            className="border border-border bg-white text-forest hover:border-forest hover:text-forest"
          />
        </div>

        <div className="border-b border-border p-4">{mobileCtas}</div>

        <div className="flex-1 overflow-y-auto px-5 py-2">
          {NAV_LINKS.map((l) => {
            if (!l.children) {
              return (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={closeMenu} className={mobileLinkClass}>
                  {l.label}
                </NavLink>
              )
            }

            return (
              <div key={l.to} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3.5 text-left text-base text-inverse"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((value) => !value)}
                >
                  {l.label}
                  <ChevronRight
                    size={16}
                    aria-hidden="true"
                    className={`shrink-0 transition-transform ${mobileServicesOpen ? 'rotate-90' : ''}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="space-y-1 pb-3 pl-3">
                    <NavLink to={l.to} onClick={closeMenu} className="block py-2 text-sm text-body hover:text-forest">
                      All Services
                    </NavLink>
                    {l.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={closeMenu}
                        className="block py-2 text-sm text-body hover:text-forest"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="border-t border-border p-4">{mobileCtas}</div>
      </nav>
    </>
  )
}
