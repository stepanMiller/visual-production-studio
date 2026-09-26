# MILLER showreel

Approved 30-second edit: product, residential space, healthcare, studio end card.
1280 × 720, 24 fps. The end card uses the website's Manrope font.

Install with `npm ci`. Create `public/` and copy the site's AURELIA and residential
videos and both Manrope WOFF2 files there. Copy the anonymized healthcare film as
`healthcare-heart.mp4`.

Music: Majestic by Diego Nava, Mixkit asset 475. Obtain `Majestic.mp3` from the
official source: https://mixkit.co/free-stock-music/lounge/
License: https://mixkit.co/license/modal/musicFree/
The stock MP3 is intentionally not redistributed in this repository.

Render: `npx remotion render src/index.ts MillerShowreel out/showreel.mp4 --concurrency=2 --crf=20`.

`loopback.cjs` is an optional container compatibility shim: use
`node --require ./loopback.cjs node_modules/@remotion/cli/remotion-cli.js render src/index.ts MillerShowreel out/showreel.mp4 --concurrency=2 --crf=20`
only when the host cannot enumerate network interfaces. It binds to localhost.
