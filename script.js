const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    });
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const service = formData.get("service") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent("Anfrage über Website – Lina Elektrotechnik");
    const body = encodeURIComponent(
`Name: ${name}
Telefon: ${phone}
E-Mail: ${email}
Leistung: ${service}

Nachricht:
${message}`
    );

    window.location.href = `mailto:info@lina-elektrotechnik.de?subject=${subject}&body=${body}`;
  });
}