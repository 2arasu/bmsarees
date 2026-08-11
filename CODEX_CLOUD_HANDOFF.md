# Codex Cloud Handoff: Balamurugan Sarees Website

## Project Overview

This project is **Balamurugan Sarees - Welcome Website (Version 1)**.

It is a modern, responsive, static landing page for **Balamurugan Sarees**, a traditional saree showroom in Paranur, Tamil Nadu.

The site is meant to establish the brand, present showroom information, and help customers contact or visit the store.

This is **not** an e-commerce website.

## Current Status

Version 1 has already been created locally with:

- `index.html`
- `css/style.css`
- `css/responsive.css`
- `js/main.js`
- Placeholder image assets in `assets/images/`
- Empty/support folders for `assets/icons/` and `assets/fonts/`

The page includes:

- Sticky responsive header
- Mobile hamburger navigation
- Hero section
- Why Choose Us cards
- Collections section
- Featured Cotton Collection banner
- About section
- Store information
- Google Maps placeholder
- Customer reviews
- Footer
- Smooth scrolling
- Subtle fade-in-on-scroll animation
- Lazy-loaded images
- Data-driven reusable cards in JavaScript

## Tech Constraints

Continue using only:

- HTML5
- CSS3
- JavaScript ES6
- jQuery

Do not add:

- Bootstrap
- React
- Vue
- Angular
- Node.js backend
- Database
- Build tools
- Login
- Registration
- Shopping cart
- Checkout
- Payment gateway
- Admin panel
- Inventory APIs
- Backend APIs

Keep this as a clean static website.

## Brand Details

Business name:

**Balamurugan Sarees**

Tagline:

**Tradition Woven with Style**

Theme:

- Elegant
- Premium
- Traditional South Indian
- Clean
- Modern
- Mobile friendly

Colors:

- Maroon: `#6A1026`
- Cream: `#F9F4EC`
- Gold: `#C89B3C`
- Dark Brown: `#3A241A`
- White: `#FFFFFF`
- Accent Green: `#0F6A61`

## Business Information

Address:

**Pillayar Koyil Street**  
**Paranur - 603002**  
**Chengalpattu**

Phone:

**8248851403**

Website:

**www.bmsarees.com**

## Existing Folder Structure

```text
project/
  index.html
  css/
    style.css
    responsive.css
  js/
    main.js
  assets/
    images/
    icons/
    fonts/
```

## Coding Style to Preserve

Use reusable UI sections and classes.

The CSS follows a BEM-like naming style, for example:

- `site-header`
- `site-header__inner`
- `site-nav__link`
- `hero__content`
- `collection-card`
- `collection-card__body`
- `review-card`

Keep CSS scalable and easy to migrate later into React or Next.js components.

Avoid inline styles and inline JavaScript.

Keep content arrays in `js/main.js` when practical, especially for repeatable sections like:

- Features
- Collections
- Reviews

## Important Design Direction

The website should feel like a **premium textile showroom website**, not a generic online store.

Prefer:

- Spacious but practical layouts
- Warm traditional colors
- Clean typography
- Premium product imagery
- Subtle hover states
- Light animations
- Clear contact and visit-store CTAs

Avoid:

- Cart/product grid e-commerce behavior
- Heavy animations
- Generic stock-like design
- Admin/dashboard features for this version
- Overly playful styling
- Bootstrap-style components

## Suggested Next Tasks for Codex Cloud

Good next improvements:

1. Replace placeholder SVG images with real showroom/product images when available.
2. Improve SEO metadata and social sharing tags.
3. Add a favicon and real logo once available.
4. Add a real embedded Google Maps link or iframe.
5. Improve accessibility labels and keyboard focus polish.
6. Add a simple `README.md` for local preview instructions.
7. Test the design at desktop, tablet, and mobile widths.
8. Optimize final images before deployment.
9. Prepare the site for hosting on GitHub Pages, Netlify, Vercel, or any static hosting provider.

## First Instruction to Give Codex Cloud

Use this prompt after importing the repo:

```text
Continue from the existing static Balamurugan Sarees landing page. First inspect the current files and preserve the no-framework static architecture. Improve the site polish, responsiveness, accessibility, and production readiness without adding e-commerce, backend, login, cart, admin, database, build tools, Bootstrap, React, Vue, or Angular. Keep the BEM-like CSS naming and reusable component structure so the project can later migrate to React/Next.js.
```

## Deployment Note

This project should work by opening `index.html` directly in a browser.

If deploying to GitHub Pages or another static host, no build command is required.
