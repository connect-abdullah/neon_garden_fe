import { HIRE_ITEMS, hireItemHref } from './hireItems.js'
import { SERVICES } from './services.js'

// Central site config — contact details, social links, nav, and WhatsApp helpers.

export const WHATSAPP_NUMBER = '61451934652'

// Build a wa.me link with a prefilled message.
export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const WA_MESSAGES = {
  enquire: "Hi Neon Garden, I'd love to enquire about event styling.",
  collab: 'Hi Neon Garden! DM for collab ✨',
}

// Common pre-built links reused across the site.
export const WA_ENQUIRE = waLink(WA_MESSAGES.enquire)
export const WA_COLLAB = waLink(WA_MESSAGES.collab)

export const CONTACT = {
  phoneDisplay: '+61 451 934 652',
  phoneTel: 'tel:61451934652',
  email: 'info@neongardeneventhire.com.au',
  emailLink: 'mailto:info@neongardeneventhire.com.au',
  address: '14 Katandra Crescent, BROADMEADOWS VIC 3047',
  hours: 'Mon — Sat, by appointment',
  instagram: 'https://www.instagram.com/neongardeneventhire/',
  instagramHandle: '@neongardeneventhire',
  mapEmbed:
    'https://www.google.com/maps?q=14+Katandra+Crescent,+Broadmeadows+VIC,+Australia&output=embed',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    mega: true,
  },
  { label: 'Contact', to: '/contact' },
]

/** Multi-column Services mega menu (hire items first, then styling, then explore). */
export const SERVICES_MEGA_MENU = {
  hire: {
    heading: 'Budget Friendly Hire',
    items: HIRE_ITEMS.map((item) => ({
      label: item.title,
      description: item.text,
      to: hireItemHref(item),
    })),
  },
  styling: {
    heading: 'Styling Services',
    items: SERVICES.map((item) => ({
      label: item.title,
      description: item.shortDescription,
      to: `/services/${item.slug}`,
    })),
  },
  explore: {
    heading: 'Explore',
    items: [
      {
        label: 'All Services',
        description: 'Browse every styling service we offer.',
        to: '/services',
      },
      {
        label: 'All Hire Items',
        description: 'Full hire collection for any celebration.',
        to: '/hire-items',
      },
      {
        label: 'Gallery',
        description: 'Recent moments we have styled.',
        to: '/gallery',
      },
    ],
  },
}

export const EVENT_TYPES = [
  'Wedding', 'Nikah', 'Reception', 'Engagement', 'Henna Night',
  'Birthday', 'Baby Shower', 'Bridal Shower', 'Proposal', 'Picnic', 'Custom Event',
]

export const FOOTER_EXPLORE = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Hire Items', to: '/hire-items' },
  { label: 'Gallery', to: '/gallery' },
]
