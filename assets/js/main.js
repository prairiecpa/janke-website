(() => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  const closeBtn = document.querySelector("[data-nav-close]");

  if (!toggle || !panel) return;

  let lastFocused = null;

  const focusableSelector =
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const openNav = () => {
    lastFocused = document.activeElement;
    panel.dataset.open = "true";
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    const firstFocusable = panel.querySelector(focusableSelector);
    if (firstFocusable) firstFocusable.focus();
    document.addEventListener("keydown", onKeydown);
  };

  const closeNav = () => {
    panel.dataset.open = "false";
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused) lastFocused.focus();
  };

  const onKeydown = (event) => {
    if (event.key === "Escape") {
      closeNav();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = Array.from(panel.querySelectorAll(focusableSelector));
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  toggle.addEventListener("click", () => {
    const isOpen = panel.dataset.open === "true";
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeNav);
  }

  const mediaQuery = window.matchMedia("(min-width: 1024px)");
  mediaQuery.addEventListener("change", (event) => {
    if (event.matches && panel.dataset.open === "true") {
      closeNav();
    }
  });
})();
