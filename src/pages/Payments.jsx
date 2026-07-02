import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import StepTimeline from '../components/StepTimeline.jsx'
import CTA from '../components/CTA.jsx'
import Reveal from '../components/Reveal.jsx'
import PaymentCard from '../components/cards/PaymentCard.jsx'
import { Container, Button } from '../components/ui.jsx'
import {
  Wallet,
  CreditCard,
  Gem,
  Shield,
  Send,
  CheckCircle,
  ShieldCheck,
  WhatsAppIcon,
} from '../components/icons.jsx'
import { CONTACT, WA_ENQUIRE } from '../data/site.js'
import { PAY_CARDS, TRUST_BADGES, PAY_STEPS } from '../data/payments.js'

const CARD_ICONS = { 'Booking Deposit': Wallet, 'Event Payment': CreditCard, 'Custom Booking': Gem }
const STEP_ICONS = [CreditCard, Shield, Send, CheckCircle]

export default function Payments() {
  return (
    <>
      <PageHero
        breadcrumb="Payments"
        eyebrow="Secure Payments"
        title="Easy, secure payments via PayPal"
        subtitle="Lock in your event date with a deposit or settle your final balance — fast, secure and powered by PayPal."
      />

      {/* Payment cards */}
      <section className="py-[70px] lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="Payment Options"
            title="Choose how you'd like to pay"
            description="All payments are processed securely through PayPal. Select the option that matches your booking."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-end">
            {PAY_CARDS.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i + 1}
                className={`min-w-0 w-full ${c.featured ? 'lg:-translate-y-2 lg:scale-[1.02]' : ''}`}
              >
                <PaymentCard
                  icon={CARD_ICONS[c.title]}
                  title={c.title}
                  description={c.text}
                  amount={c.amount}
                  badge={c.badge}
                  featured={c.featured}
                  button={{ label: c.cta, href: c.href, variant: c.variant }}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How to pay */}
      <section className="bg-cream2 py-[70px] lg:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[70px]">
            <Reveal className="min-w-0">
              <SectionHeader
                eyebrow="Payment Instructions"
                title="How to pay"
                align="left"
                className="mb-8"
              />
              <StepTimeline steps={PAY_STEPS.map((s, i) => ({ ...s, icon: STEP_ICONS[i % STEP_ICONS.length] }))} />
              <p className="mt-6 text-[.95rem] text-inksoft">
                Please email your receipt to{' '}
                <a href={CONTACT.emailLink} className="font-medium text-neonpink">
                  {CONTACT.email}
                </a>{' '}
                for confirmation.
              </p>
              <div className="mt-5 flex flex-wrap gap-3.5">
                <Button variant="whatsapp" href={WA_ENQUIRE} icon={WhatsAppIcon}>
                  Ask a Question
                </Button>
                <Button variant="ghost" to="/contact">
                  Contact Us
                </Button>
              </div>
            </Reveal>
            <Reveal delay={1} className="min-w-0">
              <div className="overflow-hidden rounded-tokenlg border border-line/70 bg-white p-2 shadow-card">
                <img
                  src="/how_to_pay.jpeg"
                  alt="'Cheers to love' neon sign above a styled tablescape at a Neon Garden event"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[20px] object-cover transition-transform duration-[900ms] hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Trust badges */}
      <section className="py-[70px] lg:py-28">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {TRUST_BADGES.map((b) => (
                <div
                  key={b}
                  className="flex flex-col items-center gap-2.5 rounded-tokenlg border border-line/70 bg-white p-5 text-center shadow-card"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cream2 text-greendeep">
                    <ShieldCheck size={20} aria-hidden="true" />
                  </span>
                  <span className="text-[.85rem] leading-snug text-inksoft">{b}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CTA
        backgroundVariant="blush"
        title="Questions about payment?"
        description="We're happy to walk you through the process — reach out anytime."
      >
        <Button variant="primary" to="/contact">
          Contact Us
        </Button>
        <Button variant="whatsapp" href={WA_ENQUIRE} icon={WhatsAppIcon}>
          WhatsApp Us
        </Button>
      </CTA>
    </>
  )
}
