const showcaseCopy = {
  en: {
    overlay: 'Floating panel', history: 'History', sample: 'Interactive demo · Sample readings',
    load: 'Simulate load', reset: 'Reset readings', branch: 'Branching narrative example',
    choice: 'Player choice', pathA: 'Path A', pathB: 'Path B', scene: 'Next scene', movies: 'Movie API',
    moviesDescription: 'I built a FastAPI service with a typed movie model and endpoints to list, add, update, and remove entries. Try the genre filter with sample data from the project.',
    genre: 'Genre', action: 'Action', scifi: 'Sci-fi', drama: 'Drama', apiSource: 'View API code'
  },
  pt: {
    overlay: 'Painel flutuante', history: 'Histórico', sample: 'Demo interativa · Leituras de exemplo',
    load: 'Simular carga', reset: 'Restaurar leituras', branch: 'Exemplo de narrativa ramificada',
    choice: 'Escolha do jogador', pathA: 'Caminho A', pathB: 'Caminho B', scene: 'Próxima cena', movies: 'API de filmes',
    moviesDescription: 'Criei uma API em FastAPI com um modelo de filme validado e rotas para listar, cadastrar, editar e excluir registros. Experimente o filtro por gênero com dados de exemplo do projeto.',
    genre: 'Gênero', action: 'Ação', scifi: 'Ficção científica', drama: 'Drama', apiSource: 'Ver código da API'
  },
  es: {
    overlay: 'Panel flotante', history: 'Historial', sample: 'Demo interactiva · Lecturas de ejemplo',
    load: 'Simular carga', reset: 'Restablecer lecturas', branch: 'Ejemplo de narrativa ramificada',
    choice: 'Elección del jugador', pathA: 'Ruta A', pathB: 'Ruta B', scene: 'Escena siguiente', movies: 'API de películas',
    moviesDescription: 'Creé un servicio en FastAPI con un modelo de película tipado y rutas para listar, añadir, editar y eliminar registros. Prueba el filtro por género con datos de ejemplo del proyecto.',
    genre: 'Género', action: 'Acción', scifi: 'Ciencia ficción', drama: 'Drama', apiSource: 'Ver código de la API'
  },
  fr: {
    overlay: 'Panneau flottant', history: 'Historique', sample: 'Démo interactive · Mesures d’exemple',
    load: 'Simuler une charge', reset: 'Réinitialiser les mesures', branch: 'Exemple de récit à embranchements',
    choice: 'Choix du joueur', pathA: 'Parcours A', pathB: 'Parcours B', scene: 'Scène suivante', movies: 'API de films',
    moviesDescription: 'J’ai créé un service FastAPI avec un modèle de film typé et des routes de lecture, d’ajout, de modification et de suppression. Essayez le filtre par genre avec les données d’exemple du projet.',
    genre: 'Genre', action: 'Action', scifi: 'Science-fiction', drama: 'Drame', apiSource: 'Voir le code de l’API'
  },
  de: {
    overlay: 'Schwebendes Fenster', history: 'Verlauf', sample: 'Interaktive Demo · Beispielwerte',
    load: 'Last simulieren', reset: 'Messwerte zurücksetzen', branch: 'Beispiel für eine verzweigte Handlung',
    choice: 'Entscheidung des Spielers', pathA: 'Pfad A', pathB: 'Pfad B', scene: 'Nächste Szene', movies: 'Film-API',
    moviesDescription: 'Ich habe einen FastAPI-Dienst mit einem typisierten Filmdatenmodell und Routen zum Anzeigen, Hinzufügen, Ändern und Löschen entwickelt. Der Genrefilter nutzt Beispieldaten aus dem Projekt.',
    genre: 'Genre', action: 'Action', scifi: 'Science-Fiction', drama: 'Drama', apiSource: 'API-Code ansehen'
  },
  ja: {
    overlay: 'フローティングパネル', history: '履歴', sample: '操作できるデモ · サンプル値',
    load: '負荷をシミュレート', reset: '測定値をリセット', branch: '分岐するストーリーの例',
    choice: 'プレイヤーの選択', pathA: 'ルート A', pathB: 'ルート B', scene: '次のシーン', movies: '映画 API',
    moviesDescription: 'FastAPI で、型を定義した映画モデルと、一覧取得・追加・更新・削除の各エンドポイントを実装しました。プロジェクトのサンプルデータでジャンル検索を試せます。',
    genre: 'ジャンル', action: 'アクション', scifi: 'SF', drama: 'ドラマ', apiSource: 'API のコードを見る'
  },
  ru: {
    overlay: 'Плавающая панель', history: 'История', sample: 'Интерактивное демо · Пример показаний',
    load: 'Имитировать нагрузку', reset: 'Сбросить показания', branch: 'Пример ветвящегося сюжета',
    choice: 'Выбор игрока', pathA: 'Ветка A', pathB: 'Ветка B', scene: 'Следующая сцена', movies: 'API фильмов',
    moviesDescription: 'Я создал сервис FastAPI с типизированной моделью фильма и методами для просмотра, добавления, редактирования и удаления записей. Попробуйте фильтр по жанру на данных из проекта.',
    genre: 'Жанр', action: 'Боевик', scifi: 'Фантастика', drama: 'Драма', apiSource: 'Посмотреть код API'
  },
  'zh-Hans': {
    overlay: '悬浮面板', history: '历史记录', sample: '互动演示 · 示例读数',
    load: '模拟负载', reset: '重置读数', branch: '分支叙事示例',
    choice: '玩家选择', pathA: '路线 A', pathB: '路线 B', scene: '下一场景', movies: '电影 API',
    moviesDescription: '我用 FastAPI 开发了一个服务，包含带类型的电影数据模型，以及查询、新增、更新和删除记录的接口。你可以用项目的示例数据试用类型筛选。',
    genre: '类型', action: '动作', scifi: '科幻', drama: '剧情', apiSource: '查看 API 代码'
  },
  hi: {
    overlay: 'फ़्लोटिंग पैनल', history: 'इतिहास', sample: 'इंटरैक्टिव डेमो · नमूना रीडिंग',
    load: 'लोड का सिमुलेशन', reset: 'रीडिंग रीसेट करें', branch: 'शाखाओं वाली कहानी का उदाहरण',
    choice: 'खिलाड़ी का चुनाव', pathA: 'रास्ता A', pathB: 'रास्ता B', scene: 'अगला दृश्य', movies: 'फ़िल्म API',
    moviesDescription: 'मैंने FastAPI में टाइप वाले फ़िल्म मॉडल और रिकॉर्ड देखने, जोड़ने, बदलने और हटाने के एंडपॉइंट बनाए। प्रोजेक्ट के नमूना डेटा पर शैली का फ़िल्टर आज़माएँ।',
    genre: 'शैली', action: 'एक्शन', scifi: 'विज्ञान कथा', drama: 'ड्रामा', apiSource: 'API का कोड देखें'
  },
  ar: {
    overlay: 'اللوحة العائمة', history: 'السجل', sample: 'عرض تفاعلي · قراءات توضيحية',
    load: 'محاكاة الحمل', reset: 'إعادة ضبط القراءات', branch: 'مثال على السرد المتشعّب',
    choice: 'اختيار اللاعب', pathA: 'المسار أ', pathB: 'المسار ب', scene: 'المشهد التالي', movies: 'واجهة برمجة للأفلام',
    moviesDescription: 'طوّرت خدمة FastAPI بنموذج أفلام محدد الأنواع ونقاط نهاية لعرض السجلات وإضافتها وتعديلها وحذفها. جرّب التصفية حسب النوع باستخدام بيانات نموذجية من المشروع.',
    genre: 'النوع', action: 'أكشن', scifi: 'خيال علمي', drama: 'دراما', apiSource: 'اعرض شيفرة الواجهة'
  },
  bn: {
    overlay: 'ভাসমান প্যানেল', history: 'ইতিহাস', sample: 'ইন্টার‌্যাক্টিভ ডেমো · নমুনা রিডিং',
    load: 'লোড অনুকরণ করুন', reset: 'রিডিং রিসেট করুন', branch: 'শাখায় বিভক্ত গল্পের উদাহরণ',
    choice: 'খেলোয়াড়ের পছন্দ', pathA: 'পথ A', pathB: 'পথ B', scene: 'পরবর্তী দৃশ্য', movies: 'সিনেমার API',
    moviesDescription: 'FastAPI দিয়ে টাইপযুক্ত সিনেমার মডেল ও রেকর্ড দেখার, যোগ করার, সম্পাদনা এবং মুছে ফেলার এন্ডপয়েন্ট তৈরি করেছি। প্রকল্পের নমুনা ডেটা দিয়ে ধরন অনুযায়ী ফিল্টার করে দেখুন।',
    genre: 'ধরন', action: 'অ্যাকশন', scifi: 'কল্পবিজ্ঞান', drama: 'নাটক', apiSource: 'API-এর কোড দেখুন'
  }
};

const monitorDemo = document.querySelector('.monitor-demo');
const loadButton = document.querySelector('#demo-load');
const monitorButtons = [...document.querySelectorAll('[data-monitor-view]')];
const readings = {
  cpu: document.querySelector('#demo-cpu'),
  gpu: document.querySelector('#demo-gpu'),
  ram: document.querySelector('#demo-ram'),
  memory: document.querySelector('#demo-memory'),
  summary: document.querySelector('#demo-readings')
};
const movieButtons = [...document.querySelectorAll('[data-movie-genre]')];
const movieResults = document.querySelector('#movies-result');
const movieRequest = document.querySelector('#movies-request');
const showExamples = [
  ['The Dark Knight', 'action'], ['Inception', 'action'], ['The Matrix', 'action'],
  ['Interstellar', 'sci-fi'], ['The Shawshank Redemption', 'drama']
];
const monitorSamples = {
  idle: {cpu: 62, gpu: 54, ram: 80, memory: '19.2'},
  busy: {cpu: 73, gpu: 65, ram: 88, memory: '21.1'}
};
let simulatedLoad = false;
let copy = showcaseCopy.en;

function selectMonitorView(view) {
  for (const button of monitorButtons) {
    const selected = button.dataset.monitorView === view;
    button.setAttribute('aria-pressed', String(selected));
    document.getElementById(button.getAttribute('aria-controls')).hidden = !selected;
  }
  loadButton.hidden = view !== 'overlay';
}

function applyLoad(announce) {
  const sample = monitorSamples[simulatedLoad ? 'busy' : 'idle'];
  loadButton.setAttribute('aria-pressed', String(simulatedLoad));
  loadButton.textContent = copy[simulatedLoad ? 'reset' : 'load'];
  readings.cpu.textContent = sample.cpu + '°';
  readings.gpu.textContent = sample.gpu + '°';
  readings.ram.textContent = sample.ram + '%';
  readings.memory.textContent = sample.memory + ' / 24 GiB';
  monitorDemo.style.setProperty('--ram-level', sample.ram + '%');
  if (announce) readings.summary.textContent = 'CPU ' + sample.cpu + '° · GPU ' + sample.gpu + '° · RAM ' + sample.ram + '%';
}

function selectGenre(genre) {
  for (const button of movieButtons) {
    button.setAttribute('aria-pressed', String(button.dataset.movieGenre === genre));
  }
  movieRequest.textContent = 'GET /movies/?Genre=' + encodeURIComponent(genre);
  const matching = showExamples.filter(([, category]) => category === genre);
  movieResults.replaceChildren(...matching.map(([title]) => {
    const item = document.createElement('li');
    item.textContent = title;
    return item;
  }));
}

function translateShowcase(language) {
  copy = showcaseCopy[language] ?? showcaseCopy.en;
  for (const element of document.querySelectorAll('[data-showcase]')) {
    element.textContent = copy[element.dataset.showcase];
  }
  for (const element of document.querySelectorAll('[data-showcase-label]')) {
    element.setAttribute('aria-label', copy[element.dataset.showcaseLabel]);
  }
  applyLoad(false);
}

monitorDemo.classList.add('is-interactive');
selectMonitorView('overlay');
for (const button of monitorButtons) button.addEventListener('click', () => selectMonitorView(button.dataset.monitorView));
loadButton.addEventListener('click', () => {
  simulatedLoad = !simulatedLoad;
  applyLoad(true);
});
for (const button of movieButtons) button.addEventListener('click', () => selectGenre(button.dataset.movieGenre));
document.addEventListener('portfolio:language', event => translateShowcase(event.detail));
translateShowcase(document.documentElement.lang === 'pt-BR' ? 'pt' : document.documentElement.lang);
