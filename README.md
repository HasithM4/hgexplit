# HG PS4 Exploit Host

A static, controller-friendly PS4 homebrew host dashboard starter. It includes a firmware profile selector, resource links, local selection persistence, status indicators, and responsive styling.

**This starter is not a jailbreak.** No exploit code, kernel exploit, GoldHEN payload, or offline-cache mechanism is included. The status panel deliberately reports exploit integration and offline caching as unconfigured/untested.

## Files

- `index.html` — page structure and resource links
- `style.css` — responsive dark interface
- `app.js` — firmware selection and local persistence
- `modules/README.md` — safe integration checklist
- `.nojekyll` — disables Jekyll processing for static deployment

## Test locally

Open `index.html` in a desktop browser to review the UI. For a local HTTP server with Python installed, run this command from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. This is a UI preview only; it does not validate PS4 exploit compatibility.

## Publish with GitHub Pages

1. Create a new public GitHub repository named `hg-ps4-exploit-host` (or another name you prefer).
2. Upload the contents of this folder to the repository root. `index.html` must be at the root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for the Pages deployment to finish. GitHub will show the published URL, normally `https://YOUR-USERNAME.github.io/hg-ps4-exploit-host/`.
7. Open that URL on a desktop first, then test basic navigation in the PS4 browser.

GitHub Pages publishes the repository's site publicly. Do not commit private keys, account data, or binaries you are not permitted to redistribute.

## PS4 browser compatibility checklist

- Use HTTPS and the exact published URL.
- Keep the interface lightweight; this project uses plain HTML, CSS and JavaScript without a build step.
- Test every button with the DualShock controller and keyboard navigation.
- Check that focus indicators are visible and buttons are not too small.
- Clear stale browser data after updating the site if the console displays old assets.
- Treat offline functionality as **not supported by this starter**. Do not assume a GitHub Pages site will work offline without a separately implemented and tested caching strategy. AppCache is deprecated in modern browsers and support differs in legacy console browsers; verify the method against the target PS4 browser and upstream host.
- The browser may crash or freeze during real exploit flows. UI testing alone does not prove an exploit works.

## Integration sources to review

- GamerHack source: https://github.com/GamerHack/GamerHack.github.io
- GoldHEN project: https://github.com/GoldHEN/GoldHEN
- PS4 AIO community collection: https://github.com/eddieygaming/ps4aio

Read each upstream license and documentation before copying or redistributing files. Keep their attribution and license files when required. Confirm supported firmware against the current upstream documentation rather than relying on the example profile cards.

## Disclaimer

Independent community project, not affiliated with or endorsed by Sony Interactive Entertainment. Use at your own risk.
