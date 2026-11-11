# Anti-Ableism at UCLA — Design Brief

## Scope

This brief guides the working React homepage prototype and future website. It is not a verified accessibility conformance claim. The homepage is being developed on `homepage-design`; full Projects and Join Us pages remain out of scope for V1.

## Organization and Audience

Anti-Ableism at UCLA is a student association promoting campus accessibility for students and faculty through legislation, activism, and education.

The website serves students and professionals interested in joining the organization or its projects, the disabled community, and visitors following its work.

## Website Goals

- Introduce the organization and its mission.
- Showcase ongoing projects and preserve past initiatives so visitors can track progress.
- Introduce members.
- Help people get involved.

## Pages and Content

### Home

Introduce the organization, mission, story, and team. Provide clear paths to projects and participation. Use only supplied, approved organizational history and member information.

Homepage headline — **approved for the working prototype, pending organizational sign-off**:

> We question the fine print.

Supporting text — **approved for the working prototype, pending organizational sign-off**:

> From campus policies to everyday accessibility, we're challenging barriers through advocacy, education, and community-led projects.

The headline foregrounds policy, institutional accountability, and advocacy. The supporting text includes the broader accessibility work and community-led projects. Avoid inspiration or overcoming narratives and tokenizing imagery; the identity centers the community's agency.

V1 structure: header with the existing `public/AAA.png` logo, organization name and navigation; hero; supporting introduction; Featured Projects preview; Get Involved section; subtle footer credit. Keep Explore Projects and Get Involved equally prominent, linking to implemented sections. Use clearly labeled development placeholders for missing project and participation details, never invented initiatives or inactive controls.

Mobile navigation uses an accessible hamburger disclosure with a visible Menu label, expanded state, keyboard operation, and Escape to close and return focus. Desktop navigation remains directly visible. The footer reads “made with <3 by Harshita,” with Harshita linking to https://www.linkedin.com/in/harshita-kukreja-28h/.

### Projects

Present clickable project cards leading to individual detail pages. Each detail page should explain the project's goals, progress, and impact where verified information is available. Distinguish ongoing and past initiatives and separate intended outcomes from demonstrated results. Use descriptive link names and avoid nested interactive controls in cards.

### Join Us

Explain confirmed ways to participate and provide approved social links, contact information, and membership or interest forms when supplied. Do not invent links, addresses, eligibility rules, or participation commitments.

## Visual Direction

Approved Draft B is the primary visual reference: oversized, bold, rounded typography; warm cream reading surfaces; a lavender hero with dynamic violet ribbons and restrained raspberry accents inspired by the flowing silhouette of the existing logo. Preserve the professional-but-playful, community-centered identity and spacious, soothing layouts. Recreate this language in responsive React and CSS with independent decorative vector graphics, never a flat mockup background.

Use thoughtful typography, generous spacing, and engaging layouts. Establish clear hierarchy and deliberate rhythm rather than filling every section with identical cards. Avoid generic AI-generated website aesthetics, ornamental clutter, and decorative effects that compete with content or comprehension.

Creativity must support accessibility. Express personality through composition, color, typography, and real content without sacrificing legibility, predictable navigation, or usability.

### Palette

| Color | Value | Intended role |
| --- | --- | --- |
| Warm cream | `#FAF7F2` | Reading areas and background |
| Dark ink | `#292238` | Primary text and structure |
| Violet | `#5B34A5` | Actions and ribbon graphics |
| Soft lavender | `#E7DDF5` | Hero and gentle section differentiation |
| Raspberry | `#C42D63` | Selective graphical accents |

These are exploratory prototype values, not finalized brand colors. Preserve the logo's existing colors. Verify contrast for every actual foreground/background combination and interaction state. Favor dark text on light accent surfaces where appropriate. Never use color alone to convey status or meaning.

### Typography and Layout

- Use locally hosted Nunito variable type for the prototype, with heavy rounded display lettering and readable body weights. Font choice remains subject to review.
- Use comfortable line lengths, scalable text, and sufficient line height.
- Keep reading and focus order aligned with the visual layout.
- Adapt layouts to available space and content rather than relying on fixed device sizes.
- Preserve clarity when text wraps, visitors zoom, or content becomes longer than expected.
- Use approved photography, illustration, or other assets only when their purpose and provenance are clear.

## Accessibility Requirements

Target **WCAG 2.2 Level AA** throughout implementation and verification. Accessibility is a core product requirement for a website serving the disabled community, not a finishing step.

- Use semantic HTML, appropriate landmarks, and a logical heading hierarchy.
- Provide screen-reader-friendly navigation, descriptive page titles, a skip link, and clear identification of the current page.
- Make all interactions keyboard accessible with a logical focus order, no keyboard traps, and visible focus indicators that are not obscured.
- Meet contrast requirements: at least 4.5:1 for normal text, 3:1 for large text, and 3:1 for required non-text interface cues.
- Ensure responsive reflow, text resizing, and zoom do not remove content or functionality.
- Support reduced-motion preferences; avoid unnecessary animation and provide required controls for moving content.
- Provide meaningful alternative text for informative images and hide decorative imagery from assistive technology. Supply captions and other required alternatives for media.
- Use descriptive links, native controls, accessible names, and clear form labels, instructions, and error messages.
- Meet WCAG 2.2 AA target-size requirements and provide comfortable spacing between interactive elements.
- Verify with automated checks alongside manual keyboard, zoom/reflow, reduced-motion, and screen-reader testing. Do not claim conformance before evaluation.

## Content Approval and Integrity

The organization description, website goals, page scope, visual direction, palette, and accessibility target in this brief are user-supplied requirements. They guide design; they are not blanket approval of future public-facing copy.

The selected headline and supporting paragraph are approved only for the working prototype, pending organizational sign-off. Mark additional proposed wording as draft until approved. Organizational history, project names and details, member identities and biographies, accomplishments, impact claims, and public contact information must come from supplied, approved sources.

Do not invent organizational facts, testimonials, metrics, endorsements, or achievements. Do not infer official UCLA endorsement or permission to use institutional marks from the organization's name. Do not present planned submissions or intended outcomes as completed accomplishments.

Keep missing content explicitly identified in working documents rather than filling it with plausible claims. Publish only verified content with the appropriate approval.

## Decisions Still Open

- Organizational sign-off on the prototype headline and supporting text; final organizational story and remaining public-facing copy.
- Project details, evidence, progress updates, and publication permissions.
- Member information, portraits, and consent to publish.
- Approved social links, contact information, and participation forms.
- Final font and palette confirmation, additional approved identity assets, and applicable institutional branding requirements.
- Final layouts and interaction details, to be developed and tested against this brief.
