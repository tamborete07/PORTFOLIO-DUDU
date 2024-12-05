// Obter o modal
var modal = document.getElementById("myModal");

// Obter o botão que abre o modal
var btn = document.getElementById("openModal");

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Cancelar botão
document.getElementById("cancel").onclick = function() {
    modal.style.display = "none";
}

// Entrar botão (aqui você pode adicionar a lógica de login)
document.getElementById("login").onclick = function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // Aqui você pode adicionar a lógica para efetuar o login
    console.log("Email:", email);
    console.log("Senha:", password);
    modal.style.display = "none"; // Fecha o modal após clicar em entrar
}