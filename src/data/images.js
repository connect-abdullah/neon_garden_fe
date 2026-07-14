const birthday = (file) => `/assets/birthday/${file}`
const engagement = (file) => `/assets/engagement/${file}`
const proposals = (file) => `/assets/proposals/${file}`

const galleryItems = [
  { src: proposals('2342452.jpg'), cat: 'proposals', alt: 'Styled proposal setup with floral decor' },
  { src: engagement('18057494854532834.jpg'), cat: 'engagements', alt: 'Elegant engagement table styling' },
  { src: birthday('18045780019824849.jpg'), cat: 'birthdays', alt: 'Birthday celebration with pastel decor' },
  { src: engagement('18093761524134510.jpg'), cat: 'weddings', alt: 'Wedding reception tablescape detail' },
  { src: proposals('17948329442674517.jpg'), cat: 'proposals', alt: 'Proposal backdrop with floral accents' },
  { src: birthday('17959022875704702.jpg'), cat: 'birthdays', alt: 'Birthday event with dessert styling' },
  { src: engagement('18023288527219482.jpg'), cat: 'engagements', alt: 'Engagement feature wall and florals' },
  { src: birthday('18058415080357361.jpg'), cat: 'birthdays', alt: 'Birthday party setup with custom signage' },
  { src: birthday('18071592088138900.jpg'), cat: 'birthdays', alt: 'Birthday styling with statement backdrop' },
  { src: engagement('17991403118499247.jpg'), cat: 'engagements', alt: 'Engagement event with custom decor details' },
  { src: proposals('18017007449046041.jpg'), cat: 'proposals', alt: 'Proposal sign and candlelit scene' },
  { src: engagement('17933728702074850.jpg'), cat: 'weddings', alt: 'Wedding decor and table arrangement' },
  { src: engagement('17855910931919965_1.jpg'), cat: 'engagements', alt: 'Engagement lounge styling with florals' },
  { src: engagement('17855939417036294.jpg'), cat: 'engagements', alt: 'Engagement ceremony backdrop and seating' },
  { src: engagement('17923403813258446.jpg'), cat: 'engagements', alt: 'Engagement tablescape with layered linens' },
  { src: birthday('18007924409624805.jpg'), cat: 'birthdays', alt: 'Birthday setup with layered balloons' },
  { src: engagement('17950880267620276.jpg'), cat: 'weddings', alt: 'Wedding reception floral installation' },
  { src: engagement('17862956559612329.jpg'), cat: 'engagements', alt: 'Engagement vertical garden backdrop' },
  { src: engagement('18031741510026045.jpg'), cat: 'weddings', alt: 'Wedding head table with garden styling' },
  { src: birthday('17926000715908984.jpg'), cat: 'birthdays', alt: 'Birthday dessert table with floral accents' },
  { src: birthday('17938189514581887.jpg'), cat: 'birthdays', alt: 'Birthday celebration with balloon garland' },
  { src: birthday('18035521849768485.jpg'), cat: 'birthdays', alt: 'Birthday luxe table styling detail' },
  { src: birthday('18058850906356466.jpg'), cat: 'birthdays', alt: 'Baby shower styling with soft pastel decor' },
  { src: birthday('17981042837655480.jpg'), cat: 'birthdays', alt: 'Birthday event with curated tablescape' },
  { src: birthday('18237164362114595.jpg'), cat: 'birthdays', alt: 'Birthday celebration with floral centerpiece' },
  { src: proposals('17847374879824186.jpg'), cat: 'proposals', alt: 'Intimate proposal scene with candles' },
  { src: proposals('17912136733194891.jpg'), cat: 'proposals', alt: 'Proposal moment with golden floral styling' },
  { src: proposals('18062031538006021.jpg'), cat: 'proposals', alt: 'Proposal setup with neon sign and florals' },
  { src: proposals('Screenshot_20260702_215553_Instagram.jpg'), cat: 'proposals', alt: 'Bridal shower proposal styling detail' },
]

/** Pick up to `limit` gallery tiles matching any of the given categories (order preserved). */
export const galleryByCat = (cats, limit = 8) =>
  galleryItems.filter((item) => cats.includes(item.cat)).slice(0, limit)

/** Round-robin mix from category groups, up to `limit` unique tiles. */
export const galleryMix = (catGroups, limit = 8) => {
  const pools = catGroups.map((cats) => galleryItems.filter((item) => cats.includes(item.cat)))
  const picked = []
  const seen = new Set()
  let i = 0
  while (picked.length < limit) {
    let added = false
    for (const pool of pools) {
      if (picked.length >= limit) break
      const item = pool[i]
      if (item && !seen.has(item.src)) {
        seen.add(item.src)
        picked.push(item)
        added = true
      }
    }
    if (!added) break
    i += 1
  }
  return picked
}

export const siteImages = {
  logo: engagement('17852208730721063.jpg'),
  hero: '/hero_section.png',
  brandStory: {
    left: birthday('17959022875704702.jpg'),
    center: engagement('18057494854532834.jpg'),
    right: proposals('18062031538006021.jpg'),
  },
  brandStoryCollage: [
    { src: birthday('17959022875704702.jpg'), alt: 'Birthday celebration styling detail' },
    { src: engagement('18057494854532834.jpg'), alt: 'Engagement table and floral styling' },
    { src: proposals('18062031538006021.jpg'), alt: 'Proposal neon and floral backdrop' },
    { src: birthday('18045780019824849.jpg'), alt: 'Birthday pastel décor setup' },
    { src: engagement('18023288527219482.jpg'), alt: 'Cultural event lounge styling' },
    { src: engagement('17991403118499247.jpg'), alt: 'Wedding reception floral styling' },
    { src: proposals('17948329442674517.jpg'), alt: 'Proposal floral arch detail' },
    { src: engagement('17855910931919965_1.jpg'), alt: 'Birthday balloon and dessert styling' },
  ],
  statsBackground: engagement('18093761524134510.jpg'),
  services: {
    budgetFriendly: proposals('18017007449046041.jpg'),
    birthdays: birthday('18045780019824849.jpg'),
    proposals: proposals('18062031538006021.jpg'),
    bridalShowers: proposals('17948329442674517.jpg'),
    babyShowers: birthday('18058850906356466.jpg'),
    engagements: engagement('18093761524134510.jpg'),
    weddings: engagement('17991403118499247.jpg'),
    picnics: engagement('17855910931919965_1.jpg'),
    southAsian: engagement('18023288527219482.jpg'),
    nikahHenna: engagement('18023288527219482.jpg'),
  },
  hireItems: {
    hero: engagement('17905380197781480.jpg'),
    backdrops: proposals('18017007449046041.jpg'),
    floralBackdrops: engagement('17855939417036294.jpg'),
    verticalGardens: engagement('17862956559612329.jpg'),
    frames: engagement('17905380197781480.jpg'),
    neon: birthday('17982655528206349.jpg'),
    customSignage: birthday('18058415080357361.jpg'),
    centerpieces: engagement('18057494854532834.jpg'),
    floralInstallations: engagement('17950880267620276.jpg'),
  },
  about: {
    hero: engagement('18093761524134510.jpg'),
    feature: engagement('18031741510026045.jpg'),
  },
  packages: {
    romanticGarden: engagement('18031741510026045.jpg'),
    goldenSoiree: proposals('17912136733194891.jpg'),
    signatureNikah: engagement('18001267108633629.jpg'),
    birthdayLuxe: birthday('18035521849768485.jpg'),
    proposalMoment: proposals('18096129871284580.jpg'),
    fullEditorial: engagement('18096129871284580.jpg'),
  },
  packageCta: proposals('234252352.png'),
  gallery: galleryItems,
  homepageGalleryPreview: galleryItems.slice(16, 28),
}
