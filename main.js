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
        price: "55.000",
        duration: "60 minutos",
        summary: "Elimina impurezas, limpia los poros en profundidad y deja la piel renovada.",
        details: buildDetails({
          aparatologia: ["Vapor-Ozono", "Peeling Ultrasonico", "Alta frecuencia"],
          cuidadosPrevios: [
            "Evitar maquillaje a prueba de agua 24 horas antes",
            "Suspender exfoliaciones 3 días antes"
          ],
          candidatos: [
            "Usuarios que tienen puntos negros y comedones de moderados a visibles.",
            "Usuarios que presentan poros dilatados y acumulación de sebo.",
            "Usuarios que desean realizarse mantenimiento cada mes"
          ],
          contraindicaciones: [
            "Piel muy sensible o reactiva.",
            "Rosácea, cuperosis o telangiectasias.",
            "Dermatitis o inflamación activa."
          ]
        })
      },
      {
        name: "Limpieza profunda",
        price: "80.000",
        duration: "90 minutos",
        summary: "Extracción completa, desincrustación profunda y luminosidad.",
        details: buildDetails({
          aparatologia: [
            "Vapor-Ozono",
            "Peeling Ultrasonico",
            "Cámara fotodinamica",
            "Alta frecuencia",
            "Crioterapia"
          ],
          cuidadosPrevios: [
            "Evitar maquillaje a prueba de agua 24 horas antes",
            "Suspender exfoliaciones 3 días antes"
          ],
          candidatos: [
            "Usuarios con poros dilatados, puntos negros y comedones profundos.",
            "Usuarios que requieren una limpieza profunda y desintoxicante.",
            "Acné comedoniano o acné leve (no inflamatorio).",
            "Usuarios con exceso de sebo y brillo constante.",
            "Usuarios que buscan resultados más visibles en una sola sesión."
          ],
          contraindicaciones: [
            "Piel sensible, reactiva o con rosácea.",
            "Dermatitis, eccema o brotes inflamatorios activos.",
            "Acné inflamatorio severo.",
            "Pacientes con contraindicaciones para aparatología (marcapasos, epilepsia no controlada, etc.).",
            "Post procedimientos estéticos recientes sin autorización."
          ]
        })
      }
    ]
  },
  {
    category: "Hidrataciones",
    services: [
      {
        name: "Hidratación",
        price: "65.000",
        duration: "45 minutos",
        summary: "Aporta hidratación intensa, suaviza textura y calma irritación.",
        details: buildDetails({
          aparatologia: ["Cámara fotodinamica", "Alta Frecuencia"],
          cuidadosPrevios: [
            "Evitar maquillaje a prueba de agua 24 horas antes",
            "Suspender exfoliaciones 3 días antes"
          ],
          candidatos: [
            "Sensación de tirantez, opacidad o descamación leve.",
            "Piel apagada, sin luminosidad.",
            "Usuarios que buscan resultados inmediatos de suavidad y glow.",
            "Piel sensible leve (bien tolerada).",
            "Usuarios que han tenido exposición solar, aire acondicionado o cambios climáticos.",
            "Recomendado como mantenimiento o complemento de otros tratamientos."
          ],
          contraindicaciones: [
            "Infecciones cutáneas activas.",
            "Heridas abiertas.",
            "Dermatitis, eccema o reacciones alérgicas activas.",
            "Acné inflamatorio activo.",
            "Rosácea activa"
          ]
        })
      },
      {
        name: "Hidratación Profunda Dermapen",
        price: "90.000",
        duration: "60 minutos",
        summary: "Tratamiento con microagujas para hidratación profunda y luminosidad inmediata.",
        details: buildDetails({
          aparatologia: ["Dermapen"],
          cuidadosPrevios: [
            "Evitar exposición solar directa al menos 5 a 7 días antes",
            "No usar ácidos, retinoides o exfoliantes 3 a 5 días previos",
            "No realizar peelings, láser u otros tratamientos agresivos 15 días antes",
            "No asistir con la piel irritada o lesionada",
            "Evitar automedicación tópica o sistémica antes del procedimiento",
            "Informar si se están consumiendo medicamentos o tratamientos dermatológicos"
          ],
          candidatos: [
            "Piel deshidratada, opaca o con aspecto cansado",
            "Líneas finas por deshidratación",
            "Piel tirante o áspera",
            "Desean un tratamiento con resultados inmediatos",
            "Son ideales como tratamiento de mantenimiento o previo a eventos"
          ],
          contraindicaciones: [
            "Embarazo o lactancia",
            "Infecciones activas en la piel",
            "Acné activo",
            "Dermatitis, rosácea activa o piel muy sensibilizada",
            "Heridas abiertas, irritaciones o lesiones recientes",
            "Uso reciente de isotretinoína (menos de 6 meses)",
            "Enfermedades autoinmunes no controladas",
            "Tendencia a cicatrices queloides",
            "Tratamientos dermatológicos agresivos recientes (láser, peelings profundos)"
          ]
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
        duration: "90 - 120 minutos",
        summary: "Controla brotes, reduce inflamación y mejora textura.",
        pricePackages: {
          single: { label: "Precio por sesión única", amount: "80.000" },
          packages: [{ sessions: 4, total: "320.000", perUnit: "70.000" }]
        },
        details: buildDetails({
          aparatologia: [
            "Vapor ozono",
            "Peeling Ultrasonico",
            "Cámara fotodinámica",
            "Crioterapia",
            "Alta Frecuencia"
          ],
          cuidadosPrevios: [
            "No asistir con maquillaje",
            "Evitar exfoliaciones físicas o químicas 3–5 días antes.",
            "No haber usado retinoides, isotretinoína tópica o peróxido de benzoilo 48–72 horas previas.",
            "No manipular ni exprimir lesiones días antes.",
            "Informar si está usando medicación dermatológica o presenta brotes inflamatorios activos."
          ],
          candidatos: [
            "Pieles con acné leve a moderado.",
            "Presencia de comedones abiertos y cerrados.",
            "Piel grasa o seborreica.",
            "Pieles con poros dilatados.",
            "Acné con inflamación controlada (no severa).",
            "Personas que buscan regular la producción de sebo y mejorar la textura de la piel.",
            "Pieles con tendencia acneica que requieren mantenimiento facial profundo."
          ],
          contraindicaciones: [
            "Acné quístico o noduloquístico.",
            "Lesiones abiertas, infectadas o con supuración activa.",
            "Piel con dermatitis, rosácea activa o eczema.",
            "Herpes simple activo.",
            "Embarazo.",
            "Uso reciente de isotretinoína oral (mínimo 6 meses)."
          ]
        })
      },
      {
        name: "Anti-age",
        price: "80.000",
        duration: "60 minutos",
        summary:
          "Tratamiento realizado con Dermapen, estimulando la regeneración celular y la producción de colágeno y elastina.",
        pricePackages: {
          single: { label: "Precio por sesión única", amount: "80.000" },
          packages: [
            { sessions: 3, total: "225.000", perUnit: "75.000" },
            { sessions: 6, total: "420.000", perUnit: "70.000" }
          ]
        },
        allowedDetails: ["paraQueFunciona", "principiosActivos", "contraindicaciones", "cuidadosPrevios"],
        details: {
          paraQueFunciona: [
            "Atenúa líneas de expresión y arrugas finas",
            "Mejora la firmeza y elasticidad de la piel",
            "Unifica el tono",
            "Mejora la textura y luminosidad",
            "Rejuvenece visiblemente la piel"
          ],
          principiosActivos: ["Ácido hialuronico", "Peptidos", "Antioxidantes"],
          contraindicaciones: [
            "Embarazo o lactancia",
            "Infecciones activas en la piel.",
            "Acné activo inflamatorio",
            "Dermatitis, rosácea activa o piel muy sensibilizada",
            "Heridas abiertas, irritaciones o lesiones recientes",
            "Uso reciente de isotretinoína (menos de 6 meses)",
            "Enfermedades autoinmunes no controladas",
            "Tendencia a cicatrices queloides",
            "Tratamientos dermatológicos agresivos recientes (peelings profundos, láser)"
          ],
          cuidadosPrevios: [
            "Evitar exposición solar directa al menos 5 a 7 días antes",
            "No usar ácidos, retinoides o exfoliantes 3 a 5 días previos",
            "No realizar peelings, láser u otros tratamientos agresivos 15 días antes",
            "Mantener la piel hidratada y limpia",
            "No asistir con la piel irritada o lesionada",
            "Evitar automedicación tópica o sistémica antes del procedimiento",
            "Informar si se están consumiendo medicamentos o tratamientos dermatológicos"
          ]
        }
      },
      {
        name: "Cicatrices post acné",
        price: "75.000",
        duration: "60 minutos",
        summary:
          "Tratamiento con Dermapen, estimula la regeneración de la piel y mejora cicatrices causadas por el acné",
        pricePackages: {
          single: { label: "Precio por sesión única", amount: "75.000" },
          packages: [
            { sessions: 3, total: "210.000", perUnit: "70.000" },
            { sessions: 6, total: "408.000", perUnit: "68.000" }
          ]
        },
        allowedDetails: ["paraQueFunciona", "principiosActivos", "contraindicaciones", "cuidadosPrevios"],
        details: {
          paraQueFunciona: [
            "Atenúa cicatrices atróficas (hundidas)",
            "Mejora la textura irregular de la piel",
            "Estimula colágeno y elastina",
            "Unifica la superficie cutánea",
            "Mejora el aspecto general de la piel"
          ],
          principiosActivos: [
            "Ácido hialurónico",
            "Péptidos",
            "Factores de crecimiento",
            "Vitaminas regeneradoras",
            "Centella asiática"
          ],
          contraindicaciones: [
            "Acné activo inflamatorio",
            "Infecciones cutáneas activas",
            "Heridas abiertas o costras",
            "Queloides o tendencia a cicatrices hipertróficas",
            "Enfermedades autoinmunes no controladas",
            "Embarazo o lactancia",
            "Uso reciente de isotretinoína (menos de 6 meses)",
            "Piel extremadamente sensible o con procesos inflamatorios activos"
          ],
          cuidadosPrevios: [
            "Evitar exposición solar directa al menos 5 a 7 días antes",
            "No usar ácidos, retinoides o exfoliantes 3 a 5 días previos",
            "No realizar peelings, láser u otros tratamientos agresivos 15 días antes",
            "Mantener la piel hidratada y limpia",
            "No asistir con la piel irritada o lesionada",
            "Evitar automedicación tópica o sistémica antes del procedimiento",
            "Informar si se están consumiendo medicamentos o tratamientos dermatológicos"
          ]
        }
      },
      {
        name: "Anti manchas",
        price: "80.000",
        duration: "60 minutos",
        summary:
          "Tratamiento realizado con Dermapen, renueva la piel y mejora manchas producidas por el sol, hormonas o procesos inflamatorios.",
        pricePackages: {
          single: { label: "Precio por sesión única", amount: "80.000" },
          packages: [
            { sessions: 4, total: "300.000", perUnit: "75.000" },
            { sessions: 6, total: "420.000", perUnit: "70.000" }
          ]
        },
        allowedDetails: ["paraQueFunciona", "principiosActivos", "contraindicaciones", "cuidadosPrevios"],
        details: {
          paraQueFunciona: [
            "Atenúa manchas y melasma",
            "Unifica el tono de la piel",
            "Mejora la luminosidad",
            "Regula la producción de melanina",
            "Mejora la textura de la piel"
          ],
          principiosActivos: [
            "Ácido tranexámico",
            "Niacinamida",
            "Vitamina C",
            "Ácido kójico",
            "Alfa arbutina",
            "Antioxidantes"
          ],
          contraindicaciones: [
            "Embarazo o lactancia",
            "Infecciones activas en la piel",
            "Acné activo severo",
            "Dermatitis, rosácea activa o piel muy sensibilizada",
            "Heridas abiertas o lesiones recientes",
            "Uso reciente de isotretinoína (menos de 6 meses)",
            "Tendencia a hiperpigmentación post inflamatoria sin control previo",
            "Exposición solar reciente o bronceado activo"
          ],
          cuidadosPrevios: [
            "Evitar exposición solar directa al menos 5 a 7 días antes",
            "No usar ácidos, retinoides o exfoliantes 3 a 5 días previos",
            "No realizar peelings, láser u otros tratamientos agresivos 15 días antes",
            "Mantener la piel hidratada y limpia",
            "No asistir con la piel irritada o lesionada",
            "Evitar automedicación tópica o sistémica antes del procedimiento",
            "Informar si se están consumiendo medicamentos o tratamientos dermatológicos"
          ]
        }
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
          aparatologia: ["Cámara fotodinamica en color amarillo"],
          cuidadosPrevios: [
            "Buena hidratación el día previo y el día del tratamiento.",
            "Evitar alcohol y exceso de sal 24 horas antes."
          ],
          candidatos: [
            "Usuarios que presentan retención de líquidos y sensación de rostro inflamado.",
            "Edema facial leve a moderado.",
            "Usuarios que despiertan con el rostro hinchado o con bolsas marcadas.",
            "Ojeras congestivas.",
            "Usuarios que desean mejorar la circulación y oxigenación de la piel.",
            "Usuarios que buscan un tratamiento relajante, desinflamante y no invasivo.",
            "Personas con estrés, bruxismo o tensión facial.",
            "Recomendado como tratamiento de mantenimiento y bienestar facial."
          ],
          contraindicaciones: [
            "Infecciones agudas o fiebre.",
            "Enfermedades linfáticas activas.",
            "Trombosis, flebitis o problemas circulatorios severos.",
            "Insuficiencia cardíaca o renal no controlada.",
            "Cáncer activo o en tratamiento.",
            "Hipertensión no controlada.",
            "Heridas abiertas o lesiones recientes."
          ]
        })
      },
      {
        name: "Yoga facial",
        price: "50.000",
        duration: "60 minutos",
        summary: "Tonifica músculos faciales y reduce tensión.",
        details: buildDetails({
          cuidadosPrevios: [
            "Evitar procedimientos faciales invasivos (peelings, dermapen, toxina, rellenos) en los 7–15 días previos, según el caso.",
            "Mantener buena hidratación antes del tratamiento."
          ],
          candidatos: [
            "Usuarios que buscan una tonificación facial natural.",
            "Usuarios con tensión muscular facial (mandíbula, ceño, cuello).",
            "Usuarios que sufren de bruxismo leve o estrés facial.",
            "Usuarios que desean mejorar la circulación y oxigenación de la piel.",
            "Rostro cansado o apagado.",
            "Usuarios que buscan un tratamiento no invasivo y consciente.",
            "Personas que desean prevención del envejecimiento.",
            "Ideal como tratamiento de bienestar y relajación.",
            "Usuarios que no desean aparatología estética."
          ],
          contraindicaciones: [
            "Infecciones cutáneas activas.",
            "Dermatitis, eccema o reacciones alérgicas activas.",
            "Heridas abiertas.",
            "Acné inflamatorio severo.",
            "Cirugías faciales recientes sin autorización médica.",
            "Dolor facial agudo o patologías musculares severas.",
            "Neuralgias faciales activas.",
            "Fracturas faciales recientes."
          ]
        })
      },
      {
        name: "Chocolaterapia",
        price: "60.000",
        duration: "60 minutos",
        summary: "Nutre profundamente y aporta luminosidad natural.",
        details: buildDetails({
          aparatologia: ["Cámara fotodinámica"],
          cuidadosPrevios: [
            "Evitar maquillaje a prueba de agua 24 horas antes",
            "Suspender exfoliaciones 3 días antes",
            "No realizar depilación facial (cera, hilo, láser) 5–7 días antes."
          ],
          candidatos: [
            "Piel normal, seca o mixta.",
            "Piel deshidratada o apagada.",
            "Usuarios que buscan un tratamiento relajante y sensorial.",
            "Usuarios que desean mejorar la suavidad y luminosidad de la piel.",
            "Usiarios que quieren aportar antioxidantes a la piel.",
            "Usuarios que presentan estrés, fatiga o tensión facial.",
            "Usuarios que buscan una experiencia de spa facial.",
            "Recomendado antes de eventos para un efecto glow y descanso."
          ],
          contraindicaciones: [
            "Alergia o hipersensibilidad al cacao.",
            "Dermatitis activa",
            "Infecciones cutáneas activas.",
            "Heridas abiertas.",
            "Acné inflamatorio activo.",
            "Rosácea activa."
          ]
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
        allowedDetails: ["aparatologia", "beneficios"],
        details: {
          aparatologia: ["Crioterapia"],
          beneficios: [
            "Disminuye la inflamación y el edema desde las primeras horas post procedimiento.",
            "Favorece el drenaje de líquidos retenidos, ayudando a una recuperación más rápida.",
            "Alivia la sensación de calor, tensión y molestia en la piel.",
            "Mejora la circulación linfática, reduciendo el riesgo de fibrosis temprana.",
            "Mantiene la piel limpia, calmada e hidratada sin agredirla.",
            "Refuerza la barrera cutánea, evitando deshidratación e irritaciones."
          ]
        }
      },
      {
        name: "Fase mediata",
        price: "40.000",
        duration: "1-2 sesiones semanales · 2 semanas",
        summary: "Mejora cicatrización, reduce fibrosis y moldea.",
        allowedDetails: ["aparatologia", "beneficios"],
        details: {
          aparatologia: ["Crioterapia", "Cámara fotodinámica"],
          beneficios: [
            "Estimula la regeneración celular y tisular, favoreciendo una cicatrización más rápida y ordenada.",
            "Reduce edema residual y congestión linfática, evitando endurecimientos del tejido.",
            "Mejora la oxigenación de la piel, acelerando los procesos de reparación.",
            "Disminuye enrojecimiento, sensibilidad y molestias post operatorias.",
            "Ayuda a prevenir fibrosis y adherencias tempranas.",
            "Aporta efecto antiinflamatorio y descongestivo.",
            "Mejora la textura, elasticidad y aspecto general de la piel.",
            "Favorece una recuperación estética progresiva y segura."
          ]
        }
      },
      {
        name: "Fase tardía",
        price: "60.000",
        duration: "1 sesión cada 15-30 días",
        summary: "Suaviza cicatrices y estimula recuperación final.",
        allowedDetails: ["aparatologia", "beneficios"],
        details: {
          aparatologia: ["Crioterapia", "Cámara fotodinámica", "Electroporador"],
          beneficios: [
            "Acelera la regeneración tisular profunda, optimizando la calidad de la cicatriz.",
            "Contribuye a la rehidratación intensiva de la piel en recuperación.",
            "Favorece la normalización del tejido cutáneo, mejorando firmeza y uniformidad.",
            "Potencia la acción antiinflamatoria y calmante de los activos utilizados.",
            "Ayuda a mejorar la elasticidad y resistencia de la piel post quirúrgica.",
            "Optimiza los resultados del tratamiento, logrando una recuperación más eficiente y visible."
          ]
        }
      }
    ]
  }
];

const testimonialsData = [
  {
    name: "Cliente 1",
    text: "“Próximamente reseñas de nuestros clientes.”",
    src: "images/Paciente 1.jpeg",
    alt: "Paciente en tratamiento facial"
  },
  {
    name: "Cliente 2",
    text: "“Próximamente reseñas de nuestros clientes.”",
    src: "images/Paciente 2.jpeg",
    alt: "Paciente durante sesión de cuidado facial"
  },
  {
    name: "Cliente 3",
    text: "“Próximamente reseñas de nuestros clientes.”",
    src: "images/Paciente 3.jpeg",
    alt: "Paciente en cabina recibiendo tratamiento"
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
  candidatos: "Candidatos ideales",
  contraindicaciones: "Contraindicaciones",
  paraQueFunciona: "Para que funciona",
  principiosActivos: "Principios activos utilizados",
  beneficios: "Beneficios"
};

const defaultDetailKeys = ["aparatologia", "cuidadosPrevios", "candidatos", "contraindicaciones"];

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

  let priceBlock;
  if (service.pricePackages) {
    priceBlock = document.createElement("div");
    priceBlock.className = "service-price";

    const singleRow = document.createElement("div");
    singleRow.className = "service-price-row";

    const singleLeft = document.createElement("div");
    singleLeft.className = "service-price-left";
    singleLeft.textContent = "1 sesión";

    const singleChip = document.createElement("div");
    singleChip.className = "price-chip service-price-chip";
    singleChip.textContent = `$${service.pricePackages.single.amount}`;

    singleRow.append(singleLeft, singleChip);

    const packagesList = document.createElement("div");
    packagesList.className = "service-price-packages";
    service.pricePackages.packages.forEach((pkg) => {
      const row = document.createElement("div");
      row.className = "service-price-row";

      const left = document.createElement("div");
      left.className = "service-price-left";
      left.innerHTML = `
        <span class="service-price-title">${pkg.sessions} sesiones</span>
        <span class="service-price-sub">$${pkg.perUnit} c/u</span>
      `;

      const chip = document.createElement("div");
      chip.className = "price-chip service-price-chip";
      chip.textContent = `$${pkg.total}`;

      row.append(left, chip);
      packagesList.appendChild(row);
    });

    priceBlock.append(singleRow, packagesList);
  } else {
    priceBlock = document.createElement("div");
    priceBlock.className = "price-chip";
    priceBlock.textContent = `$${service.price}`;
  }

  header.append(textBlock, priceBlock);

  const meta = document.createElement("p");
  meta.className = "service-meta";
  meta.textContent = service.duration;

  const details = document.createElement("details");
  const summaryToggle = document.createElement("summary");
  const allowedKeys = service.allowedDetails ?? defaultDetailKeys;
  const summaryLabels = allowedKeys.map((key) => detailLabels[key]).filter(Boolean);
  summaryToggle.textContent = summaryLabels.length
    ? `Ver ${summaryLabels.join(", ").toLowerCase()}`
    : "Ver detalles";
  details.appendChild(summaryToggle);

  const detailGrid = document.createElement("div");
  detailGrid.className = "detail-grid";

  const detailKeys = allowedKeys;
  detailKeys.forEach((key) => {
    const value = service.details?.[key];
    if (!value || !detailLabels[key]) return;
    detailGrid.appendChild(createDetailBlock(detailLabels[key], value));
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
    card.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" />
      <div class="testimonial-overlay">
        <p>${item.text}</p>
        <strong>${item.name}</strong>
      </div>
    `;
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

