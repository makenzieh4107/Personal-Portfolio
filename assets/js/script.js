'use strict';

const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const selectedPage = this.dataset.navLink;

    pages.forEach((page) => {
      const shouldShow = page.dataset.page === selectedPage;
      page.classList.toggle("active", shouldShow);
    });

    navigationLinks.forEach((link) => {
      link.classList.toggle("active", link === this);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
