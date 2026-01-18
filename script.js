const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalImg = document.getElementById("modal-img");

let currentProject = null;
let currentIndex = 0;

const projects = {
  p1: {
    title: "Sistema de Reservas – Salón de Belleza",
    slides: [
      {
        img: "img/SirellaSpa2.jpg",
        text: "Vista principal del sistema donde el cliente selecciona servicios y horarios disponibles."
      },
      {
        img: "img/SirellaSpa3.jpg",
        text: "El usuario pone su nombre y elige la fecha y hora de su cita. Esta válida a fechas no anteriores a la actual y en las que el Spa se encuentre activo, además de evitar cruces de citas con otro usuario."
      },
      {
        img: "img/SirellaSpa4.jpg",
        text: "El usuario confirma la cita con un adelanto, sale el metodo de pago para esto."
      },
      {
        img: "img/SirellaSpa5.jpg",
        text: "Una vez registrado el pago se confirma la reserva y se muestran los datos para acercarse, además de facilitar el WhatsApp de la dueña del Spa"
      },
      {
        img: "img/AdminSpa1.jpg",
        text: "El dueño del Spa tiene una web aparte donde puede ver las reservas que hay y su ingreso es mediante un login con un usario y contraseña"
      },
      {
        img: "img/AdminSpa2.jpg",
        text: "Una vez iniciada la sesión saldrán todas las reservas que hay, estas se actualizan a medida de que se van ingresando nuevas, además de poder eliminarlas en caso alguien cancele y una vez pasa la fecha de la cita, esta se elimina automaticamente"
      },
      {
        img: "img/AdminSpa3.jpg",
        text: "De igual manera se lleva un registro en Firebase DataBase para que quede guardado en caso de alguna emergencia"
      }
    ]
  },

  p2: {
    title: "Portafolio personal",
    slides: [
      {
        img: "img/quak.webp",
        text: "Landing page desarrollada desde cero para presentar mi perfil académico y profesional."
      }
    ]
  },
  p3: {
    title: "Web Snover´s Store",
    slides: [
      {
        img: "img/Snovers-1.jpg",
        text: "Catálogo completo de la tienda donde pueden filtrar según lo que buscan"
      },
      {
        img: "img/Snovers-2.jpg",
        text: "Aparece solo el tipo de producto filtrado"
      },
      {
        img: "img/Snovers-3.jpg",
        text: "Descripción completa del producto, con detalles como tamaño y precio"
      }
    ]
  }

};

function renderSlide() {
  const slide = currentProject.slides[currentIndex];
  modalImg.src = slide.img;
  modalDesc.textContent = slide.text;
}

function openProject(key) {
  currentProject = projects[key];
  currentIndex = 0;

  modalTitle.textContent = currentProject.title;
  renderSlide();

  modal.style.display = "flex";
}

function closeProject() {
  modal.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentProject.slides.length;
  renderSlide();
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + currentProject.slides.length) %
    currentProject.slides.length;
  renderSlide();
}
