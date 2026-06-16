// --- window management ---
let zTop = 5;
function openWindow(name){
  const win = document.getElementById('win-' + name);
  if(!win) return;
  win.classList.add('open');
  win.style.zIndex = ++zTop;
  document.querySelectorAll(`.taskbar-icons button[data-win="${name}"]`).forEach(b=>b.classList.add('active'));
}
function closeWindow(win){
  win.classList.remove('open');
  document.querySelectorAll(`.taskbar-icons button[data-win="${win.dataset.win}"]`).forEach(b=>b.classList.remove('active'));
}
function focusWindow(win){
  win.style.zIndex = ++zTop;
  document.querySelectorAll('.window.focused').forEach(w=>w.classList.remove('focused'));
  win.classList.add('focused');
}

document.querySelectorAll('[data-win]').forEach(el=>{
  el.addEventListener('click', e=>{
    if(el.classList.contains('window')) return;
    e.preventDefault();
    openWindow(el.dataset.win);
  });
});

document.querySelectorAll('.window').forEach(win=>{
  win.addEventListener('mousedown', ()=>focusWindow(win));
  win.querySelector('.close').addEventListener('click', ()=>closeWindow(win));
  win.querySelector('.max').addEventListener('click', ()=>win.classList.toggle('maximized'));
  win.querySelector('.min').addEventListener('click', ()=>closeWindow(win));

  // drag via titlebar
  const bar = win.querySelector('.titlebar');
  let dragging=false, offX=0, offY=0;
  bar.addEventListener('mousedown', e=>{
    if(e.target.tagName === 'BUTTON') return;
    dragging = true; bar.style.cursor='grabbing';
    offX = e.clientX - win.offsetLeft; offY = e.clientY - win.offsetTop;
  });
  document.addEventListener('mousemove', e=>{
    if(!dragging) return;
    win.style.left = (e.clientX - offX) + 'px';
    win.style.top = Math.max(0, e.clientY - offY) + 'px';
  });
  document.addEventListener('mouseup', ()=>{ dragging=false; bar.style.cursor='grab'; });
});

// --- live clock ---
function tick(){
  const now = new Date();
  const time = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  const date = now.toLocaleDateString([], {weekday:'short', day:'numeric', month:'short'});
  document.getElementById('clockTime').textContent = time;
  document.getElementById('clockDate').textContent = date;
  document.getElementById('taskbarClock').textContent = time;
}
tick(); setInterval(tick, 30000);

// --- music player: soft R&B, autoplay with credits ---
const tracks = [
  {src:'assets/music/tenderness.mp3', name:'Tenderness', credit:'Music: "Tenderness" by Bensound.com (royalty-free, credit required)'},
  {src:'assets/music/sweet.mp3', name:'Sweet', credit:'Music: "Sweet" by Bensound.com (royalty-free, credit required)'},
  {src:'assets/music/funkorama.mp3', name:'Funkorama', credit:'Music: "Funkorama" by Kevin MacLeod (incompetech.com) — CC BY 3.0'}
];
let trackIndex = 0;
const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playPause');
const volBtn = document.getElementById('volBtn');

function loadTrack(i){
  audio.src = tracks[i].src;
  document.getElementById('trackName').textContent = tracks[i].name;
  document.getElementById('trackCredit').textContent = tracks[i].credit;
}
function tryAutoplay(){
  loadTrack(trackIndex);
  audio.volume = 0.5;
  audio.play().then(()=>playBtn.textContent='⏸').catch(()=>{
    playBtn.textContent='▶';
    const hint = document.createElement('div');
    hint.className = 'autoplay-hint';
    hint.textContent = '🔈 Click anywhere to start music';
    document.body.appendChild(hint);
    const start = ()=>{ audio.play(); playBtn.textContent='⏸'; hint.remove(); document.removeEventListener('click', start); };
    document.addEventListener('click', start);
  });
}
playBtn.addEventListener('click', ()=>{
  if(audio.paused){ audio.play(); playBtn.textContent='⏸'; }
  else { audio.pause(); playBtn.textContent='▶'; }
});
document.getElementById('nextTrack').addEventListener('click', ()=>{
  trackIndex = (trackIndex + 1) % tracks.length;
  loadTrack(trackIndex);
  audio.play(); playBtn.textContent='⏸';
});
audio.addEventListener('ended', ()=>{
  trackIndex = (trackIndex + 1) % tracks.length;
  loadTrack(trackIndex);
  audio.play();
});
volBtn.addEventListener('click', ()=>{
  audio.muted = !audio.muted;
  volBtn.textContent = audio.muted ? '🔇' : '🔊';
});

tryAutoplay();

// start button: opens profile as a friendly default
document.querySelector('.start-btn').addEventListener('click', ()=>openWindow('profile'));

// auto-open profile on load, auto-refresh every 2 minutes
openWindow('profile');
setTimeout(()=>location.reload(), 120000);

// music library: spotify/youtube tabs
document.querySelectorAll('.lib-tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.lib-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('pane-spotify').style.display = tab.dataset.tab === 'spotify' ? 'block' : 'none';
    document.getElementById('pane-youtube').style.display = tab.dataset.tab === 'youtube' ? 'block' : 'none';
  });
});
document.querySelectorAll('.yt-list li').forEach(item=>{
  item.addEventListener('click', ()=>{
    document.getElementById('ytFrameWrap').innerHTML =
      `<iframe src="https://www.youtube.com/embed/${item.dataset.yt}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  });
});
