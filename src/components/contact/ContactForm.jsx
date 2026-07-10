import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import { waLink } from '../../data/site.js'
import { PACKAGES } from '../../data/packages.js'

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  event_date: '',
  event_type: '',
  package_interest: '',
  guest_count: '',
  location: '',
  budget: '',
  message: '',
  consent: false,
}

function Field({ label, name, type = 'text', value, onChange, required, optional, placeholder }) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5">
      <label htmlFor={name} className="text-[.72rem] font-medium uppercase tracking-[.1em] text-body">
        {label}
        {optional && <span className="ml-1 normal-case tracking-normal text-muted">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="field-input rounded-sm"
      />
    </div>
  )
}

export default function ContactForm({ eventTypes = [] }) {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    const packageSlug = searchParams.get('package')
    if (!packageSlug) return
    const matched = PACKAGES.find((p) => p.slug === packageSlug)
    if (matched) {
      setForm((f) => ({ ...f, package_interest: matched.title }))
    }
  }, [searchParams])

  const update = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.consent) {
      setStatus('error')
      setStatusMessage('Please confirm consent before sending your enquiry.')
      return
    }

    setStatus('loading')
    setStatusMessage('')

    try {
      const msg =
        `Hi Neon Garden! I'd love to enquire about an event.\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Event type: ${form.event_type}\n` +
        `Event date: ${form.event_date}\n` +
        `Package of interest: ${form.package_interest || 'Not specified'}\n` +
        `Guest count: ${form.guest_count || 'Not specified'}\n` +
        `Location: ${form.location || 'Not specified'}\n` +
        `Budget: ${form.budget || 'Not specified'}\n\n` +
        `${form.message}`

      const opened = window.open(waLink(msg), '_blank', 'noopener')
      if (!opened) {
        throw new Error('popup_blocked')
      }

      setForm(EMPTY)
      setStatus('success')
      setStatusMessage('Your enquiry is ready in WhatsApp. We will respond within 24 hours.')
    } catch {
      setStatus('error')
      setStatusMessage('Unable to open WhatsApp. Please try again or contact us directly.')
    }
  }

  const isLoading = status === 'loading'

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 border border-border bg-white p-6 sm:p-8"
      noValidate={false}
    >
      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" value={form.name} onChange={update} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
      </div>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={update} required />
        <Field label="Event Date" name="event_date" type="date" value={form.event_date} onChange={update} required />
      </div>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-1.5">
          <label htmlFor="event_type" className="text-[.72rem] font-medium uppercase tracking-[.1em] text-body">
            Event Type
          </label>
          <select
            id="event_type"
            name="event_type"
            value={form.event_type}
            onChange={update}
            required
            className="field-input rounded-sm"
          >
            <option value="">Select event type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="flex min-w-0 flex-col gap-1.5">
          <label htmlFor="package_interest" className="text-[.72rem] font-medium uppercase tracking-[.1em] text-body">
            Package of Interest
          </label>
          <select
            id="package_interest"
            name="package_interest"
            value={form.package_interest}
            onChange={update}
            className="field-input rounded-sm"
          >
            <option value="">Select package (optional)</option>
            {PACKAGES.map((p) => (
              <option key={p.slug} value={p.title}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <Field label="Guest Count" name="guest_count" value={form.guest_count} onChange={update} placeholder="e.g. 80" />
        <Field label="Location or Suburb" name="location" value={form.location} onChange={update} placeholder="Melbourne suburb or venue" />
      </div>

      <Field label="Budget" name="budget" value={form.budget} onChange={update} optional placeholder="Optional budget range" />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[.72rem] font-medium uppercase tracking-[.1em] text-body">
          Tell Us About Your Event
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={update}
          required
          placeholder="Venue, colour palette, styling vision, and anything else we should know."
          className="field-input min-h-[140px] resize-y rounded-sm"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-body">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={update}
          required
          className="mt-1 h-4 w-4 rounded border-border text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        />
        <span>I agree to be contacted by Neon Garden regarding my enquiry.</span>
      </label>

      <Button
        type="submit"
        variant="primary"
        disabled={isLoading}
        className="w-full rounded-full py-4 text-xs tracking-[0.1em] sm:w-auto"
      >
        {isLoading ? 'Sending…' : 'Send Enquiry'}
      </Button>

      {statusMessage && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-body'}`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  )
}
