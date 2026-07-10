import { useEffect } from 'react'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen) return null

  const btn =
    'absolute grid h-[50px] w-[50px] place-items-center rounded-full bg-white/10 text-[1.5rem] text-white transition-colors hover:bg-forest/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'

  return (
    <div
      className="fixed inset-0 z-[2000] flex animate-fadeIn items-center justify-center bg-[rgba(0,20,14,.94)] p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button type="button" aria-label="Close" className={`${btn} right-6 top-6`} onClick={onClose}>
        ✕
      </button>
      <button type="button" aria-label="Previous image" className={`${btn} left-6 top-1/2 -translate-y-1/2`} onClick={onPrev}>
        ‹
      </button>
      <button type="button" aria-label="Next image" className={`${btn} right-6 top-1/2 -translate-y-1/2`} onClick={onNext}>
        ›
      </button>
      <div className="flex max-h-[88vh] max-w-[92vw] flex-col items-center">
        <img src={images[index]} alt="" className="max-h-[80vh] max-w-[92vw] object-contain" />
        <p className="mt-4 text-sm text-white/80">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>
  )
}
