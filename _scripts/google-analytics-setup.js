---
permalink: /assets/js/google-analytics-setup.js
---
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "{{ site.google_analytics }}");

// One delegated listener also covers controls added after the page loads.
// Use a separate event name so enhanced measurement keeps its own events.
document.addEventListener(
  "click",
  function (event) {
    if (!(event.target instanceof Element)) return;
    var control = event.target.closest("a, button, [role='button'], input[type='button'], input[type='submit']");
    if (!control || control.closest("[data-analytics-ignore]")) return;

    var destination = "";
    var kind = "button";
    var href = control.getAttribute("href");
    if (href) {
      var url = new URL(href, window.location.href);
      // Exclude query strings and contact details from custom event payloads.
      if (url.protocol === "http:" || url.protocol === "https:") {
        destination = url.origin + url.pathname;
        kind = url.origin === window.location.origin ? "internal_link" : "outbound_link";
        if (/\.(pdf|docx?|xlsx?|pptx?|zip|csv|txt)$/i.test(url.pathname) || control.hasAttribute("download")) {
          kind = "file_link";
        }
      } else {
        kind = "contact_link";
      }
    }

    gtag("event", "site_click", {
      page_path: window.location.pathname,
      control_id: control.id || "",
      control_label: (control.getAttribute("data-analytics-label") || control.getAttribute("aria-label") || control.textContent || control.getAttribute("title") || control.getAttribute("name") || control.type || "control")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 100),
      control_type: kind,
      destination: destination,
      transport_type: "beacon",
    });
  },
  true
);
