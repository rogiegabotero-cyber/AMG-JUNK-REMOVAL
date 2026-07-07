import { useCallback, useEffect, useRef, useState } from 'react'
import { CompareArrowsIcon } from './Icons'

const compareLabels = {
  en: { before: 'Before', after: 'After', drag: 'Drag to compare' },
  es: { before: 'Antes', after: 'Despues', drag: 'Arrastra para comparar' },
  ht: { before: 'Anvan', after: 'Apre', drag: 'Glise pou konpare' },
}

function WorkCompareCard({ item, languageCode = 'en' }) {
  const containerRef = useRef(null)
  const draggingRef = useRef(false)
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
