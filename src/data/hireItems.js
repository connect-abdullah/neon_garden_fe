import { siteImages } from './images.js'
import neonProducts from './hire_items/neon_products.json'
import verticalGardens from './hire_items/vertical_gardens.json'
import backdrops from './hire_items/backdrops.json'
import frames from './hire_items/frames.json'
import wishingWall from './hire_items/wishing_wall.json'
import centerpieces from './hire_items/centerpieces.json'
import plinths from './hire_items/plinths.json'

const CONTACT_BLURB =
  'There are multiple options for this collection — finishes, scale and styling can be tailored to your event. Share your colour palette, reference images or anything you have in mind and we will take care of the rest.'

const WISH_WALL_TEXT =
  'This set up will make you event more fun and memorable while capturing live moments from your big day. This feature is suitable for all kind of events. We will provide you with a pocket friendly printer for guest to print live photos from your big day and leave them in the envelope along with best wishes. Please enquire us directly to customise it as per your vibe and theme.'

const PRICE_LABELS = {
  withNeon: 'With neon',
  standalone: 'Standalone',
  white: 'White',
  pink: 'Pink',
  customDecal: 'Custom decal',
  setOf3: 'Set of 3',
  setOf2: 'Set of 2',
  single: 'Single',
  backdropAndPlinths: 'Backdrop & plinths',
  backdropOnly: 'Backdrop only',
  largeWhite: 'Large white',
  mediumBlue: 'Medium blue',
  smallWhite: 'Small white',
}

/** Format hire product price (string or option object) into display rows. */
export function formatHirePrice(price) {
  if (!price) return []
  if (typeof price === 'string') return [{ label: null, value: price }]
  if (typeof price === 'object') {
    return Object.entries(price).map(([key, value]) => ({
      label: PRICE_LABELS[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()),
      value,
    }))
  }
  return []
}

const PRODUCTS_BY_KEY = {
  backdrops: [...backdrops, ...frames],
  'vertical-gardens': verticalGardens,
  'neon-signs': neonProducts,
  'wish-walls': wishingWall,
  centerpieces,
  plinths,
}

export const HIRE_ITEMS = [
  {
    slug: 'backdrops',
    title: 'Backdrops & Frames',
    img: siteImages.hireItems.backdrops,
    text: 'Fabric backdrops, round sets and metal hire frames.',
    mode: 'catalog',
    productsKey: 'backdrops',
  },
  {
    slug: 'vertical-gardens',
    title: 'Vertical Gardens',
    img: siteImages.hireItems.verticalGardens,
    text: 'Lush green walls for any venue.',
    mode: 'catalog',
    productsKey: 'vertical-gardens',
  },
  {
    slug: 'neon-signs',
    title: 'Neon Signs',
    img: siteImages.hireItems.neon,
    text: 'Custom neon signage in your palette.',
    mode: 'catalog',
    productsKey: 'neon-signs',
  },
  {
    slug: 'custom-signage',
    title: 'Custom Signage',
    img: siteImages.hireItems.customSignage,
    text: 'Welcome boards, acrylic signs and personalised event signage.',
    mode: 'contact',
    contactBlurb: CONTACT_BLURB,
  },
  {
    slug: 'wish-walls',
    title: 'Wish Walls',
    img: siteImages.hireItems.wishingWall,
    text: WISH_WALL_TEXT,
    mode: 'catalog',
    productsKey: 'wish-walls',
  },
  {
    slug: 'plinths',
    title: 'Plinths',
    img: siteImages.hireItems.plinths,
    text: 'Hire plinths in three sizes for cakes, florals and styling displays.',
    mode: 'catalog',
    productsKey: 'plinths',
  },
  {
    slug: 'centerpieces',
    title: 'Center Pieces',
    img: siteImages.hireItems.centerpieces,
    text: 'Table centre pieces in a range of colours and finishes.',
    mode: 'catalog',
    productsKey: 'centerpieces',
  },
]

export const getHireItemBySlug = (slug) => HIRE_ITEMS.find((item) => item.slug === slug)

export const getHireProducts = (item) => {
  if (!item?.productsKey) return []
  return PRODUCTS_BY_KEY[item.productsKey] || []
}

export const hireItemHref = (item) => {
  if (!item) return '/hire-items'
  if (item.mode === 'comingSoon') return '/hire-items'
  return `/hire-items/${item.slug}`
}
