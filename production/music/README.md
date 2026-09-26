# MILLER — soundtrack pass, 26 September 2026

## Approved brief

The owner asked for individually selected music in the remaining portfolio videos.
Audience: prospective clients viewing the studio's visual production work.
Objective: make each existing film feel complete while keeping the portfolio calm,
clear and consistent. Placement: click-to-play web videos on the studio website.
No new imagery, claims, edits, paid generation or music purchases are required.
The previously approved showreel and AURELIA soundtrack are unchanged.
Background loops stay muted; visitors initiate sound themselves.

## Music selections

| Film | Track / artist | Direction | Source segment |
| --- | --- | --- | --- |
| Product / FMCG | Summer Fun — Ahjay Stelino | Friendly acoustic folk-pop for the farm-to-product story | 0–15.083 s |
| Residential | Forest Mist Whispers — Alejandro Magaña (A. M.) | Atmospheric piano/synth for evening architecture | 8–15.083 s |
| Healthcare / Heart | Pilates and Yoga — Arulo | Calm electronic/piano bed | 0–27.867 s |
| Healthcare / Forest | Relaxation 05 — Lily J | Meditative flute/harp palette | 4–30 s |

The cows, factory and curd bars are consecutive shots in ONE FMCG film, so one
continuous track supports that entire film. Bali currently contains no video.
The interactive Heart presentation uses the same new anonymized Heart film.
Clicking its Video button enables sound; URL-triggered autoplay stays muted.
Native player controls are available for pause, seeking and volume.

Official catalog pages checked on 26 September 2026:
- https://mixkit.co/free-stock-music/tag/nature/
- https://mixkit.co/free-stock-music/ambient/

Track download URLs and source checksums are recorded in `verification.json`.

## License and cost

Mixkit Stock Music Free License:
https://mixkit.co/license/modal/musicFree/
Terms: https://mixkit.co/terms/

At the time of download, this license permits commercial/non-commercial web and
social video use, including online marketing ads. It does NOT cover TV/radio,
video games or CD/DVD distribution. Do not redistribute standalone music, claim
authorship, or register these tracks with a rights-management service. Keep this
record and re-check permitted use before repurposing videos for another medium.
Raw MP3 files are not distributed in this repository.

Music license cost: 0. No paid generative service used for this pass.

## Acceptance and reproduction

- Video streams copied without re-encoding: encoded video hashes must match the
  downloaded live originals; frame counts and durations must match.
- Existing logo blurs remain exactly as they were in those originals.
- Original Residential audio is replaced, not mixed with the new track.
- All four outputs contain stereo AAC at 48 kHz, 192 kb/s.
- Loudness normalization target: -20 LUFS / -2 dBTP before gentle fades.
  Final measured values are in `verification.json`.
- Each clip has a soft entrance and end fade, no abrupt audio cut.
- All outputs must decode without errors.
- Site playback starts from a visitor click, and closing a modal stops playback.
- The approved showreel, AURELIA, MAX contacts and restored project links remain.

To reproduce, place the four pre-edit live MP4 files and the four licensed MP3s
in one scratch input directory, then run `node production/music/render.mjs INPUT`.
The script refuses to overwrite existing outputs. It writes new `-music.mp4`
files and a technical QA record. Music selection is based on the catalog's genre
and instrument descriptions; automated checks do not replace human listening.
