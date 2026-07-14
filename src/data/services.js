import { siteImages } from './images.js'

export const SERVICES = [
  {
    slug: 'budget-friendly-hire',
    title: 'Budget Friendly Hire',
    shortDescription:
      'This budget friendly hire is convenient and versatile. It is suitable for all event.',
    overview:
      'These can be hired by itself or as a package. Choose individual hire pieces that fit your celebration without committing to a full styling package.',
    price: '$180 – $650',
    listImage: siteImages.services.budgetFriendly,
    pairings: [],
    hireLinks: [
      { label: 'Neon signs', to: '/hire-items/neon-signs' },
      { label: 'Backdrops', to: '/hire-items/backdrops' },
      { label: 'Vertical gardens', to: '/hire-items/vertical-gardens' },
    ],
  },
  {
    slug: 'birthday',
    title: 'Birthday',
    shortDescription:
      'We offer themed birthday packages for tiny humans to Milestone birthdays.',
    overview:
      'We offer themed birthday packages for tiny humans to Milestone birthdays. Pair your celebration with photo-ready add-ons that make the day feel personal and memorable.',
    price: '$680 – $1,450',
    listImage: siteImages.services.birthdays,
    pairings: [
      'Photo memory wall',
      'Birthday entry sign',
      'Custom wishing wall (please contact us directly to enquire)',
      'Live capture and print',
    ],
    hireLinks: [],
  },
  {
    slug: 'proposal',
    title: 'Proposal',
    shortDescription:
      'We offer specially curated backdrops and packages for our lovers.',
    overview:
      "While we can't take away all the pressure, we're here to help create a magical, personalized atmosphere that makes your moment truly memorable.",
    price: '$750 – $1,350',
    listImage: siteImages.services.proposals,
    pairings: ['Date night dinner table', 'Cute camps for star gazing', 'Picnic set up'],
    hireLinks: [],
  },
  {
    slug: 'bridal-showers',
    title: 'Bridal Showers',
    shortDescription:
      'We offer beautifully curated backdrops and packages for bridal showers.',
    overview:
      "We understand how overwhelming the planning can be amidst all the excitement, and we're committed to helping you create a stunning, personalized setting that makes the celebration truly memorable for your bride-to-be.",
    price: '$720 – $1,380',
    listImage: siteImages.services.bridalShowers,
    pairings: [
      'Bridal table set up',
      'Bridal picnics',
      'Instagram-able Memory wall (please contact us directly to enquire)',
    ],
    hireLinks: [],
  },
  {
    slug: 'baby-showers',
    title: 'Baby Showers',
    shortDescription:
      'Elegant and personalised décor for baby showers and new to-be-Mommies.',
    overview:
      "Our décor services for baby showers are elegant and personalised. We're here to help you create a charming, personalized setting that makes the celebration truly special and unforgettable for the new to-be-Mommies.",
    price: '$640 – $1,280',
    listImage: siteImages.services.babyShowers,
    pairings: ['Table set ups', 'Entry signs', 'Picnic set ups', 'Best wishes wall'],
    hireLinks: [],
  },
  {
    slug: 'engagement-parties',
    title: 'Engagement Parties',
    shortDescription:
      'Transform your engagement celebration with elegant backdrops and personalised touches.',
    overview:
      'Our decor services for engagement parties are designed to transform your celebration into a memorable event. From elegant backdrops to personalized touches, we help create a stunning setting that reflects the joy and love of this special milestone.',
    price: '$980 – $2,100',
    listImage: siteImages.services.engagements,
    pairings: [
      'Table set ups',
      'Entry signs',
      'Picnic set ups',
      'Live capture / wishing wall',
      'Centre Pieces',
    ],
    hireLinks: [],
  },
  {
    slug: 'weddings',
    title: 'Weddings',
    shortDescription:
      'Exquisite backdrops and personalised details for your big day.',
    overview:
      'At our decor services for your big day, we focus on transforming your special day into an extraordinary celebration. From exquisite backdrops to personalized details, we create a stunning setting that captures the love and elegance of your occasion.',
    price: '$1,650 – $4,200',
    listImage: siteImages.services.weddings,
    pairings: [
      'Table set ups',
      'Entry signs',
      'Live capture / wishing wall',
      'Centre Pieces',
    ],
    hireLinks: [],
    note: 'We know all events and dream weddings are different, so we are happy to share some of our favourite memories. Please contact us directly to customise your very own dream idea to reality.',
  },
  {
    slug: 'picnics',
    title: 'Picnics',
    shortDescription:
      'Versatile outdoor picnic set ups for birthdays, graduations, date nights and gatherings.',
    overview:
      'There is nothing more than having a perfect outdoor setup. Our idea of picnic set ups are more versatile — from birthday to graduations, couple date nights to family & friends gathering.',
    price: '$420 – $980',
    listImage: siteImages.services.picnics,
    pairings: ['Back drops', 'Centre pieces', 'Custom walls'],
    hireLinks: [],
  },
  {
    slug: 'south-asian-style',
    title: 'South Asian Style',
    shortDescription:
      'We love culture and understand the diversity and every detail of celebration.',
    overview:
      'We love culture and understand the diversity and every detail of South Asian celebrations — styled with care for Nikah, Mehndi, Eid and Ramadan moments.',
    price: '$890 – $2,450',
    listImage: siteImages.services.southAsian,
    pairings: ['Nikah Partition walls', 'Mehndi nights', 'Eid and Ramadan set ups'],
    hireLinks: [],
  },
]

export const getServiceBySlug = (slug) => SERVICES.find((item) => item.slug === slug)
