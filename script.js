const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

const updateToggle = () => {
  if (!toggle) return;
  const dark = root.dataset.theme === "dark";
  toggle.textContent = dark ? "Light" : "Dark";
  toggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
};

toggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
  updateToggle();
});

updateToggle();

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();

const newsViewport = document.querySelector(".news-viewport");
const newsTrack = document.querySelector(".news-track");
const previousNews = document.querySelector(".news-prev");
const nextNews = document.querySelector(".news-next");

if (newsViewport && newsTrack && previousNews && nextNews) {
  const updateNewsControls = () => {
    const maxScroll = newsViewport.scrollHeight - newsViewport.clientHeight;
    previousNews.disabled = newsViewport.scrollTop <= 2;
    nextNews.disabled = newsViewport.scrollTop >= maxScroll - 2;
  };

  const moveNews = (direction) => {
    const cards = [...newsTrack.querySelectorAll(".news-card")];
    if (!cards.length) return;

    const currentIndex = cards.reduce((closestIndex, card, index) => {
      const currentDistance = Math.abs(card.offsetTop - newsViewport.scrollTop);
      const closestDistance = Math.abs(cards[closestIndex].offsetTop - newsViewport.scrollTop);
      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
    const targetIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));

    newsViewport.scrollTo({
      top: cards[targetIndex].offsetTop,
      behavior: "smooth",
    });
  };

  previousNews.addEventListener("click", () => moveNews(-1));
  nextNews.addEventListener("click", () => moveNews(1));
  newsViewport.addEventListener("scroll", updateNewsControls, { passive: true });
  window.addEventListener("resize", updateNewsControls);
  updateNewsControls();
}

const publicationDetailButtons = [...document.querySelectorAll(".publication-actions button[data-detail]")];

if (publicationDetailButtons.length) {
  const dialog = document.createElement("dialog");
  dialog.className = "publication-dialog";
  dialog.setAttribute("aria-labelledby", "publication-dialog-title");
  dialog.innerHTML = `
    <div class="publication-dialog-header">
      <div>
        <span class="publication-dialog-label"></span>
        <h2 id="publication-dialog-title"></h2>
      </div>
      <button class="publication-dialog-close" type="button" aria-label="Close">×</button>
    </div>
    <div class="publication-dialog-content"></div>
  `;
  document.body.append(dialog);

  const dialogLabel = dialog.querySelector(".publication-dialog-label");
  const dialogTitle = dialog.querySelector("#publication-dialog-title");
  const dialogContent = dialog.querySelector(".publication-dialog-content");

  publicationDetailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const publicationItem = button.closest(".publication-item");
      const publication = window.publicationDetails?.[publicationItem?.dataset.paperId];
      if (!publication) return;

      const showBibtex = button.dataset.detail === "bibtex";
      dialogLabel.textContent = showBibtex ? "BibTeX" : "Abstract";
      dialogTitle.textContent = publication.title;
      dialogContent.replaceChildren();

      if (showBibtex) {
        const pre = document.createElement("pre");
        const code = document.createElement("code");
        code.textContent = publication.bibtex;
        pre.append(code);
        dialogContent.append(pre);
      } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = publication.abstract || "Exact abstract text is not included yet. Please use the Paper link for the official abstract.";
        dialogContent.append(paragraph);
      }

      dialog.showModal();
    });
  });

  dialog.querySelector(".publication-dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

const filterMenus = [...document.querySelectorAll(".filter-menu[data-filter]")];
const resetPublicationFilters = document.querySelector("#reset-publication-filters");
const publicationResultCount = document.querySelector("#publication-result-count");

if (filterMenus.length && resetPublicationFilters && publicationResultCount) {
  const publicationItems = [...document.querySelectorAll(".publication-archive .publication-item")];
  const yearGroups = [...document.querySelectorAll(".publication-archive .year-group")];

  const getSelectedValues = (menu) =>
    new Set([...menu.querySelectorAll('input[type="checkbox"]:checked')].map((input) => input.value));

  const updateFilterSummary = (menu) => {
    const summary = menu.querySelector("summary");
    const checked = [...menu.querySelectorAll('input[type="checkbox"]:checked')];
    if (!summary) return;

    if (checked.length === 0) {
      summary.textContent = summary.dataset.defaultLabel;
    } else if (checked.length === 1) {
      summary.textContent = checked[0].closest("label").textContent.trim();
    } else {
      summary.textContent = `${checked.length} selected`;
    }
  };

  const applyPublicationFilters = () => {
    let visibleCount = 0;
    const selected = Object.fromEntries(
      filterMenus.map((menu) => [menu.dataset.filter, getSelectedValues(menu)]),
    );

    publicationItems.forEach((item) => {
      const visible = Object.entries(selected).every(
        ([filter, values]) => values.size === 0 || values.has(item.dataset[filter]),
      );

      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    yearGroups.forEach((group) => {
      group.hidden = !group.querySelector(".publication-item:not([hidden])");
    });

    publicationResultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "publication" : "publications"}`;
  };

  filterMenus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
      if (!menu.open) return;
      const options = menu.querySelector(".filter-options");
      if (options) options.scrollTop = 0;
      filterMenus.forEach((otherMenu) => {
        if (otherMenu !== menu) otherMenu.open = false;
      });
    });

    menu.addEventListener("change", () => {
      updateFilterSummary(menu);
      applyPublicationFilters();
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".filter-menu")) return;
    filterMenus.forEach((menu) => {
      menu.open = false;
    });
  });

  resetPublicationFilters.addEventListener("click", () => {
    filterMenus.forEach((menu) => {
      menu.querySelectorAll('input[type="checkbox"]').forEach((input) => {
        input.checked = false;
      });
      menu.open = false;
      updateFilterSummary(menu);
    });
    applyPublicationFilters();
  });

  filterMenus.forEach(updateFilterSummary);
  applyPublicationFilters();
}
