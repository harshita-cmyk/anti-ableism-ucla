import { useEffect, useRef, useState, type ReactNode } from 'react'
import './App.css'

const navigation = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#get-involved', label: 'Get Involved' },
]

function ActionLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="action-link" href={href}>{children}<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
}

function Ribbon({ className = '' }: { className?: string }) {
  return (
    <svg className={`ribbon ${className}`} viewBox="0 0 650 520" fill="none" aria-hidden="true" focusable="false">
      <path d="M180-40C69 38 20 125 100 99 308 15 502 12 461 114 418 224 174 262-5 423l-95 113h800V-40Z" fill="currentColor" />
      <path d="M700 348C528 308 352 351 338 414c-15 64 140 84 267 146h95Z" fill="var(--lavender)" />
      <path d="M700 405C564 361 434 401 385 453l-86 107h401Z" fill="var(--raspberry)" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 701px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <header className="site-header page-width" onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <a className="brand" href="#home" aria-label="Anti-Ableism at UCLA — home">
        <img src="/AAA.png" alt="" width="62" height="62" />
        <span>Anti-Ableism <span className="brand-location">at UCLA</span></span>
      </a>
      <button ref={menuButton} className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d={menuOpen ? 'M6 6l12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>Menu</span>
      </button>
      <nav id="main-navigation" aria-label="Main navigation" data-open={menuOpen}>
        <ul>{navigation.map(({ href, label }) => <li key={href}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>)}</ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner page-width">
        <h1 id="hero-title"><span>We question the</span>{' '}<span className="hero-emphasis">fine print.</span></h1>
        <Ribbon />
      </div>
      <svg className="mobile-hero-ribbon" viewBox="0 0 430 110" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 38C119 112 250-15 430 20V110H0Z" fill="var(--violet)" />
        <path d="M0 64C135 130 274 6 430 44V110H0Z" fill="var(--cream)" />
      </svg>
    </section>
  )
}

function Introduction() {
  return (
    <section className="introduction page-width section-anchor" id="about" aria-labelledby="about-title" tabIndex={-1}>
      <div>
        <h2 className="visually-hidden" id="about-title">About us</h2>
        <p>From campus policies to everyday accessibility, we're challenging barriers through advocacy, education, and community-led projects.</p>
      </div>
      <div className="primary-actions">
        <ActionLink href="#projects">Explore Projects</ActionLink>
        <ActionLink href="#get-involved">Get Involved</ActionLink>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  return (
    <section className="projects page-width section-anchor" id="projects" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="section-heading">
        <h2 id="projects-title">Projects</h2>
        <p>A public archive of our accessibility work.</p>
      </div>
      <div className="project-placeholder">
        <div className="placeholder-art" aria-hidden="true"><span /><span /><span /></div>
        <div className="placeholder-copy">
          <h3>Space for our work</h3>
          <p className="development-label">Development placeholder</p>
          <p>Project details will appear here once they are ready to share. This is a layout preview, not a published initiative.</p>
        </div>
      </div>
    </section>
  )
}

function GetInvolved() {
  return (
    <section className="involvement section-anchor" id="get-involved" aria-labelledby="involved-title" tabIndex={-1}>
      <div className="involvement-inner page-width">
        <h2 id="involved-title">Get involved.</h2>
        <div className="involvement-copy">
          <p>Interested in joining the organization or collaborating on an accessibility project?</p>
          <p className="participation-placeholder"><strong>Development placeholder</strong><br />Participation details and contact information are still being confirmed. There is no sign-up form yet.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer page-width">
      <a className="footer-home" href="#home">Anti-Ableism at UCLA</a>
      <p>made with &lt;3 by <a href="https://www.linkedin.com/in/harshita-kukreja-28h/">Harshita</a></p>
    </footer>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div id="home" />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Introduction />
        <FeaturedProjects />
        <GetInvolved />
      </main>
      <Footer />
    </>
  )
}

export default App
