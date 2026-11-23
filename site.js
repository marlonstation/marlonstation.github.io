const localeLinks = Array.from(document.querySelectorAll('[data-lang]'));
const locales = new Set(localeLinks.map(link => link.dataset.lang));
const strings = Array.from(document.querySelectorAll('[data-i18n]'), element => {
  const attribute = element.matches('img') ? 'alt' : element.matches('nav') ? 'aria-label' : null;
  const english = element.matches('title') ? 'Software Developer' :
    attribute ? element.getAttribute(attribute) : element.textContent;
  return {
    element, attribute, english,
    portuguese: element.dataset.altPt ?? element.dataset.pt,
    index: Number(element.dataset.i18n)
  };
});

function applyLanguage(language) {
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  for (const { element, attribute, english, portuguese, index } of strings) {
    const text = language === 'pt' ? portuguese :
      window.portfolioTranslations[language]?.[index] ?? english;
    if (element.matches('title')) document.title = 'Marlon Ribeiro — ' + text;
    else if (attribute) element.setAttribute(attribute, text);
    else element.textContent = text;
  }
  for (const link of localeLinks) {
    if (link.dataset.lang === language) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  }
}

function applyURL() {
  const requested = new URLSearchParams(location.search).get('lang');
  applyLanguage(locales.has(requested) ? requested : 'en');
}

for (const link of localeLinks) {
  link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const url = new URL(location.href);
    if (link.dataset.lang === 'en') url.searchParams.delete('lang');
    else url.searchParams.set('lang', link.dataset.lang);
    if (url.href !== location.href) history.pushState(null, '', url);
    applyURL();
  });
}

window.addEventListener('popstate', applyURL);
applyURL();

const warning = document.querySelector('#adult-warning');
const warningGame = document.querySelector('#adult-game');
const warningContinue = document.querySelector('#adult-continue');
const warningFields = ['adult-title', 'adult-message', 'adult-cancel', 'adult-continue'];
let warningTrigger;

function showAdultWarning(event) {
  if (event.defaultPrevented || (event.type === 'auxclick' && event.button !== 1) ||
      typeof warning.showModal !== 'function') return;

  event.preventDefault();
  const link = event.currentTarget;
  const language = document.documentElement.lang === 'pt-BR' ? 'pt' : document.documentElement.lang;
  const translations = window.adultWarningTranslations;
  const labels = translations[language] ?? translations.en;
  warningFields.forEach((id, index) => {
    document.getElementById(id).textContent = labels[index];
  });
  warningGame.textContent = link.dataset.adult;
  warningContinue.href = link.href;
  warningTrigger = link;
  warning.showModal();
}

for (const link of document.querySelectorAll('[data-adult]')) {
  link.addEventListener('click', showAdultWarning);
  link.addEventListener('auxclick', showAdultWarning);
}

warningContinue.addEventListener('click', () => warning.close());
warning.addEventListener('close', () => warningTrigger?.focus());
