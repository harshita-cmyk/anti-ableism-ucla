# Leadership profiles

The Meet the Team design is approved for implementation. No member identities, roles, project affiliations, photos, or LinkedIn URLs have been supplied or approved.

Add confirmed leadership members to `leadershipMembers` in `src/data/leadership.ts`. Each member needs a stable unique `id`, `name`, and `role`. Optional fields are `project`, `photo: { src, alt }`, and `linkedInUrl`. Supply a descriptive photo alt where needed; otherwise the component uses “Portrait of [name]”. Missing or failed images receive a neutral text fallback. Missing project affiliation omits the separator; missing LinkedIn URLs omit the link.

Eight explicitly labeled development profiles demonstrate the layout, each with a leadership role and project-name placeholder. They contain no headshots or URLs. Production builds exclude placeholder profiles and show a neutral empty state until confirmed leadership data is available. No biographies or contributors are included.
