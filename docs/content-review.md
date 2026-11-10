# Homepage copy review — 2026-11-10

The homepage is a working prototype. Removing visible editorial disclaimers does not approve its copy for publication. Organizational sign-off is still required; see DESIGN.md for the existing hero approval status.

## Confirmed basis

The supplied brief identifies a student association promoting accessibility for students and faculty through legislation, activism, and education. The retained Who We Are sentence summarizes that description; its exact wording still awaits organizational approval.

## Pending approval

All mission wording below remains proposed, including the mission statement, introduction, and four areas. These describe aims, not verified programs, activities, or accomplishments. Organizational history is unconfirmed. The removed community-led advocacy paragraph is unconfirmed and is preserved below, not asserted on the page. No new organizational facts have been added.

The Projects and Get Involved placeholders retain their existing status and wording. No project evidence, outcomes, participation details, or contact information have been confirmed by this refinement.

## Original copy and approval labels (preserved verbatim)

The following source records the original text, including both removed editorial labels and the removed paragraph, for editorial review:

```tsx
function WhoWeAre() {
  return (
    <section className="who-we-are page-width" aria-labelledby="who-title">
      <div className="who-title-group">
        <h2 id="who-title">Who we are.</h2>
        <svg className="community-curve" viewBox="0 0 320 120" fill="none" aria-hidden="true" focusable="false">
          <path d="M-15 99C58 17 211 4 266 30c70 34-106 112-139 55-17-29 94-54 202-5" stroke="var(--violet)" strokeWidth="14" strokeLinecap="round" />
        </svg>
      </div>
      <div className="who-copy">
        <p className="section-lead">Anti-Ableism at UCLA is a student-led association advocating for a more accessible campus for students and faculty.</p>
        <p>Our focus is community-led advocacy: making space for disabled community members to participate in conversations and decisions about campus accessibility.</p>
        <p className="copy-review-note">Proposed copy · pending organizational approval. Our organizational history is still to be confirmed.</p>
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
          <p className="copy-review-note">Proposed mission copy · pending organizational approval.</p>
        </div>
        <dl className="mission-areas">
          {missionAreas.map(({ title, text }) => (
            <div className="mission-area" key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

```
