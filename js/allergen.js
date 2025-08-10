// js/allergen.js
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
    if (!el) return; // Sayfada uyarı yoksa çık

    // Daha önce kapatıldıysa gösterme
    try {
      if (localStorage.getItem("allergenDismissed") === "1") {
        el.style.display = "none";
        return;
      }
    } catch (_) {
      // localStorage kapalıysa sessizce devam et
    }

    const p = el.querySelector(".allergen-text");
    if (!p) return;

    // Dil tespiti (tr, en, ru'ya normalize)
    const rawLang =
      (document.documentElement.getAttribute("lang") || "en").toLowerCase();
    const norm = rawLang.split(/[-_]/)[0]; // "tr-TR" -> "tr"

    const textTR = p.getAttribute("data-lang-tr");
    const textEN = p.getAttribute("data-lang-en");
    const textRU = p.getAttribute("data-lang-ru");

    const byLang = { tr: textTR, en: textEN, ru: textRU };
    p.textContent = byLang[norm] || textEN || textTR || textRU || "";

    // Kapatma butonu
    const btn = el.querySelector(".allergen-close");
    if (btn) {
      btn.addEventListener("click", function () {
        el.classList.add("hide");
        try {
          localStorage.setItem("allergenDismissed", "1");
        } catch (_) {}
        setTimeout(() => {
          el.style.display = "none";
        }, 350);
      });
    }
  });
})();
