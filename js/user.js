class User {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

function addingUser() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let usuario = new User(name.value, email.value);
    usuarios.push(usuario);
    console.log(usuario);
}

let usuarios = [];
let userData = document.getElementById('userData');

userData.addEventListener('click', addingUser);
