import { useState } from 'react'
import { leadershipMembers, leadershipPlaceholders, type LeadershipMember } from '../data/leadership'
import './MeetTheTeam.css'

function MemberPortrait({ member }: { member: LeadershipMember }) {
  const [failedSource, setFailedSource] = useState<string>()
  const source = member.photo?.src

  return source && source !== failedSource ? (
    <img
      className="team-portrait"
      src={source}
      alt={member.photo?.alt?.trim() || `Portrait of ${member.name}`}
      width="180"
      height="180"
      loading="lazy"
      onError={() => setFailedSource(source)}
    />
  ) : (
    <div className="team-portrait team-photo-placeholder">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="visually-hidden">{member.isPlaceholder ? 'Photo placeholder' : 'Photo unavailable'}</span>
    </div>
  )
}

function LinkedInLabel() {
  return <><svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><rect x="3" y="9" width="4" height="12" rx=".5" stroke="currentColor" strokeWidth="1.7" /><circle cx="5" cy="4" r="2" stroke="currentColor" strokeWidth="1.7" /><path d="M11 21V9h4v2c1-3 7-3 7 3v7h-4v-7c0-2-3-2-3 0v7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>LinkedIn</>
}

export function LeadershipProfile({ member }: { member: LeadershipMember }) {
  const project = member.project?.trim()
  const linkedInUrl = member.linkedInUrl?.trim()

  return (
    <li className="team-profile">
      <MemberPortrait member={member} />
      <h3>{member.name}</h3>
      <p className="team-role">
        {member.role}
        {project && <>{' '}<span className="team-separator" aria-hidden="true">•</span><span className="visually-hidden">, </span>{' '}{project}</>}
      </p>
      {linkedInUrl && !member.isPlaceholder && (
        <a className="team-link" href={linkedInUrl} aria-label={`View ${member.name} on LinkedIn`}><LinkedInLabel /></a>
      )}
      {member.isPlaceholder && <button type="button" className="team-link team-link-placeholder" aria-disabled="true" aria-label="LinkedIn placeholder — URL not yet supplied"><LinkedInLabel /></button>}
    </li>
  )
}

export default function MeetTheTeam({ members = leadershipMembers }: { members?: LeadershipMember[] }) {
  const visibleMembers = members.filter((member) => !member.isPlaceholder || import.meta.env.DEV)
  const profiles = visibleMembers.length ? visibleMembers : import.meta.env.DEV ? leadershipPlaceholders : []
  const hasPlaceholders = profiles.some((member) => member.isPlaceholder)

  return (
    <section className="team-section" aria-labelledby="team-title">
      <div className="page-width team-content">
        <h2 id="team-title">Meet the team<span className="team-heading-accent">.</span></h2>
        {hasPlaceholders && <p className="team-development-note">Development preview — placeholder profiles, not actual members.</p>}
        {profiles.length ? (
          <ul className="team-grid" aria-label="Leadership">
            {profiles.map((member) => <LeadershipProfile key={member.id} member={member} />)}
          </ul>
        ) : <p className="team-empty">Leadership profiles will appear here once confirmed.</p>}
      </div>
    </section>
  )
}
