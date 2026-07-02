// Payments page.
// TODO: Replace the REPLACE_ME PayPal.me handle with your real handle before going live.
export const PAY_CARDS = [
  {
    icon: '◐',
    title: 'Booking Deposit',
    text: 'Secure your event date with a non-refundable booking deposit.',
    amount: 'From $200',
    cta: 'Pay Deposit',
    href: 'https://www.paypal.com/paypalme/REPLACE_ME/200',
    variant: 'primary',
    featured: false,
  },
  {
    icon: '◑',
    title: 'Event Payment',
    text: 'Pay your full event balance ahead of the styling day.',
    amount: 'Custom',
    cta: 'Pay Full Balance',
    href: 'https://www.paypal.com/paypalme/REPLACE_ME',
    variant: 'gold',
    featured: true,
    badge: 'Popular',
  },
  {
    icon: '◒',
    title: 'Custom Booking',
    text: 'Need to settle a specific quoted amount? Enter your custom payment.',
    amount: 'You decide',
    cta: 'Pay Custom Amount',
    href: 'https://www.paypal.com/paypalme/REPLACE_ME',
    variant: 'primary',
    featured: false,
  },
]

export const TRUST_BADGES = [
  'Secure PayPal Checkout',
  'No card details stored',
  'Receipts emailed within 24 hours',
  'Trusted by 500+ Melbourne clients',
]

export const PAY_STEPS = [
  { title: 'Choose your payment', text: 'Select the payment type that matches your booking — deposit, full balance or a custom quoted amount.' },
  { title: 'Pay securely via PayPal', text: "You'll be redirected to a secure PayPal page to enter the exact amount and your details." },
  { title: 'Send us your receipt', text: 'Once payment is complete, email us a screenshot of your receipt so we can match it to your booking.' },
  { title: 'Get your confirmation', text: "We'll send your booking confirmation within 24 hours — and start planning your styling." },
]
