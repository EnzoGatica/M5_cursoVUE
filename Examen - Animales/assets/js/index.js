import { Aguila } from "./classes/Aguila.mjs";
import { Leon } from "./classes/Leon.mjs";
import { Lobo } from "./classes/Lobo.mjs";
import { Oso } from "./classes/Oso.mjs";
import { Serpiente } from "./classes/Serpiente.mjs";
import { iife } from "./module/iife.mjs";

const instanciadorAnimales = { Aguila, Leon, Lobo, Oso, Serpiente };
document.getElementById('btnRegistrar').addEventListener('click', async () => {
  const nombre = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;

  if (!nombre || !edad || !comentarios) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const { imagen, sonido } = await iife.obtenerDataJson(nombre);

  // crear instancia del animal elegido
  const animal = new instanciadorAnimales[nombre](nombre, edad, imagen, comentarios, sonido);
  animal.id = iife.animalsArray.length;
  iife.addAnimal(animal);
  iife.limpiar();

  // mostramos los animales 
  iife.cardsAnimal(iife.animalsArray, 'Animales');

  iife.limpiar(); 
  iife.agregarEventosImagenes();
});

document.getElementById('animal').addEventListener('change', async (event) => {
  const nombreAnimal = event.target.value;
  const { imagen } = await iife.obtenerDataJson(nombreAnimal);

  const preview = document.getElementById('preview');
  preview.innerHTML = ''; 
  const img = document.createElement('img'); 
  img.src = `assets/imgs/${imagen}`;
  img.className = "img rounded h-100 w-auto object-fit-cover mx-auto";
  img.alt = nombreAnimal; 
  preview.appendChild(img); 
});
