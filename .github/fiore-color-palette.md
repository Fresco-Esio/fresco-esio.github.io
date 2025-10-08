# Fiore Interface - Official Color Palette

**Version**: 1.0.0  
**Last Updated**: October 7, 2025  
**Status**: Official Design Standard

## Overview

This document defines the official color palette for the Fiore Interface. All developers, designers, and AI agents working on this project must use these exact color values to maintain visual consistency.

---

## Core Color System

### Background Colors

#### Primary Background
- **Deep Space Black**: `#000000` to `#0a0a0f`
  - **Usage**: Primary page background, creates midnight atmosphere
  - **CSS Variable**: `--color-background`
  - **Tailwind**: `bg-space-black`

---

## Flower Petal Colors

The petals use a three-stage gradient system from dark (outer) to light (inner):

### Petal Base (Outer Edge)
- **Deep Navy Blue**: `#1a2b5c`
  - **Usage**: Outer petal boundaries, darkest petal areas, petal shadows
  - **CSS Variable**: `--color-petal-base`
  - **Tailwind**: `bg-petal-base`
  - **RGB**: `rgb(26, 43, 92)`
  - **HSL**: `hsl(225, 56%, 23%)`

### Petal Mid-tone
- **Royal Blue**: `#2d4a8f`
  - **Usage**: Middle sections of petals, transition zones, secondary accents
  - **CSS Variable**: `--color-petal-mid`
  - **Tailwind**: `bg-petal-mid`
  - **RGB**: `rgb(45, 74, 143)`
  - **HSL**: `hsl(222, 52%, 37%)`

### Petal Highlight (Inner Edge)
- **Bright Cobalt**: `#4d6bb3`
  - **Usage**: Inner petal edges near center, lighter accents, hover states
  - **CSS Variable**: `--color-petal-highlight`
  - **Tailwind**: `bg-petal-highlight`
  - **RGB**: `rgb(77, 107, 179)`
  - **HSL**: `hsl(222, 40%, 50%)`

---

## Center Glow System

The radiant center uses luminous blues with decreasing opacity:

### Core White-Blue (Brightest)
- **Pure White to Ice Blue**: `#ffffff` → `#e8f4ff`
  - **Usage**: Central star point, brightest glow, maximum luminosity
  - **CSS Variable**: `--color-glow-core`
  - **Tailwind**: `bg-glow-core`
  - **RGB**: `rgb(232, 244, 255)`
  - **HSL**: `hsl(207, 100%, 95%)`

### Inner Glow
- **Bright Sky Blue**: `#6b9fff`
  - **Usage**: Immediate radiance from center, inner glow ring
  - **CSS Variable**: `--color-glow-inner`
  - **Tailwind**: `bg-glow-inner`
  - **RGB**: `rgb(107, 159, 255)`
  - **HSL**: `hsl(219, 100%, 71%)`

### Mid Glow
- **Medium Blue**: `#4d7fcf`
  - **Usage**: Transitional glow spreading outward, mid-range radiance
  - **CSS Variable**: `--color-glow-mid`
  - **Tailwind**: `bg-glow-mid`
  - **RGB**: `rgb(77, 127, 207)`
  - **HSL**: `hsl(217, 58%, 56%)`

### Outer Glow Falloff
- **Royal Blue with Fade**: `#2d4a8f` (opacity: 0.8 → 0.0)
  - **Usage**: Blending glow into petal bases, soft edges
  - **CSS Variable**: `--color-glow-outer`
  - **Tailwind**: `bg-glow-outer`
  - **Note**: Use with opacity modifiers

---

## Text & Label Colors

### Primary Text (Headers)
- **Light Periwinkle Blue**: `#c5d9ff`
  - **Usage**: Main headings ("FIORE INTERFACE", "OBIOESIO BASSEY"), primary content
  - **CSS Variable**: `--color-text-primary`
  - **Tailwind**: `text-primary`
  - **RGB**: `rgb(197, 217, 255)`
  - **HSL**: `hsl(219, 100%, 89%)`

### Secondary Text (Labels)
- **Sky Blue**: `#6b9fff`
  - **Usage**: Navigation labels ("ART", "MUSIC", "WRITING", "RESEARCH", "APPS"), secondary content
  - **CSS Variable**: `--color-text-secondary`
  - **Tailwind**: `text-secondary`
  - **RGB**: `rgb(107, 159, 255)`
  - **HSL**: `hsl(219, 100%, 71%)`

### Tertiary Text (Body/Muted)
- **Muted Blue**: `#8ba8d9`
  - **Usage**: Body text, descriptions, less prominent content
  - **CSS Variable**: `--color-text-tertiary`
  - **Tailwind**: `text-tertiary`
  - **RGB**: `rgb(139, 168, 217)`
  - **HSL**: `hsl(218, 52%, 70%)`

---

## Stroke & Border Colors

### Petal Stroke
- **Base**: `#1a2b5c`
- **Highlight**: `#4d6bb3` (for separation/definition)
  - **Usage**: Creates definition between petals, subtle borders
  - **CSS Variable**: `--color-stroke`
  - **Tailwind**: `border-stroke`

---

## Design Principles

### Color Harmony
- All colors share the **same hue family** (210-220° on color wheel)
- Creates cohesive, unified visual experience
- Maintains midnight-blue aesthetic throughout

### Depth & Dimensionality
- **Dark to light progression**: Creates three-dimensional feel
- **Layered gradients**: Adds depth without complexity
- **Luminosity contrast**: Center glow draws natural focus

### Accessibility
- **Text contrast ratios**: All text colors meet WCAG AA standards against background
- **Visual hierarchy**: Color brightness correlates with importance
- **Reduced motion support**: Colors work without animation effects

---

## Implementation Guidelines

### CSS Variables

Add these to your `index.css` or root stylesheet:

```css
:root {
  /* Background */
  --color-background: #0a0a0f;
  
  /* Petals */
  --color-petal-base: #1a2b5c;
  --color-petal-mid: #2d4a8f;
  --color-petal-highlight: #4d6bb3;
  
  /* Glow System */
  --color-glow-core: #e8f4ff;
  --color-glow-inner: #6b9fff;
  --color-glow-mid: #4d7fcf;
  --color-glow-outer: #2d4a8f;
  
  /* Text */
  --color-text-primary: #c5d9ff;
  --color-text-secondary: #6b9fff;
  --color-text-tertiary: #8ba8d9;
  
  /* Stroke */
  --color-stroke: #1a2b5c;
  --color-stroke-highlight: #4d6bb3;
}
```

### Tailwind Configuration

Add these colors to your `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'space-black': '#0a0a0f',
      'petal': {
        'base': '#1a2b5c',
        'mid': '#2d4a8f',
        'highlight': '#4d6bb3',
      },
      'glow': {
        'core': '#e8f4ff',
        'inner': '#6b9fff',
        'mid': '#4d7fcf',
        'outer': '#2d4a8f',
      },
      'text': {
        'primary': '#c5d9ff',
        'secondary': '#6b9fff',
        'tertiary': '#8ba8d9',
      },
      'stroke': '#1a2b5c',
      'stroke-highlight': '#4d6bb3',
    }
  }
}
```

### SVG Gradients

Standard gradient definitions for flower petals:

```xml
<defs>
  <radialGradient id="petalGradient">
    <stop offset="0%" stop-color="#4d6bb3" />
    <stop offset="50%" stop-color="#2d4a8f" />
    <stop offset="100%" stop-color="#1a2b5c" />
  </radialGradient>
  
  <radialGradient id="glowGradient">
    <stop offset="0%" stop-color="#ffffff" />
    <stop offset="20%" stop-color="#e8f4ff" />
    <stop offset="50%" stop-color="#6b9fff" />
    <stop offset="75%" stop-color="#4d7fcf" />
    <stop offset="100%" stop-color="#2d4a8f" stop-opacity="0" />
  </radialGradient>
</defs>
```

---

## Usage Rules

### DO ✓
- Use exact hex values provided
- Maintain gradient order (dark to light for petals, bright to fade for glow)
- Use CSS variables for consistency
- Reference this document when adding new components

### DON'T ✗
- Create custom blue shades not in this palette
- Alter hex values for "slight adjustments"
- Use generic color names (e.g., "blue", "darkblue") instead of palette values
- Add new colors without updating this document

---

## Version History

### v1.0.0 - October 7, 2025
- Initial color palette definition
- Extracted from reference image analysis
- Established as official design standard

---

## Related Documents

- `.github/fiore-philosophy.md` - Design philosophy and principles
- `.github/fiore-implementation.md` - Technical implementation guidelines
- `.github/copilot-instructions.md` - AI agent instructions

---

**Authority**: This is the single source of truth for Fiore Interface colors. Any conflicts between this document and implementation code should defer to this specification.
