import { siteImages } from './images.js'

export const HIRE_ITEMS = [
  {
    slug: 'backdrops',
    title: 'Backdrops',
    img: siteImages.hireItems.backdrops,
    text: 'Floral, structural and custom backdrops.',
  },
  {
    slug: 'vertical-gardens',
    title: 'Vertical Gardens',
    img: siteImages.hireItems.verticalGardens,
    text: 'Lush green walls for any venue.',
  },
  {
    slug: 'frames',
    title: 'Frames',
    img: siteImages.hireItems.frames,
    text: 'Ornate hire frames and photo moments.',
  },
  {
    slug: 'neon-signs',
    title: 'Neon Signs',
    img: siteImages.hireItems.neon,
    text: 'Custom neon signage in your palette.',
  },
  {
    slug: 'floral-backdrops',
    title: 'Floral Backdrops',
    img: siteImages.hireItems.floralBackdrops,
    text: 'Lush floral walls and soft botanical finishes for photo-ready moments.',
  },
  {
    slug: 'custom-signage',
    title: 'Custom Signage',
    img: siteImages.hireItems.customSignage,
    text: 'Welcome boards, acrylic signs and personalised event signage.',
  },
  {
    slug: 'arches',
    title: 'Arches',
    img: siteImages.hireItems.arches,
    text: 'Statement ceremony and reception arches finished with florals and fabric.',
  },
  {
    slug: 'dessert-tables',
    title: 'Dessert Tables',
    img: siteImages.hireItems.dessertTables,
    text: 'Styled dessert and cake presentation areas with layered decor details.',
  },
  {
    slug: 'table-styling',
    title: 'Table Styling',
    img: siteImages.hireItems.tableStyling,
    text: 'Curated tablescapes with florals, candles, runners and finishing accents.',
  },
  {
    slug: 'floral-installations',
    title: 'Floral Installations',
    img: siteImages.hireItems.floralInstallations,
    text: 'Feature florals and installation moments tailored to your event palette.',
  },
]

export const getHireItemBySlug = (slug) => HIRE_ITEMS.find((item) => item.slug === slug)
