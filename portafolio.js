dordocument.addEventListener('DOMContentLoaded', () => {

const trabajos = [
  { nombre: "Hei Tiare", calificacion: "Personal", imagen: "rapa.jpg" },
  { nombre: "Madre", calificacion: "Personal", imagen: "ecuador.jpg" },
  { nombre: "Mural BRP Santiago", calificacion: "Territorial", imagen: "brp.jpg" },
  { nombre: "Mural BRP Lo Vial", calificacion: "Territorial", imagen: "mural.jpg" },
  { nombre: "Mesa de trabajo", calificacion: "Territorial", imagen: "pinturas.jpg" },
  { nombre: "Experiencia PICNIC", calificacion: "Universitario", imagen: "picnict2.jpg" },
  { nombre: "ÍNTIMO", calificacion: "Universitario", imagen: "destacado.jpg" },
  { nombre: "ÍNTIMO", calificacion: "Universitario", imagen: "manos.jpg" },
  { nombre: "ÍNTIMO", calificacion: "Universitario", imagen: "patio.jpg" },
  { nombre: "SHOOTING Santiago Centro", calificacion: "Universitario", imagen: "centro.jpg" },
  { nombre: "BODA (obra)", calificacion: "Universitario", imagen: "boda.jpg" },
  { nombre: "BODA (obra)", calificacion: "Universitario", imagen: "bodaa.jpeg" },
  { nombre: "POLAS DE MODA", calificacion: "Freelance", imagen: "polas.jpeg" },
  { nombre: "Polaroid de modelo", calificacion: "Universitario", imagen: "tachi.jpg" },
  { nombre: "Polaroid de modelo", calificacion: "Universitario", imagen: "tuti.jpg" },
  { nombre: "Sesión", calificacion: "Freelance", imagen: "marti.jpg" },
];

const portafolioGrid = document.getElementById('portafolio');

trabajos.forEach(trabajo => {
  const item = document.createElement('div');
  item.classList.add('gallery-item');

  const img = document.createElement('img');
  img.src = trabajo.imagen;
  img.alt = trabajo.nombre;

  const overlay = document.createElement('div');
  overlay.classList.add('gallery-overlay');

  const titulo = document.createElement('h3');
  titulo.textContent = trabajo.nombre;

  const calificacion = document.createElement('p');
  calificacion.textContent = trabajo.calificacion;

  overlay.appendChild(titulo);
  overlay.appendChild(calificacion);

  item.appendChild(img);
  item.appendChild(overlay);

  portafolioGrid.appendChild(item);
});

});
