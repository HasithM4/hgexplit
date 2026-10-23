# HG PS4 Exploit Host

**HG PS4 Exploit Host** is an independent, lightweight dashboard for navigating PlayStation 4 firmware profiles and community homebrew resources.

## What's included

- Original HG-branded dark dashboard UI
- Firmware profile selector for 5.05, 6.72 and 9.00, plus an “Other” profile
- Upstream reference links for listed firmware profiles
- Resource links for GoldHEN and community host projects
- Controller-friendly focus states and responsive layout for smaller screens
- No build tools or external JavaScript dependencies

## Important status note

This repository currently contains the HG dashboard and reference links. The firmware links open third-party community hosts; they do **not** launch a locally hosted HG exploit module. Exploit code, payload binaries, and offline caching have not been bundled or verified. Do not interpret the dashboard's status labels as proof that a console is exploitable.

## Run locally

Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Keep `index.html`, `style.css`, `app.js`, and `.nojekyll` in the repository root.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/(root)`, then save.
5. Visit the URL GitHub shows after deployment. For this repository it is typically `https://hasithm4.github.io/hgexplit/`.

## Firmware and offline compatibility

Test the interface first using the PS4 browser and controller. Verify each external link. Offline operation is not implemented here; GitHub Pages and local-storage support do not themselves make exploit assets available offline.

Before integrating code from another project, read its current license, retain required attribution notices, and confirm compatibility from the upstream documentation. The GamerHack repository is used here as an upstream reference; this project does not redistribute its exploit scripts or payload binaries.

## Upstream references

- [GamerHack host source](https://github.com/GamerHack/GamerHack.github.io)
- [GoldHEN](https://github.com/GoldHEN/GoldHEN)
- [PS4 AIO](https://github.com/eddieygaming/ps4aio)

## Disclaimer

HG PS4 Exploit Host is an independent community project and is not affiliated with, endorsed by, or sponsored by Sony Interactive Entertainment. Use community tools at your own risk.
