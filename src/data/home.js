import { siteImages } from './images.js'

// Home page content blocks.

export const STATS = [
  { value: 500, suffix: '+', label: 'Events Styled' },
  { value: 120, suffix: '+', label: 'Backdrops' },
  { value: 60, suffix: '+', label: 'Neon Signs' },
  { value: 100, suffix: '%', label: 'Happy Clients' },
]

export const FEATURED_SERVICES = [
  {
    title: 'Weddings',
    tag: 'Signature',
    img: siteImages.services.weddings,
    text: 'From the ceremony arch to the reception aisle — full bridal styling that feels timeless and luxurious.',
  },
  {
    title: 'Birthday Décor',
    tag: 'Most Loved',
    img: siteImages.services.birthdays,
    text: 'Show-stopping backdrops, balloon installations and styling for milestone birthdays.',
  },
  {
    title: 'Nikah & Henna',
    tag: 'Cultural',
    img: siteImages.services.nikahHenna,
    text: 'Elegant Nikah ceremonies and vibrant Henna nights designed with love and tradition in mind.',
  },
  {
    title: 'Baby Showers',
    tag: 'Soft & Sweet',
    img: siteImages.services.babyShowers,
    text: 'Whimsical, pastel-soft set-ups perfect for celebrating new arrivals.',
  },
  {
    title: 'Engagements',
    tag: 'Romantic',
    img: siteImages.services.engagements,
    text: 'Romantic, photo-worthy moments crafted to feel intimate and unforgettable.',
  },
  {
    title: 'Bridal Showers',
    tag: 'Editorial',
    img: siteImages.services.bridalShowers,
    text: 'Boutique-style bridal showers with luxe florals and curated tablescapes.',
  },
]

export const HIRE_COLLECTION = [
  { title: 'Backdrops', img: siteImages.hireItems.backdrops },
  { title: 'Vertical Gardens', img: siteImages.hireItems.verticalGardens },
  { title: 'Frames', img: siteImages.hireItems.frames },
  { title: 'Neon Lights', img: siteImages.hireItems.neon },
]

export const INSPIRATION = [
  {
    title: 'Instagrammable Corners',
    img: siteImages.gallery[0].src,
    text: 'Photo-ready moments built for sharing.',
  },
  {
    title: 'Guest Photo Wall',
    img: siteImages.gallery[1].src,
    text: 'Statement walls that say it all.',
  },
  {
    title: 'Entry Tables & Centre Pieces',
    img: siteImages.gallery[2].src,
    text: 'Welcome guests with elevated detail.',
  },
]

export const WHY_HOME = [
  {
    icon: '✦',
    title: 'Bespoke Styling',
    text: 'Every set-up is custom designed around your story, palette and venue.',
  },
  {
    icon: '✿',
    title: 'Premium Inventory',
    text: 'An ever-growing collection of luxe backdrops, florals, frames and neon signs.',
  },
  {
    icon: '✧',
    title: 'Effortless Service',
    text: 'Delivery, set-up and pack-down handled — so you can simply enjoy the moment.',
  },
]

export const INSTA_STRIP = [
  siteImages.gallery[3].src,
  siteImages.gallery[4].src,
  siteImages.gallery[5].src,
  siteImages.gallery[6].src,
  siteImages.gallery[7].src,
  siteImages.gallery[8].src,
]

export const TESTIMONIALS = [
  {
    quote:
      'Neon Garden completely transformed our wedding reception. Every guest was speechless — the styling was beyond what I imagined.',
    name: 'Aisha & Omar',
    location: 'Brighton, VIC',
    service: 'Wedding',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'The set-up for our baby shower was dreamy. So elegant, so soft — exactly what I asked for. Highly recommend.',
    name: 'Layla R.',
    location: 'Coburg, VIC',
    service: 'Baby Shower',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'Easy to work with, premium quality, and the neon signs and arches were unreal. We will be back for every event!',
    name: 'Maria T.',
    location: 'Carlton, VIC',
    service: 'Engagement',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'Our Nikah looked absolutely stunning. The florals, the vertical garden, the neon — every detail felt intentional and elegant.',
    name: 'Fatima & Yusuf',
    location: 'Craigieburn, VIC',
    service: 'Nikah',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'They styled my daughter’s first birthday and I cried happy tears. The backdrop was the most beautiful thing I’ve seen.',
    name: 'Sarah K.',
    location: 'Preston, VIC',
    service: 'Birthday Décor',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'From the first message to pack-down, everything was seamless. Professional, warm and genuinely talented stylists.',
    name: 'Amira H.',
    location: 'Roxburgh Park, VIC',
    service: 'Bridal Shower',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'The henna night styling was full of colour and life. Our families are still talking about how gorgeous it looked.',
    name: 'Zainab & Hamza',
    location: 'Meadow Heights, VIC',
    service: 'Henna Night',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'He proposed in front of the most romantic set-up. Neon Garden made the moment feel like a fairytale.',
    name: 'Priya S.',
    location: 'Docklands, VIC',
    service: 'Proposal',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'Incredible value for such a premium look. The team went above and beyond to match our colour palette perfectly.',
    name: 'Emily & Jack',
    location: 'Werribee, VIC',
    service: 'Engagement',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'Our reception felt like a magazine editorial. Guests kept asking who styled it — I proudly told everyone.',
    name: 'Noor A.',
    location: 'Epping, VIC',
    service: 'Reception',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'The vertical garden with our name in neon was the centrepiece of the whole night. Absolutely obsessed.',
    name: 'Hana & Bilal',
    location: 'Tarneit, VIC',
    service: 'Wedding',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'So easy to deal with and incredibly creative. They understood my vision better than I could explain it.',
    name: 'Chloe M.',
    location: 'Essendon, VIC',
    service: 'Baby Shower',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'Delivery and set-up were right on time and stress-free. The styling elevated our venue completely.',
    name: 'Aaliyah R.',
    location: 'Sunbury, VIC',
    service: 'Bridal Shower',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'We hired the arch, florals and neon for our engagement and it was pure magic. Thank you Neon Garden!',
    name: 'Sana & Adeel',
    location: 'Point Cook, VIC',
    service: 'Engagement',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'Every element was luxe and beautifully finished. You can tell they genuinely care about each event.',
    name: 'Isabella F.',
    location: 'Brunswick, VIC',
    service: 'Birthday Décor',
    rating: 5,
    verified: true,
  },
  {
    quote:
      'Booked them for my sister’s bridal shower and it exceeded every expectation. Elegant, soft and so photogenic.',
    name: 'Mariam D.',
    location: 'Glenroy, VIC',
    service: 'Bridal Shower',
    rating: 5,
    verified: true,
  },
]
