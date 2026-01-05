# Ad Landing Pages Structure

## Purpose

Separate landing pages for different ad campaigns. Each page should have **all information on one page** - no linking out to other pages. These are conversion-focused pages for specific audiences.

## Current Structure

### Main Landing Page (`index.html`)
- **Purpose**: Short, sweet, answers "Why should I click Join a Run Crew?"
- **Content**: Hero with logo, pain validation, single CTA
- **Links to**: How It Works, Benefits (separate pages)

### Supporting Pages
- `how-it-works.html` - Detailed explanation of the process
- `benefits.html` - Benefits of running in groups
- `about.html` - About GoFast
- `privacy-policy.html` - Privacy Policy

---

## Ad Landing Page Template Structure

Each ad landing page should be **self-contained** with all information on one page:

### Example: Ad Copy 1 - "Looking for Training"
**File**: `ad-training.html` (or similar)

**Structure:**
1. **Hero** - Pain point specific to training seekers
2. **Problem** - Why training alone doesn't work
3. **Solution** - How RunCrews solve training problems
4. **How It Works** - Complete explanation (no link out)
5. **Benefits** - All benefits listed (no link out)
6. **Social Proof** - Testimonials/quotes
7. **CTA** - Join a Run Crew button
8. **FAQ** - Common questions
9. **Footer** - Privacy, About links

### Example: Ad Copy 2 - "Looking for [X]"
**File**: `ad-[audience].html`

Same structure, but content tailored to that specific audience's pain points and needs.

---

## Key Principles

1. **One Page = Complete Story** - Don't make users click through multiple pages
2. **Audience-Specific** - Tailor messaging to the ad audience
3. **Conversion-Focused** - Every element should drive toward the CTA
4. **Self-Contained** - All information needed to convert should be on that page
5. **No Navigation Away** - Keep users on the page until they convert

---

## Implementation Notes

- Create new HTML files for each ad campaign
- Use similar styling to main site for consistency
- Include all sections on one page (scrollable)
- Add to `vite.config.js` build config when created
- Track conversions separately per landing page

