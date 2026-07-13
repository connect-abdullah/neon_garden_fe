import { NavLink } from 'react-router-dom'
import { SERVICES_MEGA_MENU } from '../data/site.js'

function MegaLink({ item, onNavigate }) {
  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      className="block rounded-sm px-2 py-1.5 text-[0.78rem] text-inverse transition-colors hover:bg-ivory hover:text-forest"
    >
      {item.label}
    </NavLink>
  )
}

function MenuColumn({ heading, items, onNavigate, bordered }) {
  return (
    <div className={bordered ? 'border-l border-border pl-4' : ''}>
      <p className="mb-2 px-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-forest">
        {heading}
      </p>
      <div className="flex flex-col">
        {items.map((item) => (
          <MegaLink key={item.to} item={item} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  )
}

export default function ServicesMegaMenu({ onNavigate }) {
  const { hire, styling, explore } = SERVICES_MEGA_MENU

  return (
    <div className="w-[min(100vw-2rem,520px)] rounded-md border border-border bg-white p-4 shadow-soft">
      <div className="grid grid-cols-3 gap-0">
        <MenuColumn heading={hire.heading} items={hire.items} onNavigate={onNavigate} />
        <MenuColumn heading={styling.heading} items={styling.items} onNavigate={onNavigate} bordered />
        <MenuColumn heading={explore.heading} items={explore.items} onNavigate={onNavigate} bordered />
      </div>
    </div>
  )
}

export function ServicesMobileSections({ onNavigate }) {
  const { hire, styling, explore } = SERVICES_MEGA_MENU

  return (
    <div className="space-y-4 pb-4 pl-1">
      {[hire, styling, explore].map((section, index) => (
        <div
          key={section.heading}
          className={index > 0 ? 'border-t border-border pt-4' : ''}
        >
          <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-forest">
            {section.heading}
          </p>
          <div className="flex flex-col">
            {section.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onNavigate}
                className="block py-1.5 text-sm text-inverse hover:text-forest"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
