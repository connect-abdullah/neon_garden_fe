import { useState } from 'react'
import Button from '../ui/Button.jsx'
import { waLink } from '../../data/site.js'

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  event_date: '',
  event_type: '',
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
  const [form, setForm] = useState(EMPTY)
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('')

  const update = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onFilesChange = (e) => {
    const selected = Array.from(e.target.files || [])
    setFiles(selected)
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
      const fileNote =
        files.length > 0
          ? `\nReference images selected: ${files.map((f) => f.name).join(', ')} (will share when email enquiry is connected)`
          : ''

      const msg =
        `Hi Neon Garden! I'd love to enquire about an event.\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Event type: ${form.event_type}\n` +
        `Event date: ${form.event_date}\n` +
        `Location: ${form.location || 'Not specified'}\n` +
        `Budget: ${form.budget || 'Not specified'}\n\n` +
        `${form.message}` +
        fileNote

      const opened = window.open(waLink(msg), '_blank', 'noopener')
      if (!opened) {
        throw new Error('popup_blocked')
      }

      setForm(EMPTY)
      setFiles([])
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

      <Field
        label="Location or Suburb"
        name="location"
        value={form.location}
        onChange={update}
        placeholder="Melbourne suburb or venue"
      />

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

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mood_board" className="text-[.72rem] font-medium uppercase tracking-[.1em] text-body">
          Reference images / mood board
          <span className="ml-1 normal-case tracking-normal text-muted">(optional)</span>
        </label>
        <input
          id="mood_board"
          name="mood_board"
          type="file"
          accept="image/*"
          multiple
          onChange={onFilesChange}
          className="field-input rounded-sm file:mr-3 file:border-0 file:bg-forest file:px-3 file:py-1.5 file:text-xs file:uppercase file:tracking-[0.08em] file:text-white"
        />
        <p className="text-xs text-muted">
          Photos are stored locally for now and will be attached when email enquiry is connected.
        </p>
        {files.length > 0 && (
          <ul className="mt-1 space-y-1 text-xs text-body">
            {files.map((file) => (
              <li key={`${file.name}-${file.lastModified}`}>{file.name}</li>
            ))}
          </ul>
        )}
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
