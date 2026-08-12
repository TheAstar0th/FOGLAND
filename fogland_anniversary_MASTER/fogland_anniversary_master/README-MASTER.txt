FOGLAND ANNIVERSARY — MASTER VERSION
=====================================

This combines BOTH versions:

OPENING
-------
1. 182 is sitting in his room.
2. Hover over 182:
   - swaps NORMAL -> HOVER image
   - shows "...?"
3. Click 182:
   - swaps to BLUSH image
4. The room darkens.
5. The sketchbook on the floor zooms toward the screen.
6. The opening disappears.
7. The FULL original interactive sketchbook appears.

FULL SKETCHBOOK
---------------
The original starter is still here, including:
- 3D page flipping
- cover / "DO NOT OPEN"
- welcome page
- 4 placeholder fanart slots
- clickable enlarged fanart modal
- artist names
- folded note interaction
- final collage / anniversary page

OPENING IMAGES TO REPLACE LATER
-------------------------------
images/opening/room-background.svg
images/opening/182-normal.svg
images/opening/182-hover.svg
images/opening/182-blush.svg
images/opening/sketchbook-floor.svg

Recommended final files:
room-background.png
182-normal.png
182-hover.png
182-blush.png
sketchbook-floor.png

IMPORTANT:
Keep 182-normal, 182-hover and 182-blush the EXACT SAME canvas size.
Keep 182 in the exact same place on every image.
Use transparent PNGs for all 182 states and the floor sketchbook.

After replacing them, change the paths in index.html from .svg to .png.

MOVING THE INTRO ART
--------------------
In style.css:

.character-button
  left   = horizontal 182 position
  bottom = vertical 182 position
  width  = 182 size

.floor-sketchbook
  left   = horizontal notebook position
  bottom = vertical notebook position
  width  = notebook size

INTRO TIMING
------------
In script.js:

650  = blush time before the zoom starts
1550 = opening starts fading away
2200 = full sketchbook is revealed

FANART
------
Your original placeholder fanart is still under:

images/fanart/

You can replace:
fanart-01.svg
fanart-02.svg
fanart-03.svg
fanart-04.svg

with real submissions later.

DOODLES
-------
Your original doodle placeholders are still under:

images/doodles/

GITHUB
------
You can replace the files in your existing GitHub repository with the
contents of this MASTER folder.

Make sure index.html remains at the root of the repository.
