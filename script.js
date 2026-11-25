(() => {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const car = document.querySelector(".scene-car");
  const carState = document.getElementById("car-state");
  const carSearch = document.getElementById("car-search");
  const socialCards = Array.from(document.querySelectorAll(".social-grid .social-card"));
  const toast = document.getElementById("toast");
  let toastTimer;

  carState.checked = false;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
  }

  car.addEventListener("click", (event) => {
    if (event.target.closest("#car-search")) return;
    carState.checked = !carState.checked;
  });

  carSearch.addEventListener("click", () => {
    searchInput.focus({ preventScroll: true });
  });

  function filterSocialCards(query) {
    const normalized = query.trim().toLocaleLowerCase("ar");
    let visibleCount = 0;

    socialCards.forEach((card) => {
      const terms = (card.dataset.search || "").toLocaleLowerCase("ar");
      const matches = !normalized || terms.includes(normalized);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    return visibleCount;
  }

  searchInput.addEventListener("input", () => {
    filterSocialCards(searchInput.value);
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
      searchInput.focus();
      showToast("اكتب اسم منصة للبحث محلياً.");
      return;
    }

    const resultCount = filterSocialCards(query);
    if (!resultCount) {
      showToast("لا توجد منصة مطابقة. لم يتم إرسال البحث إلى الإنترنت.");
      return;
    }

    showToast(resultCount === 1 ? "تم العثور على منصة مطابقة." : `تم العثور على ${resultCount} منصات.`);
  });
})();
