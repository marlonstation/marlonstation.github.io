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
  const heroArt = new Image();
  const heroBackground = document.querySelector('.hero').dataset.themeBackground;
  let changing = false;
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

  function prepareHero() {
    if (!heroArt.getAttribute('src')) heroArt.src = heroBackground;
  }

  async function applyTheme(enabled) {
    setNeon(enabled);
    if (enabled) await heroArt.decode().catch(() => {});
  }

  async function transitionTheme(enabled) {
    if (reducedMotion.matches) {
      setNeon(enabled);
    } else if (document.startViewTransition) {
      themeRoot.classList.add('theme-scanning');
      try {
        await document.startViewTransition(() => applyTheme(enabled)).finished;
      } finally {
        themeRoot.classList.remove('theme-scanning');
      }
    } else {
      const cover = entryGlow.animate(
        [{opacity: 1, clipPath: 'circle(0 at center)'}, {opacity: 1, clipPath: 'circle(75vmax at center)'}],
        {duration: 330, fill: 'forwards', easing: 'cubic-bezier(.38,0,.24,1)'}
      );
      await cover.finished;
      await applyTheme(enabled);
      const reveal = entryGlow.animate([{opacity: 1}, {opacity: 0}], {duration: 360, easing: 'ease-out'});
      cover.cancel();
      await reveal.finished;
    }
  }

  setNeon(themeRoot.dataset.theme === 'neon');
  toggle.hidden = false;
  toggle.addEventListener('pointerenter', prepareHero, {once: true});
  toggle.addEventListener('focus', prepareHero, {once: true});
  toggle.addEventListener('click', async () => {
    if (changing) return;
    changing = true;
    const enabled = themeRoot.dataset.theme !== 'neon';
    if (enabled) {
      prepareHero();
      playMusic();
    } else {
      audio.pause();
    }
    try {
      await transitionTheme(enabled);
    } catch {
      setNeon(enabled);
    } finally {
      changing = false;
    }
    try {
      if (enabled) localStorage.setItem(themeStorageKey, 'neon');
      else localStorage.removeItem(themeStorageKey);
    } catch {
      // Keep the current selection for this page.
    }
  });
});
