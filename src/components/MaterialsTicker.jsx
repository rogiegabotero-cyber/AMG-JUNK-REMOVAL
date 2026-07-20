import { useEffect, useRef, useState } from 'react'
import { ArrowRightIcon, StarIcon, CloseIcon } from './Icons'

// Rendered as several repeated copies so there's buffer content on both sides
// of the visible window — sliding left needs copies ahead, sliding right needs
// copies behind, and REFERENCE_COPY picks a middle copy with room both ways.
const COPIES = 6
const REFERENCE_COPY = 2
const AUTO_SPEED_PX_PER_MS = 0.035
const STEP_EPSILON = 0.5
const STEP_TRANSITION_MS = 400

function normalizeOffset(offset, unitWidth) {
  let value = offset
  while (value <= -unitWidth) value += unitWidth
  while (value > 0) value -= unitWidth
  return value
}

function MaterialsTicker({ title, materials, images = {}, cta }) {
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const unitWidthRef = useRef(0)
  const positionsRef = useRef([])
  const pausedRef = useRef(false)
  const transitioningRef = useRef(false)
  const transitionTimeoutRef = useRef(null)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(null)

  const [selected, setSelected] = useState(null)
  const closeModal = () => setSelected(null)

  useEffect(() => {
    if (!selected) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selected])

  const items = Array.from({ length: COPIES }, () => materials).flat()

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      const children = Array.from(track.children)
      const len = materials.length
      if (children.length < (REFERENCE_COPY + 2) * len) return
      const start = children[REFERENCE_COPY * len].offsetLeft
      unitWidthRef.current = children[(REFERENCE_COPY + 1) * len].offsetLeft - start
      positionsRef.current = children
        .slice(REFERENCE_COPY * len, (REFERENCE_COPY + 1) * len)
        .map((el) => el.offsetLeft - start)
      offsetRef.current = normalizeOffset(offsetRef.current, unitWidthRef.current)
      track.style.transform = `translateX(${offsetRef.current}px)`
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [materials])

  useEffect(() => {
    pausedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const tick = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time
      const delta = time - lastTimeRef.current
      lastTimeRef.current = time

      if (!pausedRef.current && !transitioningRef.current && unitWidthRef.current > 0) {
        offsetRef.current = normalizeOffset(
          offsetRef.current - delta * AUTO_SPEED_PX_PER_MS,
          unitWidthRef.current
        )
        track.style.transform = `translateX(${offsetRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lastTimeRef.current = null
    }
  }, [])

  // 'left' continues the same direction as the auto-scroll (track slides left,
  // offset decreases). 'right' reverses it (track slides right, offset increases).
  const step = (direction) => {
    const track = trackRef.current
    const unitWidth = unitWidthRef.current
    const positions = positionsRef.current
    if (!track || !unitWidth || !positions.length) return

    const current = ((-offsetRef.current) % unitWidth + unitWidth) % unitWidth
    let distance

    if (direction === 'left') {
      const target = positions.find((p) => p > current + STEP_EPSILON)
      distance = (target === undefined ? unitWidth : target) - current
    } else {
      const reversed = [...positions].reverse()
      const target = reversed.find((p) => p < current - STEP_EPSILON)
      distance = current - (target === undefined ? positions[positions.length - 1] - unitWidth : target)
    }

    // Move by the continuous (unwrapped) distance so the transition always
    // animates through real, rendered content in the direction clicked —
    // wrapping this into range up front would sometimes animate backwards.
    offsetRef.current += direction === 'left' ? -distance : distance

    transitioningRef.current = true
    if (transitionTimeoutRef.current) window.clearTimeout(transitionTimeoutRef.current)

    track.style.transition = `transform ${STEP_TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
    track.style.transform = `translateX(${offsetRef.current}px)`

    transitionTimeoutRef.current = window.setTimeout(() => {
      track.style.transition = ''
      offsetRef.current = normalizeOffset(offsetRef.current, unitWidth)
      track.style.transform = `translateX(${offsetRef.current}px)`
      transitioningRef.current = false
    }, STEP_TRANSITION_MS)
  }

  useEffect(
    () => () => {
      if (transitionTimeoutRef.current) window.clearTimeout(transitionTimeoutRef.current)
    },
    []
  )

  return (
    <div className="materials-ticker-wrap reveal">
      {title ? <h3 className="materials-ticker-title">{title}</h3> : null}

      <div
        className="materials-ticker"
        onMouseEnter={() => {
          pausedRef.current = true
        }}
        onMouseLeave={() => {
          pausedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        }}
      >
        <button
          type="button"
          className="materials-nav materials-nav-left"
          onClick={() => step('left')}
          aria-label="Slide materials left"
        >
          <ArrowRightIcon style={{ transform: 'scaleX(-1)' }} />
        </button>

        <div className="materials-ticker-viewport">
          <div className="materials-ticker-track" ref={trackRef}>
            {items.map((material, index) => (
              <div
                className="material-chip"
                key={`${material.key}-${index}`}
                role="button"
                tabIndex={0}
                onClick={() => setSelected(material)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelected(material)
                  }
                }}
              >
                <div className="material-chip-media">
                  {images[material.key] ? (
                    <img className="material-chip-image" src={images[material.key]} alt="" aria-hidden="true" />
                  ) : null}
                  {material.tag ? (
                    <span className="material-chip-tag">
                      <StarIcon /> {material.tag}
                    </span>
                  ) : null}
                </div>
                <div className="material-chip-body">
                  <h4 className="material-chip-title">{material.label}</h4>
                  {material.description ? (
                    <p className="material-chip-description">{material.description}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="materials-nav materials-nav-right"
          onClick={() => step('right')}
          aria-label="Slide materials right"
        >
          <ArrowRightIcon />
        </button>
      </div>

      {selected ? (
        <div
          className="material-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selected.label}
        >
          <div
            className="material-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="material-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            {images[selected.key] ? (
              <img
                className="material-modal-image"
                src={images[selected.key]}
                alt={selected.label}
              />
            ) : null}

            <div className="material-modal-body">
              {selected.tag ? (
                <span className="material-modal-tag">{selected.tag}</span>
              ) : null}
              <h3 className="material-modal-title">{selected.label}</h3>
              {selected.description ? (
                <p className="material-modal-description">{selected.description}</p>
              ) : null}
              {cta ? (
                <a className="material-modal-cta" href="#contact" onClick={closeModal}>
                  {cta}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default MaterialsTicker
