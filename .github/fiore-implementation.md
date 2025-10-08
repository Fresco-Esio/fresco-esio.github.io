Absolutely — here’s the complete, copy-ready version of **`.github/fiore-implementation.md`**.
Just paste this in as-is.

---

````md
# Fiore Interface — Implementation Notes

These technical rules translate the Fiore design philosophy into concrete code behavior.  
All UI elements, animations, and color systems must adhere to this foundation.

---

## Visual Tokens

```ts
// tokens/fiore.ts
export const Fiore = {
  color: {
    base: "#0a1020",          // midnight
    ring: "rgba(88, 152, 255, 0.10)", // orbit ring
    glow: "rgba(120, 180, 255, 0.35)",
    accent: "#7aa7ff",        // labels
    text: "rgba(220,230,255,0.92)",
    textMuted: "rgba(200,210,235,0.65)",
  },
  radius: { xl: 24, lg: 16, md: 12 },
  blur: { glow: 22 },
  spacing: { unit: 8 },
  shadow: { soft: "0 0 40px rgba(120,180,255,0.08)" },
  timing: {
    in: "cubic-bezier(0.22,1,0.36,1)",
    out: "cubic-bezier(0.22,1,0.36,1)",
    enterMs: 220,
    exitMs: 170,
  },
  font: {
    family: "Inter Tight, ui-sans-serif, system-ui",
    weight: { normal: 400, heading: 300 },
  },
}
````

---

## Motion Rules

**Petal Unfold:**

* Scale: `0.92 → 1.0`
* Opacity: `0 → 1`
* Rotation: `±3°`
* Duration: `220 ms`
* Easing: `Fiore.timing.in`

**Petal Collapse:**

* Reverse animation
* Duration: `~15% faster` than unfold
* Easing: `Fiore.timing.out`

**Hover Ring:**

* Animate stroke-dashoffset over `240 ms`
* Max opacity: `0.35`
* Uses accent glow color

**Reduced-Motion Mode:**

* Skip rotation and blur
* Retain opacity and scale only
* Triggered automatically if `prefers-reduced-motion` is true

---

## Interaction Logic

* **Open Domain:** Click/tap petal → radial zoom into domain; breadcrumb orbit remains visible.
* **Return to Center:** Press `Escape` or click bloom core → smooth zoom-out with central pulse.
* **Context Menus:** Radial fan (3–5 options max). No nested trees.
* **Micro-feedback:**

  * On press → scale to `0.98`
  * On release → expand to `1.02` with glow delta ≤ 12 %

---

## Component Map

```
/src/components/fiore/
  Bloom.tsx            // renders 8 responsive petals + core
  Petal.tsx            // shape, gradient, hover/active states
  OrbitRing.tsx        // faint circular guide + tick marks
  Label.tsx            // domain labels (ART, MUSIC, …)
  SceneTransition.tsx  // shared enter/exit animations
  Accessibility.tsx    // reduced-motion + focus outlines
```

---

## Accessibility & Performance Standards

* **Keyboard Navigation:**

  * `Tab` cycles petals clockwise
  * `Enter` opens domain
  * `Esc` closes or returns to center
* **Screen Reader Labels:**

  * `aria-label="<Domain> – Enter"` on each petal
* **Performance:**

  * Maintain ≥ 55 FPS on mid-range laptops
  * Animation frame jitter ≤ 5 ms variance
* **Contrast:**

  * Text contrast ratio ≥ 4.5 : 1 (WCAG AA)
  * Glow effects never obscure text
* **Motion Sensitivity:**

  * Honor `prefers-reduced-motion` system setting
  * Provide fade/scale only variants

---

## Acceptance Checklist

A feature or component is considered “done” when:

1. It uses Fiore tokens; no hard-coded hex values.
2. Animation timing and easing follow Motion Rules.
3. `prefers-reduced-motion` variant works correctly.
4. All interactive elements are keyboard and screen-reader accessible.
5. Visuals achieve ≥ 55 FPS on mid-range hardware.
6. Text contrast meets WCAG AA.

---

## Notes for AI Assistants

When generating or editing code:

* Always import and reference `Fiore` tokens for colors, timing, and fonts.
* Default to radial, center-out layouts.
* Favor smooth, organic motion over abrupt transitions.
* Avoid gamified effects or excessive brightness.
* Maintain the calm, tactile atmosphere described in the Fiore philosophy.

