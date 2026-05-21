# OLK Web & SEO — Website Documentation

## Overview

This is the official website for **OLK Web & SEO**, a performance-driven web design and front-end development studio focused on building high-converting digital experiences.

The project was built by unifying two earlier design prototypes into a single cohesive codebase, applying specific choices from each — and extending it with two brand-new pages (About and Contact) built from scratch. The result is a fully structured, multi-page static website with multilingual support, scroll animations, parallax effects and a responsive layout.

---

## Project Philosophy

Every design and code decision in this project follows the same principle that drives OLK's client work: **performance first**. This means:

- No JavaScript frameworks or build tools — pure vanilla JS for maximum speed and simplicity
- No external CSS libraries — every style is handcrafted with CSS custom properties
- Minimal DOM overhead — animations are CSS-native where possible, JS-driven only when needed
- Mobile-first responsive structure — every layout degrades gracefully across screen sizes
- Semantic HTML5 — proper use of `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>` for accessibility and SEO

---

## Folder Structure

```
OLK_Site/
│
├── index.html          → Home page
├── services.html       → Services page
├── portfolio.html      → Portfolio page
├── products.html       → Products page
├── about.html          → About page
├── contact.html        → Contact page
│
├── css/
│   └── style.css       → Global shared stylesheet (variables, header, footer, buttons, animations)
│
├── js/
│   ├── main.js         → Global JS (mobile nav, parallax, scroll reveal, sticky header, active nav)
│   └── i18n.js         → Full multilingual system (EN / PT / ES) with 300+ translation keys
│
├── img/
│   └── [all project images]
│
└── docs/
    ├── README.md                → This file
    └── partials-reference.html  → HTML snippets for header and footer (reference only)
```

---

## Page Origins & Applied Changes

| Page | Source | Changes Applied |
|---|---|---|
| `index.html` | Project 2 | Hero text centered and reduced in size; parallax background with animated color blobs and grid on scroll |
| `services.html` | Project 2 | Page hero title and intro text centered; parallax gradient background on scroll |
| `portfolio.html` | Project 2 | Page hero title and intro text centered; parallax gradient background on scroll |
| `products.html` | Project 1 | Page hero section removed entirely — content starts directly after the header |
| `about.html` | Built from scratch | Two-column layout based on provided reference image: "Who We Are" + "Why Choose Us" sections with stats |
| `contact.html` | Built from scratch | Two-column layout with info cards on the left and a full contact form on the right |

### Header & Footer Source
- **Header** → Project 1 style: sticky frosted-glass bar, logo image, pill-shaped nav links, hamburger toggle
- **Footer** → Project 2 style: centered link list, copyright line

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — custom properties, grid, flexbox, keyframe animations |
| Scripting | Vanilla JavaScript (no frameworks, no dependencies) |
| Fonts | Google Fonts — PT Sans (headings) + Inter (body) |
| Images | Static assets (PNG / JPG) |

---

## CSS Architecture

All global styles live in `css/style.css` and are loaded by every page. Page-specific styles are written in an inline `<style>` block inside each HTML file, keeping related styles close to their markup without extra HTTP requests.

### CSS Custom Properties (Design Tokens)

All colors, spacing, fonts and gradients are defined as CSS variables in the `:root {}` block at the top of `style.css`. This is the single source of truth for the visual identity.

```css
:root {
  --bg: #000000;
  --bg-dark: #0a0a0a;
  --bg-card: #111111;
  --border: #252525;
  --text-white: #ffffff;
  --text-muted: #afafaf;
  --grad: linear-gradient(90deg, #00C4FF 0%, #6A5CFF 50%, #FF00B4 100%);
  --grad-btn: linear-gradient(90deg, #00C4FF 0%, #FF00B4 100%);
  --accent-a: #00C4FF;
  --accent-b: #FF00B4;
  --font-head: 'PT Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  --nav-h: 88px;
  --radius: 15px;
}
```

To change the brand colors or typography site-wide, edit only this block.

---

## JavaScript Architecture

### `main.js` — Global Behaviors

Handles all interactive behaviors shared across every page:

| Feature | How it works |
|---|---|
| **Mobile nav toggle** | Adds/removes `.open` class on overlay and hamburger; locks body scroll when open |
| **Parallax** | `scroll` event listener moves `.page-hero__parallax` and `.hero__parallax` elements at 35% of scroll speed via `translateY` |
| **Scroll reveal** | `IntersectionObserver` watches cards and sections; fades them in with a staggered delay when they enter the viewport |
| **Sticky header** | Increases header background opacity from `0.78` to `0.95` after 20px of scroll |
| **Active nav link** | Reads `window.location.pathname`, matches it against nav `href` values and adds `.is-active` to the current page link |

### `i18n.js` — Multilingual System

A self-contained, zero-dependency translation engine supporting **English**, **Portuguese (BR)** and **Spanish**.

**How it works:**

1. HTML elements carry `data-i18n`, `data-i18n-html` or `data-i18n-ph` attributes with a translation key
2. On page load, `OLK_I18N.init()` reads the saved language from `localStorage` (defaults to `en`)
3. The engine queries all annotated elements and replaces their content with the matching translation
4. When the user clicks a language button, the engine re-runs the replacement and saves the new choice to `localStorage` — so the preference persists across all pages and sessions

**Attribute types:**

| Attribute | Used for | Method |
|---|---|---|
| `data-i18n="key"` | Plain text elements | Sets `textContent` |
| `data-i18n-html="key"` | Elements with inner HTML (gradient spans, `<strong>`) | Sets `innerHTML` |
| `data-i18n-ph="key"` | Form input placeholders | Sets `.placeholder` |
| `data-i18n-val="key"` | `<option>` elements in selects | Sets `textContent` |

The translation object `OLK_TRANSLATIONS` contains **300+ keys** across all 3 languages, covering every piece of visible text on the site — including nav links, hero titles, section bodies, form labels, placeholders, button text, stats and footer.

---

## How to Edit

### Change brand colors or fonts
→ Edit the `:root {}` block in `css/style.css`

### Edit page content
→ Open the relevant `.html` file and update the text inside elements with `data-i18n` attributes. Then update the matching key in all 3 language objects inside `js/i18n.js`.

### Add a new language
→ Duplicate one of the language objects in `js/i18n.js`, change the key (e.g. `fr`), translate all values, and add a new `<button class="lang-btn" data-lang="fr">FR</button>` to the switcher in each HTML file.

### Update contact details
→ Edit `contact.html`: change the `href="mailto:..."` on the email card and the `href="https://wa.me/..."` on the WhatsApp card.

### Replace the logo
→ Swap `img/olkbr-1-1.png` with the new file (keep the same filename, or update the `src` in every `<header>`).

### Add a new portfolio project
→ In `portfolio.html`, duplicate an `<article class="proj ...">` block, assign a new modifier class, set a new gradient in the inline `<style>`, update the text attributes and add the corresponding keys to `i18n.js`.

---

## Browser Support

The site uses standard modern CSS and JavaScript with no polyfills required. Supported in all evergreen browsers (Chrome, Firefox, Safari, Edge). `backdrop-filter` (header blur) has a graceful fallback on older browsers — the header remains opaque instead.

---

## Deployment

This is a fully static site — no server, no build step, no database. To deploy:

1. Upload the entire `OLK_Site/` folder to any static hosting provider (Netlify, Vercel, GitHub Pages, cPanel, etc.)
2. Set `index.html` as the entry point (this is the default on all platforms)
3. Done — no configuration needed