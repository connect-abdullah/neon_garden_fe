import { useEffect, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from 'framer-motion'
import TestimonialCard from '../cards/TestimonialCard.jsx'

const VELOCITY = { slow: 35, medium: 55, fast: 85 }

const CARD_WIDTH = 'w-[72vw] shrink-0 sm:w-[340px] lg:w-[380px]'

function Track({ testimonials, showRating, showCompany, ariaHidden = false, keyPrefix = '' }) {
  return (
    <ul className="flex shrink-0 gap-6 pr-6" aria-hidden={ariaHidden || undefined}>
      {testimonials.map((t, i) => (
        <li key={`${keyPrefix}${t.name}-${i}`} className={CARD_WIDTH}>
          <TestimonialCard {...t} showRating={showRating} showCompany={showCompany} />
        </li>
      ))}
    </ul>
  )
}

export default function TestimonialCarousel({
  testimonials = [],
  speed = 'medium',
  direction = 'left',
  pauseOnHover = true,
  showRating = true,
  showCompany = true,
  autoPlay = true,
}) {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const trackRef = useRef(null)
  const halfWidthRef = useRef(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const update = () => {
      halfWidthRef.current = el.scrollWidth / 2
      if (direction === 'right') x.set(-halfWidthRef.current)
      else x.set(0)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [testimonials, direction, x])

  useAnimationFrame((_, delta) => {
    if (reduceMotion || !autoPlay || pausedRef.current) return

    const half = halfWidthRef.current
    if (!half) return

    const pxPerSec = VELOCITY[speed] ?? VELOCITY.medium
    const move = (direction === 'left' ? -1 : 1) * pxPerSec * (delta / 1000)
    let next = x.get() + move

    if (direction === 'left') {
      if (next <= -half) next += half
    } else if (next >= 0) {
      next -= half
    }

    x.set(next)
  })

  if (!testimonials.length) return null

  return (
    <div
      className="group/marquee relative isolate w-full max-w-full overflow-hidden"
      onMouseEnter={() => {
        if (pauseOnHover) pausedRef.current = true
      }}
      onMouseLeave={() => {
        if (pauseOnHover) pausedRef.current = false
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-plum to-transparent sm:w-16"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-plumdark to-transparent sm:w-16"
      />

      {reduceMotion || !autoPlay ? (
        <div className="flex gap-4 overflow-x-auto px-5 py-4 no-scrollbar sm:gap-6 sm:px-6">
          {testimonials.map((t) => (
            <div key={`${t.name}-${t.service}`} className={CARD_WIDTH}>
              <TestimonialCard {...t} showRating={showRating} showCompany={showCompany} />
            </div>
          ))}
        </div>
      ) : (
        <motion.div ref={trackRef} className="flex w-max py-4 will-change-transform" style={{ x }}>
          <Track testimonials={testimonials} showRating={showRating} showCompany={showCompany} />
          <Track
            testimonials={testimonials}
            showRating={showRating}
            showCompany={showCompany}
            ariaHidden
            keyPrefix="dup-"
          />
        </motion.div>
      )}
    </div>
  )
}
