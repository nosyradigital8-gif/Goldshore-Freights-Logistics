# Goldshore Freights & Logistics Homepage Plan

## Design

- **Design movement:** Maritime editorial corporate — 0.06 probability.
- **Alternative:** Portside modernism — 0.04 probability.
- **Alternative:** Quiet luxury logistics — 0.07 probability.

**Chosen direction:** Maritime editorial corporate. The page combines deep navy fields, ocean-blue accents, restrained gold rules, strong condensed headings, and immersive operational photography.

**Core principles:** Confidence before complexity; clear freight vocabulary; premium visual rhythm; transparent claims.

**Color philosophy:** Navy signals institutional trust, blue brings the ocean and movement into the interface, and gold adds a precise premium accent without feeling ornamental.

**Layout paradigm:** A cinematic hero gives way to offset split sections and an editorial services rail rather than a generic centered template.

**Signature elements:** Gold route-line rules, circular index markers, and image crops that feel like windows onto a working port.

**Interaction philosophy:** Navigation and enquiry actions should feel immediate and calm, with clear anchors and a WhatsApp path for fast contact.

**Animation:** Use restrained reveal and hover transitions only; no looping motion that competes with the operational photography.

**Typography system:** Geist Sans for interface copy with a high-contrast serif display face for the headline and key section labels.

**Brand essence:** A Ghana-based cargo and freight partner helping businesses coordinate shipping and logistics needs with professional support. Personality: assured, precise, connected.

**Brand voice:** Direct, operational, and human. Example lines: “Move with clarity.” and “Tell us what needs to move.”

**Wordmark & logo:** A temporary text wordmark paired with a small gold horizon/route glyph, designed to be replaceable when official brand assets arrive.

**Signature brand color:** Gold `#D6A64F` as the ownable route-marker accent.

## Implementation

Build a Next.js 15 App Router homepage in TypeScript with Tailwind CSS v4 and Lucide React. Keep the main interaction in reusable components inside `app/page.tsx`, use `app/globals.css` for the visual system, and store local photography in `public/images/`. Use HTML anchor navigation, responsive menu state, tel/WhatsApp links, and a client-side enquiry form that opens WhatsApp with the entered details. Keep claims limited to the supplied brief; no routes, addresses, certifications, guarantees, or prices are added.

## Project structure

- `app/layout.tsx`: metadata and document shell.
- `app/page.tsx`: homepage sections, responsive nav, service cards, operations gallery, and enquiry behavior.
- `app/globals.css`: palette, typography, layout, motion, and responsive rules.
- `public/images/`: local maritime photography.
- `public/manus-routes.json`: declared page routes.
- `ASSET_SOURCES.md`: source record for external photography.
