(() => {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const scene = document.getElementById("drive-scene");
  const car = document.querySelector(".scene-car");
  const carState = document.getElementById("car-state");
  const carSearch = document.getElementById("car-search");
  const submitButton = searchForm.querySelector(".search-submit");
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

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
      searchInput.focus();
      showToast("اكتب كلمة للبحث أو عنوان موقع أولاً.");
      return;
    }

    let destination;
    try {
      const candidate = /^https?:\/\//i.test(query) ? query : `https://${query}`;
      const url = new URL(candidate);
      destination = ["http:", "https:"].includes(url.protocol) && url.hostname.includes(".")
        ? url.href
        : null;
    } catch {
      destination = null;
    }

    if (!destination) {
      destination = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
    }

    scene.classList.add("is-driving");
    searchForm.classList.add("is-searching");
    submitButton.disabled = true;
    window.setTimeout(() => window.location.assign(destination), 850);
  });
})();
