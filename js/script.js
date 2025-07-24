// Dil seçimi dropdown'ını bul
const select = document.getElementById('languageSelect');

// Eğer sayfada dil seçimi dropdown'ı varsa, dinle
if (select) {
  select.addEventListener('change', () => {
    const lang = select.value;
    if (lang === 'en') {
      window.location.href = '../en/index.html';
    } else if (lang === 'tr') {
      window.location.href = '../tr/index.html';
    } else if (lang === 'ru') {
      window.location.href = '../ru/index.html';
    }
  });
}
