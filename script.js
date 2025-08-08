// year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// light/dark toggle (respects system, then user override)
const btn = document.getElementById('themeToggle');
const root = document.documentElement;
const pref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const stored = localStorage.getItem('theme');
if (stored) root.dataset.theme = stored;
btn.addEventListener('click', () => {
  const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = t;
  localStorage.setItem('theme', t);
  btn.textContent = t === 'dark' ? '☾' : '☀︎';
});
if (!stored) root.dataset.theme = pref;
btn.textContent = (root.dataset.theme === 'dark') ? '☾' : '☀︎';
