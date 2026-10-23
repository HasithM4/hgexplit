(() => {
  "use strict";
  const cards = [...document.querySelectorAll(".firmware-card")];
  const selectedLabel = document.getElementById("selected-firmware");
  const notice = document.getElementById("notice");
  const reset = document.getElementById("reset-profile");
  const supportedProfiles = new Set(["5.05", "6.72", "9.00"]);
  let selected = null;

  function chooseFirmware(firmware) {
    selected = firmware;
    cards.forEach(card => {
      const active = card.dataset.fw === firmware;
      card.classList.toggle("selected", active);
      card.setAttribute("aria-pressed", String(active));
    });
    selectedLabel.textContent = firmware === "other"
      ? "Other / not listed"
      : `PS4 firmware ${firmware}`;
    if (supportedProfiles.has(firmware)) {
      notice.textContent = `Profile selected: ${firmware}. This starter only records your selection; no exploit has been run and compatibility has not been verified. Review a compatible project before adding an integration.`;
    } else {
      notice.textContent = "Other firmware selected. Do not use a host or payload unless its documentation explicitly supports your exact system software version.";
    }
    try { localStorage.setItem("hg-ps4-firmware-profile", firmware); } catch (_) {}
  }

  cards.forEach(card => {
    card.setAttribute("aria-pressed", "false");
    card.addEventListener("click", () => chooseFirmware(card.dataset.fw));
  });

  reset.addEventListener("click", () => {
    selected = null;
    cards.forEach(card => {
      card.classList.remove("selected");
      card.setAttribute("aria-pressed", "false");
    });
    selectedLabel.textContent = "None selected";
    notice.textContent = "Choose a firmware profile to update this dashboard.";
    try { localStorage.removeItem("hg-ps4-firmware-profile"); } catch (_) {}
  });

  try {
    const saved = localStorage.getItem("hg-ps4-firmware-profile");
    if (saved && cards.some(card => card.dataset.fw === saved)) chooseFirmware(saved);
  } catch (_) {
    notice.textContent = "Dashboard ready. Local storage is unavailable; your selection will not persist after reload.";
  }
})();
