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
  address: '14 Katandra Crescent, Broadmeadows VIC, Australia',
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
    children: [
      { label: 'Hire Items', to: '/hire-items' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  { label: 'Packages', to: '/packages' },
  { label: 'Contact', to: '/contact' },
]

export const EVENT_TYPES = [
  'Wedding', 'Nikah', 'Reception', 'Engagement', 'Henna Night',
  'Birthday', 'Baby Shower', 'Bridal Shower', 'Proposal', 'Picnic', 'Custom Event',
]

export const FOOTER_EXPLORE = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Hire Items', to: '/hire-items' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Packages', to: '/packages' },
]
