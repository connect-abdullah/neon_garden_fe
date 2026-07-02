// Central icon barrel — lucide-react is the sole icon library for the site.
// Brand glyphs that lucide no longer ships (Instagram, WhatsApp) are provided
// here as inline SVGs so the rest of the app can import everything from one place.
export {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Shield,
  ShieldCheck,
  CheckCircle,
  Check,
  Star,
  Award,
  HeartHandshake,
  Heart,
  Briefcase,
  GalleryHorizontal,
  CreditCard,
  Wallet,
  Users,
  Lightbulb,
  Quote,
  ChevronRight,
  Send,
  Clock,
  Menu,
  X,
  Maximize2,
  BadgeCheck,
  Plus,
  Palette,
  Gem,
  Truck,
  Flower2,
  Leaf,
} from 'lucide-react'

// ---- Brand glyphs (not in lucide) -----------------------------------------
export function WhatsAppIcon({ size = 24, className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.17-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.96 9.96 0 0 1-5.08-1.39l-.36-.21-3.66.96.98-3.57-.24-.37A9.97 9.97 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm5.49-7.51c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07a8.16 8.16 0 0 1-2.4-1.48 9.07 9.07 0 0 1-1.67-2.07c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.43-.08-.12-.27-.2-.57-.34Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 24, className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
