import { useState } from 'react'
import Button from '../ui/Button.jsx'
import { Send } from '../icons.jsx'
import { waLink } from '../../data/site.js'

const EMPTY = { name: '', phone: '', email: '', event_date: '', event_type: '', message: '' }

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[.76rem] font-semibold uppercase tracking-[.12em] text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="field-input"
      />
    </div>
  )
}

export default function ContactForm({ eventTypes = [] }) {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('')

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const msg =
      `Hi Neon Garden! I'd love to enquire about an event.\n\n` +
      `Name: ${form.name}\n` +
      `Event type: ${form.event_type}\n` +
      `Date: ${form.event_date}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n\n` +
      `${form.message}`
    window.open(waLink(msg), '_blank', 'noopener')
    setForm(EMPTY)
    setStatus('Opening WhatsApp with your enquiry…')
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-[18px] rounded-tokenlg border border-line/70 bg-white p-6 shadow-card sm:p-10"
    >
      <div>
        <h3 className="mb-1.5">Plan My Event</h3>
        <p className="text-[.92rem] text-muted">Fill in your details and we'll respond within 24 hours.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" value={form.name} onChange={update} required />
        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={update} required />
      </div>
      <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Event Date" name="event_date" type="date" value={form.event_date} onChange={update} required />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="event_type" className="text-[.76rem] font-semibold uppercase tracking-[.12em] text-muted">
            Event Type
          </label>
          <select
            id="event_type"
            name="event_type"
            value={form.event_type}
            onChange={update}
            required
            className="field-input"
          >
            <option value="">Select event…</option>
            {eventTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[.76rem] font-semibold uppercase tracking-[.12em] text-muted">
          Tell us about your event
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={update}
          required
          placeholder="Venue, guest count, colour palette, anything we should know…"
          className="field-input min-h-[130px] resize-y"
        />
      </div>
      <Button type="submit" variant="primary" icon={Send} className="self-start">
        Plan My Event
      </Button>
      {status && (
        <small className="text-muted" role="status">
          {status}
        </small>
      )}
    </form>
  )
}
