import { useEffect, useRef, useState, type ReactNode } from 'react'
import './App.css'
import MeetTheTeam from './components/MeetTheTeam'
import GetInvolved from './components/GetInvolved'

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

function WhoWeAre() {
  return (
    <section className="who-we-are page-width" aria-labelledby="who-title">
      <div className="who-title-group">
        <h2 id="who-title">Who we are.</h2>
        <svg className="community-curve" viewBox="0 0 440 170" fill="none" aria-hidden="true" focusable="false">
          <path d="M12 141C79 62 288 7 367 43c88 40-126 139-174 83-37-43 109-83 235-19" stroke="var(--violet)" strokeWidth="18" strokeLinecap="round" />
        </svg>
      </div>
      <div className="who-copy">
        <p className="section-lead">Anti-Ableism at UCLA is a student-led association advocating for a more accessible campus for students and faculty.</p>
      </div>
    </section>
  )
}

const missionAreas = [
  { title: 'Policy & legislation', text: 'Question the policies and institutional decisions that shape campus access, and advocate for accountability.' },
  { title: 'Activism & advocacy', text: 'Bring community perspectives into accessibility advocacy and collective action.' },
  { title: 'Education & awareness', text: 'Build understanding of ableism and the barriers students and faculty encounter.' },
  { title: 'Collaborative projects', text: 'Create opportunities to work together on campus accessibility concerns and document the work.' },
]

function OurMission() {
  return (
    <section className="mission-section" aria-labelledby="mission-title">
      <div className="mission-inner page-width">
        <div className="mission-intro">
          <h2 id="mission-title">Our mission.</h2>
          <p className="section-lead">Accessibility belongs in the decisions that shape campus life.</p>
          <p>Through policy, activism, education, and collaborative projects, we aim to challenge barriers and support community participation in institutional change.</p>
        </div>
        <dl className="mission-areas">
          {missionAreas.map(({ title, text }) => (
            <div className="mission-area" key={title}>
              <svg className="mission-thread" viewBox="0 0 48 160" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
                <path d="M24 0C24 17 44 21 40 36S4 54 8 34 32 22 24 58 24 122 24 160" stroke="var(--violet)" strokeWidth="4" strokeLinecap="round" />
                <path className="mission-thread-accent" d="M24 0C24 17 44 21 40 36S4 54 8 34" stroke="var(--violet)" strokeWidth="7" strokeLinecap="round" />
              </svg>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
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

function Footer() {
  return (
    <footer className="site-footer page-width">
      <a className="footer-home" href="#home">Anti-Ableism at UCLA</a>
      <p>made with <span className="footer-heart">&lt;3</span> by <a href="https://www.linkedin.com/in/harshita-kukreja-28h/">Harshita</a></p>
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
        <WhoWeAre />
        <OurMission />
        <MeetTheTeam />
        <FeaturedProjects />
        <GetInvolved />
      </main>
      <Footer />
    </>
  )
}

export default App
