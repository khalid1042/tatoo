# PRD — Tattoo Font Generator Landing Page

## 1. Project Overview

Build a modern, fast, mobile-first **Tattoo Font Generator** website.

The primary purpose is to allow users to enter their own name, word, date, quote, initials, or tattoo text and instantly preview it in multiple tattoo-inspired lettering styles.

The website must combine:

1. A highly usable tattoo font generator.
2. A visually attractive font preview system.
3. Easy customization.
4. Copy/download functionality.
5. Helpful SEO-focused educational content.
6. A scalable architecture that allows additional tattoo-font pages to be added later.

The homepage/landing page should itself target the primary search intent around:

**Tattoo Font Generator**

Do not build a complicated AI image-generation product for the first version. The core experience must be a **text-to-tattoo-lettering generator** that loads quickly and works immediately in the browser.

---

# 2. Primary Goal

The main user journey should be:

**Visit page → enter tattoo text → choose lettering style → customize → preview → copy/download → explore related tattoo lettering ideas.**

The generator should be usable without registration.

Do not force users to create an account before using the basic tool.

---

# 3. Target Users

Design for users who want tattoo lettering for:

* Names
* Couple names
* Family names
* Initials
* Dates
* Birth dates
* Roman numerals
* Quotes
* Short phrases
* Memorial tattoos
* Religious text
* Coordinates
* Numbers
* Symbols
* Wrist tattoos
* Forearm tattoos
* Chest tattoos
* Back tattoos
* Neck tattoos
* Hand tattoos
* Finger tattoos
* Minimal tattoos

The interface should be understandable to a beginner who has never used a font generator.

---

# 4. Core Keyword

Primary keyword:

**Tattoo Font Generator**

Use it naturally in:

* Page title
* H1
* Introduction
* Tool section
* At least one H2 where natural
* Meta description
* Image/visual context where appropriate
* Internal linking
* FAQ content

Do not keyword stuff.

---

# 5. Secondary Keyword Themes

Naturally cover related search intent such as:

* tattoo lettering
* tattoo fonts
* tattoo lettering generator
* tattoo font maker
* tattoo text generator
* tattoo writing fonts
* tattoo script fonts
* tattoo cursive fonts
* tattoo name fonts
* tattoo quote fonts
* gothic tattoo fonts
* old English tattoo fonts
* calligraphy tattoo fonts
* handwritten tattoo fonts
* tattoo font ideas
* tattoo lettering ideas
* tattoo name generator
* tattoo text styles

Only use keywords when they genuinely describe functionality or useful content.

---

# 6. Page URL

Primary landing page:

`/tattoo-font-generator/`

If the project uses the homepage as the primary tool page, the homepage can also contain the complete generator.

Avoid creating two pages that target exactly the same search intent.

---

# 7. SEO Metadata

Create an SEO-friendly title around:

**Tattoo Font Generator – Create Tattoo Lettering Styles**

Create a natural meta description explaining that users can enter their text and preview it in tattoo fonts and lettering styles.

Keep title and description within practical search-result lengths.

Do not stuff every secondary keyword into the metadata.

---

# 8. Page Structure

The landing page should follow this approximate structure:

```text
Header
↓
Hero / Tattoo Font Generator
↓
Generator Interface
↓
Font Categories
↓
Popular Tattoo Lettering Styles
↓
How the Generator Works
↓
Tattoo Font Ideas / Use Cases
↓
Tattoo Font Selection Guide
↓
Customization Explanation
↓
FAQ
↓
Final CTA / Generator
↓
Footer
```

The generator must remain the most important element on the page.

---

# 9. Header

Create a clean responsive header.

Desktop:

* Logo
* Tattoo Font Generator
* Tattoo Fonts
* Tattoo Lettering
* Tattoo Ideas
* Guides
* About

Mobile:

* Logo
* Hamburger menu

Keep navigation simple.

Do not overcrowd the header.

---

# 10. Hero Section

Create a strong hero section immediately below the header.

Suggested structure:

### H1

**Tattoo Font Generator**

Supporting text:

**Create tattoo lettering for names, quotes, dates, initials, and more. Enter your text and instantly explore different tattoo font styles.**

Place the generator immediately within or directly below the hero.

Do not place a huge paragraph before the tool.

The user should be able to interact with the generator almost immediately after landing.

---

# 11. Generator Interface

This is the most important component on the website.

Create a visually prominent generator card.

## Text Input

Provide a large text input/textarea.

Placeholder:

**Type your tattoo text here...**

Examples:

* Khalid
* Forever
* Family
* 1998
* Love Never Dies
* XIII.VI.MMXXVI

Support:

* Letters
* Numbers
* punctuation
* spaces
* common symbols

Limit extremely long input so the preview remains usable.

Display a small character counter.

---

# 12. Live Preview

As the user types, update the tattoo lettering preview instantly.

No page reload.

No submit button should be required for basic preview generation.

Each font preview should show the user's actual text.

Example:

```text
Khalid
```

must appear as:

```text
Khalid
```

in every selected style.

Do not use fixed example images as the main result.

---

# 13. Font Gallery

Display multiple font cards.

Each card should contain:

* Font preview
* Font/style name
* Favorite button
* Copy button
* Download button where supported
* Select/customize button

Example:

```text
┌──────────────────────────────┐
│                              │
│       Khalid                 │
│       Script Tattoo          │
│                              │
│  [Copy] [Download] [Use]     │
└──────────────────────────────┘
```

The user's entered text must dynamically appear in each card.

---

# 14. Font Categories

Create filterable categories.

Initial categories:

### Script
Elegant flowing tattoo lettering.

### Cursive
Connected handwritten styles.

### Gothic
Dark, dramatic lettering.

### Blackletter
Traditional blackletter-inspired styles.

### Old English
Classic tattoo lettering aesthetic.

### Calligraphy
Decorative and artistic lettering.

### Handwritten
Natural handwriting-inspired styles.

### Serif
Classic structured typography.

### Minimalist
Simple clean lettering.

### Brush
Expressive brush lettering.

### Stencil
Bold stencil-inspired lettering.

### Traditional
Bold traditional tattoo aesthetics.

Categories should be extensible.

Do not hard-code the entire application around only these categories.

---

# 15. Font Search

Add font search/filter functionality.

Example:

**Search tattoo fonts...**

If the user types:

`gothic`

show relevant Gothic/Blackletter fonts.

If no results exist:

**No fonts found. Try another style.**

---

# 16. Font Sorting

Provide useful sorting options:

* Popular
* New
* A–Z
* Recommended

If popularity data is not available, do not fake statistics.

---

# 17. Customization Panel

When the user selects a font, open a customization panel.

Controls:

### Font Size
Slider: Small → Large

### Letter Spacing
Slider: Tight → Wide

### Line Height
Useful for multi-line tattoo text.

### Text Alignment
* Left
* Center
* Right

### Text Transform
* Original
* Uppercase
* Lowercase

### Text Color
Allow color selection. Default should provide a tattoo-friendly dark preview.

### Background
Options:
* Transparent
* White
* Light
* Dark

### Font Weight
Only show if the selected font supports meaningful weight variation.

---

# 18. Curved Tattoo Text

Add optional curved text.

Controls:
* Straight
* Slight curve
* Medium curve
* Strong curve

Use cases:
* Wrist
* Shoulder
* Chest
* Around symbols
* Circular tattoos

---

# 19. Text Rotation

Add a rotation control (-180° to +180°).

---

# 20. Multi-Line Text

Support multiple lines.

---

# 21. Preview Backgrounds

Provide optional preview backgrounds: Plain white, Transparent, Dark, Paper-style.

---

# 22. Copy Function

Each font result should have a Copy button.

---

# 23. Download PNG

Provide Download PNG functionality (client-side).

---

# 24. SVG Download

Support Download SVG functionality.

---

# 25. Reset Button

Provide Reset button to return tool to default state.

---

# 26. Mobile Experience

Mobile is first-class. Touch-friendly controls, 1-column font cards, horizontal scroll categories.

---

# 27. Desktop Experience

Split controls and preview with reusable font gallery.

---

# 28. Popular Tattoo Styles Section

Section highlighting popular font cards with descriptions.

---

# 29. Tattoo Lettering Section

Educational section explaining tattoo lettering use cases.

---

# 30. How It Works

3-step process section.

---

# 31. Tattoo Font Selection Guide

Selection guide by style persona (Elegant, Bold, Simple, Personal).

---

# 32. Tattoo Font Ideas

Ideas & inspiration section (Names, Dates, Quotes, Couples, Family, Memorials).

---

# 33. Placement Inspiration

Placement experimentation guide (Wrist, Forearm, Chest, Rib, etc.).

---

# 34. Important Disclaimer

Small disclaimer near placement content.

---

# 35. FAQ

Comprehensive FAQ section.

---

# 36. SEO Content Rules

Original, helpful, human-readable content. No fake testimonials or stats.

---

# 37. Internal Linking

Logical internal navigation links.

---

# 38. Future Page Architecture

Clean, modular URL architecture.

---

# 39. Font Data Architecture

Structured JSON/TS font model.

---

# 40. Font Licensing

Verify open licenses (SIL OFL, Google Fonts).

---

# 41. Performance

Client-side rendering, lazy loading, fast LCP.

---

# 42. Accessibility

Semantic HTML, visible focus states, contrast.

---

# 43. Error Handling

Fallback fonts & safe rendering.

---

# 44. Empty State

Default example text ("Your tattoo lettering will appear here").

---

# 45. Loading State

Subtle font loading indicator.

---

# 46. Favorites

LocalStorage favoriting system.

---

# 47. Recently Used Fonts

LocalStorage recent fonts tracking.

---

# 48. Shareable Designs

URL state encoding (`?text=...&font=...`).

---

# 49. Analytics

Event-ready handlers.

---

# 50. Monetization Readiness

Clean non-disruptive placement space.

---

# 51. Trust Signals

About, Contact, Privacy, Terms, License pages.

---

# 52. Design Direction

Restrained, modern, professional typography tool aesthetic.

---

# 53. Color System

Dark charcoal/black primary, neutral light surfaces, subtle restrained accent color.

---

# 54. Generator Card Design

Standout generator card container.

---

# 55. Animations

Subtle, non-intrusive hover micro-interactions.

---

# 56. Responsive Breakpoints

Full support from mobile to 4K displays.

---

# 57. Technical Architecture

Modular React components.

---

# 58. State Management

Predictable React state.

---

# 59. Browser-Side Generation

Client-side Canvas rendering.

---

# 60. Security

Sanitized DOM text insertion.

---

# 61. SEO Technical Requirements

Schema markup, meta tags, H1-H3 structure.

---

# 62. Content Above the Fold

Generator visible immediately above the fold.

---

# 63. Conversion Goal

User enters text -> customizes -> copies or downloads PNG/SVG.

---

# 64. UX Principle

Type -> See -> Customize -> Download.

---

# 65. Content Quality Principle

High-quality unique guidance.

---

# 66. No Fake Claims

Honest product descriptions.

---

# 67. Final Footer

Complete footer links.

---

# 68. Acceptance Criteria

Full acceptance checklist.

---

# 69. Antigravity Implementation Instructions

Execute complete functional application.

---

# 70. Most Important Product Rule

Interactive generator is the primary product.
