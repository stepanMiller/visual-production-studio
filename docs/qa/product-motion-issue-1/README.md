# Issue #1 — Product Motion: four-video integration QA

> Tumbler source updated on 2026-10-19: [uploaded-file replacement and QA](../tumbler-replacement-2026-10-19/README.md). The Runway edit described below is historical; the other three clips are unchanged.

2026-10-18. Baseline: `a1c69beedf02024f758956d0fbaedc4f3ea75010` (`main`).

**Integration QA PASS:** exactly four video cards, full playback at 1440 and 390,
posters, modal controls, layout, local links, preserved content and analytics.
One existing external limitation remains: the unchanged MAX contact URL returns
HTTP 403 from this environment; opening the actual contact is not verified.

## Sources and the user's updated direction

Hotel, beverage can and perfume use the three completed Runway tasks specified in
issue #1. Their video packets are unchanged; only the MP4 container was remuxed
with faststart. All MP4 bytes are stored in this repository. No signed media URL
is embedded in the site.

The user explicitly updated the tumbler source in this conversation:
**«Кружка есть на runway достань там»**. Following this direction, the tumbler
was retrieved from Runway instead of the unavailable Library ZIP. It is not
claimed to be the original `MILLER_PORTFOLIO_10S.mp4` master from that archive.
The two complementary existing 5-second scenes are:

- `4f89ceb5-e650-4f3f-9527-fb3344cdb838`: product disassembly.
- `787a86bb-09f0-453e-902e-cd2553c78561`: matching reassembly.

The first 120 frames of each scene are joined at 5 seconds. Output: exactly
240 frames / 10.000 s, 1920×1080, 24 fps, H.264 High level 4.1, yuv420p,
CRF18, faststart, no audio. The cut and completed closing hero frame were reviewed.
No generation, interpolation, upscaling, new soundtrack or paid operation occurred.

Source/delivery SHA-256 hashes and poster timestamps are in
[media-manifest.json](media-manifest.json). All four 960×540 WebP posters are actual
frames extracted from their delivered videos (about 28–60 KB each).

## What changed

A compact “Product Motion / Визуальные концепты” group follows Selected Work and
precedes “Что стоит за кадром”: hotel, can, tumbler, perfume. Existing ink/ivory
colours and locally hosted fonts are reused. CSS is scoped to `.product-motion*`.
All cards say “Концепт · 10 секунд · Без звука”. No client identity, campaign
metrics or factual product-performance claims were added. The hotel is a concept
interior. No separate case pages or new services were introduced.

The existing native dialog gains a per-trigger muted flag, a matching poster and
an accessible name. Closing resets media and muted state. Existing films and the
showreel retain their sound.

## Verification

- All four files decoded completely with FFmpeg without errors. FFprobe confirms
  H.264/yuv420p, ~10 seconds, 24 fps and no audio streams. Faststart atom order verified.
  Hotel/perfume are 1920×1080; can remains 1280×720; tumbler is 1920×1080.
- Each of the four videos played to `ended` in Chromium at both 1440×1000 and
  390×844. Native controls, inline playback and muted state were checked.
  These are browser emulations; physical iOS/Safari was not tested.
- Visual review covered complete frame sequences for all four silent clips,
  supported by larger sampled frames, original-source comparison and full browser
  playback. No blocking visible geometry, brand, lettering, poster or layout defect
  was found. Products are unbranded concepts, with no claimed client results.
- Escape, close button and backdrop close release the src and restore trigger focus;
  Enter opens the player. Patient Plan image viewing still works.
- No new MP4 request occurs on initial load or when scrolling the group into view;
  media loads after click. Posters use lazy loading. No new autoplay or dependency.
- No document horizontal overflow at 320, 390, 768 or 1440; no browser JS errors.
  At 1440 the can card is about 309 CSS px wide; at 390 it is 350 px wide.
  Its 720p source is adequate at those dimensions, including DPR 2, with no 1080p claim.
- Existing section DOM, link list, video targets, title, description, canonical URL
  and counter ID match baseline. Hero screenshots match baseline at 1440 and 390;
  Selected Work interiors match. Later long captures have fractional document-offset
  differences after the insertion; strict pixel identity is not claimed.
  Existing stylesheets, cases, prices, hero, showreel, contact URL and CNAME are unchanged.
- `ym` was stubbed during browser QA: `showreel_play` fires for the old showreel and
  not for the four new films. The showreel remains unmuted after new-film viewing.
  CTA click emits the existing `contact_max` event and opens the exact existing URL
  at both required widths. Navigation was intercepted for this CTA test; it does
  not claim the remote MAX contact opened. No QA goals were sent to the real counter.
- All homepage local href/src/data-* references resolve to files or anchors.
  Heart, VIRDEN and Bali render locally with HTTP 200; the production root, www
  redirect and the three existing case URLs also return HTTP 200.
- External MAX GET returns 403 while the service root returns 200. The contact URL
  is byte-for-byte unchanged from baseline. This is a pre-existing destination/access
  limitation, not an introduced link change. No alternate contact was invented and
  no message was sent. Remote profile availability still needs a real MAX session.
- `node --check app.js` and `git diff --check` pass.

Observations: [browser-results.json](browser-results.json),
[link-results.json](link-results.json).

## Visual proof and preview

- [Desktop 1440 — placement](placement-1440.png)
- [Mobile 390 — placement](placement-390.png)
- [Desktop 1440 — viewport](viewport-1440.png)
- [Mobile 390 — viewport](viewport-390.png)

Long captures show the group between the existing FMCG card and following cases.
Fixed navigation and the offscreen skip link are hidden only during long capture
to avoid fixed elements appearing inside a full-page clip. Viewport captures keep
normal navigation. This screenshot-only style is not part of the website.

Local interactive preview: `python3 -m http.server` from the repository root,
then open `http://localhost:8000/#product-motion`.
Production destination after the existing Pages deployment:
<https://millervisual.ru/#product-motion>.

## Release and rollback

The current user request authorizes publication after successful QA. Release uses
the existing Pages route: merge the reviewed scoped PR to `main`, retain `/`,
CNAME `millervisual.ru` and HTTPS, then verify the deployed page and media bytes.
No DNS or hosting migration is needed. The pre-release rollback baseline remains
`a1c69beedf02024f758956d0fbaedc4f3ea75010`. If needed, revert the integration commit
through the same Pages route without rewriting history.
