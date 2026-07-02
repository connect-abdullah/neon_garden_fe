import { useEffect, useRef, useState } from 'react'

const DELAYS = { 1: '0.1s', 2: '0.2s', 3: '0.3s', 4: '0.4s', 5: '0.5s', 6: '0.6s' }

// Scroll-reveal wrapper — adds the `in` class when the element enters the viewport.
// Mirrors js/animations.js (one-shot, IntersectionObserver, reduced-motion safe via CSS).
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} ${className}`}
      style={delay ? { transitionDelay: DELAYS[delay] } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
