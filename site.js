const localeLinks = Array.from(document.querySelectorAll('[data-lang]'));
const locales = new Set(localeLinks.map(link => link.dataset.lang));
const menu = document.querySelector('.more-languages');
const menuLabel = document.getElementById('more-languages-label');
const extraLanguage = document.getElementById('active-extra-language');
const moreLanguages = {
  en: 'More languages', pt: 'Mais idiomas', es: 'Más idiomas', fr: 'Plus de langues',
  de: 'Weitere Sprachen', ja: 'ほかの言語', ru: 'Другие языки', 'zh-Hans': '更多语言',
  hi: 'और भाषाएँ', ar: 'لغات أخرى', bn: 'আরও ভাষা'
};
const strings = Array.from(document.querySelectorAll('[data-i18n]'), element => {
  const attribute = element.matches('img') ? 'alt' : element.hasAttribute('aria-label') ? 'aria-label' : null;
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
  const activeLink = localeLinks.find(link => link.dataset.lang === language);
  menuLabel.textContent = moreLanguages[language];
  extraLanguage.hidden = !menu.contains(activeLink);
  extraLanguage.textContent = extraLanguage.hidden ? '' : activeLink.textContent;
  extraLanguage.lang = activeLink.lang;
  for (const { element, attribute, english, portuguese, index } of strings) {
    const text = language === 'pt' ? portuguese :
      window.portfolioTranslations[language]?.[index] ?? english;
    if (element.matches('title')) document.title = 'Marlon Ribeiro — ' + text;
    else if (attribute) element.setAttribute(attribute, text);
    else element.textContent = text;
  }
  for (const link of document.querySelectorAll('[data-destination]')) {
    const params = new URLSearchParams({to: link.dataset.destination});
    if (language !== 'en') params.set('lang', language);
    link.href = 'leave.html?' + params;
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
    if (menu.contains(link)) {
      menu.open = false;
      menu.querySelector('summary').focus({preventScroll: true});
    }
  });
}

window.addEventListener('popstate', applyURL);
applyURL();
