// Dil seçimi dropdown'ını bul
const select = document.getElementById('languageSelect');

// Eğer sayfada dil seçimi dropdown'ı varsa, dinle
if (select) {
  select.addEventListener('change', () => {
    const lang = select.value;
    if (lang === 'en') {
      window.location.href = 'index.html';
    } else if (lang === 'tr') {
      window.location.href = '/indextr.html';
    } else if (lang === 'ru') {
      window.location.href = '/indexru.html';
    }
  });
}
