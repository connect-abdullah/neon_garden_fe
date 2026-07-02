import { useEffect, useRef, useState } from 'react'

// Animated count-up triggered on first intersection. Ports js/main.js counter logic
// (1500ms, easeInOutCosine).
export default function Counter({ target, suffix = '', className = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animate = () => {
      if (reduce) {
        setValue(target)
        return
      }
      const duration = 1500
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        setValue(Math.floor(target * (0.5 - Math.cos(Math.PI * p) / 2)))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate()
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [target])

  return (
    <strong ref={ref} className={className}>
      {value}
      {suffix}
    </strong>
  )
}
