# Fiore Color Palette - Quick Reference

> **⚠️ IMPORTANT**: This is a quick reference only. For the complete official specification, see `.github/fiore-color-palette.md`

## Quick Color Reference

### Background
- Deep Space Black: `#0a0a0f`

### Petals (Dark → Light)
- Base: `#1a2b5c`
- Mid: `#2d4a8f`
- Highlight: `#4d6bb3`

### Center Glow (Bright → Fade)
- Core: `#e8f4ff` / `#ffffff`
- Inner: `#6b9fff`
- Mid: `#4d7fcf`
- Outer: `#2d4a8f` (with opacity)

### Text
- Primary: `#c5d9ff`
- Secondary: `#6b9fff`
- Tertiary: `#8ba8d9`

### Stroke
- Base: `#1a2b5c`
- Highlight: `#4d6bb3`

---

## Usage in Code

### Tailwind Classes
```jsx
// Background
<div className="bg-space-black">

// Petals
<div className="bg-petal-base">
<div className="bg-petal-mid">
<div className="bg-petal-highlight">

// Glow
<div className="bg-glow-core">
<div className="bg-glow-inner">

// Text
<p className="text-text-primary">
<p className="text-text-secondary">
```

### CSS Variables
```css
background-color: var(--color-background);
color: var(--color-text-primary);
fill: var(--color-petal-mid);
stroke: var(--color-stroke);
```

---

## Rules
- ✓ Use exact hex values from the palette
- ✓ Reference `.github/fiore-color-palette.md` for full documentation
- ✗ Don't create custom blue shades
- ✗ Don't modify hex values

---

**For complete implementation guidelines, gradient definitions, accessibility notes, and design principles, see:**
📄 `.github/fiore-color-palette.md`
