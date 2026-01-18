const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalImg = document.getElementById("modal-img");

let currentProject = null;
let currentIndex = 0;

const projects = {
  p1: {
    title: "Sistema de Reservas – Salón de Belleza",
        desc: `
Aplicación web desarrollada para gestionar reservas de un salón de belleza de forma digital.
Los clientes pueden seleccionar servicios, visualizar precios y duración, reservar un horario 
disponible y confirmar su cita mediante WhatsApp.
El sistema calcula automáticamente la duración total de los servicios y bloquea horarios para evitar reservas cruzadas.
Incluye un panel de administración para visualizar las citas en tiempo real, con persistencia 
de datos en Firebase Firestore y despliegue en producción con Firebase Hosting.
    `,
    images: [
      "img/gato.jpg",
      "img/perro.jpg",
      "img/capibara.jpg",
      "img/equisde.jpg",

    ]
  },

  p2: {
    title: "Portafolio personal",
    desc: `
Aplicación web desarrollada desde cero como portafolio personal, diseñada para presentar mi perfil académico, 
habilidades técnicas y proyectos desarrollados.
La web es una landing page interactiva, con componentes reutilizables y diseño responsive, 
enfocada en una experiencia de usuario clara y elegante.
    `,
    images: [
      "img/quak.webp",
    ]
  }
};

function openProject(key) {
  currentProject = projects[key];
  currentIndex = 0;

  modalTitle.textContent = currentProject.title;
  modalDesc.textContent = currentProject.desc;
  modalImg.src = currentProject.images[currentIndex];

  modal.style.display = "flex";
}

function closeProject() {
  modal.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentProject.images.length;
  modalImg.src = currentProject.images[currentIndex];
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + currentProject.images.length) %
    currentProject.images.length;
  modalImg.src = currentProject.images[currentIndex];
}
