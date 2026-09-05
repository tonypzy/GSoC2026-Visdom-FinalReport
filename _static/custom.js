// SPDX-License-Identifier: Apache-2.0

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector("#pst-primary-sidebar");
  const primaryToggles = Array.from(
    document.querySelectorAll("button.primary-toggle")
  );
  const desktopMedia = window.matchMedia("(min-width: 992px)");

  // The theme handles a single toggle correctly. The fallback is only needed
  // when an extra header toggle causes the theme to bind the hidden button.
  if (!sidebar || primaryToggles.length < 2) {
    return;
  }

  const setTogglesExpanded = (isExpanded) => {
    primaryToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", String(isExpanded));
    });
  };

  const setMobileSidebarOpen = (isOpen) => {
    sidebar.classList.toggle("report-sidebar-open", isOpen);
    document.body.classList.toggle("report-primary-sidebar-open", isOpen);
    setTogglesExpanded(isOpen);
  };

  const updateDesktopExpandedState = () => {
    setTogglesExpanded(!sidebar.classList.contains("pst-sidebar-hidden"));
  };

  primaryToggles.forEach((toggle) => {
    toggle.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (desktopMedia.matches) {
          sidebar.classList.toggle("pst-sidebar-hidden");
          updateDesktopExpandedState();
          return;
        }

        setMobileSidebarOpen(
          !sidebar.classList.contains("report-sidebar-open")
        );
      },
      true
    );
  });

  document.addEventListener("click", (event) => {
    const clickedToggle = primaryToggles.some((toggle) =>
      toggle.contains(event.target)
    );

    if (
      !desktopMedia.matches &&
      sidebar.classList.contains("report-sidebar-open") &&
      !sidebar.contains(event.target) &&
      !clickedToggle
    ) {
      setMobileSidebarOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileSidebarOpen(false);
    }
  });

  desktopMedia.addEventListener("change", () => {
    setMobileSidebarOpen(false);
    if (desktopMedia.matches) {
      updateDesktopExpandedState();
    }
  });

  if (desktopMedia.matches) {
    updateDesktopExpandedState();
  } else {
    setMobileSidebarOpen(false);
  }
});
