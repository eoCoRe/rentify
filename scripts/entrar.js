function validarFormulario() {
    var usuarioInput = document.getElementById("usuario");
    var senhaInput = document.getElementById("senha");
    var usuario = usuarioInput.value.trim();
    var senha = senhaInput.value.trim();

    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    return true;
}

document.getElementById("entrarLink").addEventListener("click", function(event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});