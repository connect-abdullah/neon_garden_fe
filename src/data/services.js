import { galleryByCat, galleryMix, siteImages } from './images.js'
import {
  BABY_SHOWER_PACKAGES,
  BIRTHDAY_PACKAGES,
  BRIDAL_SHOWER_PACKAGES,
  ENGAGEMENT_PACKAGES,
  PROPOSAL_PACKAGES,
} from './servicePackages.js'

export const SERVICES = [
  {
    slug: 'birthday',
    title: 'Birthday',
    shortDescription:
      'We offer themed birthday packages for tiny humans to Milestone birthdays.',
    overview:
      'We offer themed birthday packages for tiny humans to Milestone birthdays. Pair your celebration with photo-ready add-ons that make the day feel personal and memorable.',
    price: '$680 – $1,450',
    listImage: siteImages.services.birthdays,
    packages: BIRTHDAY_PACKAGES,
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
    packages: PROPOSAL_PACKAGES,
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
    packages: BRIDAL_SHOWER_PACKAGES,
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
    packages: BABY_SHOWER_PACKAGES,
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
    packages: ENGAGEMENT_PACKAGES,
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
    packageIncludes: [
      'Table set ups',
      'Entry signs',
      'Live capture / wishing wall',
      'Centre Pieces',
    ],
    pageCta: {
      description:
        'We know all events and dream weddings are different, so we are happy to share some of our favourite memories. Please contact us directly to customise your very own dream idea to reality.',
      buttonText: 'Upload Mood Boards',
      buttonTo: '/contact',
    },
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
    showcase: galleryMix([['engagements'], ['birthdays']], 8),
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
    packageIncludes: ['Nikah Partition walls', 'Mehndi nights', 'Eid and Ramadan set ups'],
    pageCta: {
      description:
        'We know all events and celebrations are different, so we are happy to share some of our favourite memories. Please contact us directly to customise your very own dream idea to reality.',
      buttonText: 'Upload Mood Boards',
      buttonTo: '/contact',
    },
  },
]

export const getServiceBySlug = (slug) => SERVICES.find((item) => item.slug === slug)
