const packagesData = [
  {
    name: "Glow Clean",
    price: "80.000",
    duration: "90 minutos",
    description: "Limpieza+Hidratación",
    includes: ["Diagnóstico facial", "Hidratación profunda", "Limpieza facial", "Sellado y protección"],
    tag: "Favorito"
  },
  {
    name: "Cacao Calm",
    price: "70.000",
    duration: "80 minutos",
    description: "Chocolaterapia+Relajación",
    includes: [
      "Masaje facial manual",
      "Chocolaterapia Facial",
      "Cámara fotodinámica",
      "Sellado y protección"
    ],
    tag: "Relajante"
  },
  {
    name: "Skin & Lips Care",
    price: "90.000",
    duration: "50 minutos",
    description: "Hidralips+Limpieza",
    includes: ["Limpieza sencilla", "Hidralips", "Hidratación", "Sellado y protección"],
    tag: "Nuevo"
  }
];

const commonDetails = {
  aparatologia: ["Electroporador suave", "LED terapia", "Vaporizador herbal"],
  cuidadosPrevios: [
    "Evitar exfoliaciones 48h antes",
    "Llegar sin maquillaje ni bloqueador denso"
  ],
  cuidadosPosteriores: [
    "Aplicar protector solar FPS50 cada 3 horas",
    "No exponerse a calor intenso durante 24h"
  ],
  candidatos: ["Pieles normales a mixtas", "Personas que buscan luminosidad inmediata"],
  contraindicaciones: [
    "Piel muy irritada o con heridas activas",
    "Embarazo con contraindicaciones médicas"
  ],
  beneficios: ["Hidratación profunda", "Textura más uniforme", "Efecto calmante"]
};

const buildDetails = (overrides = {}) => {
  const base = Object.fromEntries(
    Object.entries(commonDetails).map(([key, value]) => [key, Array.isArray(value) ? [...value] : value])
  );

  Object.entries(overrides).forEach(([key, value]) => {
    base[key] = value;
  });

  return base;
};

const servicesData = [
  {
    category: "Limpiezas",
    services: [
      {
        name: "Limpieza básica",
        price: "40.000",
        duration: "40 minutos",
        summary: "Remueve suciedad superficial y prepara la piel para tratamientos.",
        details: buildDetails({
          aparatologia: [
            "Leche limpiadora botánica",
            "Tónico de hamamelis",
            "Luz LED verde calmante"
          ],
          cuidadosPrevios: [
            "Evitar maquillaje a prueba de agua 24h antes",
            "Suspender exfoliantes químicos 3 días antes"
          ],
          cuidadosPosteriores: ["No exfoliar por 48h", "Aplicar crema hidratante ligera mañana y noche"],
          candidatos: ["Pieles jóvenes o normales", "Clientes que buscan mantenimiento mensual"],
          contraindicaciones: ["Dermatitis activa", "Heridas abiertas"],
          beneficios: [
            "Elimina residuos superficiales",
            "Mejora la absorción de activos",
            "Sensación de frescura inmediata"
          ]
        })
      },
      {
        name: "Limpieza básica con vapor",
        price: "55.000",
        duration: "45 minutos",
        summary: "Abre poros y facilita la remoción de impurezas.",
        details: buildDetails({
          aparatologia: [
            "Vaporizador de ozono",
            "Alta frecuencia puntual",
            "Mascarilla descongestiva"
          ],
          cuidadosPrevios: ["No broncearse dos días antes", "Mantener buena hidratación"],
          cuidadosPosteriores: [
            "Evitar maquillaje pesado durante 12h",
            "Usar agua termal 3 veces al día"
          ],
          candidatos: ["Pieles mixtas congestionadas", "Personas con puntos negros superficiales"],
          contraindicaciones: ["Rosácea activa", "Asma no controlada"],
          beneficios: ["Ablanda comedones", "Rostro más uniforme", "Reduce puntos negros"]
        })
      },
      {
        name: "Limpieza profunda",
        price: "80.000",
        duration: "90 minutos",
        summary: "Extracción completa, desincrustación profunda y luminosidad.",
        details: buildDetails({
          aparatologia: [
            "Peeling ultrasónico",
            "Extractor eléctrico controlado",
            "Mascarilla de arcilla medicada"
          ],
          cuidadosPrevios: [
            "Suspender isotretinoína tópica 7 días antes",
            "Informar si hubo toxina o rellenos recientes"
          ],
          cuidadosPosteriores: [
            "No tocar el rostro con manos sucias",
            "Cambiar la funda de almohada esa noche"
          ],
          candidatos: ["Pieles grasas o con brotes", "Clientes con más de 6 semanas sin limpieza"],
          contraindicaciones: ["Acné quístico severo", "Tratamientos dermatológicos agresivos recientes"],
          beneficios: ["Poros visiblemente más limpios", "Textura afinada", "Controla el brillo"]
        })
      }
    ]
  },
  {
    category: "Hidrataciones",
    services: [
      {
        name: "Hidratación profunda",
        price: "65.000",
        duration: "45 minutos",
        summary: "Aporta hidratación intensa, suaviza textura y calma irritación.",
        details: buildDetails({
          aparatologia: [
            "Serum multipeso de ácido hialurónico",
            "Máscara hidroplástica",
            "LED azul calmante"
          ],
          cuidadosPrevios: ["Evitar sauna el mismo día", "Consumir agua suficiente"],
          cuidadosPosteriores: [
            "Aplicar protector solar cada 3h",
            "No usar maquillaje hasta la mañana siguiente"
          ],
          candidatos: ["Pieles deshidratadas por clima o viajes", "Personas bajo tratamientos despigmentantes"],
          contraindicaciones: ["Alergia a alginatos", "Heridas abiertas o infecciones"],
          beneficios: ["Rostro repulpado", "Calma rojeces", "Sensación de confort inmediata"]
        })
      },
      {
        name: "Hidratación con principio activo (Electroporador)",
        price: "55.000",
        duration: "60 minutos",
        summary: "Ácido hialurónico o hidraflash para resultados prolongados.",
        details: buildDetails({
          aparatologia: ["Electroporador médico", "Ampollas HA + B5", "Crioterapia suave"],
          cuidadosPrevios: ["Evitar retinoides 48h antes", "No consumir alcohol 24h previas"],
          cuidadosPosteriores: [
            "No tocar el rostro durante 2h",
            "Continuar con serum hidratante de uso diario"
          ],
          candidatos: ["Pieles maduras con líneas finas", "Clientes después de limpiezas intensas"],
          contraindicaciones: ["Portadores de marcapasos", "Gestantes sin autorización médica"],
          beneficios: ["Activos penetran a dermis media", "Líneas menos visibles", "Glow por 7 días"]
        })
      },
      {
        name: "Limpieza + hidratación",
        price: "80.000",
        duration: "90 minutos",
        summary: "Sesión combinada para una piel más luminosa y renovada.",
        details: buildDetails({
          aparatologia: [
            "Vaporizador herbal",
            "Peeling ultrasónico ligero",
            "Infusión de activos con máscara fría"
          ],
          cuidadosPrevios: ["Mantenerse hidratado", "No programar depilaciones faciales cercanas"],
          cuidadosPosteriores: ["Evitar gimnasio 24h", "Dormir sobre funda limpia"],
          candidatos: ["Pieles apagadas con congestión ligera", "Clientes antes de eventos especiales"],
          contraindicaciones: ["Brotes severos", "Procesos virales activos"],
          beneficios: ["Poros limpios y piel jugosa", "Resultados inmediatos", "Una sola sesión integral"]
        })
      }
    ]
  },
  {
    category: "Tratamientos",
    services: [
      {
        name: "Acné",
        price: "90.000",
        duration: "Sesión · Plan 4 semanas: 320.000",
        summary: "Controla brotes, reduce inflamación y mejora textura.",
        details: buildDetails({
          aparatologia: [
            "Luz azul antibacteriana",
            "Alta frecuencia focalizada",
            "Mascarilla purificante de azufre"
          ],
          cuidadosPrevios: ["Traer lista de medicamentos actuales", "No extraer espinillas 72h antes"],
          cuidadosPosteriores: ["Usar gel calmante de aloe", "Evitar lácteos grasos 24h posteriores"],
          candidatos: ["Acné grado I-II", "Pacientes acompañados por dermatólogo"],
          contraindicaciones: ["Acné noduloquístico severo", "Uso de isotretinoína oral en dosis altas"],
          beneficios: ["Disminuye inflamación", "Seca brotes activos", "Favorece cicatrización"]
        })
      },
      {
        name: "Anti-age",
        price: "80.000",
        duration: "Sesión · Plan 4 semanas: 280.000",
        summary: "Estimula colágeno y suaviza líneas de expresión.",
        details: buildDetails({
          aparatologia: ["Radiofrecuencia bipolar", "Masaje kobido", "Luz LED ámbar"],
          cuidadosPrevios: ["Hidratar la piel el día previo", "Evitar peelings profundos 1 semana antes"],
          cuidadosPosteriores: ["Aplicar serum antioxidante", "Dormir boca arriba esa noche"],
          candidatos: ["Pieles a partir de los 30", "Personas con líneas marcadas"],
          contraindicaciones: ["Implantes metálicos incompatibles", "Enfermedades autoinmunes activas"],
          beneficios: ["Estimula colágeno", "Mejora firmeza", "Ilumina el rostro"]
        })
      },
      {
        name: "Anti-age con principio activo (Electroporador)",
        price: "90.000",
        duration: "Sesión · Plan 4 semanas: 340.000",
        summary: "B.T.X + ácido hialurónico para un efecto rejuvenecedor visible.",
        details: buildDetails({
          aparatologia: ["Electroporador avanzado", "Coctel B.T.X cosmético + HA", "Masaje drenante"],
          cuidadosPrevios: ["Suspender aspirina 48h antes", "Evitar solar 72h previas"],
          cuidadosPosteriores: ["No masajear la zona por 24h", "Aplicar protector solar mineral"],
          candidatos: ["Pieles maduras finas", "Quienes desean efecto lifting sin agujas"],
          contraindicaciones: ["Embarazo", "Alergia a toxina botulínica cosmética"],
          beneficios: ["Rellena líneas finas", "Efecto tensor inmediato", "Mejora contorno facial"]
        })
      },
      {
        name: "Pigmentaciones",
        price: "80.000",
        duration: "Sesión · Plan 4 semanas: 280.000",
        summary: "Aclara manchas, unifica el tono y reduce marcas post acné.",
        details: buildDetails({
          aparatologia: ["Peeling enzimático de papaína", "LED violeta", "Mascarilla de niacinamida"],
          cuidadosPrevios: ["Suspender autobronceadores 1 semana antes", "No depilar el rostro 3 días antes"],
          cuidadosPosteriores: ["Reaplicar bloqueador cada 2h", "Usar sombrero si hay sol intenso"],
          candidatos: ["Pieles con manchas post inflamatorias", "Melasma controlado"],
          contraindicaciones: ["Dermatitis perioral", "Tratamientos láser recientes"],
          beneficios: ["Tono más uniforme", "Disminuye manchas recientes", "Aporta luminosidad"]
        })
      }
    ]
  },
  {
    category: "Spa",
    services: [
      {
        name: "Drenaje linfático",
        price: "40.000",
        duration: "60 minutos",
        summary: "Reduce inflamación y mejora la circulación.",
        details: buildDetails({
          aparatologia: ["Maniobras manuales suaves", "Rodillos de cuarzo frío"],
          cuidadosPrevios: ["Beber agua antes de la sesión", "Evitar comidas muy saladas ese día"],
          cuidadosPosteriores: ["Continuar hidratación el resto del día", "Realizar respiraciones profundas"],
          candidatos: ["Personas con retención de líquidos facial", "Pacientes post operatorios autorizados"],
          contraindicaciones: ["Infecciones activas", "Problemas cardíacos no controlados"],
          beneficios: ["Rostro desinflamado", "Facilita recuperación post quirúrgica", "Sensación relajante"]
        })
      },
      {
        name: "Yoga facial",
        price: "50.000",
        duration: "60 minutos",
        summary: "Tonifica músculos faciales y reduce tensión.",
        details: buildDetails({
          aparatologia: ["Gua Sha de jade", "Ventosas faciales suaves", "Masaje miofascial"],
          cuidadosPrevios: ["Evitar cafeína fuerte 2h antes", "Llegar sin maquillaje"],
          cuidadosPosteriores: ["Practicar ejercicios respiratorios en casa", "Hidratar labios y contorno"],
          candidatos: ["Personas con tensión mandibular", "Usuarios de pantallas prolongadas"],
          contraindicaciones: ["Cirugías recientes menores a 4 semanas", "Lesiones musculares faciales"],
          beneficios: ["Mayor tonicidad", "Relaja cuello y hombros", "Define el óvalo facial"]
        })
      },
      {
        name: "Chocolaterapia",
        price: "60.000",
        duration: "60 minutos",
        summary: "Nutre profundamente y aporta luminosidad natural.",
        details: buildDetails({
          aparatologia: ["Mousse tibio de cacao", "Pinceles de seda", "Masaje con piedras calientes"],
          cuidadosPrevios: ["Evitar perfumes fuertes antes", "No consumir chocolate previo al servicio"],
          cuidadosPosteriores: ["No enjuagar la piel durante 4h", "Aplicar crema nutritiva al acostarse"],
          candidatos: ["Pieles secas", "Amantes de servicios sensoriales"],
          contraindicaciones: ["Alergia al cacao", "Dermatitis seborreica activa"],
          beneficios: ["Aporta antioxidantes", "Deja piel sedosa", "Eleva el ánimo"]
        })
      }
    ]
  },
  {
    category: "Post quirúrgico",
    services: [
      {
        name: "Fase inmediata",
        price: "60.000",
        duration: "1 sesión semanal · 2 semanas",
        summary: "Reduce inflamación, acelera recuperación y mejora drenaje.",
        details: buildDetails({
          aparatologia: ["Ultrasonido pulsado", "Compresas frías", "Láser frío"],
          cuidadosPrevios: ["Traer recomendación del cirujano", "Evitar analgésicos no recetados"],
          cuidadosPosteriores: ["Mantener uso de faja", "Dormir con la cabeza elevada"],
          candidatos: ["Pacientes en los primeros 7-10 días post cirugía", "Personas con edema marcado"],
          contraindicaciones: ["Fiebre", "Infección en la zona tratada"],
          beneficios: ["Disminuye inflamación", "Acelera drenaje", "Aporta alivio inmediato"]
        })
      },
      {
        name: "Fase mediata",
        price: "40.000",
        duration: "1-2 sesiones semanales · 2 semanas",
        summary: "Mejora cicatrización, reduce fibrosis y moldea.",
        details: buildDetails({
          aparatologia: ["Radiofrecuencia controlada", "Masaje cicatrizante", "Maderoterapia facial"],
          cuidadosPrevios: ["Mantener hidratación alta", "No aplicar cremas calientes antes de la cita"],
          cuidadosPosteriores: ["Continuar ejercicios enviados", "Registrar cambios para la próxima sesión"],
          candidatos: ["Pacientes a partir de la 2ª semana", "Quienes necesitan moldear fibrosis"],
          contraindicaciones: ["Dolor agudo persistente", "Hipersensibilidad extrema"],
          beneficios: ["Suaviza fibrosis", "Activa circulación", "Mejora textura"]
        })
      },
      {
        name: "Fase tardía",
        price: "60.000",
        duration: "1 sesión cada 15-30 días",
        summary: "Suaviza cicatrices y estimula recuperación final.",
        details: buildDetails({
          aparatologia: ["Luz infrarroja suave", "Masaje remodelante", "Máscara nutritiva reparadora"],
          cuidadosPrevios: [
            "Comunicar si hubo retoques recientes",
            "Evitar anticoagulantes 48h antes de la sesión"
          ],
          cuidadosPosteriores: [
            "Aplicar gel de silicona sobre cicatrices",
            "Programar sesión de mantenimiento mensual"
          ],
          candidatos: ["Pacientes después de la semana 6", "Personas que buscan mantener resultados"],
          contraindicaciones: ["Cicatrices abiertas", "Descompensaciones médicas"],
          beneficios: ["Textura uniforme", "Cicatrices más planas", "Bienestar global"]
        })
      }
    ]
  }
];

const testimonialsData = [
  {
    name: "Cliente feliz",
    text: "“Coloca aquí la primera reseña cuando la tengas. El módulo ya respeta tipografía y colores.”"
  },
  {
    name: "Testimonio 2",
    text: "“Puedes incluir antes y después, o un breve resumen del proceso vivido en cabina.”"
  },
  {
    name: "Testimonio 3",
    text: "“El carrusel acepta cualquier cantidad de reseñas y se ajusta automáticamente.”"
  }
];

const galleryData = [
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    label: "Cabina"
  },
  {
    src: "https://images.unsplash.com/photo-1591012911207-0db5e92690c8?auto=format&fit=crop&w=600&q=80",
    label: "Aparatología"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    label: "Detalles"
  },
  {
    src: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&w=600&q=80",
    label: "Ambiente"
  }
];

const detailLabels = {
  aparatologia: "Aparatología",
  cuidadosPrevios: "Cuidados previos",
  cuidadosPosteriores: "Cuidados posteriores",
  candidatos: "Candidatos ideales",
  contraindicaciones: "Contraindicaciones",
  beneficios: "Beneficios"
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const renderPackages = () => {
  const container = document.getElementById("packages-grid");
  if (!container) return;
  packagesData.forEach((pkg) => {
    const card = document.createElement("article");
    card.className = "package-card";
    card.innerHTML = `
      <span class="tag">${pkg.tag}</span>
      <h3>${pkg.name}</h3>
      <p>${pkg.description}</p>
      <ul>
        ${pkg.includes.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="package-meta">
        <span class="price-chip">$${pkg.price}</span>
        <small>${pkg.duration}</small>
      </div>
    `;
    container.appendChild(card);
  });
};

const createDetailBlock = (title, items = []) => {
  const block = document.createElement("div");
  const heading = document.createElement("h4");
  heading.textContent = title;
  block.appendChild(heading);

  const list = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  block.appendChild(list);
  return block;
};

const createServiceCard = (service) => {
  const card = document.createElement("article");
  card.className = "service-card";

  const header = document.createElement("header");
  const textBlock = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = service.name;
  const summary = document.createElement("p");
  summary.textContent = service.summary;
  textBlock.append(title, summary);

  const chip = document.createElement("div");
  chip.className = "price-chip";
  chip.textContent = `$${service.price}`;

  header.append(textBlock, chip);

  const meta = document.createElement("p");
  meta.className = "service-meta";
  meta.textContent = service.duration;

  const details = document.createElement("details");
  const summaryToggle = document.createElement("summary");
  summaryToggle.textContent = "Ver aparatología, cuidados y beneficios";
  details.appendChild(summaryToggle);

  const detailGrid = document.createElement("div");
  detailGrid.className = "detail-grid";

  Object.entries(service.details).forEach(([key, value]) => {
    detailGrid.appendChild(createDetailBlock(detailLabels[key] ?? key, value));
  });

  details.appendChild(detailGrid);

  card.append(header, meta, details);
  return card;
};

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const renderServicesCatalog = () => {
  const container = document.getElementById("services-accordion");
  if (!container) return;

  servicesData.forEach((group, index) => {
    const details = document.createElement("details");
    details.className = "service-category";
    details.id = slugify(group.category);
    if (index === 0) details.open = true;

    const summary = document.createElement("summary");
    summary.innerHTML = `
      <span class="service-category-title">${group.category}</span>
      <span class="service-category-count">${group.services.length} servicios</span>
    `;
    details.appendChild(summary);

    const list = document.createElement("div");
    list.className = "service-category-list";

    group.services.forEach((service) => {
      list.appendChild(createServiceCard(service));
    });

    details.appendChild(list);
    container.appendChild(details);
  });
};

const renderTestimonials = () => {
  const container = document.getElementById("testimonials-track");
  if (!container) return;
  testimonialsData.forEach((item) => {
    const card = document.createElement("article");
    card.className = "testimonial-card";
    card.innerHTML = `<p>${item.text}</p><strong>${item.name}</strong>`;
    container.appendChild(card);
  });
};

const renderGallery = () => {
  const container = document.getElementById("gallery-grid");
  if (!container) return;
  galleryData.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-card";
    figure.innerHTML = `
      <img src="${item.src}" alt="${item.label}" loading="lazy" decoding="async" />
      <span>${item.label}</span>
    `;
    container.appendChild(figure);
  });
};

const initAccessibilityControls = () => {
  const doc = document.documentElement;
  let scale = 1;

  const buttons = document.querySelectorAll(".accessibility-panel button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "font-increase") {
        scale = clamp(scale + 0.05, 0.85, 1.25);
        doc.style.setProperty("--font-scale", scale.toFixed(2));
      } else if (action === "font-decrease") {
        scale = clamp(scale - 0.05, 0.85, 1.25);
        doc.style.setProperty("--font-scale", scale.toFixed(2));
      } else if (action === "contrast-toggle") {
        document.body.classList.toggle("high-contrast");
      }
    });
  });
};

const initNavigation = () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
};

const setYear = () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

const init = () => {
  renderPackages();
  renderServicesCatalog();
  renderTestimonials();
  renderGallery();
  initAccessibilityControls();
  initNavigation();
  setYear();
};

document.addEventListener("DOMContentLoaded", init);

