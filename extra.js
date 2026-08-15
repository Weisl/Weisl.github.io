/* On mobile the readthedocs sidebar renders every product's full page list
   as a flat, permanently-visible <ul> right under its <p class="caption">
   label - there's no collapse for that level at all, so opening the nav
   drawer on a phone dumps every page of every product on screen at once.
   Make each product group collapsible: tap the caption to toggle it, and
   start with only the current product's group open. */
(function () {
  function setupCollapsibleNavGroups() {
    if (!window.matchMedia("(max-width: 768px)").matches) return;

    document.querySelectorAll(".wy-menu-vertical > p.caption").forEach(function (caption) {
      var list = caption.nextElementSibling;
      if (!list || list.tagName !== "UL") return;

      var isCurrent = list.querySelector("li.current") !== null;

      caption.classList.add("nav-group-toggle");
      caption.setAttribute("role", "button");
      caption.setAttribute("tabindex", "0");

      function setOpen(open) {
        caption.classList.toggle("nav-group-open", open);
        caption.setAttribute("aria-expanded", open ? "true" : "false");
        list.style.maxHeight = open ? list.scrollHeight + "px" : "0px";
      }

      setOpen(isCurrent);

      caption.addEventListener("click", function () {
        setOpen(!caption.classList.contains("nav-group-open"));
      });
      caption.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setOpen(!caption.classList.contains("nav-group-open"));
        }
      });
    });
  }

  window.addEventListener("load", setupCollapsibleNavGroups);
})();
