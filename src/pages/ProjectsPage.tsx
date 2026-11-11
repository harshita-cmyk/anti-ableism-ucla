import { useId, useState } from 'react'
import { archiveProjects, type ArchiveProject } from '../data/projects'
import './ProjectsPage.css'

function ProjectVisual({ project }: { project: ArchiveProject }) {
  const [failedImage, setFailedImage] = useState<string>()
  if (project.image?.src && project.image.src !== failedImage) {
    return <img className="archive-project-image" src={project.image.src} alt={project.image.alt} loading="lazy" width="560" height="360" onError={() => setFailedImage(project.image?.src)} />
  }
  return <div className="archive-visual-placeholder"><span>{project.isPlaceholder ? 'Project visual placeholder' : 'Project image unavailable'}</span></div>
}

function ProjectEntry({ project, expanded, onToggle }: { project: ArchiveProject; expanded: boolean; onToggle: () => void }) {
  const uniqueId = useId()
  const titleId = `project-title-${uniqueId}`
  const detailsId = `project-details-${uniqueId}`
  const fields = [
    ['The problem', project.problem], ['Project goals', project.goals],
    ['Our approach', project.approach], ['Current progress', project.progress],
    ['Collaborators', project.collaborators], ['Updates', project.updates],
  ].filter(([, content]) => content?.trim())
  const resources = project.resources?.filter(resource => resource.label.trim() && resource.url.trim()) ?? []
  const hasDetails = fields.length > 0 || resources.length > 0
  const ongoing = project.status === 'ongoing'

  return <article className={`archive-project ${ongoing ? 'archive-project-ongoing' : 'archive-project-past'}`} aria-labelledby={titleId}>
    <div className={`archive-project-overview ${!ongoing && project.image ? 'archive-past-with-image' : ''}`}>
      {(ongoing || project.image) && <ProjectVisual project={project} />}
      <div className="archive-project-copy">
        <h3 id={titleId}>{project.title}</h3>
        {ongoing && <p className="archive-project-status">Ongoing{project.isPlaceholder ? ' · development example' : ''}</p>}
        {project.date?.trim() && <p className="archive-project-date">{project.date}</p>}
        <p className="archive-project-summary">{project.summary}</p>
        {project.outcome?.trim() && <p className="archive-project-outcome"><strong>Outcome / documentation: </strong>{project.outcome}</p>}
        {project.team?.trim() && <p className="archive-project-team"><strong>Project team: </strong>{project.team}</p>}
        {hasDetails && <button type="button" className="archive-details-toggle" aria-expanded={expanded} aria-controls={detailsId} aria-describedby={titleId} onClick={onToggle}>
          {expanded ? 'Show less' : 'View details'}
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d={expanded ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>}
      </div>
    </div>
    {hasDetails && <div id={detailsId} className="archive-project-details" hidden={!expanded} role="region" aria-labelledby={titleId}>
      {fields.map(([label, content]) => <section className="archive-detail-field" key={label}><h4>{label}</h4><p>{content}</p></section>)}
      {resources.length > 0 && <section className="archive-detail-field"><h4>Resources</h4><ul>{resources.map(resource => <li key={resource.url}><a href={resource.url}>{resource.label}</a></li>)}</ul></section>}
    </div>}
  </article>
}

export default function ProjectsPage({ projects = archiveProjects }: { projects?: ArchiveProject[] }) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null)
  // Stable IDs are recommended; a positional key supports entries without an ID.
  const entries = projects.map((project, index) => ({ project, key: project.id ?? `entry-${index}` }))
  return <div className="projects-page">
    <section className="projects-page-intro" aria-labelledby="projects-page-title">
      <div className="page-width">
        <h1 id="projects-page-title">Projects</h1>
        <p className="projects-page-lead">Explore ongoing initiatives and the record of past work.</p>
        {projects.some(project => project.isPlaceholder) && <p className="projects-page-draft">Development preview — all projects and details below are placeholders, not verified initiatives or achievements.</p>}
        <nav className="projects-page-jumps" aria-label="Project sections"><a href="#ongoing-projects">Ongoing projects</a><a href="#past-projects">Past projects</a></nav>
      </div>
    </section>
    <div className="page-width projects-archive-content">
      {(['ongoing', 'completed'] as const).map(status => <section key={status} id={status === 'ongoing' ? 'ongoing-projects' : 'past-projects'} className="archive-group section-anchor" tabIndex={-1} aria-labelledby={`${status}-heading`}>
        <h2 id={`${status}-heading`}>{status === 'ongoing' ? 'Ongoing projects' : 'Past projects'}</h2>
        {entries.filter(entry => entry.project.status === status).length === 0 && <p className="archive-empty">No {status === 'ongoing' ? 'ongoing' : 'past'} projects to display yet.</p>}
        {entries.filter(entry => entry.project.status === status).map(({ project, key }) => <ProjectEntry key={key} project={project} expanded={expandedKey === key} onToggle={() => setExpandedKey(current => current === key ? null : key)} />)}
      </section>)}
    </div>
  </div>
}
