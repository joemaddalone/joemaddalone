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

Use the sampled warm paper palette. The default page ground is white-smoke
rather than a neutral gray, and secondary surfaces are slightly lighter.

``` css
--paper: #f7f4ec;
--paper-2: #fffdf8;
```

Do not use a stark `#FFFFFF` page background. The slight warmth is
important: the site should feel like paper or a physical architectural
material rather than a digital white canvas.

### Optional texture

A very subtle texture/noise layer may be used:

-   opacity: 2--4%
-   extremely fine grain
-   no visible pattern
-   never enough to interfere with text

The texture should be felt rather than noticed.

------------------------------------------------------------------------

# 4. Color System

## 4.1 Semantic tokens

Every component and type should refer to semantic roles, not inlined hex
values. The existing names `--bg`, `--surface`, `--ink`, and related
aliases remain compatibility names for current components.

| Role | Purpose | Light | Dark |
|---|---|---|---|
| `paper` | Page background, default node fill | `#f7f4ec` | `#20221f` |
| `paper-2` | Diagram/container background, secondary fill | `#fffdf8` | `#292c27` |
| `ink` | Primary text and primary stroke | `#101318` | `#f5f1e8` |
| `muted` | Secondary text, default arrow stroke | `#4b5260` | `#b7b8b1` |
| `soft` | Sublabels and boundary labels | `#8e8a81` | `#7e817a` |
| `rule` | Hairline borders | `rgba(16,19,24,0.12)` | `rgba(245,241,232,0.10)` |
| `rule-solid` | Stronger borders and baselines | `#e0d9c2` | `#46483f` |
| `accent` | One or two focal elements per diagram | `#a14a2a` | `#c96a42` |
| `accent-tint` | Accent-bordered box fill | `rgba(161,74,42,0.10)` | `rgba(201,106,66,0.14)` |
| `link` | HTTP/API calls and external arrows | `#a14a2a` | `#c96a42` |

The palette is sampled from the site itself, with the warm brick accent
added specifically for diagrams. The site otherwise remains nearly
monochromatic. When inverting light to dark, preserve opacity while
flipping the ink RGB: `rgba(16,19,24, X)` becomes
`rgba(245,241,232, X)`. The accent brightens from `#a14a2a` to `#c96a42`
on dark paper.

### Rules

-   Near-black ink remains the dominant interface color.
-   The warm brick accent is reserved for focal diagrams, technical links,
    and external actions that need a clear semantic signal.
-   Do not introduce arbitrary colors for visual interest.
-   Use no more than one accent focal role per diagram or compact view.
-   Status colors should only appear when the information requires status
    semantics.
-   Images may introduce color naturally, but surrounding UI remains
    restrained.

## 4.2 Series palette

Multi-series chart types may opt into the desaturated editorial series
palette. Use `accent` for the focal series and the following only when
overlapping entities must be distinguished:

| Token | Light | Dark |
|---|---|---|
| `series-1` | `#7c8f6f` | `#9caf8f` |
| `series-2` | `#5e7a9b` | `#82a0c0` |
| `series-3` | `#b8915a` | `#d3ad7a` |
| `series-4` | `#9c6b50` | `#b88670` |
| `series-5` | `#6e6479` | `#8d8298` |

Series fills use `0.18` opacity in light mode and `0.22` in dark mode;
strokes use the full color. Do not backfill these tokens into
architecture, swimlane, or other non-chart diagrams.

## 4.3 Terminal skin

The terminal-window primitive may opt into a separate fixed skin:

| Token | Value | Purpose |
|---|---|---|
| `terminal-page` | `#0a0a0a` | Page behind the window |
| `terminal-paper` | `#141414` | Window body and node fill |
| `terminal-bar` | `#1b1b1b` | Titlebar |
| `terminal-border` | `#2b2b2b` | Window border and hairlines |
| `terminal-ink` | `#f5f5f5` | Primary text and stroke |
| `terminal-muted` | `#9a9a9a` | Secondary text and sublabels |
| `terminal-soft` | `#5c5c5c` | Inactive marks and spokes |
| `terminal-accent` | `#ff5a36` | The single accent |
| `terminal-accent-tint` | `rgba(255,90,54,0.12)` | Accent box fill |

This skin does not replace the default palette and must not introduce a
second hue.

------------------------------------------------------------------------

# 5. Typography

Typography is one of the primary visual elements. Use the exact brand
pair: Inter for names, headings, and prose; JetBrains Mono only for
technical content such as ports, commands, URLs, field types, IDs, and
system metadata.

| Role | Family | Size | Weight | Usage |
|---|---|---|---|---|
| `title` | Inter | 1.75rem | 900 | Page H1 |
| `node-name` | Inter | 12px | 600 | Human-readable labels |
| `sublabel` | JetBrains Mono | 9px | 400 | Port, protocol, URL, field type |
| `eyebrow` | JetBrains Mono | 7--8px | 500 | Tracked, uppercase type tags |
| `arrow-label` | JetBrains Mono | 8px | 400 | Arrow annotations |
| `callout` | Inter | 14px | 400 | Editorial asides only |

### Font stack

``` html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## 5.1 Display / headings

Use Inter with strong uppercase forms. Large headings should feel like
**signage**, not marketing copy. The site uses uppercase display
typography with tight tracking.

Example:

``` text
SELECTED WORK
```

rather than:

``` text
Here are some things I've worked on
```

## 5.2 Body

Body text should remain highly readable.

``` css
font-size: 16px;
line-height: 1.6;
```

Long-form writing should use a constrained reading width:

``` css
max-width: 680px;
```

## 5.3 Metadata

Metadata is an important part of the aesthetic. Use small uppercase
labels with increased letter spacing and muted color.

``` text
PROJECT / 2026
TYPE / EXPERIMENT
STATUS / ACTIVE
```

``` css
font-size: 10px;
letter-spacing: 0.12em;
text-transform: uppercase;
```

JetBrains Mono is for technical content, not a blanket “dev” font.
Human-readable names always stay in Inter.

------------------------------------------------------------------------

# 5.4 Stroke, radius, and spacing

| Token | Value | Use |
|---|---:|---|
| `stroke-thin` | `0.8` | Tag-box outlines and leaf nodes |
| `stroke-default` | `1` | Most strokes |
| `stroke-strong` | `1.2` | Emphasis strokes |
| `radius-sm` | `4px` | Small tags |
| `radius-md` | `6px` | Node boxes |
| `radius-lg` | `8px` | Containers and rings |
| `grid` | `4px` | Base unit for coordinates, sizes, and gaps |

Every spacing decision should be divisible by four unless optical
adjustment is necessary. Use thin, low-contrast rules to define
information hierarchy without turning the page into a field of boxes.

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

The canonical token set is defined in `src/styles/global.css` and uses
semantic roles. The values below are the documentation reference; CSS
variables are the source of truth at runtime.

``` css
:root {
  --paper: #f7f4ec;
  --paper-2: #fffdf8;
  --ink: #101318;
  --muted: #4b5260;
  --soft: #8e8a81;
  --rule: rgba(16, 19, 24, 0.12);
  --rule-solid: #e0d9c2;
  --accent: #a14a2a;
  --accent-tint: rgba(161, 74, 42, 0.10);
  --link: #a14a2a;

  --series-1: #7c8f6f;
  --series-2: #5e7a9b;
  --series-3: #b8915a;
  --series-4: #9c6b50;
  --series-5: #6e6479;

  --font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", ui-monospace, monospace;

  --stroke-thin: 0.8;
  --stroke-default: 1;
  --stroke-strong: 1.2;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --grid: 4px;
}
```

In dark mode, invert the paper/ink roles, preserve the opacity in
`--rule`, and brighten the accent and series colors according to the
semantic token table in section 4.

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
