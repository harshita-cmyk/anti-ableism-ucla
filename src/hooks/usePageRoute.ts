import { useEffect, useState } from 'react'

function currentLocation() {
  return { pathname: window.location.pathname.replace(/\/$/, '') || '/', hash: window.location.hash }
}

/** Small same-origin router for the two application pages; keeps native modified clicks. */
export function usePageRoute() {
  const [route, setRoute] = useState(currentLocation)
  useEffect(() => {
    const sync = () => setRoute(currentLocation())
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return
      const url = new URL(link.href)
      if (url.origin !== window.location.origin || !['/', '/projects', '/projects/'].includes(url.pathname)) return
      event.preventDefault()
      if (url.href !== window.location.href) window.history.pushState(null, '', url)
      sync()
    }
    document.addEventListener('click', navigate)
    window.addEventListener('popstate', sync)
    window.addEventListener('hashchange', sync)
    return () => {
      document.removeEventListener('click', navigate)
      window.removeEventListener('popstate', sync)
      window.removeEventListener('hashchange', sync)
    }
  }, [])

  useEffect(() => {
    document.title = route.pathname === '/projects' ? 'Projects | Anti-Ableism at UCLA' : 'Anti-Ableism at UCLA'
    const frame = requestAnimationFrame(() => {
      let id = route.hash.slice(1)
      try { id = decodeURIComponent(id) } catch { /* An invalid hash simply has no target. */ }
      const target = id ? document.getElementById(id) : document.getElementById('main')
      if (target) {
        target.focus({ preventScroll: true })
        if (id) target.scrollIntoView()
        else window.scrollTo(0, 0)
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [route])
  return route
}
