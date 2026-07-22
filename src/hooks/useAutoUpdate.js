import { useEffect } from 'react'

const CHECK_INTERVAL_MS = 60_000
const EDITABLE_TAGS = new Set(['INPUT', 'TEXTAREA', 'SELECT'])

function isEditing() {
  const el = document.activeElement
  return !!el && EDITABLE_TAGS.has(el.tagName)
}

// Polls the deployed build id and reloads once a newer one appears, so open
// tabs pick up new deploys without visitors having to refresh manually.
export function useAutoUpdate() {
  useEffect(() => {
    const checkForUpdate = async () => {
      if (isEditing()) return
      try {
        const res = await fetch('/version.json', { cache: 'no-store' })
        if (!res.ok) return
        const { buildId } = await res.json()
        if (buildId && buildId !== __BUILD_ID__) {
          window.location.reload()
        }
      } catch {
        // offline or version.json unavailable — try again next interval
      }
    }

    const interval = window.setInterval(checkForUpdate, CHECK_INTERVAL_MS)
    document.addEventListener('visibilitychange', checkForUpdate)

    return () => {
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', checkForUpdate)
    }
  }, [])
}
