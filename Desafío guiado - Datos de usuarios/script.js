// Patrón de módulo
const UserModule = (() => {
    // URL de la API
    const API_URL = "https://randomuser.me/api/?results=10";

    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.results; 
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    // Función para renderizar
    const renderUsers = async () => {
      const users = await fetchUsers();
      const userList = document.getElementById("user-list");

      userList.innerHTML = "";

      users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";

        userCard.innerHTML = `
          <img src="${user.picture.large}" alt="Foto de ${user.name.first}">
          <div>
            <p><strong>${user.name.first} ${user.name.last}</strong></p>
            <p>${user.email}</p>
            <p>${user.phone}</p>
          </div>
        `;

        userList.appendChild(userCard);
      });
    };

    return {
      init: renderUsers
    };
  })();

  //cargar los datos 
  (function () {
    UserModule.init();
  })();