import Mascota from './clases/mascota.js';

const formulario = document.getElementById('formulario');
const tipoAnimal = document.getElementById('tipo');
const nombrePropietario = document.getElementById('nombrePropietario');
const direccionPropietario = document.getElementById('direccion');
const telefonoPropietario = document.getElementById('telefono');
const nombreMascota = document.getElementById('nombreMascota');
const enfermedad = document.getElementById('enfermedad');
const datosAgregados = document.getElementById('datosAgregados');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const tipo = tipoAnimal.value;
  const propietarioNombre = nombrePropietario.value;
  const propietarioDireccion = direccionPropietario.value;
  const propietarioTelefono = telefonoPropietario.value;
  const mascotaNombre = nombreMascota.value;
  const mascotaEnfermedad = enfermedad.value;

  // Crear una instancia de Mascota
  const mascota = new Mascota(
    propietarioNombre,
    propietarioDireccion,
    propietarioTelefono,
    tipo,
    mascotaNombre,
    mascotaEnfermedad
  );

  const datosPropietario = mascota.datosPropietario();
  const tipoAnimalMensaje = mascota.tipo;
  const datosMascota = `El nombre de la mascota es: ${mascota.nombre} y la enfermedad es: ${mascota.enfermedad}.`;

  const mensaje = `${datosPropietario} ${tipoAnimalMensaje} ${datosMascota}`;

  const listItem = document.createElement('li');
  listItem.textContent = mensaje;
  listItem.classList.add('list-group-item');
  datosAgregados.appendChild(listItem);

  formulario.reset();
});
