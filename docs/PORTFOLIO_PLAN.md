# Mohan Sharma Portfolio Rebuild Plan

## Phase 1 Repository Inspection

### Current repository state
- Repository root: `/workspace/mohan-sharma-portfolio`.
- Current branch: `work`.
- Existing tracked/visible project files are minimal; the repository currently contains only `.gitkeep` at the top level.
- No existing React, TypeScript, Vite, Styled Components, or routing implementation was found during the initial inspection.
- No `AGENTS.md` instruction files were found in or above the repository path during inspection.

### Reference website analysis boundary
The reference site (`https://www.sarang-space.site/`) was reviewed only for publicly visible product-quality signals: section sequencing, pacing, premium positioning, service/case-study rhythm, CTA placement, and motion expectations. The rebuild must not copy its code, identity, text, names, testimonials, project content, visuals, or pixel layout.

Key quality takeaways to reinterpret originally:
- Strong hero with direct positioning and an immediate exploration path.
- Editorial hierarchy: short labels, large section titles, concise supporting copy.
- Services presented as numbered, high-confidence capabilities.
- Work section treated as a case-study gateway rather than a grid of small cards.
- Process and differentiation sections used to explain how the developer works.
- Final CTA and contact flow kept visible and direct.
- Motion appears purposeful: reveal, hover, scroll pacing, and navigation polish rather than decorative noise.

## Sitemap

### Primary routes
1. `/`
   - Home landing page with all primary portfolio sections.
2. `/work/:slug`
   - Case-study detail route for selected projects.
3. `/#contact`
   - Deep link to the contact section.
4. `/#work`
   - Deep link to selected work.

### Home page section order
1. Home / Hero
2. About
3. Experience
4. Selected Work
5. Services
6. Tech Stack
7. Engineering
8. Process
9. Personal
10. Contact

### Case-study page structure
1. Case Study Hero
2. Problem
3. Approach
4. Architecture
5. Key Features
6. Engineering Decisions
7. Challenges
8. Screenshots / Visual Preview
9. Technology
10. Outcome
11. GitHub / Live Demo links
12. Next project / Back to work

## Component Architecture

```text
src/
  assets/
    images/
    icons/
  components/
    common/
      AnimatedSection.tsx
      Button.tsx
      Container.tsx
      CursorGlow.tsx
      Pill.tsx
      SectionHeader.tsx
      SEO.tsx
      SkipLink.tsx
    navigation/
      Navigation.tsx
      MobileMenu.tsx
    hero/
      Hero.tsx
      HeroSignal.tsx
      TechOrbit.tsx
    about/
      About.tsx
      DeveloperCard.tsx
    experience/
      Experience.tsx
      ExperienceTimeline.tsx
      ExperienceItem.tsx
    services/
      Services.tsx
      ServiceCard.tsx
    projects/
      SelectedWork.tsx
      ProjectCaseCard.tsx
      ProjectPreview.tsx
      CaseStudyContent.tsx
    engineering/
      Engineering.tsx
      EngineeringCard.tsx
      PerformanceFlow.tsx
    contact/
      Contact.tsx
      ContactForm.tsx
      SocialLinks.tsx
    process/
      Process.tsx
      ProcessStep.tsx
    personal/
      Personal.tsx
  data/
    profile.ts
    navigation.ts
    projects.ts
    experience.ts
    services.ts
    techStack.ts
    engineering.ts
  hooks/
    usePrefersReducedMotion.ts
    useScrollDirection.ts
    useActiveSection.ts
  lib/
    routes.ts
    metadata.ts
    validation.ts
  pages/
    HomePage.tsx
    CaseStudyPage.tsx
    NotFoundPage.tsx
  styles/
    GlobalStyles.ts
    theme.ts
    styled.d.ts
  types/
    portfolio.ts
```

### Architecture principles
- Keep content in `src/data` so copy, links, projects, and placeholders are easy to update without editing presentation components.
- Keep sections composable and focused; avoid single-file mega sections.
- Use Styled Components theme tokens for color, typography, breakpoints, spacing, radii, shadows, and transitions.
- Use React Router only for case-study routing and a not-found route.
- Lazy-load case-study pages and heavier section visuals.

## Design System

### Visual direction
- Premium, cinematic, minimal, developer-focused, editorial.
- Dark-first interface with warm off-white text, restrained accent color, and tactile surfaces.
- Avoid heavy neon, excessive glass, particle fields, fake 3D, and template card grids.

### Color tokens
- `background.primary`: near-black graphite.
- `background.secondary`: deep charcoal.
- `surface.default`: softened black panel.
- `surface.elevated`: subtle warm dark panel.
- `text.primary`: warm white.
- `text.secondary`: muted stone.
- `text.tertiary`: low-contrast gray.
- `accent.primary`: refined amber or electric blue, used sparingly.
- `accent.success`: availability indicator green.
- `border.subtle`: low-opacity warm white.

### Typography
- Use locally loaded or system-optimized fonts to reduce render blocking.
- Suggested pairing:
  - Display: `Inter Tight`, `Satoshi`, or a similar geometric sans if licensed/available.
  - Body: `Inter` or system sans stack.
  - Code accents: `JetBrains Mono` or system monospace.
- Use large, confident headings with compact copy blocks.
- Keep paragraphs short and specific.

### Layout and spacing
- Max content width: approximately `1200px` to `1320px`.
- Wide cinematic hero with generous top/bottom spacing.
- Section rhythm alternates between text-led editorial blocks and interactive panels.
- Use asymmetry intentionally on desktop; simplify to clean stacked layouts on mobile.

### Reusable UI patterns
- Numbered cards for services and process steps.
- Large case-study panels with visual preview, problem/solution summary, and engineering decisions.
- Sticky sub-navigation feel through active section highlighting.
- Focus-visible rings that match the accent system.

## Animation Strategy

### Library choice
- Use Framer Motion for page transitions, reveal effects, hover states, and layout transitions.
- Do not add GSAP unless a future phase needs complex scroll timelines that Framer Motion cannot handle cleanly.

### Motion principles
- Animate only meaningful transitions: page entrance, section reveal, card hover, navigation state, case-study transition.
- Use slow, confident easing rather than bouncy effects.
- Keep developer-themed motion subtle: cursor-following light, code-grid mask, or signal line movement.
- Avoid animating every text block or creating visual noise.

### Reduced motion
- Implement `usePrefersReducedMotion`.
- Disable cursor-following effects, large transforms, and page motion when `prefers-reduced-motion: reduce` is enabled.
- Preserve instant state changes and accessibility feedback.

## Responsive Strategy

### Target viewports
- 375px mobile
- 390px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop
- 1920px large desktop

### Breakpoint approach
- Mobile-first Styled Components theme breakpoints.
- Replace desktop split hero with stacked content and simplified visual element below the copy.
- Convert timeline into single-column cards on mobile.
- Case-study cards become vertical, full-width editorial panels on mobile.
- Navigation becomes an accessible disclosure menu with focus trap and escape-to-close behavior.
- Maintain tap targets of at least 44px.

### Testing expectations for later phases
- Verify no horizontal overflow at all target widths.
- Keyboard-test navigation, project cards, mobile menu, form fields, and case-study links.
- Confirm reduced-motion mode removes nonessential animation.

## Content Model

### Profile data
```ts
interface Profile {
  name: 'Mohan Sharma';
  role: 'Full Stack Developer';
  experienceSummary: 'Approximately 3 years of professional IT experience';
  positioning: string;
  availability: string;
  location?: string;
  email: string | '[CONTENT NEEDED]';
  github: string | '[CONTENT NEEDED]';
  linkedin: string | '[CONTENT NEEDED]';
  resumeUrl?: string | '[CONTENT NEEDED]';
}
```

### Hero statement options
1. `I build polished web applications that connect thoughtful interfaces with reliable backends.`
2. `I turn product ideas into fast React experiences backed by practical, maintainable APIs.`
3. `I build modern web products from the first interaction to the database layer.`

Selected direction for Phase 2: option 1, because it balances frontend polish with full-stack credibility without overclaiming scale or business impact.

### Experience content rules
Each experience entry must use only verified resume/project-history data. Missing values must stay visibly marked as `[CONTENT NEEDED]` until Mohan provides them.

```ts
interface ExperienceItem {
  company: string | '[CONTENT NEEDED]';
  role: string | '[CONTENT NEEDED]';
  period: string | '[CONTENT NEEDED]';
  technologies: string[];
  responsibilities: string[];
  selectedImpact?: string | '[CONTENT NEEDED]';
}
```

### Personal content rules
Allowed interests from the prompt:
- Photography
- Travel
- Creative work
- Exploring cities
- Technology

Do not add personal biography details beyond these interests unless provided later.

## Project Data Model

```ts
interface ProjectLink {
  label: 'GitHub' | 'Live Demo' | 'Case Study';
  href: string | '[CONTENT NEEDED]';
  isAvailable: boolean;
}

interface Project {
  slug: string;
  title: string;
  category: string;
  status: 'verified' | 'placeholder';
  shortDescription: string;
  problem: string | '[CONTENT NEEDED]';
  solution: string | '[CONTENT NEEDED]';
  technologies: string[];
  engineeringDecisions: string[];
  impact: string | '[CONTENT NEEDED]';
  links: ProjectLink[];
  preview: {
    type: 'placeholder' | 'image' | 'responsive-frame';
    alt: string;
    src?: string;
  };
  caseStudy: {
    approach: string | '[CONTENT NEEDED]';
    architecture: string | '[CONTENT NEEDED]';
    keyFeatures: string[];
    challenges: string[];
    outcome: string | '[CONTENT NEEDED]';
    screenshots: Array<{
      src: string;
      alt: string;
      caption?: string;
    }>;
  };
}
```

### Initial project placeholders
- CareerOS — `[CONTENT NEEDED]` for links, problem, outcome, screenshots, and verified impact.
- PRLens — `[CONTENT NEEDED]` for links, problem, outcome, screenshots, and verified impact.
- Existing professional work — placeholder requiring company/client permission and non-confidential summary.
- Existing portfolio projects — placeholder requiring project names, links, and verified details.

## Data Accuracy Guardrails

- Do not invent employers, clients, dates, metrics, testimonials, awards, or results.
- Use `[CONTENT NEEDED]` anywhere the source information is missing.
- Phrase capabilities as experience/strengths rather than guaranteed services unless Mohan confirms freelance availability.
- Avoid unsupported claims such as large-scale traffic, revenue impact, conversion lift, or named client outcomes.

## SEO and Metadata Plan

- `index.html`: title, meta description, Open Graph, Twitter card, theme color, canonical URL placeholder.
- `public/robots.txt`: allow indexing and point to sitemap.
- `public/sitemap.xml`: include `/` and known case-study routes once slugs are final.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Ensure every case study has a unique title and description.

## Accessibility Plan

- Add skip link before navigation.
- Use a logical heading hierarchy with one `h1` per route.
- Use semantic buttons for menu toggles and form actions.
- Add `aria-expanded`, `aria-controls`, and accessible labels for mobile navigation.
- Use visible focus states for all interactive controls.
- Validate contact form fields with clear inline error messages.
- Ensure color contrast meets WCAG AA.

## Performance Plan

- Vite production build with route-level code splitting.
- Lazy-load case-study route components.
- Prefer CSS and lightweight SVG/HTML visuals over large image/video assets.
- Use responsive image placeholders only when real images are provided.
- Avoid unnecessary global animation listeners.
- Memoize only where measurement or component behavior justifies it.
- Keep dependency set small: React, TypeScript, Vite, Styled Components, React Router, Framer Motion, and lint/test tooling as needed.

## Implementation Phases

### Phase 2 — Foundation, navigation, hero
- Scaffold Vite + React + TypeScript.
- Enable TypeScript strict mode.
- Install Styled Components and create global theme.
- Build sticky navigation, mobile menu, hero, CTAs, availability indicator, technology hints, and responsive foundation.

### Phase 3 — About, experience, services, tech stack
- Add credible about section with replaceable portrait/developer-card placeholder.
- Build timeline using verified or placeholder experience data.
- Build four service cards.
- Build grouped interactive tech stack.

### Phase 4 — Selected work and case studies
- Build large case-study cards.
- Add `/work/:slug` route.
- Add case-study page template and placeholder-safe project content.

### Phase 5 — Engineering, process, personal, contact
- Build engineering philosophy cards and performance-flow visualization.
- Add five-step process section.
- Add personal interests section using only provided interests.
- Add validated frontend contact form with integration hook placeholder.

### Phase 6 — Polish
- Add page transitions, scroll reveals, microinteractions, keyboard states, and reduced-motion alternatives.
- Inspect visual consistency across routes.

### Phase 7 — Optimization
- Add metadata, robots, sitemap, bundle review, image strategy, and Lighthouse-oriented refinements.

### Phase 8 — Final documentation and verification
- Update README with setup, scripts, deployment, environment variables, content editing guide, and known placeholders.
- Run install, lint, typecheck, tests if configured, production build, route inspection, responsive checks, keyboard checks, and reduced-motion checks.
