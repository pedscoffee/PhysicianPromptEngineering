# Icons Needed for Coffee PWA

The following icon files need to be created and placed in `/images/`:

## Required Icons

1. **coffee-icon-192.png** (192x192 pixels)
   - For PWA installation
   - Should show a coffee cup icon
   - Use retro/pixel art style to match DDX Challenge aesthetic

2. **coffee-icon-512.png** (512x512 pixels)
   - For PWA installation and splash screen
   - Same design as 192px version, just larger

## Optional but Recommended

3. **coffee-screenshot-wide.png** (1280x720 pixels)
   - Screenshot for PWA store listing
   - Show the main interface

4. **coffee-screenshot-narrow.png** (750x1334 pixels)
   - Mobile screenshot for PWA store listing
   - Show mobile view

## Design Guidelines

- **Color scheme**: Match Doc Pixel's DDX Challenge
  - Dark background (#0d1117)
  - Golden/tan accents (#FFD700, #D4A76A)
  - Retro pixel-art style

- **Icon should feature**:
  - Coffee cup ☕
  - Medical theme (stethoscope, clinical notes, etc.)
  - Retro/game aesthetic

## Temporary Fallback

Until real icons are created, the PWA will use:
- Browser default icons
- Graceful degradation

## How to Add Icons

1. Create PNG files with specified dimensions
2. Place in `/images/` directory
3. Icons are already referenced in `/scribe-pwa/manifest.json`
4. No code changes needed once files are in place
