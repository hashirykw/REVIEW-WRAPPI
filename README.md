# Wrappi · Review & follow page

A one-page link hub for **Wrappi – Wrapping Art Design** (Strømsveien 324, Oslo), opened from the QR code on the wall poster and brochures.
Live address: **https://review.wrappingartdesign.no**

Built by [Nexlyr Solutions](https://nexlyr.solutions/).

## What's on the page

1. **Anmeld oss på Google** → `https://g.page/r/CRUcUYGtVRD_EBM/review` (opens the review box directly)
2. **Følg oss på Instagram** → `@wrappi__`
3. **Følg oss på Facebook** → *placeholder for now (opens a Facebook search for Wrappi), see below*
4. **Se nettsiden** → `wrappingartdesign.no` (or `/en` when the visitor picked English)

Norwegian by default, English when the phone is set to English. There's a NO / EN switch at the top.
Same look as the main site: Jost font, ink background, red/blue stripe, slanted buttons. The icons are the real Google, Instagram and Facebook marks, plus Wrappi's own favicon for the website.

**3D car:** the bottom of the page runs the main site's own 3D engine (`studio.js`) with the Porsche 911 on the branded turntable. It turns, can be dragged, and cycles wraps (Satin titan → Satin rød → Rosegull) with the colour chip, like the home page. The still image `car.webp` shows instantly, and the 3D fades in once it has loaded in the background. Phones without WebGL, or with data saver on, keep the still image.

## Setting the Facebook link

In `index.html`, find the comment `<!-- FACEBOOK: ... -->` and replace the `href` on the link below it with Wrappi's real Facebook page URL.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page (styles and script are inside it) |
| `car.webp` | Still turntable car, shown instantly |
| `studio.js`, `car-sports.glb` | The main site's 3D engine and Porsche 911 model, loaded after the page is up |
| `th-grey/red/rose.webp`, `logo.png` | Colour-chip thumbnails and the logo the 3D engine uses |
| `logo.webp` | Wrappi logo (header) |
| `jost.woff2` | Self-hosted font (same file as the main site) |
| `favicon*`, `apple-touch-icon.png` | Icons |
| `vercel.json` | Caching and security headers; any unknown path goes back to `/` |
| `qr/` | QR code and print files. **Not deployed** (listed in `.vercelignore`) |

The first view is about 160 KB and paints in about 0.3 s on 4G. The 3D engine (about 170 KB compressed) and the car model (2.9 MB) load afterwards in the background, so they never hold up the page.

3D car credit: "(FREE) Porsche 911 Carrera 4S" by Karol Miklas, CC BY-SA 4.0 (the same model and credit as the main site).

## Print files (`qr/`)

- `wrappi-poster-a4.pdf`: A4 wall poster, ready to print. It also scales cleanly to A5 flyers or A3.
- `wrappi-poster-a4.png`: the same poster at 300 dpi (2481 × 3508), for print shops or social posts.
- `wrappi-review-qr.svg`, `wrappi-review-qr.png`: just the QR code, for brochures, stickers and counter cards.

The QR code points to `https://review.wrappingartdesign.no`. It has been tested with three different decoders, down to about 2.5 cm wide.
**When printing, keep it at least 3 cm wide and keep the white border around it.**

## Deploy

1. Push this folder to a new GitHub repo, e.g. `hashirykw/WRAPPI-REVIEW`.
2. In Vercel, go to **Add New → Project** and import the repo. Use framework **Other**, no build command, and output `./`.
3. In the project's **Settings → Domains**, add `review.wrappingartdesign.no`.
   If the domain's DNS isn't managed by Vercel, add a `CNAME` record `review` → `cname.vercel-dns.com` at the domain registrar.
4. Open the address on a phone and scan the poster to check that it lands correctly.
