import './GetInvolved.css'

const pathways = [
  { id: 'join', title: 'Join us', description: 'UCLA students: take part in advocacy, education, and accessibility projects.', action: 'Join us', pending: 'Joining details to be confirmed.' },
  { id: 'collaborate', title: 'Collaborate', description: 'Individuals, student groups, and organizations: work with us or bring forward an accessibility concern.', action: 'Collaborate with us', pending: 'Contact details to be confirmed.' },
]

export default function GetInvolved() {
  return (
    <section className="get-involved-section section-anchor" id="get-involved" aria-labelledby="involved-title" tabIndex={-1}>
      <div className="page-width">
        <h2 id="involved-title">Get involved.</h2>
        <div className="involvement-pathways">
          {pathways.map(pathway => <div className="involvement-pathway" key={pathway.id}>
            <h3>{pathway.title}</h3>
            <p className="pathway-description">{pathway.description}</p>
            <button className="pathway-cta" type="button" aria-disabled="true" aria-describedby={`${pathway.id}-pending`}>
              {pathway.action}
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <p className="pathway-pending" id={`${pathway.id}-pending`}>Development placeholder · {pathway.pending}</p>
          </div>)}
        </div>
      </div>
    </section>
  )
}
