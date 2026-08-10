FOGLAND ANNIVERSARY STARTER
============================

This is a simple static website starter for "182's Sketchbook".

FILES
-----
index.html      = page layout/content
style.css       = all visual styling + animations
script.js       = page flipping, modal fanart, note opening
images/         = placeholder artwork you can replace later

HOW TO USE
----------
1. Keep the same filenames and simply replace the placeholder image files.
2. Or change the image filenames inside index.html.
3. Open index.html in a browser to test it.
4. For publishing later, upload the folder to GitHub Pages / Netlify / Cloudflare Pages.

REPLACING FANART
----------------
Example:
images/fanart/fanart-01.svg

Replace it with:
images/fanart/fanart-01.png

Then change BOTH occurrences in index.html:
src="images/fanart/fanart-01.svg"
data-modal-image="images/fanart/fanart-01.svg"

to:
src="images/fanart/fanart-01.png"
data-modal-image="images/fanart/fanart-01.png"

ADDING MORE FANART
------------------
Copy one of these blocks in index.html:

<button class="art-card tilt-left"
        data-modal-image="images/fanart/YOURFILE.png"
        data-artist="@ARTIST">
  <span class="tape tape-top"></span>
  <img src="images/fanart/YOURFILE.png" alt="Fanart by ARTIST" />
  <span class="artist-label">@ARTIST</span>
</button>

You may need to adjust placement in style.css if adding many pieces to one page.

CUSTOM DRAWINGS
---------------
Replace:
images/doodles/doodle-182.svg
images/doodles/sketch-182.svg
images/doodles/tiny-face.svg

with your own files. PNG with transparent backgrounds will work well.

IMPORTANT
---------
This starter intentionally uses no frameworks.
It's just HTML + CSS + JavaScript so it's easy to edit.
