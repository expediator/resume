<div align="center">

# 🖥️ Akshansh Yadav — Interactive Resume

**Windows-OS style interactive portfolio**

[![Live](https://img.shields.io/badge/View_Live-GitHub_Pages-3b9eff?style=flat-square&logo=github)](https://expediator.github.io/resume/)
[![GitHub](https://img.shields.io/badge/GitHub-expediator%2Fresume-181717?style=flat-square&logo=github)](https://github.com/expediator/resume)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

An interactive resume styled as a Windows desktop. Draggable popup windows, live taskbar, rotating wallpapers, music player, and live GitHub stats — all in plain HTML/CSS/JS. No build step.

</div>

---

## Live

**[expediator.github.io/resume](https://expediator.github.io/resume/)**

---

## Features

- **Draggable windows** with real `– ▢ ✕` controls (minimize / maximize / close)
- **Windows**: Profile · GitHub Stats · Education · Skills · Projects · Experience · Achievements · Interests · Contact · Music Library
- **Music player** — 21-track royalty-free library, autoplays, skip/mute controls
- **Music Library** — embedded Spotify playlist + YouTube shortlist + search box for both
- **Rotating wallpapers** — 5 themes; each shifts the site accent color
- **Live GitHub stats** — contribution heatmap + streak + stats cards with 🔄 refresh
- **No build step** — plain HTML/CSS/JS, open `index.html` and it works

## File Map

| File | Purpose |
|------|---------|
| `index.html` | All content, structure, every window's text |
| `style.css` | All visual styling |
| `script.js` | All behavior — drag/drop, music, wallpapers, search |

Every section tagged `# SECTION: NAME` — Ctrl+Shift+F in VS Code → search `# SECTION:` to navigate.

## How to Update Content

1. Open `index.html` in VS Code
2. Ctrl+Shift+F → `# SECTION: WINDOW - PROJECTS` (or SKILLS, EXPERIENCE, etc.)
3. Edit `<div class="entry">` blocks → save → push

```bash
git add index.html && git commit -m "update: <what changed>" && git push
```

> ⚠️ If you edit `script.js` or `style.css`, bump the `?v=N` cache-buster on their tags in `index.html`.

## Run Locally

```bash
open index.html          # macOS
start index.html         # Windows
npx serve .              # any platform
```

## Music Credits

- "Tenderness", "Sweet" & 15 more — [Bensound.com](https://www.bensound.com) (royalty-free, attribution required)
- "Funkorama" — Kevin MacLeod ([incompetech.com](https://incompetech.com)), [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- Spotify / YouTube content streamed via official embeds; rights belong to respective owners

---

<div align="center">
<strong>Expediator Inc.</strong> · © 2026 · <a href="https://github.com/expediator">GitHub</a>
</div>