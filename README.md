# Fixframe – repair guides from video

Fixframe turns repair videos into a step-by-step guide, right on your phone:

1. **Cut** one or more videos into steps (Split here / Set start / Set end, or drag the handles on the timeline)
   and speed up slow parts (½× to 16×).
2. **Capture** frames and mark them up with arrows, info boxes with a pointer, circles, frames and numbers.
3. **Export** an MP4 video, a GIF, a PDF, a Word file (.docx) or a single-file HTML guide with a clip per step.
4. **Hand over**: create an edit file and send it with the video so someone else can continue editing.

**Privacy:** Your videos and project data are processed locally in this browser. Fixframe does not upload them to
its server. Files leave the app only when you choose to save, download, export or share them.
The app contacts the website that hosts it (your GitHub Pages site) only to load its own files, to check for updates
and to load `access.json` (the invitation list, if you use one). It sends nothing: invitation codes and unlock codes
are checked on the device.
The same statement is shown on the start screen and under Settings → Privacy; its single source is `src/privacy.txt`
in the build, or the `PRIVACY_TEXT` line plus the start-screen paragraph in `index.html`.

## Put it on GitHub Pages

1. Create a new repository on GitHub, for example `fixframe` (public, or private with Pages enabled on your plan).
2. Upload **all files of this folder** to the repository root. There are no sub-folders: `index.html`, `sw.js`,
   `manifest.webmanifest`, `sample.mp4`, `step-bg.jpg`, the five icon `.png` files, the export font
   (`fx-font-regular.ttf`, `fx-font-bold.ttf`, `Inter-OFL.txt`), `.nojekyll` and `README.md`.
   Leave an existing `access.json` in the repository as it is.
   (If you used version 1.0, you can delete the old `icons` folder from the repository.)
3. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, folder `/ (root)`, Save.
4. After a minute the app is live at `https://<your-user>.github.io/fixframe/`.

## Install on the phone

- **iPhone (Safari):** open the address, tap **Share → Add to Home Screen**. Start Fixframe from the
  home-screen icon. The installed app keeps its own guides, separate from Safari, so create your guides in the installed app.
- **Android (Chrome):** open the address, then **⋮ → Install app** (or *Add to Home screen*).

- **Laptop or desktop (Chrome or Edge):** open the address. Wide windows get a desktop layout: video and timeline on
  the left, steps on the right. Video files and edit files can be dropped onto the start screen. To install it as a
  window of its own, use the install icon at the right end of the address bar (or ⋮ → *Cast, save and share* →
  *Install page as app*). Guides are stored per browser and device: a guide made on the phone reaches the laptop
  through an edit file plus its videos.

After the first start the app also works offline.

## Releasing an update

1. Change the version in **two places** and keep them identical:
   - `index.html`: `const APP_VERSION = '1.4.1';`
   - `sw.js`: `const VERSION = '1.4.1';`
2. Upload the changed files to the repository.
3. In the app: **Settings (sliders icon) → Check for updates → Install update**. The app also checks a few
   seconds after it starts and shows an *Update ready* banner. Guides are kept during updates.

## Invitation codes and unlock codes (optional)

Both are switched on by one file, **`access.json`**, in the repository root next to `index.html`. The file is not part
of the app download: it comes from the private owner kit (`fixframe-owner.html`), so an app update never overwrites it.

- **No `access.json`:** the app is open to everyone, with no export limit.
- **With `access.json`:** the app asks for a personal invitation code (`FX-XXXX-XXXX`) once per device. The file holds
  only a fingerprint of each code; the place in the list is the invitation number. After 10 video exports (MP4 or GIF)
  the app shows a request number and asks for an 8-digit unlock code. Editing and PDF, Word and HTML guides are not
  counted.
- **Block a code / new codes / other limit:** change it in the owner tool, download the new `access.json`, upload it here
  (Add file → Upload files). Phones read the list each time the app starts with a connection; GitHub Pages can take a
  few minutes to serve a new file.
- **Switch it all off:** delete `access.json` from the repository.
- Do **not** upload `fixframe-owner.html`, `fixframe-owner.json` or `invitation-codes.txt`: they contain the codes.

This is a lock for honest users, not copy protection: the app is a public web page, so someone who can program can
read how it works and get around it.

## Several videos in one guide

- **New guide from video** accepts one or several videos. Each video starts as one step.
- In the editor, the row above the steps lists the guide's videos. **Add video** loads more; tap a video to show it
  in the player and timeline; tap the shown video again for details, *Save a copy* or *Remove video from guide*.
- The step list shows all steps in guide order. A small `V2` on a step's thumbnail tells which video it was cut from.
  Tapping a step shows its video. The timeline shows the steps of the video on screen.
- Exports play the steps in list order, across all videos. The "Original" frame is the shape of the first video;
  other videos are fitted into it.

## Hand over a guide (edit file)

The edit file is a small `.fixframe.json` file. It does not contain the full video. It contains project information and
a small preview image for each source video. Project information means: the videos it uses (name, size, length), every
step (video, start, end, speed, title, instructions, caution), the pictures (time in the video, caption, markup),
guide info, export settings, the name of who made it and the hand-over history.

- **Your name:** enter it once in **Settings → Your name**. It is written into the guides you start and the edit files
  you create. If it is missing, the app asks before the first edit file.
- **Send:** in the editor, **Export → Edit file** (or **Guide info → Create edit file**). The result screen lists the
  videos to send along, each with a *Save* button in case the original is no longer in your gallery.
  Send the edit file and the video file(s) any way you like.
- **Receive:** on the start screen tap **Open an edit file**, pick the `.fixframe.json`, then pick each video it lists.
  The guide is rebuilt with all cuts, texts and markup; the pictures are captured again from the video.
- **Send back:** when an edit file belongs to a guide that is already on the phone, the videos are not needed again.
  Choose **Update the guide on this phone** (replaces its steps, texts and pictures) or **Keep both**.
- **Guide info → History** shows who started the guide and who made or opened edit files.
- The brand kit (logo, card background, intro, safety and closing videos) is a setting of each phone and is not part of
  the edit file.

## Export design (Settings → Open brand settings → Export design)

Videos, GIFs, PDF, Word and HTML guides share one product-page look: near-black stage (#0D0D0D), white type,
the repair shown on a grey stage, small upper-case
labels above large headlines, picture cards for all steps, a contact block and a footer with company and copyright.
The app's own screens keep their orange look.

- **Language:** English or Deutsch for all labels in the exports (Step/Schritt, Caution/Achtung, Page/Seite …).
  Your own texts are not translated.
- **Card background:** Black (standard) or Picture (the map picture `step-bg.jpg`, or your own, grey and darkened).
- **PDF pages:** Light (for printing) or Dark. The PDF cover is always black.
- **Company name, claim, contact and address:** used on the covers, in the contact block and the footers
  ("© 2026 Company - Alle Rechte vorbehalten.").
- **Font for exports:** Inter (included, SIL Open Font License, see `Inter-OFL.txt`) or your brand font: load its
  .ttf or .otf files (regular and bold). It is drawn on video cards and embedded in PDF, Word (.ttf only) and HTML
  files. Fonts whose licence forbids embedding are used for videos only. Check your font licence before loading it.

## Brand & safety (Settings → Open brand settings)

- **Logo watermark:** load your logo (PNG with transparent background works best); choose corner, size and opacity.
- **Background picture for cards:** the title, safety and step cards use `step-bg.jpg`, shown grey and darkened.
  Load your own picture in the app, or replace `step-bg.jpg` in the repository to change the standard one.
- **Brand intro video, safety instructions (text and/or video), closing video:** stored once, used in every guide.
  Each part can be switched on or off on the export screen.

## Reset

**Settings → Delete all guides and reset** removes every guide, video and picture, your name and brand settings,
the stored invitation and export counter, plus the offline copy of the app. To remove the icon as well, touch and hold it and choose *Remove App* (iPhone)
or *Uninstall* (Android).

## Good to know

- Exported videos and GIFs are silent.
- MP4 export uses the phone's video encoder (iOS 16.4+ / current Chrome on Android). Rendering takes roughly
  as long as the finished video; keep the app open and the screen on until it finishes.
- Fixframe keeps its own copy of each video in the browser's storage. Delete guides you no longer need to free space;
  your original video files are not touched.
- Guides made with earlier versions keep working; they are converted when opened.
- Keyboard shortcuts on a computer: Space play/pause, ←/→ one frame (Shift: one second), S split, I start, O end, P picture.
