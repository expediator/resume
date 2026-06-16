# Akshansh Yadav — Resume (Windows-OS style)

🔗 **Live:** https://expediator.github.io/resume/

An interactive resume styled as a Windows desktop — clickable, draggable popup
windows with real `–  ▢  ✕` window controls, a taskbar with pinned apps and a
live clock, rotating wallpapers, and a music player that autoplays a rotating
royalty-free library on open.

## Features
- Desktop icons (6-column grid) + taskbar open draggable, closable "windows"
  for Profile, GitHub Contributions/Stats, Education, Skills, Projects,
  Experience, Achievements, Interests, Contact & Music Library.
- Auto-playing music player (play/pause, skip, mute) cycling a 21-track
  royalty-free library, each one credited.
- **Music Library** window: an embedded Spotify playlist + a YouTube
  shortlist, plus a search box for both (paste a link to play inline, or
  type a query to open search on that platform).
- Rotating desktop wallpapers (auto every 60s, or pick one from the top-left
  tab bar) — each one shifts the site's accent color.
- Live GitHub contribution heatmap + stats card, with a 🔄 refresh button
  next to each (the underlying images get cached, so refreshing re-stamps
  them with a fresh timestamp instead of waiting on the cache to expire).
- No build step — plain HTML/CSS/JS.

## Skills
*(Pulled from what's actually listed in the Skills/Interests windows — see
[How to add a new skill or experience](#how-to-add-a-new-skill-or-experience)
to update this list.)*

| Category | Skills |
|---|---|
| **Frontend** | JavaScript, TypeScript, HTML/CSS |
| **Backend** | Python, C, SQL, Node.js |
| **DevOps & Tools** | Git, GitHub, MS Excel, Arduino IDE |
| **Frameworks & Libraries** | OpenCV, MediaPipe, Tkinter |
| **Currently exploring (Web3)** | Solidity, Rust, Solana, Ethereum, Smart Contracts, CI/CD, Cloud & Containers |

## File map
| File | Controls |
|---|---|
| `index.html` | All content & structure — profile text, every window's text, taskbar buttons, links |
| `style.css` | All visual styling — colors, layout, fonts, animations |
| `script.js` | All behavior — opening/closing/dragging windows, music player, wallpaper rotation, search |

Every major block in all three files is tagged with a searchable comment in
the form `# SECTION: NAME` (`<!-- # SECTION: ... -->` in HTML, `/* # SECTION:
... */` in CSS, `// # SECTION: ...` in JS). In VS Code, press **Ctrl+Shift+F**
(search across all files) and type `# SECTION:` to see the full map, or
**Ctrl+F** inside one file to jump straight to a section, e.g. searching
`WINDOW - SKILLS` jumps right to the Skills window's markup.

## How to add a new skill or experience
1. Open the project folder in VS Code.
2. **Ctrl+Shift+F** → search `# SECTION: WINDOW - SKILLS` (or `EXPERIENCE`,
   `PROJECTS`, `ACHIEVEMENTS`, `INTERESTS`, etc.) — this is in `index.html`.
3. Each item lives inside a `<div class="entry">...</div>` (or `<span>` for
   tags in Skills/Interests). Copy an existing one and edit the text, or
   just edit the text in place.
4. Save the file.
5. Either ask Claude to commit + push it, or do it yourself:
   ```
   git add -A
   git commit -m "Update skills/experience"
   git push
   ```
6. **Important:** if you edit `script.js` or `style.css`, bump the `?v=N`
   query string on their `<link>`/`<script>` tags in `index.html` (search
   `# SECTION:` near the top) — otherwise visitors' browsers may keep
   serving an old cached copy instead of your update.

Don't rename a window's `id="win-NAME"` without also updating its matching
`data-win="NAME"` on the desktop icon and taskbar button — those three have
to match for the click-to-open behavior to work.

## Music credits
- "Tenderness" & "Sweet" — [Bensound.com](https://www.bensound.com) (royalty-free, attribution required)
- "Funkorama" — Kevin MacLeod ([incompetech.com](https://incompetech.com)), licensed [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- "Lost Myself" — Lalanne, "Higher Water" — Blue Deer Studio, "Gone Away" — Blue Beat Review
- 15 additional tracks — [Bensound.com](https://www.bensound.com) (royalty-free, attribution required)
- Spotify playlist and YouTube videos are streamed via official embeds; rights belong to their respective owners.

## Run locally
Just open `index.html` in a browser — no dependencies, no build step.
