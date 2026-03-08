// =============================
// Lina Elektrotechnik Website JS
// Language toggle + mobile menu + mailto forms
// =============================

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Mobile menu toggle
const menuBtn = $("#menuBtn");
const mobileNav = $("#mobileNav");

function setMobileMenu(open) {
  if (!menuBtn || !mobileNav) return;
  menuBtn.setAttribute("aria-expanded", String(open));
  mobileNav.setAttribute("aria-hidden", String(!open));
  mobileNav.style.display = open ? "block" : "none";
}

if (menuBtn && mobileNav) {
  setMobileMenu(false);

  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    setMobileMenu(!isOpen);
  });

  // Close menu when clicking a link
  $$("#mobileNav a").forEach(a => {
    a.addEventListener("click", () => setMobileMenu(false));
  });

  // Close on outside click (mobile)
  document.addEventListener("click", (e) => {
    if (window.innerWidth > 720) return;
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    if (!isOpen) return;
    const inside = mobileNav.contains(e.target) || menuBtn.contains(e.target);
    if (!inside) setMobileMenu(false);
  });
}

// ---- i18n dictionary (DE/EN)
const i18n = {
  de: {
    topbar_text: "Zuverlässig – Fachgerecht – Termintreu",
    topbar_cta: "Angebot anfragen",
    brand_sub: "Meisterbetrieb • Winsen (Luhe)",
    nav_services: "Leistungen",
    nav_about: "Über uns",
    nav_projects: "Einsatzbereiche",
    nav_contact: "Kontakt",

    hero_title: "Moderne Elektrotechnik & Smart Home – zuverlässig vom Meister",
    hero_lead:
      "Planung, Montage und Anschluss für Privat- und Gewerbekunden: Elektroinstallationen, Photovoltaik, Wärmepumpen, E-Ladestationen, KNX-Smart-Home, Schaltschrankbau und Service.",
    hero_btn_primary: "Jetzt Kontakt aufnehmen",
    hero_btn_secondary: "Leistungen ansehen",

    proof_1_title: "Fachgerecht",
    proof_1_sub: "Saubere Ausführung & Normen",
    proof_2_title: "Termintreu",
    proof_2_sub: "Planbar & zuverlässig",
    proof_3_title: "Winsen (Luhe)",
    proof_3_sub: "Region Hamburg & Umgebung",

    pill_1: "⚡ Elektroinstallationen",
    pill_2: "🏠 KNX Smart Home",
    pill_3: "☀️ Photovoltaik",
    pill_4: "🔌 E-Ladestation",
    pill_5: "🌬️ Lüftung/Klima",
    pill_6: "🧰 Schaltschrankbau",

    quick_title: "Schnellanfrage",
    quick_sub: "Beschreiben Sie kurz Ihr Projekt – wir melden uns schnell zurück.",

    services_title: "Leistungsspektrum",
    services_sub: "Professionelle Dienstleistungen rund um moderne Elektrotechnik und Smart-Home-Lösungen.",

    s1_title: "Elektroinstallationen",
    s1_text: "In privaten und gewerblichen Gebäuden – sauber, sicher und nach Norm.",
    s2_title: "Photovoltaik, Wärmepumpen & E-Ladestationen",
    s2_text: "Planung, Montage & Anschluss – für moderne, effiziente Energieversorgung.",
    s3_title: "KNX – Smart Home System",
    s3_text: "Planung, Montage & Programmierung: Licht, Beschattung, Heizung, Sicherheit, Szenen, Visualisierung & Sprachsteuerung.",
    s4_title: "Zählerschränke & Unterverteilungen",
    s4_text: "Erneuerung und Verkauf – für Ein- und Mehrfamilienhäuser.",
    s5_title: "Schaltschrankbau",
    s5_text: "Für Lüftungs- und Heizungsanlagen – individuell nach Bedarf gefertigt.",
    s6_title: "Verkabelung Lüftung & Heizung",
    s6_text: "Komplette Verkabelung in öffentlichen und gewerblichen Gebäuden: Schulen, Kitas, Hotels, Sporthallen, Restaurants.",
    s7_title: "Wartung & Service",
    s7_text: "Wartung und Service von Lüftungs- und Klimaanlagen in öffentlichen und gewerblichen Gebäuden.",

    about_title: "Über Lina Elektrotechnik",
    about_text:
      "Ich bin Elektromeister Babiker Ibrahim und biete mit Lina Elektrotechnik zuverlässige, fachgerechte Lösungen – von der Planung bis zur sauberen Ausführung. Ob Neubau, Sanierung oder Modernisierung: Wir arbeiten strukturiert, transparent und termintreu.",
    about_tick_1: "Klare Kommunikation & saubere Dokumentation",
    about_tick_2: "Sicherheit, Qualität und Normen im Fokus",
    about_tick_3: "Smart-Home & Energie-Lösungen aus einer Hand",

    info_title: "Kurzinfos",
    info_location_label: "Standort",
    info_location_value: "Winsen (Luhe)",
    info_contact_label: "Kontakt",
    info_contact_value: "Zum Kontaktformular",
    info_person_label: "Ansprechpartner",
    info_note: "Tipp: Fügen Sie hier Ihr Logo, Ihre E-Mail und ggf. Öffnungszeiten hinzu.",

    areas_title: "Einsatzbereiche",
    areas_sub: "Privat, öffentlich und gewerblich – wir unterstützen je nach Bedarf.",
    a1_title: "Privat",
    a1_text: "Einfamilienhäuser, Mehrfamilienhäuser, Modernisierung, Zählerschrank, Smart Home.",
    a2_title: "Öffentlich",
    a2_text: "Schulen, Kindergärten, Sporthallen – Verkabelung & Technik für Lüftung/Heizung.",
    a3_title: "Gewerblich",
    a3_text: "Hotels, Restaurants, Bürogebäude – Service, Wartung, Erweiterungen und Umbauten.",

    contact_title: "Kontakt",
    contact_sub: "Schreiben Sie uns kurz Ihr Anliegen – wir melden uns so schnell wie möglich zurück.",
    contact_person_label: "Ansprechpartner",
    contact_phone_label: "Telefon",
    contact_location_label: "Standort",
    contact_location_value: "Winsen (Luhe)",
    contact_hint: "Optional: Ersetzen Sie die Mail-Adresse im Code (script.js), damit das Formular direkt an Ihre E-Mail geht.",
    phone_hint: "Hinweis: Ersetzen Sie die Telefonnummer im Code durch die echte Nummer.",

    form_name: "Name",
    form_phone: "Telefon",
    form_email: "E-Mail",
    form_service: "Leistung",
    form_message: "Nachricht",
    form_send: "Anfrage per E-Mail öffnen",
    form_note: "Kein Backend nötig – öffnet Ihre E-Mail App (mailto). Wenn Sie lieber WhatsApp nutzen: fügen Sie unten einen Link ein.",

    select_placeholder: "Bitte auswählen…",
    opt_1: "Elektroinstallationen",
    opt_2: "Photovoltaik / Wärmepumpe / E-Ladestation",
    opt_3: "KNX Smart Home",
    opt_4: "Zählerschrank / Unterverteilung",
    opt_5: "Schaltschrankbau",
    opt_6: "Lüftung / Heizung Verkabelung",
    opt_7: "Wartung / Service",

    back_top: "Nach oben",
    footer_text: "Meisterbetrieb in Winsen (Luhe) – Elektro, Smart Home, Energie & Service."
  },

  en: {
    topbar_text: "Reliable – Professional – On time",
    topbar_cta: "Request a quote",
    brand_sub: "Master electrician • Winsen (Luhe)",
    nav_services: "Services",
    nav_about: "About",
    nav_projects: "Sectors",
    nav_contact: "Contact",

    hero_title: "Modern electrical work & smart home — delivered by a master electrician",
    hero_lead:
      "Planning, installation and connection for residential and commercial clients: electrical installations, solar PV, heat pumps, EV chargers, KNX smart home, control cabinets and service.",
    hero_btn_primary: "Contact us now",
    hero_btn_secondary: "View services",

    proof_1_title: "Professional",
    proof_1_sub: "Clean work & standards",
    proof_2_title: "On time",
    proof_2_sub: "Reliable scheduling",
    proof_3_title: "Winsen (Luhe)",
    proof_3_sub: "Hamburg region & nearby",

    pill_1: "⚡ Electrical installations",
    pill_2: "🏠 KNX Smart Home",
    pill_3: "☀️ Solar PV",
    pill_4: "🔌 EV charger",
    pill_5: "🌬️ Ventilation/AC",
    pill_6: "🧰 Control cabinets",

    quick_title: "Quick request",
    quick_sub: "Briefly describe your project — we’ll get back to you quickly.",

    services_title: "Our services",
    services_sub: "Professional solutions for modern electrical engineering and smart home systems.",

    s1_title: "Electrical installations",
    s1_text: "For residential and commercial buildings — safe, clean, and compliant.",
    s2_title: "Solar PV, heat pumps & EV chargers",
    s2_text: "Planning, installation & connection — for efficient energy solutions.",
    s3_title: "KNX – Smart Home",
    s3_text: "Planning, installation & programming: lighting, shading, heating, security, scenes, visualization & voice control.",
    s4_title: "Meter cabinets & sub-distributions",
    s4_text: "Replacement and supply — for single and multi-family houses.",
    s5_title: "Control cabinet construction",
    s5_text: "For ventilation and heating systems — built to your requirements.",
    s6_title: "Wiring for ventilation & heating",
    s6_text: "Complete wiring for public and commercial buildings: schools, kindergartens, hotels, sports halls and restaurants.",
    s7_title: "Maintenance & service",
    s7_text: "Maintenance and service for ventilation and air-conditioning systems in public and commercial buildings.",

    about_title: "About Lina Elektrotechnik",
    about_text:
      "I’m master electrician Babiker Ibrahim. Lina Elektrotechnik provides reliable, professional solutions — from planning to clean execution. New builds, renovations or upgrades: we work structured, transparent and on schedule.",
    about_tick_1: "Clear communication & proper documentation",
    about_tick_2: "Safety, quality and standards first",
    about_tick_3: "Smart home & energy solutions in one place",

    info_title: "Quick info",
    info_location_label: "Location",
    info_location_value: "Winsen (Luhe)",
    info_contact_label: "Contact",
    info_contact_value: "Go to contact form",
    info_person_label: "Contact person",
    info_note: "Tip: Add your logo, email address and opening hours here.",

    areas_title: "Sectors we serve",
    areas_sub: "Residential, public and commercial — tailored support as needed.",
    a1_title: "Residential",
    a1_text: "Single-family homes, apartments, upgrades, meter cabinet, smart home.",
    a2_title: "Public",
    a2_text: "Schools, kindergartens, sports halls — wiring and technology for ventilation/heating.",
    a3_title: "Commercial",
    a3_text: "Hotels, restaurants, offices — service, maintenance, extensions and refurbishments.",

    contact_title: "Contact",
    contact_sub: "Send us your request — we’ll respond as soon as possible.",
    contact_person_label: "Contact person",
    contact_phone_label: "Phone",
    contact_location_label: "Location",
    contact_location_value: "Winsen (Luhe)",
    contact_hint: "Optional: Replace the email address in script.js so the form sends to your business email.",
    phone_hint: "Note: Replace the phone number in the code with your real number.",

    form_name: "Name",
    form_phone: "Phone",
    form_email: "Email",
    form_service: "Service",
    form_message: "Message",
    form_send: "Open email request",
    form_note: "No backend required — opens your email app (mailto). If you prefer WhatsApp: add a link below.",

    select_placeholder: "Please choose…",
    opt_1: "Electrical installations",
    opt_2: "Solar PV / heat pump / EV charger",
    opt_3: "KNX Smart Home",
    opt_4: "Meter cabinet / sub-distribution",
    opt_5: "Control cabinet construction",
    opt_6: "Ventilation / heating wiring",
    opt_7: "Maintenance / service",

    back_top: "Back to top",
    footer_text: "Master electrician in Winsen (Luhe) — electrical, smart home, energy & service."
  }
};

// ---- Apply language
function applyLang(lang) {
  const dict = i18n[lang] || i18n.de;
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.dataset.lang = lang;

  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // Toggle active buttons
  $$("[data-lang-btn]").forEach(btn => {
    const isActive = btn.dataset.langBtn === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // Update select option labels (because textContent already handled, but keep safe)
  // (Already covered by data-i18n on options)
  localStorage.setItem("lina_lang", lang);
}

// Init language (saved or default DE)
const savedLang = localStorage.getItem("lina_lang");
applyLang(savedLang || "de");

// Bind language buttons
$$("[data-lang-btn]").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.langBtn));
});

// ---- Mailto forms
// IMPORTANT: set your real email here:
const BUSINESS_EMAIL = "info@lina-elektrotechnik.de"; // <-- change this

function openMailto({ name, phone, email, service, message, subjectPrefix }) {
  const subject = encodeURIComponent(`${subjectPrefix} - Lina Elektrotechnik`);
  const lines = [
    `Name: ${name || "-"}`,
    `Telefon: ${phone || "-"}`,
    `E-Mail: ${email || "-"}`,
    `Leistung: ${service || "-"}`,
    "",
    "Nachricht / Message:",
    message || "-"
  ].join("\n");

  const body = encodeURIComponent(lines);
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
}

// Mini form
const miniForm = $("#miniForm");
if (miniForm) {
  miniForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(miniForm);
    openMailto({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: "", // not in mini form
      service: "Schnellanfrage / Quick request",
      message: fd.get("message"),
      subjectPrefix: "Schnellanfrage / Quick request"
    });
  });
}

// Contact form
const contactForm = $("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    openMailto({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      service: fd.get("service"),
      message: fd.get("message"),
      subjectPrefix: "Anfrage / Request"
    });
  });
}