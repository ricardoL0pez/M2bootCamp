const URL_BASE = "https://jsonplaceholder.typicode.com";

//const listaUsers = $("#listaUsuarios")[0];//sistema de selectores que usa jquery
const listaUsuarios = document.querySelector("#listaUsuarios");

const createListItem = (user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    listaUsuarios.appendChild(li);;
    //listaUsuarios.append(li);
});

const showUsers = (users) => {
    users.forEach(createListItem);
};

const fetchUsers = () => {
    $.get(`${URL_BASE}/users`, showUsers)

    .fail(function() {
        // Manejo de errores en caso de que la solicitud Ajax falle
        listaUsuarios.append("Error al cargar usuarios");
      });
};

const loadUsers = document.querySelector("#loadUsers");
loadUsers.addEventListener("click", fetchUsers);

       



//Utilizado textContent en lugar de innerHTML para establecer el contenido del elemento de lista (<li>) con el sitio web del usuario. Esto es más seguro para evitar ataques de inyección de codigo
