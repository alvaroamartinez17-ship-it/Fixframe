# Fixframe – repair guides from video

Fixframe turns one repair video into a step-by-step guide, right on your phone:

1. **Cut** the video into steps (Split here / Set start / Set end, or drag the yellow handles on the timeline) and speed up slow parts (½× to 16×).
2. **Capture** frames and mark them up with arrows, info boxes with a pointer, circles, frames and numbers.
3. **Export** an MP4 video, a GIF, a PDF, a Word file (.docx) or a single-file HTML guide with a clip per step.

Everything is processed and stored on the device. Nothing is uploaded; the app only talks to your
GitHub Pages site to load itself and to check for updates.

## Put it on GitHub Pages

1. Create a new repository on GitHub, for example `fixframe` (public, or private with Pages enabled on your plan).
2. Upload **all files of this folder** to the repository root: `index.html`, `sw.js`, `manifest.webmanifest`,
   `sample.mp4`, `.nojekyll`, `README.md` and the `icons` folder.
3. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, folder `/ (root)`, Save.
4. After a minute the app is live at `https://<your-user>.github.io/fixframe/`.

## Install on the phone

- **iPhone (Safari):** open the address, tap **Share → Add to Home Screen**. Start Fixframe from the
  home-screen icon. The installed app keeps its own guides, separate from Safari, so create your guides in the installed app.
- **Android (Chrome):** open the address, then **⋮ → Install app** (or *Add to Home screen*).

After the first start the app also works offline.

## Releasing an update

1. Change the version in **two places** and keep them identical:
   - `index.html`: `const APP_VERSION = '1.0.0';`
   - `sw.js`: `const VERSION = '1.0.0';`
2. Upload the changed files to the repository.
3. In the app: **Settings (sliders icon) → Check for updates → Install update**. The app also checks a few
   seconds after it starts and shows an *Update ready* banner. Guides are kept during updates.

## Reset

**Settings → Delete all guides and reset** removes every guide, video and picture plus the offline copy of the app.
To remove the icon as well, touch and hold it and choose *Remove App* (iPhone) or *Uninstall* (Android).

## Good to know

- Exported videos and GIFs are silent.
- MP4 export uses the phone's video encoder (iOS 16.4+ / current Chrome on Android). Rendering takes roughly
  as long as the finished video; keep the app open and the screen on until it finishes.
- Long source videos are copied into the app's storage. Delete guides you no longer need to free space.
- Keyboard shortcuts on a computer: Space play/pause, ←/→ one frame (Shift: one second), S split, I start, O end, P picture.
