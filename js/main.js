(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     MOBILE NAV TOGGLE
     --------------------------------------------------------- */
  var navToggle = document.getElementById("nav-toggle");
  var tabBar = document.getElementById("tab-bar");

  navToggle.addEventListener("click", function () {
    var isOpen = tabBar.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close mobile menu after choosing a link
  tabBar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      tabBar.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------------------------------------------------
     ACTIVE TAB HIGHLIGHT ON SCROLL
     --------------------------------------------------------- */
  var sections = document.querySelectorAll("main section[id]");
  var tabs = document.querySelectorAll(".tab");

  function setActiveTab(id) {
    tabs.forEach(function (tab) {
      var match = tab.getAttribute("href") === "#" + id;
      tab.classList.toggle("is-active", match);
    });
  }

  if ("IntersectionObserver" in window) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (section) { navObserver.observe(section); });

    /* ---------------------------------------------------------
       SCROLL-REVEAL FOR SECTIONS
       --------------------------------------------------------- */
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".section").forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // No IntersectionObserver support: just show everything
    document.querySelectorAll(".section").forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  /* ---------------------------------------------------------
     TYPED-TEXT HERO EFFECT
     --------------------------------------------------------- */
  var typedEl = document.getElementById("typed-output");
  var codeLines = [
    'const developer = {',
    '  name: "Your Name",',
    '  role: "Full-Stack Developer",',
    '  focus: ["React", "Node", "Accessibility"],',
    '  status: "open to work"',
    '};'
  ];

  if (typedEl && !reduceMotion) {
    document.body.classList.add("js-typing");
    var fullText = codeLines.join("\n");
    var i = 0;

    function typeNext() {
      if (i <= fullText.length) {
        typedEl.textContent = fullText.slice(0, i);
        i++;
        setTimeout(typeNext, 18);
      }
    }
    typeNext();
  }
  // If reduced motion is preferred, the static fallback markup
  // in the HTML is shown instead (see CSS: .static-fallback).
})();
