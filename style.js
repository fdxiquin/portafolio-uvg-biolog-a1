/*
  INTERACTIVIDAD DEL PORTAFOLIO
  ---------------------------------------------------------------------------
  Este archivo:
  - Inserta textos desde portfolio-data.js.
  - Crea tarjetas de evidencias automáticamente.
  - Activa la navegación según la sección visible.
  - Agrega animación suave al entrar cada bloque en pantalla.
*/

/*
  FUNCIÓN: getNestedValue
  Sirve para leer valores profundos dentro de portfolioData usando rutas como:
  "profile.name" o "profile.photo".
*/
function getNestedValue(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

/*
  FUNCIÓN: setFieldText
  Recorre todos los elementos con data-field y coloca el texto correspondiente.
  Para agregar un campo nuevo en HTML, usa data-field="ruta.del.dato".
*/
function setFieldText() {
  document.querySelectorAll("[data-field]").forEach((element) => {
    const value = getNestedValue(portfolioData, element.dataset.field);
    if (value) element.textContent = value;
  });
}

/*
  FUNCIÓN: setFieldImages
  Recorre todos los elementos con data-field-image y coloca la ruta de imagen.
  Usa esto para cambiar fotos desde portfolio-data.js sin tocar el HTML.
*/
function setFieldImages() {
  document.querySelectorAll("[data-field-image]").forEach((image) => {
    const value = getNestedValue(portfolioData, image.dataset.fieldImage);
    if (value) image.src = value;
  });
}

/*
  FUNCIÓN: createEvidenceList
  Crea una lista de enlaces a documentos, fotos, PDF o presentaciones.
*/
function createEvidenceList(evidence = []) {
  const validEvidence = evidence.filter((item) => item.href && item.href !== "#");
  if (!validEvidence.length) return "";

  const items = validEvidence
    .map((item) => `<li><a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a></li>`)
    .join("");

  return `
    <div class="card__details">
      <strong>Evidencia</strong>
      <ul class="evidence-list">${items}</ul>
    </div>
  `;
}

/*
  FUNCIÓN: createDetailsList
  Crea una lista de datos breves dentro de cada tarjeta.
  Úsala para resultados, horas de estudio, unidades evaluadas o estrategias.
*/
function createDetailsList(details = []) {
  if (!details.length) return "";

  const items = details.map((detail) => `<li>${detail}</li>`).join("");

  return `
    <div class="card__details">
      <strong>Datos generales</strong>
      <ul>${items}</ul>
    </div>
  `;
}

/*
  FUNCIÓN: createCard
  Construye una tarjeta completa a partir de un objeto de portfolio-data.js.
  Para agregar campos nuevos, amplía el objeto y el HTML que se retorna aquí.
*/
function createCard(item) {
  const wideClass = item.wide ? " card--wide" : "";

  return `
    <article class="card reveal${wideClass}">
      <span class="card__meta">${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      ${createDetailsList(item.details)}
      ${createEvidenceList(item.evidence)}
    </article>
  `;
}

/*
  FUNCIÓN: renderCards
  Inserta tarjetas en un contenedor específico.
  Recibe el nombre del data-render y el arreglo de objetos a mostrar.
*/
function renderCards(renderName, items) {
  const target = document.querySelector(`[data-render="${renderName}"]`);
  if (!target) return;

  target.innerHTML = items.filter((item) => item.title && item.body).map(createCard).join("");
}

/*
  FUNCIÓN: renderReflection
  Inserta reflexiones largas. Divide por saltos dobles si luego quieres
  convertir una reflexión en varios párrafos.
*/
function renderReflection(renderName, text) {
  const target = document.querySelector(`[data-render="${renderName}"]`);
  if (!target) return;

  target.innerHTML = String(text)
    .split("\n\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

/*
  FUNCIÓN: renderProfileFacts
  Dibuja los datos rápidos del perfil en la portada.
  Edita portfolioData.profile.facts para cambiar o agregar datos.
*/
function renderProfileFacts() {
  const target = document.querySelector('[data-render="profileFacts"]');
  if (!target) return;

  target.innerHTML = portfolioData.profile.facts
    .map((fact) => `
      <article class="fact reveal">
        <span>${fact.label}</span>
        <strong>${fact.value}</strong>
      </article>
    `)
    .join("");
}

/*
  FUNCIÓN: renderHomeBlocks
  Crea las tarjetas de introducción, intereses biológicos y reflexión inicial.
*/
function renderHomeBlocks() {
  renderCards("homeBlocks", portfolioData.homeBlocks);
}

/*
  FUNCIÓN: renderPortfolio
  Punto central de renderizado. Si agregas una sección nueva en portfolio-data.js,
  agrega aquí la llamada correspondiente para mostrarla.
*/
function renderPortfolio() {
  setFieldText();
  setFieldImages();
  renderProfileFacts();
  renderHomeBlocks();
  renderCards("integrativeCases", portfolioData.theory.integrativeCases);
  renderCards("favoriteActivities", portfolioData.theory.favoriteActivities);
  renderCards("leastFavoriteActivities", portfolioData.theory.leastFavoriteActivities);
  renderReflection("theoryShorts", portfolioData.theory.theoryShorts);
  renderCards("passports", portfolioData.lab.passports);
  renderReflection("labShorts", portfolioData.lab.labShorts);
  renderCards("labs", portfolioData.lab.labs);
  renderReflection("csi", portfolioData.lab.csi);
  renderReflection("finalReflection", portfolioData.finalReflection);
}

/*
  FUNCIÓN: setupRevealAnimation
  Observa elementos con clase .reveal y les agrega .is-visible al entrar en pantalla.
  Este ciclo forEach registra cada elemento animable.
*/
function setupRevealAnimation() {
  const animatedItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      /*
        CICLO DE OBSERVACIÓN:
        Por cada entrada visible, activa la animación y deja de observarla.
      */
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  animatedItems.forEach((item) => observer.observe(item));
}

/*
  FUNCIÓN: setupActiveNavigation
  Marca como activo el enlace de navegación que corresponde a la sección visible.
*/
function setupActiveNavigation() {
  const links = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      /*
        CICLO DE SECCIONES:
        Revisa qué sección está visible y sincroniza la navegación.
      */
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const activeId = entry.target.id;
        links.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${activeId}`;
          link.classList.toggle("is-active", isActive);
        });
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}

/*
  FUNCIÓN: setupSmoothScroll
  Hace que cada enlace interno baje con desplazamiento suave y offset correcto.
*/
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/*
  INICIO DE LA APLICACIÓN:
  DOMContentLoaded espera a que el HTML esté listo antes de insertar contenido.
*/
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  setupRevealAnimation();
  setupActiveNavigation();
  setupSmoothScroll();
});
