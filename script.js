const videos = [
  ['Build a Better Study Routine', 'LearnLab', '12K views · 2 days ago', '8:42', '#3568d4', 'L'],
  ['Lo-fi Focus Beats for Learning', 'SoundGarden', '1.2M views · 1 week ago', '1:04:22', '#8b4eb8', 'S'],
  ['The Science of Space Exploration', 'Bright Future', '483K views · 3 days ago', '14:08', '#e56b39', 'B'],
  ['Beginner Coding: Make a Web Page', 'Code Corner', '92K views · 5 days ago', '22:16', '#199b83', 'C'],
  ['Amazing Wildlife Around the World', 'Planet View', '2.4M views · 2 weeks ago', '10:31', '#2893a7', 'P'],
  ['Easy Drawing Tutorial for Beginners', 'Create Daily', '67K views · 4 days ago', '18:55', '#d15b72', 'C'],
  ['How Electric Cars Work', 'Future Explained', '305K views · 1 month ago', '11:27', '#525d9b', 'F'],
  ['5-Minute Healthy Snacks', 'Quick Kitchen', '741K views · 6 days ago', '5:03', '#d18b36', 'Q']
];
const grid = document.querySelector('#videoGrid');
function render(list = videos) {
  grid.innerHTML = list.length ? list.map(v => `<article class="card"><div class="thumb" style="background:linear-gradient(135deg,${v[4]},#171717)"><span>▶</span><b class="duration">${v[3]}</b></div><div class="details"><div class="channel" style="background:${v[4]}">${v[5]}</div><div><p class="title">${v[0]}</p><p class="meta">${v[1]}<br>${v[2]}</p></div></div></article>`).join('') : '<p>No videos found. Try another search.</p>';
}
render();
document.querySelector('#searchForm').addEventListener('submit', e => { e.preventDefault(); const q = document.querySelector('#searchInput').value.toLowerCase(); render(videos.filter(v => v.join(' ').toLowerCase().includes(q))); });
document.querySelector('#themeBtn').addEventListener('click', () => document.body.classList.toggle('dark'));
document.querySelector('#menuBtn').addEventListener('click', () => document.querySelector('#sidebar').classList.toggle('hidden'));
document.querySelectorAll('.chips button').forEach(button => button.addEventListener('click', () => { document.querySelector('.chips .selected').classList.remove('selected'); button.classList.add('selected'); }));
