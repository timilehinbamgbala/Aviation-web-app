# Wind — Aviation Website

A scroll-driven single-page aviation landing site built with React. Converts a multi-frame Figma design into a fully interactive web experience with parallax scroll effects, hover-triggered image reveals, and animated transitions.

## Live Sections

1. **Hero** — Sticky scroll section with a scaling plane animation and fading title text as the user scrolls.
2. **Brand Statement** — Full-bleed constructor plane image with editorial headline copy.
3. **Flexible Services** — Split layout with a hover-to-reveal image panel (orange overlay slides away on hover).
4. **Popular Destinations** — Interactive city tabs (Barcelona, Ibiza, Cannes, Paris) that swap the featured image on click.
5. **Flight Manager** — Two-column feature section with image and descriptive copy.
6. **Book a Flight** — Closing CTA section with a hover-triggered crossfade animation (short plane icon transitions into a full flight-path graphic).

## Tech Stack

- React (functional components, hooks)
- Plain CSS (no framework/library dependencies)
- Scroll-based animation driven by `window.scrollY` and `useEffect`

## Key Interactions

- **Smooth scroll** — `scroll-behavior: smooth` applied globally, with custom `scrollUp` / `scrollDown` handlers wired to all navigation arrows across sections.
- **Parallax hero** — Plane image scales and hero text fades out proportionally to scroll position, calculated from `scrollY` against viewport height.
- **Hover reveals** — Section 3 uses a sliding overlay to reveal a hidden image on hover. Section 6 uses an opacity crossfade between two plane graphics.
- **Dynamic destination switching** — Section 4 renders images from a `destinations` object keyed by city name, updated via `useState`.

## Project Structure
