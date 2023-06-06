function validarCampoEmail() {
    var campoEmail = document.getElementById("email-usuario").value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (campoEmail === "") {
        alert("Por favor, preencha o campo de Email/Usuário.");
    } else if (!regexEmail.test(campoEmail)) {
        alert("Por favor, insira um email válido.");
    } else {
        window.location.href = 'recuperar-confirm.html';
    }
}
function verificarTecla(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); 
        validarCampoEmail();
    }
}