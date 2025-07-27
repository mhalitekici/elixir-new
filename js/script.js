// Dil seçimi dropdown'ını bul
const select = document.getElementById('languageSelect');

// Eğer sayfada dil seçimi dropdown'ı varsa, dinle
if (select) {
  select.addEventListener('change', () => {
    const lang = select.value;
    if (lang === 'en') {
      window.location.href = 'index.html';      // İngilizce
    } else if (lang === 'tr') {
      window.location.href = 'indextr.html';    // Türkçe
    } else if (lang === 'ru') {
      window.location.href = 'indexru.html';    // Rusça
    }
  });
}
// MODAL FUNCTIONALITY
const modal = document.getElementById('itemModal');
const modalImg = document.getElementById('modalImg');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close-btn');

const items = document.querySelectorAll('.menu-item');
items.forEach(item => {
  item.addEventListener('click', () => {
    modalImg.src = item.getAttribute('data-img');
    modalDesc.textContent = item.getAttribute('data-desc');
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
