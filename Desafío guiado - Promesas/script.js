// 1. Implementar ES6 para toda la estructura del código
// Función asíncrona para obtener los datos de la URL
const fetchAlbumTitles = async () => {
    // 2. Crear una función asíncrona para obtener los datos de la URL
    const url = "https://jsonplaceholder.typicode.com/albums";
  
    try {
      // 3. Dentro de un bloque Try/Catch, utilizar fetch con await
      const response = await fetch(url);
      const data = await response.json();
  
      // 4. Mostrar los primeros 20 títulos con un método de iteración
      data.slice(0, 20).forEach(album => console.log(album.title));
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  
  // Función que retorna una promesa después de 3 segundos
  const sendMessage = () => {
    // 5. Crear una función que retorne una promesa
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Información Enviada");
      }, 3000);
    });
  };
  
  // Función asíncrona para recibir el mensaje de la promesa
  const displayMessage = async () => {
    // 6. Recibir y mostrar el mensaje con await
    const message = await sendMessage();
    console.log(message);
  };
  
  // Llamado a las funciones principales
  const main = async () => {
    await fetchAlbumTitles();
    await displayMessage();
  };
  
  main();
  