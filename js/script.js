// Small accessibility helpers
document.addEventListener("DOMContentLoaded", function () {
  // set copyright year
  var y = new Date().getFullYear();
  var el = document.getElementById("year");
  if (el) el.textContent = y;

  // focus management for same-page hash links only
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      // only attempt to manage focus for anchors that refer to an element on this page
      var hash = this.getAttribute("href");
      try {
        var target = document.querySelector(hash);
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus();
        }
      } catch (err) {
        // invalid selector or other issue — ignore gracefully
      }
    });
  });

  // mark current navigation link as active (adds class and aria-current)
  (function markActiveNav() {
    try {
      var path = window.location.pathname || "";
      var current = path.split("/").pop();
      if (!current) current = "index.html";

      document.querySelectorAll(".main-nav a").forEach(function (link) {
        var href = link.getAttribute("href") || "";
        var hrefFile = href.split("/").pop();
        if (!hrefFile || hrefFile === "") hrefFile = "index.html";
        if (hrefFile === current) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        } else {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
        }
      });
    } catch (e) {
      // ignore
    }
  })();

  // Theme handling removed: site follows user's device preference via CSS only

  // Ensure project links and external links open in a new tab safely
  (function externalizeLinks() {
    try {
      var origin = window.location.origin;

      // project links (explicit class) — open in new tab
      document.querySelectorAll("a.project-link").forEach(function (a) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      });

      // any other external link (starts with http and different origin) — open in new tab
      document.querySelectorAll('a[href^="http"]').forEach(function (a) {
        try {
          var url = new URL(a.href);
          if (url.origin !== origin) {
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener noreferrer");
          }
        } catch (err) {
          // ignore malformed URLs
        }
      });
    } catch (e) {
      // ignore failures
    }
  })();
});
