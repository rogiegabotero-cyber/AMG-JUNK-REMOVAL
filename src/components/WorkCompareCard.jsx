import { useCallback, useEffect, useRef, useState } from 'react'
import { CompareArrowsIcon } from './Icons'

const compareLabels = {
  en: { before: 'Before', after: 'After', drag: 'Drag to compare' },
  es: { before: 'Antes', after: 'Despues', drag: 'Arrastra para comparar' },
  ht: { before: 'Anvan', after: 'Apre', drag: 'Glise pou konpare' },
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

function animateTo(setPosition, from, to, duration, onDone) {
  const start = performance.now()
  function step(now) {
    const t = Math.min((now - start) / duration, 1)
    setPosition(from + (to - from) * easeInOut(t))
    if (t < 1) requestAnimationFrame(step)
    else if (onDone) onDone()
  }
  requestAnimationFrame(step)
}

function WorkCompareCard({ item, languageCode = 'en' }) {
  const containerRef = useRef(null)
  const draggingRef = useRef(false)
  const animatedRef = useRef(false)
  const [position, setPosition] = useState(50)
  const labels = compareLabels[languageCode] ?? compareLabels.en

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const ratio = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, ratio)))
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          setTimeout(() => {
            animateTo(setPosition, 50, 15, 500, () =>
              animateTo(setPosition, 15, 85, 700, () =>
                animateTo(setPosition, 85, 50, 450, null)
              )
            )
          }, 200)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMove = (event) => {
      if (!draggingRef.current) return
      updateFromClientX(event.clientX)
    }
    const handleUp = () => {
      draggingRef.current = false
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [updateFromClientX])

  const startDrag = (event) => {
    draggingRef.current = true
    updateFromClientX(event.clientX)
  }

  return (
    <article className="work-card">
      <div className="compare" ref={containerRef} onPointerDown={startDrag}>
        <img className="compare-image" src={item.after} alt={`${item.title} after`} draggable="false" />
        <img
          className="compare-image compare-image-before"
          src={item.before}
          alt={`${item.title} before`}
          draggable="false"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <span className="compare-title">{item.title}</span>
        <span className="compare-label compare-label-before">{labels.before}</span>
        <span className="compare-label compare-label-after">{labels.after}</span>

        <div className="compare-divider" style={{ left: `${position}%` }}>
          <button
            type="button"
            className="compare-handle"
            aria-label={`${labels.drag} ${item.title} ${labels.before.toLowerCase()} ${labels.after.toLowerCase()}`}
            onPointerDown={startDrag}
          >
            <CompareArrowsIcon />
          </button>
        </div>
      </div>

      <div className="work-card-body">
        <h3>{item.title}</h3>
        <p>{item.location}</p>
      </div>
    </article>
  )
}

export default WorkCompareCard
