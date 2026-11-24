const themeRoot = document.documentElement;
const themeStorageKey = 'portfolio-theme';

try {
  if (localStorage.getItem(themeStorageKey) === 'neon') themeRoot.dataset.theme = 'neon';
} catch {
  // The theme still works when storage is unavailable.
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  const portrait = document.querySelector('[data-neon-src]');
  if (!toggle || !portrait) return;

  const originalPortrait = portrait.getAttribute('src');

  function setNeon(enabled) {
    if (enabled) themeRoot.dataset.theme = 'neon';
    else delete themeRoot.dataset.theme;
    toggle.setAttribute('aria-pressed', String(enabled));
    portrait.src = enabled ? portrait.dataset.neonSrc : originalPortrait;
  }

  setNeon(themeRoot.dataset.theme === 'neon');
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const enabled = themeRoot.dataset.theme !== 'neon';
    setNeon(enabled);
    try {
      if (enabled) localStorage.setItem(themeStorageKey, 'neon');
      else localStorage.removeItem(themeStorageKey);
    } catch {
      // Keep the current selection for this page.
    }
  });
});
