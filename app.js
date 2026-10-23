(() => {
  "use strict";

  const cards = Array.from(document.querySelectorAll(".firmware-card"));
  const selectedLabel = document.getElementById("selected-firmware");
  const selectionHint = document.getElementById("selection-hint");
  const referenceButton = document.getElementById("open-reference");
  const resetButton = document.getElementById("reset-profile");

  // These links are upstream references, not payloads hosted by HG.
  const referenceHosts = {
    "5.05": { url: "https://gamerhack.github.io/505/index.html", label: "5.05 reference selected" },
    "6.72": { url: "https://gamerhack.github.io/672goldhen/index.html", label: "6.72 GoldHEN reference selected" },
    "9.00": { url: "https://gamerhack.github.io/900goldhen/index.html", label: "9.00 GoldHEN reference selected" }
  };

  function selectProfile(profile, save = true) {
    const known = cards.some(card => card.dataset.fw === profile);
    if (!known) return;

    cards.forEach(card => {
      const active = card.dataset.fw === profile;
      card.classList.toggle("selected", active);
      card.setAttribute("aria-pressed", String(active));
    });

    selectedLabel.textContent = profile === "other" ? "Other / unknown firmware" : "PS4 firmware " + profile;

    const reference = referenceHosts[profile];
    if (reference) {
      selectionHint.textContent = "Upstream reference only — not hosted by HG.";
      referenceButton.href = reference.url;
      referenceButton.classList.remove("disabled");
      referenceButton.setAttribute("aria-disabled", "false");
      referenceButton.setAttribute("target", "_blank");
      referenceButton.setAttribute("rel", "noopener noreferrer");
      referenceButton.title = "Open the upstream community host for " + profile;
    } else {
      selectionHint.textContent = "No reference selected. Verify compatibility before using a host.";
      referenceButton.href = "#";
      referenceButton.classList.add("disabled");
      referenceButton.setAttribute("aria-disabled", "true");
      referenceButton.removeAttribute("target");
      referenceButton.removeAttribute("rel");
      referenceButton.title = "Select a listed profile to open its upstream reference";
    }

    if (save) {
      try { localStorage.setItem("hg-ps4-profile", profile); } catch (_) {}
    }
  }

  cards.forEach(card => {
    card.addEventListener("click", () => selectProfile(card.dataset.fw));
  });

  resetButton.addEventListener("click", () => {
    cards.forEach(card => {
      card.classList.remove("selected");
      card.setAttribute("aria-pressed", "false");
    });
    selectedLabel.textContent = "No firmware selected";
    selectionHint.textContent = "Select a profile to see available references.";
    referenceButton.href = "#";
    referenceButton.classList.add("disabled");
    referenceButton.setAttribute("aria-disabled", "true");
    referenceButton.removeAttribute("target");
    referenceButton.removeAttribute("rel");
    try { localStorage.removeItem("hg-ps4-profile"); } catch (_) {}
  });

  try {
    const saved = localStorage.getItem("hg-ps4-profile");
    if (saved && cards.some(card => card.dataset.fw === saved)) selectProfile(saved, false);
  } catch (_) {
    selectionHint.textContent = "Browser storage unavailable; selection won't be remembered.";
  }
})();
