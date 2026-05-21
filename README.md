# OLK Web & SEO — Public Portfolio Website

A public, portfolio-ready version of the OLK Web & SEO website, built with static HTML, CSS and JavaScript. The project presents a modern digital studio experience with multilingual content, animated sections, page transitions, particles, reusable components and anonymized portfolio case studies.

## Overview

This project was developed as a professional front-end portfolio piece. It showcases a complete static website structure for a web design and SEO studio, including institutional pages, services, portfolio projects, digital products and a contact page.

The public version keeps the OLK identity while removing sensitive client media, videos and private form endpoints. Real project visuals were replaced with abstract tech-style overlays so the code, layout and experience can be shared publicly in a portfolio repository.

## Main Features

- Static multi-page website built with HTML, CSS and JavaScript
- Reusable components for header, footer and floating WhatsApp button
- Multilingual structure with separate language files for English, Portuguese and Spanish
- Animated hero sections and particle backgrounds
- Custom page transition effect with cascading panels
- Custom tech-style cursor for desktop users
- Portfolio case pages with anonymized project names and visual overlays
- Product page prepared for external purchase links
- Demo contact form structure without private Formspree endpoint
- Responsive layout for desktop, tablet and mobile
- Organized file structure for public repository presentation

## Tech Stack

- HTML5
- CSS3
- JavaScript
- tsParticles
- Vercel-ready static deployment structure

## Project Structure

```txt
/
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── products.html
├── contact.html
├── photography-portfolio.html
├── premium-drinks-portfolio.html
├── newsletter-landing-page.html
├── premium-automotive-portfolio.html
│
├── components/
│   ├── header.html
│   ├── footer.html
│   └── whatsapp.html
│
├── css/
│   ├── style.css
│   ├── index.css
│   ├── about.css
│   ├── services.css
│   ├── portfolio.css
│   ├── portfolio-project.css
│   ├── products.css
│   ├── contact.css
│   └── hero-animation.css
│
├── js/
│   ├── include.js
│   ├── main.js
│   ├── i18n.js
│   ├── lang-en.js
│   ├── lang-pt.js
│   ├── lang-es.js
│   ├── page-transition.js
│   ├── cursor.js
│   ├── preloader.js
│   ├── contact-form.js
│   └── particles-related scripts
│
├── img/
├── videos/
└── docs/
```

## Pages

| Page | Description |
|---|---|
| `index.html` | Homepage with hero, services preview, portfolio preview, about preview and CTAs |
| `services.html` | Overview of web design, SEO, Google Business Profile and e-commerce services |
| `portfolio.html` | Main portfolio index with anonymized project cards |
| `products.html` | Digital products page prepared for external purchase links |
| `about.html` | Studio/about page with performance-focused positioning |
| `contact.html` | Demo contact form and contact cards |
| `photography-portfolio.html` | Anonymized photography portfolio case study |
| `premium-drinks-portfolio.html` | Anonymized premium drinks landing page case study |
| `newsletter-landing-page.html` | Anonymized newsletter landing page case study |
| `premium-automotive-portfolio.html` | Anonymized premium automotive landing page case study |

## Multilingual System

The project uses a split translation structure:

```txt
js/lang-en.js
js/lang-pt.js
js/lang-es.js
js/i18n.js
```

The language engine reads the selected language from `localStorage` and applies translations to elements using:

```html
data-i18n="key.name"
data-i18n-html="key.name"
data-i18n-ph="key.name"
```

## Reusable Components

The project loads shared components using `js/include.js`:

```txt
components/header.html
components/footer.html
components/whatsapp.html
```

This avoids duplicating the header, footer and WhatsApp button across all pages.

## Local Usage

Because the project uses `fetch()` to load HTML components, it should be opened through a local server instead of directly opening the HTML file in the browser.

Using VS Code, install the Live Server extension and run the project from `index.html`.

Alternatively, use a simple local server:

```bash
npx serve .
```

or:

```bash
python -m http.server 8000
```

Then open:

```txt
http://localhost:8000
```

## Deployment

This project can be deployed as a static website. It does not require a backend build process.

Recommended deployment flow:

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the framework preset as static/other if asked.
4. Leave build command empty if Vercel detects it as a static project.
5. Deploy from the project root.

## Public Portfolio Notes

This version was prepared specifically for public portfolio usage:

- Private client media was removed.
- Videos were removed.
- Sensitive form endpoints were removed.
- Project visuals were replaced with abstract overlays.
- Portfolio cases were anonymized while preserving the layout and copy structure.
- OLK branding and professional/social links were kept intentionally.

## Customization

Before publishing, update these items if needed:

- External product purchase links in `products.html`
- WhatsApp number in `components/whatsapp.html`
- Social links in `components/header.html` and `components/footer.html`
- Contact form behavior in `js/contact-form.js`
- Domain settings in the deployment platform

## Author

Lucas Eduardo Abrantes Kirsten  
Digital Marketing & Web Specialist  
OLK Web & SEO

- GitHub: `https://github.com/olucaskirsten`
- Behance: `https://www.behance.net/olucaskirsten`
- LinkedIn: `https://www.linkedin.com/in/olucaskirsten`

## License

This project is intended for portfolio and presentation purposes. Reuse of the visual identity, branding and original structure should be authorized by the author.
