# Personal Site Design System

## 1. Design Direction

The site should feel like a **quiet, editorial information system**
rather than a conventional developer portfolio.

The visual reference is the supplied RHINE LAB interface: restrained,
architectural, slightly clinical, and highly intentional. It combines a
research/archive aesthetic with contemporary product design.

The goal is **not to reproduce the reference site literally**. Instead,
borrow its visual language:

-   Large amounts of negative space
-   Warm off-white surfaces instead of pure white
-   Near-black typography instead of absolute black everywhere
-   Small uppercase metadata and labels
-   Strong typographic hierarchy
-   Thin rules and understated borders
-   Sparse, geometric UI
-   Monospaced or technical microcopy
-   Minimal but deliberate motion
-   Interfaces that feel like an instrument or archive
-   Occasional Chinese/secondary-language microcopy as a visual detail,
    never as decoration that harms readability
-   Very little conventional "portfolio" chrome

The site should feel like **a personal research terminal / studio
archive**.

### Core adjectives

**Quiet · Technical · Editorial · Architectural · Precise · Curious ·
Experimental**

Avoid:

**Startup landing page · SaaS dashboard · Generic portfolio · Neon AI
aesthetic · Excessive gradients · Card-grid overload · Glassmorphism**

------------------------------------------------------------------------

# 2. Brand Concept

The site should present the person behind it as someone who:

-   builds software
-   investigates technology
-   experiments with new tools
-   explains what they discover
-   makes things rather than simply listing credentials

The site is therefore organized around **work, experiments, writing, and
observations**, rather than a resume-first structure.

A useful mental model:

> **Personal laboratory + archive + working notebook**

The homepage should immediately communicate:

1.  Who this is
2.  What they make / investigate
3.  What is currently interesting
4.  Where to explore the archive

------------------------------------------------------------------------

# 3. Visual Language

## 3.1 Background

Use a warm, slightly gray/cream background.

Primary:

``` css
--background: #E7E6E1;
```

Useful supporting surfaces:

``` css
--surface: #ECEAE4;
--surface-raised: #F0EEE8;
--surface-muted: #DDDCD6;
```

Do not use a stark `#FFFFFF` page background.

The slight warmth is important. The reference feels almost like paper or
a physical architectural material rather than a digital white canvas.

### Optional texture

A very subtle texture/noise layer may be used:

-   opacity: 2--4%
-   extremely fine grain
-   no visible pattern
-   never enough to interfere with text

The texture should be felt rather than noticed.

------------------------------------------------------------------------

# 4. Color System

Keep the palette extremely small.

``` css
:root {
  --bg: #E7E6E1;
  --surface: #ECEAE4;
  --surface-raised: #F0EEE8;

  --ink: #111210;
  --ink-muted: #686862;
  --ink-faint: #999890;

  --line: #C9C8C1;
  --line-soft: #D7D5CE;

  --accent: #111210;
}
```

### Rules

-   Black/near-black is the primary accent.
-   Do not introduce arbitrary colors for visual interest.
-   Links should generally use typography and underline/position rather
    than a bright accent color.
-   Status colors should only appear when the information actually
    requires status semantics.
-   Images may introduce color naturally, but surrounding UI should
    remain restrained.

The design should be nearly monochromatic.

------------------------------------------------------------------------

# 5. Typography

Typography is one of the primary visual elements.

## 5.1 Display / Headings

Use a strong grotesk sans-serif.

Characteristics:

-   geometric
-   compact
-   bold
-   contemporary
-   slightly industrial

Good candidates:

-   Geist
-   Inter
-   Helvetica Neue
-   Arial
-   Neue Haas Grotesk
-   IBM Plex Sans

Prefer a font with strong uppercase forms.

Example:

``` css
font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
```

Large headings should feel like **signage**, not marketing copy.

Example:

``` text
SELECTED WORK
```

rather than:

``` text
Here are some things I've worked on
```

------------------------------------------------------------------------

## 5.2 Body

Body text should remain highly readable.

Use the same sans-serif family or a complementary neutral sans.

``` css
font-size: 16px;
line-height: 1.6;
```

Long-form writing should use a constrained reading width:

``` css
max-width: 680px;
```

------------------------------------------------------------------------

## 5.3 Metadata

Metadata is an important part of the aesthetic.

Use:

-   small font size
-   uppercase
-   increased letter spacing
-   muted color

Example:

``` text
PROJECT / 2026
TYPE / EXPERIMENT
STATUS / ACTIVE
```

Suggested:

``` css
font-size: 10px;
letter-spacing: 0.12em;
text-transform: uppercase;
```

A small monospace font can be used for technical metadata, timestamps,
IDs, filenames, and system-like information.

Good candidates:

-   Geist Mono
-   IBM Plex Mono
-   JetBrains Mono
-   SF Mono

Do not use monospace for all body text.

------------------------------------------------------------------------

# 6. Layout Principles

## 6.1 Generous Margins

The reference relies heavily on empty space.

Desktop page padding:

``` css
padding-inline: clamp(24px, 4vw, 64px);
```

Large sections should have substantial vertical spacing:

``` css
padding-block: clamp(96px, 14vw, 220px);
```

Do not attempt to fill every part of the viewport.

Empty space is part of the design.

------------------------------------------------------------------------

## 6.2 Grid

Use a simple editorial grid.

Desktop:

-   12 columns
-   generous gutters
-   content rarely spans all 12 columns
-   metadata may occupy 2--3 columns
-   primary content may occupy 6--8 columns

Example conceptual layout:

``` text
┌──────┬───────────────────────────────┬───────────┐
│ META │                               │           │
│      │       PRIMARY CONTENT         │   INDEX   │
│      │                               │           │
└──────┴───────────────────────────────┴───────────┘
```

Avoid card-based masonry layouts unless there is a strong content
reason.

------------------------------------------------------------------------

# 7. Navigation

Navigation should be extremely simple.

Suggested desktop structure:

``` text
JOE MADDALONE                         WORK   WRITING   ABOUT   ↗
```

Or:

``` text
JOE / SOFTWARE + EXPERIMENTS          ARCHIVE   ABOUT   ↗
```

The navigation should remain visible but visually quiet.

### Navigation behavior

-   No large sticky navigation bar.
-   No heavy shadows.
-   No rounded container.
-   No hamburger on desktop.
-   Small uppercase labels.
-   Thin separators can be used.
-   Hover states should be subtle.

Possible hover treatment:

``` text
WORK →
```

rather than a dramatic color transition.

------------------------------------------------------------------------

# 8. Homepage

The homepage should function more like an **index page** than a
marketing landing page.

## Hero

The hero should be sparse.

Example structure:

``` text
JOE MADDALONE
SOFTWARE / EXPERIMENTS / WRITING

I build software and investigate the tools
and ideas that shape how we make things.

[ EXPLORE WORK → ]
```

The copy should be short.

Do not use:

-   giant marketing slogans
-   animated gradients
-   rotating taglines
-   oversized profile photography
-   testimonial sections

The visual impact should come from typography, spacing, and composition.

------------------------------------------------------------------------

# 9. Current / Active Section

After the hero, show what is currently being explored.

Possible heading:

``` text
CURRENTLY
```

or:

``` text
NOW
```

Use an editorial list rather than cards.

Example:

``` text
01    LOCAL AI TOOLING                    ACTIVE
      Exploring local inference,
      agents, models, and developer tools.

02    VIDEO / RESEARCH                    ACTIVE
      Building experiments around
      technical education and media.

03    SOFTWARE                            ONGOING
      Interfaces, developer tools,
      and small useful things.
```

Rows should be separated by thin horizontal rules.

------------------------------------------------------------------------

# 10. Work / Projects

Projects should resemble **archive records**, not product cards.

Example:

``` text
PROJECT / 001

ITHUMB
Black-and-white procedural illustration
experiments and model training.

2026                                      VIEW →
```

Each project can include:

-   project ID
-   title
-   one-sentence description
-   year
-   category
-   status
-   link

### Project image treatment

When images are used:

-   large
-   editorial
-   rectangular
-   no rounded corners by default
-   no decorative frame
-   minimal captioning

Image corners should generally remain square.

------------------------------------------------------------------------

# 11. Archive

The supplied RHINE LAB archive interface is especially useful as
inspiration.

The personal site should have an **Archive** or **Index** view for older
projects, experiments, articles, videos, and other work.

Possible interface:

``` text
ARCHIVE INDEX

SEARCH ............................................

ALL       SOFTWARE       WRITING       EXPERIMENTS

YEAR       TYPE                TITLE
──────────────────────────────────────────────────
2026       EXPERIMENT          Local AI ...
2026       SOFTWARE            ...
2025       WRITING             ...
2025       VIDEO               ...
```

This is preferable to an infinite feed.

The archive should make the site feel like it contains a body of work.

------------------------------------------------------------------------

# 12. Writing

Articles should feel like technical papers / field notes rather than
blog templates.

Article header:

``` text
FIELD NOTE / 024

WHY I KEEP BUILDING
SMALL AI TOOLS

23 SEPTEMBER 2026
12 MIN READ
```

Then a generous amount of space before the article begins.

Long-form text:

-   \~680px reading width
-   generous line-height
-   restrained heading hierarchy
-   minimal decoration
-   code blocks can use a slightly darker surface
-   diagrams/images should be allowed to extend beyond the reading
    column

------------------------------------------------------------------------

# 13. Technical Details

The site can expose small technical details as part of the visual
language.

Examples:

``` text
BUILT WITH
NEXT.JS / TYPESCRIPT / ...
```

or:

``` text
LAST UPDATED
2026.09.23
```

or:

``` text
SYSTEM STATUS     ONLINE
```

Use these sparingly.

The site should not pretend to be an operating system. The "system"
metaphor is a visual language, not a gimmick.

------------------------------------------------------------------------

# 14. Interaction Design

Interactions should feel **precise and physical**.

## Hover

Prefer:

-   underline appearing
-   arrow movement
-   subtle opacity change
-   slight translation
-   border transition

Avoid:

-   large scale transforms
-   glowing effects
-   bouncing animations
-   color explosions

Example:

``` css
transition:
  transform 180ms ease,
  opacity 180ms ease;
```

A link arrow might move 3--5px on hover.

------------------------------------------------------------------------

## Page transitions

If implemented, use a short fade/slide.

Target:

``` text
150–300ms
```

Transitions should never delay navigation.

------------------------------------------------------------------------

## Scroll

Subtle scroll reveals are acceptable.

Use them for:

-   section headings
-   archive rows
-   project imagery

Do not animate every element.

The site should still feel good with animation disabled.

------------------------------------------------------------------------

# 15. UI Details

## Rules

Horizontal rules are a major structural element.

Use thin 1px lines with low contrast:

``` css
border-color: var(--line-soft);
```

They should define information hierarchy without looking like boxes.

------------------------------------------------------------------------

## Buttons

Avoid conventional rounded CTA buttons.

Prefer text actions:

``` text
EXPLORE WORK →
READ ARTICLE →
VIEW PROJECT ↗
OPEN ARCHIVE →
```

If a button is necessary, use a restrained rectangular treatment:

``` text
┌─────────────────────┐
│  ENTER ARCHIVE   →  │
└─────────────────────┘
```

No pill buttons.

------------------------------------------------------------------------

## Icons

Icons should be:

-   geometric
-   thin
-   simple
-   monochrome

Use arrows, plus/minus, close, search, external-link, etc.

Avoid large decorative iconography.

------------------------------------------------------------------------

# 16. Responsive Design

The desktop composition should collapse gracefully rather than simply
shrink.

## Mobile

Navigation:

``` text
JOE MADDALONE                         +
```

Sections become single-column.

Metadata can move above content.

Archive rows should become:

``` text
2026 / EXPERIMENT

LOCAL AI TOOLING

VIEW →
```

Maintain generous vertical spacing.

Do not attempt to reproduce the desktop grid literally on mobile.

------------------------------------------------------------------------

# 17. Accessibility

The minimalist visual system must not come at the expense of
accessibility.

Requirements:

-   WCAG-compliant text contrast
-   visible keyboard focus states
-   semantic HTML
-   real buttons and links
-   reduced-motion support
-   no information communicated by color alone
-   images have meaningful alt text
-   minimum comfortable touch targets
-   body text remains readable at browser zoom levels

Use:

``` css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

------------------------------------------------------------------------

# 18. Image Treatment

Images should feel like artifacts in an archive.

Preferred:

-   large editorial crops
-   monochrome or naturally muted imagery
-   generous surrounding whitespace
-   captions in small metadata typography

Avoid:

-   rounded thumbnail grids
-   drop shadows
-   colored image borders
-   stock-photo aesthetics
-   excessive image decoration

For screenshots of software, allow the image to provide most of the
visual detail while the surrounding interface stays quiet.

------------------------------------------------------------------------

# 19. Content Voice

The visual system should be supported by concise writing.

Writing should be:

-   direct
-   technically informed
-   curious
-   occasionally playful
-   specific
-   free of marketing fluff

Prefer:

> I wanted to understand what happens when a coding agent is given
> several independent tasks.

Over:

> Discover the revolutionary future of collaborative AI-powered
> development.

Prefer:

> A small experiment in running several coding agents against the same
> local task queue.

Over:

> An innovative next-generation multi-agent orchestration platform.

The site should sound like a person who **makes things and thinks about
how they work**.

------------------------------------------------------------------------

# 20. What Not To Do

Do not turn this into a generic "developer portfolio."

Specifically avoid:

-   dark-mode-only hacker aesthetics
-   neon green / purple AI colors
-   glowing borders
-   glassmorphism
-   excessive rounded cards
-   huge gradient text
-   floating 3D objects everywhere
-   skill-bar percentages
-   generic "10+ years experience" hero copy
-   logo-clouds
-   stock photography
-   testimonial carousels
-   excessive badges
-   animated counters
-   excessive particle effects
-   every section being a card

The restraint is the point.

------------------------------------------------------------------------

# 21. Design Tokens

A starting token set:

``` css
:root {
  /* Color */
  --color-bg: #E7E6E1;
  --color-surface: #ECEAE4;
  --color-surface-raised: #F0EEE8;

  --color-ink: #111210;
  --color-ink-muted: #686862;
  --color-ink-faint: #999890;

  --color-line: #C9C8C1;
  --color-line-soft: #D7D5CE;

  /* Typography */
  --font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "Geist Mono", "SF Mono", monospace;

  --text-xs: 10px;
  --text-sm: 12px;
  --text-base: 16px;
  --text-lg: 20px;
  --text-xl: 32px;
  --text-2xl: 48px;
  --text-3xl: 72px;
  --text-display: clamp(56px, 8vw, 128px);

  /* Layout */
  --page-padding: clamp(24px, 4vw, 64px);
  --content-width: 1440px;
  --reading-width: 680px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;
  --space-48: 192px;

  /* Motion */
  --duration-fast: 150ms;
  --duration-normal: 220ms;
  --ease: cubic-bezier(0.2, 0, 0, 1);
}
```

These values are starting points, not rigid requirements.

------------------------------------------------------------------------

# 22. Component Vocabulary

The implementation should favor a small vocabulary of reusable
primitives:

``` text
SiteHeader
SectionLabel
Metadata
Rule
ArchiveRow
ProjectRecord
ProjectImage
ArticleHeader
ArticleBody
Index
Search
TextLink
ArrowLink
Status
Footer
```

Prefer composition of these primitives over building every section as a
unique component.

------------------------------------------------------------------------

# 23. Overall Composition

The finished site should feel approximately like this:

``` text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  JOE MADDALONE                           WORK  WRITING  ABOUT │
│  SOFTWARE / EXPERIMENTS / WRITING                           ↗ │
│                                                              │
│                                                              │
│                                                              │
│  I BUILD SOFTWARE AND                                       │
│  INVESTIGATE THE TOOLS                                      │
│  THAT SHAPE HOW WE MAKE.                                    │
│                                                              │
│                                      EXPLORE WORK →          │
│                                                              │
│                                                              │
│  ──────────────────────────────────────────────────────────  │
│                                                              │
│  CURRENTLY                                                   │
│                                                              │
│  01   LOCAL AI TOOLING                         ACTIVE       │
│       ...                                                    │
│                                                              │
│  ──────────────────────────────────────────────────────────  │
│                                                              │
│  02   SOFTWARE EXPERIMENTS                    ONGOING      │
│       ...                                                    │
│                                                              │
│                                                              │
│  ──────────────────────────────────────────────────────────  │
│                                                              │
│  SELECTED WORK                                               │
│                                                              │
│       LARGE EDITORIAL PROJECT IMAGE                          │
│                                                              │
│  PROJECT / 001                         2026                  │
│  PROJECT NAME                          VIEW →                │
│                                                              │
│                                                              │
│  ARCHIVE INDEX →                                             │
│                                                              │
│                                                              │
│  ──────────────────────────────────────────────────────────  │
│                                                              │
│  JOE MADDALONE                         BUILT WITH ...        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

The important characteristic is the **ratio of information to empty
space**.

There should be enough information to make the site useful, but enough
empty space to make every piece of information feel intentional.

------------------------------------------------------------------------

# 24. Final Design Principle

The site should feel like it was designed by someone who cares about
**systems, typography, tools, and ideas**.

It should not feel like a template.

When deciding between two implementations, prefer the one that is:

**quieter, simpler, more typographic, more editorial, and more
intentional.**
