import { WhatsAppIcon } from './ui.jsx'
import { WA_ENQUIRE } from '../data/site.js'

// Persistent floating WhatsApp button (pulses for attention).
export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_ENQUIRE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      className="fixed bottom-[18px] right-[18px] z-50 grid h-[54px] w-[54px] place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_rgba(37,211,102,.45)] transition-transform animate-pulseWa hover:scale-105 hover:text-white sm:bottom-6 sm:right-6 sm:h-[60px] sm:w-[60px]"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
