export type ProjectResource = { label: string; url: string }
export type ArchiveProject = {
  id?: string
  title: string
  status: 'ongoing' | 'completed'
  summary: string
  image?: { src: string; alt: string }
  problem?: string
  goals?: string
  approach?: string
  progress?: string
  outcome?: string
  team?: string
  collaborators?: string
  date?: string
  updates?: string
  resources?: ProjectResource[]
  isPlaceholder?: boolean
}

// Development examples only. Replace with approved project information.
// No photographs, outcomes, dates, collaborators, or external URLs are invented.
export const archiveProjects: ArchiveProject[] = [
  {
    id: 'ongoing-placeholder-1', title: '[Project title]', status: 'ongoing',
    summary: '[A short introduction to the accessibility concern this project will address.]',
    problem: '[Describe the accessibility concern once confirmed.]',
    goals: '[Add the project’s approved goals.]',
    approach: '[Explain the proposed approach once confirmed.]',
    progress: '[Add a verified progress update.]',
    collaborators: '[List confirmed collaborators with permission.]',
    updates: '[Add confirmed updates and supporting materials.]',
    isPlaceholder: true,
  },
  {
    id: 'ongoing-placeholder-2', title: '[Project title]', status: 'ongoing',
    summary: '[A short description of another ongoing initiative and its focus.]',
    goals: '[Add the project’s approved goals.]',
    approach: '[Describe the work planned for this initiative.]',
    isPlaceholder: true,
  },
  {
    id: 'past-placeholder-1', title: '[Past project title]', status: 'completed',
    summary: '[A short description of this past initiative.]',
    outcome: '[Add what the project achieved or documented, supported by verified evidence.]',
    approach: '[Describe the approach used, once confirmed.]',
    updates: '[Add approved documentation of the work.]',
    isPlaceholder: true,
  },
  {
    id: 'past-placeholder-2', title: '[Past project title]', status: 'completed',
    summary: '[A short description of another past initiative.]',
    outcome: '[Add a verified outcome or record of the work.]',
    isPlaceholder: true,
  },
]
