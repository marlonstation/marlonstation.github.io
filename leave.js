const destinations = {
  "linkedin": {
    "url": "https://www.linkedin.com/in/marlonrt/"
  },
  "monitormac": {
    "url": "https://github.com/marlonstation/MonitorMac"
  },
  "monitormac-dmg": {
    "url": "https://github.com/marlonstation/MonitorMac/raw/main/MonitorMac.dmg"
  },
  "donkey-barrel": {
    "url": "https://play.google.com/store/apps/details?id=com.dreamar.donkeybarrel"
  },
  "carmarlon": {
    "url": "https://github.com/marlonrt/carmarlon"
  },
  "fastpicrud": {
    "url": "https://github.com/marlonrt/fastpicrud"
  },
  "simulove": {
    "url": "https://steamcommunity.com/app/3087490",
    "adult": "SimuLOVE! Vol. 1"
  },
  "recall": {
    "url": "https://store.steampowered.com/app/3855000/ReCall/"
  },
  "rent-a-girl": {
    "url": "https://store.steampowered.com/app/3781460/Namorada_de_Aluguel/",
    "adult": "Rent a Girl"
  },
  "divine-awakening": {
    "url": "https://store.steampowered.com/app/3922860/",
    "adult": "Divine Awakening"
  },
  "lilith-rising": {
    "url": "https://store.steampowered.com/app/2864850/",
    "adult": "Lilith Rising – Season 2"
  },
  "battlecode": {
    "url": "https://2026a.battlecode.co.uk/"
  },
  "github": {
    "url": "https://github.com/marlonstation"
  }
};

const params = new URLSearchParams(location.search);
const translations = window.exitConfirmationTranslations;
const requestedLanguage = params.get('lang');
const language = Object.hasOwn(translations, requestedLanguage) ? requestedLanguage : 'en';
const labels = translations[language];
const fields = [
  'exit-title', 'exit-message', 'exit-destination-label', 'adult-title',
  'adult-message', 'exit-cancel', 'exit-continue'
];

document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
document.title = labels[0] + ' · Marlon Ribeiro';
fields.forEach((id, index) => { document.getElementById(id).textContent = labels[index]; });

const back = document.getElementById('exit-cancel');
if (language !== 'en') back.href = './?lang=' + encodeURIComponent(language);
back.addEventListener('click', event => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      !document.referrer || history.length < 2) return;
  const referrer = new URL(document.referrer);
  const portfolio = new URL('./', location.href);
  if (referrer.origin !== portfolio.origin ||
      (referrer.pathname !== portfolio.pathname && referrer.pathname !== portfolio.pathname + 'index.html')) return;
  event.preventDefault();
  history.back();
});

const key = params.get('to');
if (Object.hasOwn(destinations, key)) {
  const destination = destinations[key];
  const host = document.getElementById('exit-host');
  const proceed = document.getElementById('exit-continue');
  host.textContent = new URL(destination.url).hostname;
  host.parentElement.hidden = false;
  proceed.href = destination.url;
  proceed.hidden = false;
  if (destination.adult) {
    document.getElementById('adult-game').textContent = destination.adult;
    document.getElementById('adult-content').hidden = false;
  }
} else {
  document.getElementById('exit-message').hidden = true;
}
