// js/allergen.js – her yenilemede tekrar göster
(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    const el = document.querySelector(".allergen-notice");
    if (!el) return;

    const p = el.querySelector(".allergen-text");
    if (!p) return;

    // Dil tespiti ve metni atama
    const rawLang =
      (document.documentElement.getAttribute("lang") || "en").toLowerCase();
    const norm = rawLang.split(/[-_]/)[0]; // "tr-TR" -> "tr"

    const textTR = p.getAttribute("data-lang-tr");
    const textEN = p.getAttribute("data-lang-en");
    const textRU = p.getAttribute("data-lang-ru");
    const byLang = { tr: textTR, en: textEN, ru: textRU };
    p.textContent = byLang[norm] || textEN || textTR || textRU || "";

    // Kapatma (kalıcı değil; sadece bu sayfa görüntüsünde)
    const btn = el.querySelector(".allergen-close");
    if (btn) {
      btn.addEventListener("click", function () {
        el.classList.add("hide");
        setTimeout(() => {
          el.style.display = "none";
        }, 350);
      });
    }
  });
})();
