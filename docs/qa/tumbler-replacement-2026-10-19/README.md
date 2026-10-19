# Tumbler replacement — 2026-10-19

The user supplied `MILLER_AVITO_CLEAN_10S.mp4` and requested replacing the website's
thermal-tumbler film with this file. Baseline: `1ba3969b8c3ef4af61eed9b11a42f192cef5c5d2`.

The delivered MP4 is byte-for-byte identical to the upload, SHA-256
`bd24bbee24f3d077e1a0f9a472eb991c2d9c6db60ff2aab7bdedfcab944b72e9`.
It is 10.000 seconds, 1920×1080, 24 fps, H.264 High level 4.0, yuv420p,
240 frames, no audio, faststart. No encoding, editing or generation was performed.
The poster was extracted at 0.25 seconds and saved as 960×540 WebP. Both asset URLs
include `v=bd24bbee24f3` to prevent a previously cached film/poster being shown.

QA PASS: full FFmpeg decode; complete browser playback at 1440×1000 and 390×844;
controls, inline/muted state, keyboard opening, closing/reset and returned focus;
poster load; no horizontal overflow, JS errors or failed local responses; no MP4
load before clicking. Checks used Chromium emulation, not physical iOS/Safari.

The homepage source differs only in the two tumbler asset URLs. CSS and scripts
are unchanged. Hashes confirm the other three MP4s are unchanged. Existing contact,
SEO, analytics, prices and other sections are outside this replacement.

Evidence: [qa.json](qa.json), [desktop card](card-1440.png),
[mobile card](card-390.png). Current source metadata:
[media-manifest.json](../product-motion-issue-1/media-manifest.json).

Publication uses the existing GitHub Pages route and domain:
<https://millervisual.ru/#product-motion>.
Rollback uses a normal revert of this replacement commit; the previous asset
bytes remain in Git history.
