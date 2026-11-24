const themeRoot = document.documentElement;
const themeStorageKey = 'portfolio-theme';

try {
  if (localStorage.getItem(themeStorageKey) === 'neon') themeRoot.dataset.theme = 'neon';
} catch {
  // The theme still works when storage is unavailable.
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const audio = document.querySelector('#theme-track');
  const entryGlow = document.querySelector('.theme-entry-glow');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let entryAnimation;
  const musicToggle = document.querySelector('.theme-music');
  const playLabel = document.querySelector('#theme-play-label');
  const pauseLabel = document.querySelector('#theme-pause-label');
  audio.volume = 0.45;

  function updateMusicButton() {
    const playing = !audio.paused;
    musicToggle.dataset.playing = String(playing);
    musicToggle.setAttribute('aria-label', (playing ? pauseLabel : playLabel).textContent);
  }

  function playMusic() {
    audio.play().catch(updateMusicButton);
  }

  for (const event of ['play', 'pause', 'error']) audio.addEventListener(event, updateMusicButton);
  document.addEventListener('portfolio:language', updateMusicButton);
  musicToggle.addEventListener('click', () => {
    if (audio.paused) playMusic();
    else audio.pause();
    updateMusicButton();
  });
  updateMusicButton();

  const images = Array.from(document.querySelectorAll('img[data-neon-src]'), image => ({
    image, original: image.getAttribute('src')
  }));

  function setNeon(enabled) {
    if (enabled) themeRoot.dataset.theme = 'neon';
    else delete themeRoot.dataset.theme;
    toggle.setAttribute('aria-pressed', String(enabled));
    musicToggle.hidden = !enabled;
    if (!enabled) {
      audio.pause();
      updateMusicButton();
    }
    for (const { image, original } of images) {
      image.src = enabled ? image.dataset.neonSrc : original;
    }
  }

  setNeon(themeRoot.dataset.theme === 'neon');
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const enabled = themeRoot.dataset.theme !== 'neon';
    setNeon(enabled);
    entryAnimation?.cancel();
    if (enabled) {
      playMusic();
      if (!reducedMotion.matches) {
        entryAnimation = entryGlow.animate(
          [{opacity: 0}, {opacity: 0.55, offset: 0.26}, {opacity: 0}],
          {duration: 560, easing: 'ease-out'}
        );
      }
    }
    try {
      if (enabled) localStorage.setItem(themeStorageKey, 'neon');
      else localStorage.removeItem(themeStorageKey);
    } catch {
      // Keep the current selection for this page.
    }
  });
});
