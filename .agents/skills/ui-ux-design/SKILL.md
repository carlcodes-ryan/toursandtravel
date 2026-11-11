---
name: ui-ux-design
description: Use when designing, building, reviewing or improving any user interface (web, mobile, PWA, dashboard, landing page, POS screen, form). Provides UX principles, visual polish rules, component conventions, accessibility requirements and a pre-ship checklist. Load before writing UI code and again when reviewing it.
---

# UI/UX Design Skill

A distilled, opinionated guide. Follow the rules, break them only with a reason you can state.
Sources distilled (in my own words): Laws of UX, Nielsen Norman Group heuristics, Refactoring UI, Material Design 3, Apple HIG, Radix/shadcn conventions, WCAG 2.2, web.dev accessibility.

---

## 0. Workflow (always follow this order)

1. **Clarify the user and the job.** Who uses this, on what device, in what conditions (bright sun, one hand, slow network, in a hurry)? What is the ONE primary task of this screen?
2. **Design features before layout.** List the content and actions first. Do not start with a navbar and sidebar by habit.
3. **Grayscale first.** Get hierarchy, spacing and layout right without colour, then add colour.
4. **Build the states, not just the happy path:** empty, loading, error, partial, success, offline, disabled.
5. **Review against Section 9 checklist** before presenting. If a screenshot/browser tool is available, look at the result and fix what you see.
6. **Iterate in small passes.** Do not redesign everything; fix the worst problem first.

---

## 1. UX Laws (psychology that predicts behaviour)

| Law | What it means | Apply it by |
|---|---|---|
| **Jakob's Law** | Users expect your product to work like the ones they already know. | Use familiar patterns (logo top-left links home, cart icon top-right, standard form layouts). Be novel only where it earns value. |
| **Hick's Law** | More choices means slower decisions. | Limit options, group them, highlight one recommended path, use progressive disclosure. |
| **Fitts's Law** | Big and close targets are easier to hit. | Large touch targets, primary actions within thumb reach, no tiny adjacent buttons. |
| **Miller's Law / chunking** | People handle small groups of items better than long streams. (Not a literal "7 items" rule.) | Chunk long data (phone numbers, M-Pesa codes, long forms) into groups and steps. |
| **Doherty Threshold** | Responses under ~400 ms feel instant; slower needs feedback. | Optimistic UI, skeletons, spinners with context, progress for long tasks. |
| **Aesthetic-Usability Effect** | Pretty interfaces feel easier to use and are forgiven more. | Invest in polish, but never at the cost of clarity. |
| **Peak-End Rule** | People remember the most intense moment and the ending. | Make success/confirmation screens and error recovery excellent. |
| **Von Restorff (Isolation)** | The odd one out is remembered. | Make ONE primary CTA visually distinct. If everything stands out, nothing does. |
| **Postel's Law** | Be liberal in what you accept, conservative in what you output. | Accept phone numbers as `0712...`, `+254712...`, or with spaces; normalise silently. |
| **Tesler's Law** | Complexity cannot be removed, only moved. | Absorb complexity in the system (defaults, auto-detect) rather than pushing it to the user. |
| **Zeigarnik Effect** | Unfinished tasks stay in mind. | Show progress, saved drafts, "2 of 4 steps done". |
| **Goal-Gradient** | Effort increases as the goal nears. | Progress bars, pre-filled first steps, visible completion. |
| **Serial Position** | First and last items are remembered best. | Put key items at the start/end of lists and nav bars. |
| **Occam / Parsimony** | Prefer the simplest solution that works. | Remove elements until removing more breaks the task. |
| **Cognitive Load** | Working memory is limited. | Reduce visual noise, avoid making users remember things across screens. |
| **Choice Overload** | Too many equal options cause paralysis. | Curate, default, and sort sensibly. |

### Gestalt grouping (layout logic)
- **Proximity:** things close together are read as related. Use spacing to group, before reaching for borders.
- **Common region:** a shared background or border groups items.
- **Similarity:** similar looking items are read as the same type or function.
- **Continuity / alignment:** aligned items read as ordered. Keep strong left edges.
- **Prägnanz:** people read the simplest interpretation. Avoid ambiguous layouts.

---

## 2. Usability Heuristics (Nielsen's 10, applied)

1. **Visibility of system status:** always show what is happening (loading, saved, sent, offline).
2. **Match the real world:** use the user's words, not database terms. Write for the actual audience.
3. **User control and freedom:** provide undo, cancel, back, and easy exits. Confirm only destructive actions.
4. **Consistency and standards:** same thing looks and behaves the same everywhere. Follow platform conventions.
5. **Error prevention:** constrain inputs, use sensible defaults, disable impossible actions (with an explanation), confirm irreversible ones.
6. **Recognition over recall:** show options instead of making users remember them. Keep labels visible.
7. **Flexibility and efficiency:** shortcuts, saved items, bulk actions and search for experts, without hurting novices.
8. **Aesthetic and minimalist design:** every extra element competes with the important ones.
9. **Help users recover from errors:** plain language, say what went wrong, say how to fix it, never blame the user.
10. **Help and documentation:** contextual hints, good empty states, searchable help as a last resort.

### Error message formula
`What happened` + `why (if useful)` + `what to do next`.
Bad: "Error 500". Good: "We couldn't save your order. Check your connection and try again. Your items are still in the cart."

---

## 3. Visual Design Rules (practical polish)

### Hierarchy
- Decide what matters most on each screen and make it clearly dominant. Hierarchy comes from **size, weight, colour/contrast and spacing**, used together.
- De-emphasise secondary content rather than only emphasising primary content (softer colour, lighter weight, smaller size).
- Do not rely on font size alone. Often bold or a colour change is enough.
- Labels are often unnecessary ("Price:" next to "KES 1,200"). Combine, or de-emphasise labels when needed.
- Primary / secondary / tertiary actions: solid / outlined or soft / text-link. Only one primary per view or section.

### Spacing and layout
- Use a **spacing scale**, not arbitrary values. Recommended (px): `4, 8, 12, 16, 24, 32, 48, 64, 96`. Use a 4 or 8 base.
- **Start with too much whitespace, then remove.** Cramped looks amateur; generous looks premium.
- Space inside a group is smaller than space between groups (proximity).
- Do not fill the whole screen. Constrain content width (readable text about 60 to 75 characters per line, around 640 to 720px).
- Align to a grid and to consistent left edges. Misalignment of 1 to 2 px is noticed subconsciously.
- Use a fixed set of container widths and breakpoints; design mobile first.

### Typography
- One typeface family is enough (two max). Use system or a well-made sans (Inter, Geist, DM Sans, Plus Jakarta Sans, etc.).
- Use a **type scale**, for example (px): `12, 14, 16, 18, 20, 24, 30, 36, 48, 60`. Body text 16px minimum on mobile.
- Line height: body ~1.5 to 1.6, headings tighter ~1.1 to 1.3. Larger text gets tighter line-height.
- Limit weights to 2 or 3 (regular, medium/semibold, bold). Avoid thin weights for small text.
- Headings: tighten letter-spacing slightly on large display text; uppercase small labels need extra letter-spacing.
- Left-align body text. Centre only short, one-line or two-line content. Right-align numbers in tables.
- Use tabular numerals for prices and figures in columns.

### Colour
- Build a palette systematically:
  - **1 primary** brand colour with 8 to 10 shades (50 to 900).
  - **Neutral/grey** scale with 9 to 10 shades. (Tint greys slightly warm or cool to match the brand rather than pure grey.)
  - **Semantic colours:** success (green), warning (amber), danger (red), info (blue), each with light + dark shades.
- Use the 60-30-10 idea: mostly neutral, some secondary, a little accent.
- Never use pure black (#000) on pure white for large text blocks. Use a very dark grey (e.g. `#111827`-ish) for body text.
- Do not use colour alone to convey meaning (add icon or text). This also helps colour-blind users.
- Dark mode: don't just invert. Use dark greys (not pure black) for surfaces, reduce saturation, and use lighter surfaces for higher elevation.
- Grey text on coloured backgrounds looks dull and often fails contrast. Pick a tinted shade of the background colour instead.

### Depth, borders, shape
- Use shadows to express elevation (small shadow for cards, larger for modals/popovers). Keep them soft and low-opacity; avoid heavy dark shadows.
- Separate elements with **spacing, background shade or subtle shadow** instead of heavy borders everywhere.
- Pick a corner-radius system and stay consistent (e.g. 6, 8, 12, 16, full for pills). Nested radii: inner radius = outer radius minus padding.
- Use one icon set, one stroke weight and size grid (16, 20, 24).
- Images: ensure text on images has a scrim or overlay; use consistent aspect ratios; avoid stretched images.

### Finishing touches (high-impact, low-effort)
- Better empty states (illustration or icon + explanation + one clear action).
- Meaningful hover, focus, active and pressed states on everything interactive.
- Smooth, short transitions (120 to 250 ms, ease-out for entering, ease-in for leaving). Motion should explain change, not decorate.
- Skeleton loaders that match the final layout.
- Subtle accent borders, gradients or tinted backgrounds for sections. Don't overdo gradients.
- Respect `prefers-reduced-motion`.

---

## 4. Component Conventions

General rule: **use the platform and design-system conventions first** (Material 3 for Android/web, Apple HIG for iOS, Radix/shadcn primitives for React web) and customise via tokens, not by rebuilding behaviour.

### Design tokens
Define once, use everywhere: colour roles (background, surface, surface-raised, border, text, text-muted, primary, primary-foreground, danger...), spacing, radius, shadow, type scale, z-index, motion durations. Prefer **semantic** names (`--color-text-muted`) over literal ones (`--grey-500`) in components.

### Buttons
- Clear verb labels ("Save changes", "Place order"), not "Submit" or "OK".
- Min height: 40px desktop, **44 to 48px touch**. Min touch target 44x44pt (iOS) / 48x48dp (Material).
- Show loading state inside the button, and prevent double-submit.
- Destructive actions use danger styling and live apart from primary actions.
- Icon-only buttons need an accessible name (`aria-label`) and a tooltip on desktop.

### Forms
- One column. Labels **above** inputs (always visible, never placeholder-only).
- Mark optional fields rather than required where most fields are required.
- Right input type and mode (`type="tel"`, `inputmode="numeric"`, `autocomplete` attributes) so mobile keyboards are correct.
- Validate on blur or submit, not on every keystroke; show errors inline, next to the field, with text and icon.
- Keep the submitted data on error. Never wipe the form.
- Break long forms into steps with progress. Ask only for what you need.
- Group related fields; use sensible defaults; auto-format (phone, currency).

### Navigation
- Mobile: bottom tab bar with 3 to 5 destinations (icon + label). Use a navigation drawer only for secondary destinations.
- Desktop: top nav or sidebar; highlight the current location.
- Tabs for peer views of the same content; not for steps in a process.
- Breadcrumbs for deep hierarchies. Always provide a way back.

### Lists, tables, cards
- Tables: left-align text, right-align numbers, sticky header, zebra or row hover, truncate with tooltip. On mobile convert to cards or key-value rows.
- Cards: one idea per card; whole card clickable only if it has a single action.
- Support search, sort and filter when lists exceed ~20 items. Use pagination or infinite scroll with a clear end state.

### Feedback components
- **Toast/snackbar:** transient, non-critical confirmations (with Undo when useful). Don't use for errors needing action.
- **Inline alert/banner:** persistent messages tied to a context.
- **Modal/dialog:** only when you must interrupt (destructive confirm, focused short task). Trap focus, close on Esc, return focus on close. Prefer a bottom sheet on mobile.
- **Tooltip:** supplementary only, never essential info (not available on touch).

### Data display
- Charts: label directly, start bars at zero, limit colours, provide a table or summary alternative.
- Numbers: use locale formatting (e.g. `KES 12,500`), consistent decimals, units always shown.
- Dates: relative for recent ("2 hours ago"), absolute for old; consider the user's locale and time zone (EAT, 24h vs 12h).

### Platform notes
- **Material 3:** colour roles and tonal surfaces, 48dp targets, state layers for hover/pressed, FAB for the single primary action, 8dp spacing rhythm.
- **Apple HIG:** clarity, deference, depth; 44pt targets; respect safe areas; large titles; native-feeling swipe-back; support Dynamic Type.
- **Radix/shadcn:** accessible unstyled primitives (Dialog, Popover, Dropdown, Tabs, Select, Tooltip) + Tailwind and CSS-variable theming. Compose these rather than hand-rolling focus management and ARIA.

---

## 5. Mobile, Responsive and Performance

- Design **mobile first**, then enhance for larger screens.
- Primary actions within thumb reach (bottom of the screen). Avoid placing key controls at the top corners.
- Minimum 16px input font size (prevents iOS zoom-on-focus).
- Handle slow networks and offline gracefully: cached data, retry, queued actions, clear sync status (very important in markets with patchy connectivity).
- Keep bundles light; lazy-load images and below-the-fold content; set image width/height to avoid layout shift.
- Perceived performance: skeletons, optimistic updates, instant feedback on tap.
- Test at 360px width, with large system font, in bright light (contrast!), one-handed.

---

## 6. Accessibility (non-negotiable baseline: WCAG 2.2 AA)

### Perceivable
- **Contrast:** body text >= **4.5:1**; large text (>= 24px, or >= 18.66px bold) >= **3:1**; UI components, icons and focus indicators >= **3:1** against adjacent colours.
- Do not rely on colour alone; add text, icons or patterns.
- Text alternatives: meaningful `alt` for informative images, `alt=""` for decorative, labels for icon buttons.
- Support zoom to 200% and text resize without loss of content; avoid fixed-height text containers. Support reflow at 320px width.
- Captions/transcripts for audio and video.

### Operable
- Everything reachable and usable by **keyboard**, in a logical tab order, with a **visible focus indicator** (never `outline: none` without a replacement).
- Target size: at least 24x24 CSS px (WCAG 2.2 minimum); aim for 44x44 on touch.
- No keyboard traps; modals trap focus intentionally and release on close.
- Provide skip links on content-heavy pages.
- Avoid time limits or let users extend them. Avoid flashing content.
- Offer alternatives to drag-only and gesture-only interactions (WCAG 2.2 dragging movements).
- Don't force users to re-enter information already provided in the same flow.

### Understandable
- Declare page language (`<html lang="en">`); mark language changes.
- Consistent navigation and labelling across pages.
- Clear, specific error messages; identify the field in error; suggest corrections.
- Use plain language and short sentences.

### Robust
- **Semantic HTML first** (`button`, `a`, `nav`, `main`, `label`, `ul`, headings in order, `table` with `th`). Use ARIA only to fill gaps; no ARIA is better than bad ARIA.
- Every form control has a programmatically associated label.
- Announce dynamic changes with `aria-live` (polite for status, assertive for urgent errors).
- Use `aria-expanded`, `aria-current`, `aria-invalid`, `aria-describedby` correctly.
- Respect `prefers-reduced-motion`, `prefers-color-scheme`, and `prefers-contrast`.
- Use `<button>` for actions and `<a>` for navigation. Never a clickable `<div>`.

---

## 7. Patterns Library (use as starting points)

Study real-world patterns (Mobbin, Dribbble, Land-book, and similar inspiration sources) for structure and flow, **never copy a design pixel-for-pixel**, and respect each site's terms and the owners' copyrights. Extract the *pattern* (what information, in what order, with what emphasis), then re-express it in your own system.

Common patterns to recall:
- **Onboarding:** 2 to 4 value-focused screens max, skippable; or better, progressive in-context hints; ask for permissions at the moment they're needed with a reason.
- **Auth:** social/phone/OTP options, show password toggle, clear error recovery, "remember me", no CAPTCHA unless necessary.
- **Dashboard:** key metric cards on top (with trend and period), one main chart, then detail tables. Allow date range filters. Highlight what needs action.
- **Checkout / payment (incl. mobile money):** minimal fields, summary always visible, clear total including fees, explicit status steps after payment initiation ("Check your phone for the prompt"), retry and fallback paths, receipt screen.
- **POS / high-frequency tools:** big touch targets, speed over decoration, keyboard and barcode friendly, persistent totals, undo, offline tolerant, minimal confirmations for common actions and strong ones for destructive actions.
- **Search and filter:** persistent search bar, recent searches, filter chips with visible active state, clear all, result count, helpful no-results state.
- **Empty state:** what this is + why it's empty + one action to fix it.
- **Landing page:** hero with clear value proposition and one CTA, social proof, benefits (not just features), how it works, pricing/FAQ, repeated CTA. One idea per section.
- **Settings/profile:** grouped sections, instant-save toggles with feedback, destructive actions separated and confirmed.

---

## 8. Writing for UI (microcopy)

- Be clear before clever. Short, concrete, active voice.
- Buttons = verb + object. Titles = what the screen is. Helper text = what to enter / why we ask.
- Consistent terminology (don't alternate "remove / delete / discard" for one action).
- Tone: friendly, respectful, human; calm in errors; no jargon or blame.
- Avoid ALL CAPS for sentences, exclamation overload and vague text like "Something went wrong".
- Localise: currency, date, number formats, and consider Swahili or Sheng-friendly alternatives where the audience expects them.

---

## 9. Pre-Ship Review Checklist

**Purpose and hierarchy**
- [ ] The screen's primary task is obvious within 3 seconds.
- [ ] Exactly one primary action per view or section.
- [ ] Hierarchy works in grayscale (squint test).

**Layout and visuals**
- [ ] Spacing uses the scale; groups are clear; consistent alignment.
- [ ] Type scale, weights and line heights are consistent; body text >= 16px mobile.
- [ ] Colours come from the palette/tokens; no unexplained one-off colours.
- [ ] Radius, shadow and icon styles are consistent.

**States and feedback**
- [ ] Loading, empty, error, success and offline states exist.
- [ ] Hover, focus, active and disabled states exist.
- [ ] Every action gives immediate feedback; long operations show progress.
- [ ] Destructive actions are confirmed or undoable.

**Forms and content**
- [ ] Visible labels, correct input types, inline errors, data preserved on error.
- [ ] Microcopy is specific, consistent and blame-free.

**Responsive**
- [ ] Works at 360px and at desktop widths; no horizontal scroll.
- [ ] Touch targets >= 44px; key actions within thumb reach.

**Accessibility**
- [ ] Contrast passes (4.5:1 text, 3:1 UI).
- [ ] Fully keyboard operable with visible focus.
- [ ] Semantic HTML, labelled controls, alt text, correct ARIA, `lang` set.
- [ ] Not reliant on colour alone; reduced-motion respected.

**Performance**
- [ ] No layout shift; images sized; fast first interaction; sensible behaviour on slow networks.

---

## 10. Output Rules for the Model

When asked to produce UI:
1. State assumptions (user, device, goal) in one or two lines. Ask only if a wrong guess would be costly.
2. Define tokens (colours, type, spacing, radius, shadow) at the top, then build components with them.
3. Produce semantic, accessible markup and working states, not just a static mock.
4. Avoid generic "AI look": default purple gradients, identical card grids, emoji as icons, centred-everything layouts, lorem ipsum, placeholder-only labels. Use realistic content (real product names, KES amounts, plausible Kenyan names and places when relevant).
5. Pick a deliberate aesthetic direction (e.g. warm and earthy, crisp and utilitarian, playful) and apply it consistently across type, colour, shape and motion.
6. After generating, run Section 9 and fix failures before presenting. Report only the notable trade-offs.

When asked to review UI:
- List problems in order of severity (blocks task, causes errors, hurts clarity, polish).
- For each: what, why it matters (cite the principle), and a concrete fix.
- Praise only what is genuinely working, briefly.

---

## 11. Quick-Reference Numbers

| Thing | Value |
|---|---|
| Touch target | 44x44pt (iOS), 48x48dp (Material), WCAG 2.2 min 24x24px |
| Body text size | 16px+ (mobile), line-height 1.5 to 1.6 |
| Line length | 60 to 75 characters |
| Text contrast | 4.5:1 (3:1 for large text) |
| UI component / focus contrast | 3:1 |
| Spacing scale | 4, 8, 12, 16, 24, 32, 48, 64, 96 |
| Type scale | 12, 14, 16, 18, 20, 24, 30, 36, 48, 60 |
| Instant-feel response | <= 100 ms; acceptable <= 400 ms; show feedback beyond |
| Transition duration | 120 to 250 ms (up to ~400 ms for large movement) |
| Tab bar items (mobile) | 3 to 5 |
| Radius examples | 6, 8, 12, 16, full |

---

## 12. Extending This Skill

Keep this file short and rules-based. Put long material in sibling files and reference them:
- `design-tokens.md`: your brand colours, fonts, spacing, radii.
- `components.md`: your component specs and code snippets.
- `references/`: screenshots of good and bad examples with notes on why.
- `anti-patterns.md`: mistakes you keep seeing and the fixes.
