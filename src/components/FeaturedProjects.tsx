import { useRef } from 'react'
import './ProjectsFooter.css'

export type Project = {
  id: string
  title: string
  description: string
  status?: 'Ongoing'
  destination?: string
  isPlaceholder?: boolean
}

const placeholderProjects: Project[] = [
  { id: 'project-placeholder-1', status: 'Ongoing' },
  { id: 'project-placeholder-2', status: 'Ongoing' },
  { id: 'project-placeholder-3', status: undefined },
].map(({ id, status }) => ({
  id,
  status: status as Project['status'],
  title: '[Project title]',
  description: '[A short description of the project’s focus and intended contribution.]',
  isPlaceholder: true,
}))

export function ExternalArrow() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function FeaturedProjects({ projects = placeholderProjects, allProjectsUrl = '/projects' }: { projects?: Project[]; allProjectsUrl?: string }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const previewText = useRef<HTMLParagraphElement>(null)
  const featured = [...projects].sort((a, b) => Number(b.status === 'Ongoing') - Number(a.status === 'Ongoing')).slice(0, 3)
  function openPreview(all = false) {
    if (previewText.current) previewText.current.textContent = all
      ? 'The dedicated Projects page will organize verified initiatives into Ongoing and Completed sections. This is a development preview; that page has not been built.'
      : 'Each card will link to its own project detail page. This placeholder has no real project or destination yet.'
    dialog.current?.showModal()
  }

  return (
    <section className="featured-projects page-width section-anchor" id="projects" aria-labelledby="projects-title" tabIndex={-1}>
      <h2 id="projects-title">Featured projects</h2>
      {featured.some(project => project.isPlaceholder) && <p className="projects-draft-note">Development placeholders — project titles, descriptions, and statuses are illustrative.</p>}
      <ul className="featured-project-grid">
        {featured.map((project, index) => {
          const content = <><h3>{project.title}</h3><p className="project-description">{project.description}</p><span className="project-card-bottom">{project.status && <span>{project.status}{project.isPlaceholder ? ' · example' : ''}</span>}<ExternalArrow /></span></>
          return <li key={project.id}>{project.destination && !project.isPlaceholder
            ? <a className="featured-project-card" href={project.destination} aria-label={`View project: ${project.title}`}>{content}</a>
            : <button className="featured-project-card" type="button" onClick={() => openPreview()} aria-haspopup="dialog" aria-label={`Preview placeholder project ${index + 1}`}>{content}</button>}
          </li>
        })}
      </ul>
      {allProjectsUrl
        ? <a className="all-projects-cta" href={allProjectsUrl}>Explore all projects<ExternalArrow /></a>
        : <button className="all-projects-cta" type="button" onClick={() => openPreview(true)} aria-haspopup="dialog">Explore all projects<ExternalArrow /></button>}
      <dialog className="project-preview-dialog" ref={dialog} aria-labelledby="project-preview-title" aria-describedby="project-preview-description">
        <h3 id="project-preview-title">Project destination preview</h3>
        <p ref={previewText} id="project-preview-description" />
        <form method="dialog"><button type="submit">Close preview</button></form>
      </dialog>
    </section>
  )
}
