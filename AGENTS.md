# Workspace Instructions & UI/UX Standards

This project follows the **ui-ux-design** skill standards defined in `.agents/skills/ui-ux-design/SKILL.md`.

## Core UI/UX Guidelines for this project:
- **Design Tokens First:** Use standard CSS custom properties for colors, typography, spacing, and elevation.
- **Accessibility Baseline:** WCAG 2.2 AA compliant (>= 4.5:1 text contrast, >= 3:1 UI component contrast, visible keyboard `:focus-visible` rings).
- **Touch Target Size:** Min 44x44px for touchable targets on mobile.
- **Mobile First & Typography:** Min 16px font-size for input elements to prevent iOS auto-zoom, line-height 1.5 to 1.6 for body.
- **Form Best Practices:** Always visible labels above inputs, accessible validation, preserve form state on errors, phone/number input types and modes.
- **Performance:** Zero layout shifts (explicit image dimensions / aspect ratios), lazy-loading for below-the-fold media, respectful of `prefers-reduced-motion`.
- **Microcopy & Localisation:** Clear, human, active voice, realistic Kenyan contact and currency details (KES, Nairobi, Kenya).
