import { useState } from 'react'
import { partners, type Partner } from '../data/partners'
import './OurPartners.css'

function PartnerLogo({ partner }: { partner: Partner }) {
  const [failedLogo, setFailedLogo] = useState<string>()
  return partner.logo && partner.logo !== failedLogo
    ? <img src={partner.logo} alt={`${partner.name} logo`} width="200" height="96" loading="lazy" onError={() => setFailedLogo(partner.logo)} />
    : <span className="partner-placeholder"><span className="partner-name">{partner.name}</span><span className="partner-placeholder-label">Logo placeholder</span></span>
}

export default function OurPartners({ items = partners }: { items?: Partner[] }) {
  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="page-width">
        <h2 id="partners-title">Our partners</h2>
        <p className="partners-introduction">Working alongside organizations committed to accessibility, inclusion, and community.</p>
        <ul className="partners-grid">
          {items.map(partner => <li key={partner.id}>
            {partner.websiteUrl
              ? <a className="partner-logo-container" data-partner={partner.id} href={partner.websiteUrl}><PartnerLogo partner={partner} /></a>
              : <div className="partner-logo-container" data-partner={partner.id}><PartnerLogo partner={partner} /></div>}
          </li>)}
        </ul>
      </div>
    </section>
  )
}
