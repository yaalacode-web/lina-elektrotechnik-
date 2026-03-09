document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const year = document.getElementById("year");
  const contactForm = document.getElementById("contactForm");
  const miniForm = document.getElementById("miniForm");
  const langButtons = document.querySelectorAll("[data-lang-btn]");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");

  const translations = {
    de: {
      badge: "Meisterbetrieb",
      topbar_text: "Zuverlässig – Fachgerecht – Termintreu",
      topbar_cta: "Angebot anfragen",
      brand_sub: "Meisterbetrieb • Winsen (Luhe)",
      nav_services: "Leistungen",
      nav_about: "Über uns",
      nav_projects: "Einsatzbereiche",
      nav_location: "Standort",
      nav_contact: "Kontakt",
      eyebrow: "Elektriker • Smart Home • Energie",
      hero_title: "Moderne Elektrotechnik & Smart Home – zuverlässig vom Meister",
      hero_lead: "Planung, Montage und Anschluss für Privat- und Gewerbekunden: Elektroinstallationen, Photovoltaik, Wärmepumpen, E-Ladestationen, KNX-Smart-Home, Schaltschrankbau und Service.",
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
      s1_li1: "Neue Elektroinstallationen in privaten und gewerblichen Gebäuden",
      s1_li2: "Erneuerung und Modernisierung bestehender Elektroinstallationen",
      s1_li3: "Erweiterung und Anpassung elektrischer Anlagen",
      s1_li4: "Installation von Steckdosen, Beleuchtung, Schaltern und Verteilungen",

      s2_title: "Photovoltaikanlagen, Wärmepumpen und E-Ladestationen",
      s2_li1: "Planung, Montage und elektrischer Anschluss von Photovoltaikanlagen",
      s2_li2: "Installation und Anschluss von Wärmepumpen",
      s2_li3: "Montage von Wallboxen und E-Ladestationen",

      s3_title: "KNX – Smart-Home-Systeme",
      s3_li1: "Planung, Installation und Programmierung moderner KNX-Systeme",
      s3_li2: "Licht-, Beschattungs- und Heizungssteuerung",
      s3_li3: "Sicherheitsfunktionen, Szenensteuerung, Visualisierung und Sprachsteuerung",

      s4_title: "Zählerschränke und Energieverteilungen",
      s4_li1: "Erneuerung und Modernisierung von Zählerschränken und Unterverteilungen",
      s4_li2: "Komplett bestückte und fertig verdrahtete Energieverteilungen nach Kundenwunsch",
      s4_li3: "Für Einfamilienhäuser, Mehrfamilienhäuser und Gewerbe",

      s5_title: "Schaltschrankbau",
      s5_li1: "Planung und Bau von Schaltschränken für Lüftungs- und Heizungsanlagen",
      s5_li2: "Individuelle Lösungen nach Kundenanforderung",
      s5_li3: "Fertigung in der Werkstatt oder direkt vor Ort",

      s6_title: "Verkabelung von Lüftungs- und Heizungsanlagen",
      s6_li1: "Komplette elektrische Verkabelung, Anschluss und Inbetriebnahme",
      s6_li2: "Für öffentliche und gewerbliche Gebäude",
      s6_li3: "Zum Beispiel Schulen, Hotels, Restaurants, Einkaufszentren und Krankenhäuser",

      s7_title: "Wartung und Service",
      s7_li1: "Regelmäßige Wartung und Funktionsprüfung",
      s7_li2: "Servicearbeiten an Lüftungs- und Klimaanlagen",
      s7_li3: "Zuverlässige Betreuung raumlufttechnischer Anlagen",

      s8_title: "Facility Management und technischer Hausmeisterservice",
      s8_li1: "Technische Betreuung öffentlicher und gewerblicher Gebäude",
      s8_li2: "Wartung und Instandhaltung technischer Anlagen",
      s8_li3: "Schnelle Unterstützung bei laufendem Gebäudebetrieb",

      about_title: "Über Lina Elektrotechnik",
      about_text: "Lina Elektrotechnik bietet zuverlässige, fachgerechte Lösungen – von der Planung bis zur sauberen Ausführung.",
      about_tick_1: "Klare Kommunikation & saubere Dokumentation",
      about_tick_2: "Sicherheit, Qualität und Normen im Fokus",
      about_tick_3: "Smart-Home & Energie-Lösungen aus einer Hand",
      info_title: "Kurzinfos",
      info_location_label: "Standort",
      info_location_value: "Winsen (Luhe)",
      info_contact_label: "Kontakt",
      info_contact_value: "Zum Kontaktformular",
      info_person_label: "Ansprechpartner",
      areas_title: "Einsatzbereiche",
      areas_sub: "Privat, öffentlich und gewerblich – wir unterstützen je nach Bedarf.",
      a1_title: "Privat",
      a1_text: "Einfamilienhäuser, Mehrfamilienhäuser, Modernisierung, Zählerschrank, Smart Home.",
      a2_title: "Öffentlich",
      a2_text: "Schulen, Kindergärten, Sporthallen – Verkabelung & Technik für Lüftung/Heizung.",
      a3_title: "Gewerblich",
      a3_text: "Hotels, Restaurants, Bürogebäude – Service, Wartung und Erweiterungen.",
      location_title: "Standort",
      location_sub: "Finden Sie uns in Winsen (Luhe) und Umgebung.",
      location_info_title: "Standortinfo",
      location_city_label: "Ort",
      location_service_area_label: "Einsatzgebiet",
      location_service_area_value: "Hamburg & Umgebung",
      location_map_btn: "Google Maps öffnen",
      contact_title: "Kontakt",
      contact_sub: "Schreiben Sie uns kurz Ihr Anliegen – wir melden uns schnell zurück.",
      contact_person_label: "Ansprechpartner",
      contact_phone_label: "Telefon",
      contact_location_label: "Standort",
      form_name: "Name",
      form_phone: "Telefon",
      form_email: "E-Mail",
      form_service: "Leistung",
      form_message: "Nachricht",
      form_send: "Anfrage per E-Mail öffnen",
      form_note: "Kein Backend nötig – öffnet Ihre E-Mail App.",
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
      badge: "Master Company",
      topbar_text: "Reliable – Professional – On Time",
      topbar_cta: "Request a quote",
      brand_sub: "Master Company • Winsen (Luhe)",
      nav_services: "Services",
      nav_about: "About us",
      nav_projects: "Areas",
      nav_location: "Location",
      nav_contact: "Contact",
      eyebrow: "Electrician • Smart Home • Energy",
      hero_title: "Modern electrical engineering & smart home solutions by a trusted master electrician",
      hero_lead: "Planning, installation and connection for private and commercial customers: electrical installations, photovoltaic systems, heat pumps, EV charging stations, KNX smart home, control cabinet construction and service.",
      hero_btn_primary: "Contact us now",
      hero_btn_secondary: "View services",
      proof_1_title: "Professional",
      proof_1_sub: "Clean work & standards",
      proof_2_title: "On time",
      proof_2_sub: "Reliable and well planned",
      proof_3_title: "Winsen (Luhe)",
      proof_3_sub: "Hamburg region & surroundings",
      pill_1: "⚡ Electrical Installations",
      pill_2: "🏠 KNX Smart Home",
      pill_3: "☀️ Solar / PV",
      pill_4: "🔌 EV Charger",
      pill_5: "🌬️ Ventilation / Climate",
      pill_6: "🧰 Control Cabinets",
      quick_title: "Quick Request",
      quick_sub: "Briefly describe your project – we will get back to you quickly.",
      
      services_title: "Our Services",
      services_sub: "Professional services for modern electrical engineering and smart home solutions.",

      s1_title: "Electrical Installations",
      s1_li1: "New electrical installations in residential and commercial buildings",
      s1_li2: "Renewal and modernization of existing electrical installations",
      s1_li3: "Expansion and upgrading of electrical systems",
      s1_li4: "Installation of sockets, lighting, switches and distribution boards",

      s2_title: "Photovoltaics, Heat Pumps & EV Charging Stations",
      s2_li1: "Planning, installation and electrical connection of photovoltaic systems",
      s2_li2: "Installation and connection of heat pumps",
      s2_li3: "Installation of wallboxes and EV charging stations",

      s3_title: "KNX – Smart Home Systems",
      s3_li1: "Planning, installation and programming of modern KNX systems",
      s3_li2: "Lighting, shading and heating control",
      s3_li3: "Security functions, scene control, visualization and voice control",

      s4_title: "Meter Cabinets & Power Distribution",
      s4_li1: "Renewal and modernization of meter cabinets and sub-distributions",
      s4_li2: "Fully equipped and pre-wired power distribution units built to customer requirements",
      s4_li3: "For single-family homes, multi-family homes and commercial properties",

      s5_title: "Control Cabinet Construction",
      s5_li1: "Planning and construction of control cabinets for ventilation and heating systems",
      s5_li2: "Custom solutions based on client requirements",
      s5_li3: "Manufactured in the workshop or directly on site",

      s6_title: "Wiring for Ventilation and Heating Systems",
      s6_li1: "Complete electrical wiring, connection and commissioning",
      s6_li2: "For public and commercial buildings",
      s6_li3: "For example schools, hotels, restaurants, shopping centers and hospitals",

      s7_title: "Maintenance & Service",
      s7_li1: "Regular maintenance and functional testing",
      s7_li2: "Service work for ventilation and air-conditioning systems",
      s7_li3: "Reliable support for HVAC and air handling systems",

      s8_title: "Facility Management & Technical Caretaking Service",
      s8_li1: "Technical support for public and commercial buildings",
      s8_li2: "Maintenance and upkeep of technical systems",
      s8_li3: "Fast support for ongoing building operations",
    
      about_title: "About Lina Elektrotechnik",
      about_text: "Lina Elektrotechnik offers reliable and professional solutions – from planning to clean execution.",
      about_tick_1: "Clear communication & clean documentation",
      about_tick_2: "Focus on safety, quality and standards",
      about_tick_3: "Smart home & energy solutions from one source",
      info_title: "Quick Info",
      info_location_label: "Location",
      info_location_value: "Winsen (Luhe)",
      info_contact_label: "Contact",
      info_contact_value: "Go to contact form",
      info_person_label: "Contact Person",
      areas_title: "Areas of Work",
      areas_sub: "Private, public and commercial – we support as needed.",
      a1_title: "Private",
      a1_text: "Single-family homes, multi-family homes, modernization, meter cabinets, smart home.",
      a2_title: "Public",
      a2_text: "Schools, kindergartens, sports halls – wiring and technical systems for ventilation/heating.",
      a3_title: "Commercial",
      a3_text: "Hotels, restaurants, office buildings – service, maintenance and extensions.",
      location_title: "Location",
      location_sub: "Find us in Winsen (Luhe) and surrounding areas.",
      location_info_title: "Location Info",
      location_city_label: "City",
      location_service_area_label: "Service Area",
      location_service_area_value: "Hamburg & surrounding area",
      location_map_btn: "Open Google Maps",
      contact_title: "Contact",
      contact_sub: "Send us a short message – we will get back to you as quickly as possible.",
      contact_person_label: "Contact Person",
      contact_phone_label: "Phone",
      contact_location_label: "Location",
      form_name: "Name",
      form_phone: "Phone",
      form_email: "Email",
      form_service: "Service",
      form_message: "Message",
      form_send: "Open request by email",
      form_note: "No backend needed – opens your email app.",
      select_placeholder: "Please select…",
      opt_1: "Electrical Installations",
      opt_2: "Photovoltaics / Heat Pump / EV Charger",
      opt_3: "KNX Smart Home",
      opt_4: "Meter Cabinet / Sub-Distribution",
      opt_5: "Control Cabinet Construction",
      opt_6: "Ventilation / Heating Wiring",
      opt_7: "Maintenance / Service",
      back_top: "Back to top",
      footer_text: "Master company in Winsen (Luhe) – electrical, smart home, energy & service."
    }
  };

  function setLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    const select = document.querySelector('select[name="service"]');
    if (select) {
      select.querySelectorAll("option[data-i18n]").forEach(option => {
        const key = option.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
          option.textContent = translations[lang][key];
        }
      });
    }

    langButtons.forEach(btn => {
      const active = btn.dataset.langBtn === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    localStorage.setItem("site-language", lang);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (themeIcon) themeIcon.textContent = theme === "morning" ? "☀️" : "🌙";
    if (themeLabel) themeLabel.textContent = theme === "morning" ? "Morning" : "Night";

    localStorage.setItem("site-theme", theme);
  }

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.langBtn));
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "night";
      setTheme(current === "night" ? "morning" : "night");
    });
  }

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

  const BUSINESS_EMAIL = "Babiker12345@yahoo.de";

function handleMailForm(form, includeEmail = false) {
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const lang = document.documentElement.getAttribute("data-lang") || "de";

    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const service = (data.get("service") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject =
      lang === "en"
        ? "Website inquiry - Lina Elektrotechnik"
        : "Anfrage über Website - Lina Elektrotechnik";

    let body = "";

    if (lang === "en") {
      body =
`Name: ${name}
Phone: ${phone}
${includeEmail ? `Email: ${email}\n` : ""}${service ? `Service: ${service}\n` : ""}

Message:
${message}`;
    } else {
      body =
`Name: ${name}
Telefon: ${phone}
${includeEmail ? `E-Mail: ${email}\n` : ""}${service ? `Leistung: ${service}\n` : ""}

Nachricht:
${message}`;
    }

    const mailtoLink =
      `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });
}

handleMailForm(miniForm, false);
handleMailForm(contactForm, true);

const savedLanguage = localStorage.getItem("site-language") || "de";
const savedTheme = localStorage.getItem("site-theme") || "night";

setLanguage(savedLanguage);
setTheme(savedTheme);
});