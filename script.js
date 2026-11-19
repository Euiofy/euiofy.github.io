const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const icons = document.querySelectorAll('img[data-light][data-dark]');
function setMode(dark) {
  root.classList.toggle('dark', dark);
  try { localStorage.setItem('dark', String(dark)); } catch(e) {}
  toggle.textContent = dark ? '☀️' : '🌙';
  toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  icons.forEach(icon => { icon.src = dark ? icon.dataset.dark : icon.dataset.light; });
}
setMode(root.classList.contains('dark'));
toggle.addEventListener('click', () => setMode(!root.classList.contains('dark')));
const notes = document.getElementById('notes-textarea');
const status = document.getElementById('save-status');
if (notes) {
  try { notes.value = localStorage.getItem('euiofy_notes') || ''; }
  catch(e) { status.textContent = 'Storage unavailable'; }
  notes.addEventListener('input', () => {
    try { localStorage.setItem('euiofy_notes', notes.value); status.textContent = 'Saved on this device'; }
    catch(e) { status.textContent = 'Unable to save on this device'; }
  });
}
