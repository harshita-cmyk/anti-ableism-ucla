import { ExternalArrow } from './FeaturedProjects'
import './ProjectsFooter.css'

export default function SiteFooter() {
  return <footer className="homepage-footer">
    <div className="page-width">
      <div className="footer-main">
        <a className="footer-organization" href="/#home" aria-label="Anti-Ableism at UCLA — home">Anti-Ableism<br />at UCLA</a>
        <div className="footer-link-group">
          <h2>Follow along</h2>
          <div className="footer-social-links">
          <a href="https://www.instagram.com/anti_ableism_ucla/" aria-label="Anti-Ableism at UCLA on Instagram">Instagram<ExternalArrow /></a>
          <a href="https://www.linkedin.com/company/anti-ableism-association/posts/" aria-label="Anti-Ableism Association on LinkedIn">LinkedIn<ExternalArrow /></a>
          </div>
        </div>
        <div className="footer-link-group">
          <h2>Our archive</h2>
          <a href="https://www.anti-ableism.org/" aria-label="Previous Anti-Ableism website archive">Previous website<ExternalArrow /></a>
        </div>
      </div>
      <p className="footer-credit">made with <span className="footer-heart">&lt;3</span> by <a href="https://www.linkedin.com/in/harshita-kukreja-28h/" aria-label="Harshita on LinkedIn">Harshita</a></p>
    </div>
  </footer>
}
