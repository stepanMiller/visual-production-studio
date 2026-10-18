# Issue #1 — Product Motion integration: HOLD

2026-10-18. Base: `a1c69beedf02024f758956d0fbaedc4f3ea75010` (`main`).

**This draft contains 3 of the required 4 clips and must not be merged or published.**
The approved tumbler master is not available in this task's Library mounts or repository.
An exact-name Google Drive search found no archive; a broader MILLER search also found no matching media package.
The user has been asked for `MILLER_WEBSITE_PORTFOLIO_V2_FINISH.zip`, containing
`WEBSITE_PORTFOLIO/02_VIDEO/MILLER_PORTFOLIO_10S.mp4` and
`03_VIDEO_POSTER/MILLER_CONCEPT_POSTER.jpg`.
No raw tumbler take, historical reel, new generation or paid substitute was used.

## Implemented in the draft

A compact “Product Motion / Визуальные концепты” group follows Selected Work and precedes
“Что стоит за кадром”. It uses the existing ink/ivory palette, locally hosted fonts,
semantic cards and the existing native video dialog. CSS is scoped to `.product-motion*`.
All new cards say “Концепт · 10 секунд · Без звука”; the hotel is described as a concept interior.
No client identity, commercial metrics or performance claims were added.

The three specified completed Runway tasks were downloaded as actual MP4 bytes. Files
are version controlled in `assets/product-motion/`; no signed URLs are shipped.
MP4s were remuxed with faststart and no audio, without re-encoding the video.
SHA-256 hashes of source files, delivered files and identical video packets are recorded in
[media-manifest.json](media-manifest.json). Posters are actual final-video frames at the
recorded timestamps, saved as 960×540 WebP (about 48–60 KB each).

## Completed checks — available three clips only

- FFprobe: all three are H.264 / yuv420p, 24 fps, 10.041667 s, with no audio streams.
  FFmpeg decoded each complete file without errors; faststart atom order verified.
- Chromium 1440×1000: each of the three played from start to end in the modal.
  Chromium 390×844: each started correctly with native controls, inline playback and muted state.
  These are browser emulations; physical iOS/Safari was not tested.
- Close button, Escape and backdrop close work; focus returns to the clicked card;
  Enter opens the player. Closing releases the media src. Patient Plan image dialog still opens.
- The existing showreel remains unmuted after the new clips. A stub of `ym` recorded exactly
  `showreel_play` for the showreel and none for the new clips, at both required widths.
  No QA events were sent to the real analytics counter.
- No new MP4 requests before a click, including after scrolling the new group into view.
  Posters load lazily. No new autoplay or dependency was introduced.
- No document horizontal overflow at widths 320, 390, 768 or 1440; no browser JS errors.
  The 720p can source stays 1280×720. At 1440 the current three-card draft renders it about
  420 CSS px wide (840 px at DPR 2); at 390 it is 350 CSS px wide. Detail is adequate at these
  card sizes. No upscaling or 1080p claim was made.
- Existing homepage section DOM, link list, video targets, title, description, canonical URL
  and counter ID match the baseline. Hero screenshot matches baseline at 1440 and 390.
  Selected Work interiors match baseline. Later section captures differ by fractional document
  offsets/one-pixel screenshot bounds after the insertion; strict pixel identity is not claimed.
  Existing `styles.css`, `v11.css`, cases, prices, contact URL and showreel files were not edited.
- All 75 homepage local href/src/data-* references resolve to files or anchors.
  Heart, VIRDEN and Bali pages render at local HTTP 200. Production root, www redirect,
  Heart, VIRDEN and Bali also return HTTP 200.
- The unchanged MAX URL returns HTTP 403 from this environment. Its browser/app contact
  destination is **not verified**; no message was sent. This remains a release check.
- `node --check app.js` and `git diff --check` passed.

Browser observations: [browser-results.json](browser-results.json).
Visual review inspected frame sequences sampled across all 10 seconds of each available
clip and the actual card/poster layouts. Full four-film creative QA is **not PASS**.
A CSS play triangle replaced an emoji glyph found during screenshot review.

## Visual proof — incomplete three-card draft

Long captures show the group between the existing FMCG card and the following case stories.
Fixed navigation and the offscreen skip link are hidden **only during long screenshot capture**
to avoid fixed elements appearing in the middle of a full-page clip. Viewport captures retain
normal navigation. No such hiding code is included in the website.

- [Desktop 1440 — placement](placement-1440.png)
- [Mobile 390 — placement](placement-390.png)
- [Desktop 1440 — viewport](viewport-1440.png)
- [Mobile 390 — viewport](viewport-390.png)

## Release gate / resume

1. Obtain the exact Library package; inspect its QA report, final master and supplied poster.
2. Add the tumbler as the third card (hotel, can, tumbler, perfume). No placeholder currently ships.
3. Verify all four original sources and complete creative playback; resolve any visible defect.
4. Repeat layout, playback, link, accessibility and analytics checks for all four. Resolve the MAX
   destination check in an environment where MAX is reachable.
5. Update this report and preview, mark PR ready only after actual QA PASS, then merge/deploy
   through the existing GitHub Pages setup (`main`, `/`, `millervisual.ru`, HTTPS).

Production was not changed. Existing rollback is retained in Git; the last production baseline
is the base SHA above. After a successful release, rollback uses a revert of the integration
commit through the same Pages route, without rewriting history or changing DNS/CNAME.
