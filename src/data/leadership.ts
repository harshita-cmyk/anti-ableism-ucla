export type LeadershipMember = {
  id: string
  name: string
  role: string
  project?: string
  photo?: { src: string; alt?: string }
  linkedInUrl?: string
  isPlaceholder?: boolean
}

// Add only confirmed leadership members with approved photos and URLs here.
export const leadershipMembers: LeadershipMember[] = []

// Layout exploration only: never rendered in production builds.
export const leadershipPlaceholders: LeadershipMember[] = Array.from({ length: 8 }, (_, index) => ({
  id: `leadership-placeholder-${index + 1}`,
  name: '[Name]',
  role: '[Leadership role]',
  project: '[Project name]',
  isPlaceholder: true,
}))
