const toggle = document.querySelector('#language');
const copy = Array.from(document.querySelectorAll('[data-pt]'), el => ({
  el, en: el.textContent, pt: el.dataset.pt
}));
const images = Array.from(document.querySelectorAll('[data-alt-pt]'), el => ({
  el, en: el.alt, pt: el.dataset.altPt
}));

function setLanguage(language) {
  const portuguese = language === 'pt';
  document.documentElement.lang = portuguese ? 'pt-BR' : 'en';
  for (const { el, en, pt } of copy) el.textContent = portuguese ? pt : en;
  for (const { el, en, pt } of images) el.alt = portuguese ? pt : en;
  toggle.textContent = portuguese ? 'EN' : 'PT-BR';
  toggle.setAttribute('aria-label', portuguese ? 'Switch to English' : 'Mudar para português');
  document.title = portuguese ? 'Marlon Ribeiro — Desenvolvedor de software' : 'Marlon Ribeiro — Software Developer';
}

const params = new URLSearchParams(location.search);
setLanguage(params.get('lang') === 'pt' ? 'pt' : 'en');
toggle.addEventListener('click', () => {
  const language = document.documentElement.lang === 'en' ? 'pt' : 'en';
  setLanguage(language);
  const url = new URL(location.href);
  if (language === 'pt') url.searchParams.set('lang', 'pt');
  else url.searchParams.delete('lang');
  history.replaceState(null, '', url);
});
