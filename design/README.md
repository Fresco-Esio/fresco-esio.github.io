# Fiore Design Files

This directory contains design assets and tools for the Fiore Interface project.

## Files

### `fiore-palette.ase`
**Adobe Swatch Exchange file** containing the official Fiore color palette.

- **Format**: Adobe Swatch Exchange (.ase)
- **Size**: 836 bytes
- **Colors**: 13 colors organized in 5 groups
- **Compatible with**: Adobe Photoshop, Illustrator, InDesign, XD, and other Adobe Creative Cloud apps

#### Color Groups:
1. **Background** (1 color)
   - Deep Space Black

2. **Petals** (3 colors)
   - Petal Base
   - Petal Mid
   - Petal Highlight

3. **Glow System** (4 colors)
   - Glow Core
   - Glow Inner
   - Glow Mid
   - Glow Outer

4. **Text** (3 colors)
   - Text Primary
   - Text Secondary
   - Text Tertiary

5. **Stroke** (2 colors)
   - Stroke Base
   - Stroke Highlight

#### How to Use:
1. Open Adobe Photoshop, Illustrator, or other compatible Adobe software
2. Open the Swatches panel (Window → Swatches)
3. Click the panel menu (≡) and select "Load Swatches..."
4. Navigate to this file and open it
5. All Fiore colors will appear in your Swatches panel, organized by group

### `fiore-palette.ase.py`
**Python generator script** for creating the .ase file.

- **Purpose**: Generates the Adobe Swatch Exchange file from the official color palette
- **Source**: Colors defined in `../.github/fiore-color-palette.md`
- **Usage**: `python fiore-palette.ase.py`

To regenerate the .ase file after palette updates:
```bash
cd design
python fiore-palette.ase.py
```

## Color Palette Documentation

For complete color specifications, usage guidelines, and implementation details, see:
- **Official Specification**: `../.github/fiore-color-palette.md`
- **Quick Reference**: `../README-COLOR-PALETTE.md`

## Notes

- All colors in this directory match the official Fiore color palette
- Do not modify colors without updating the main palette documentation
- The .ase file should be regenerated whenever the official palette changes
- These files are version-controlled to ensure design consistency across the team

---

**Last Updated**: October 7, 2025  
**Palette Version**: 1.0.0
