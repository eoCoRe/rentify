function validarCampoEmail() {
  var campoEmail = obterCampoDeEmail();
  verificaEmail(campoEmail);
}

function obterCampoDeEmail() {
  return document.getElementById("email-usuario").value;
}

function verificaEmail(campoEmail) {
    if (campoEmail === "") {
        mostrarAlerta("Por favor, preencha o campo de Email/Usuário.");
      } else if (!validarFormatoEmail(campoEmail)) {
        mostrarAlerta("Por favor, insira um email válido.");
      } else {
        redirecionarPagina("recuperar-confirm.html");
      }
}

function mostrarAlerta(mensagem) {
  alert(mensagem);
}

function validarFormatoEmail(email) {
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function redirecionarPagina(url) {
  window.location.href = url;
}

function verificarTecla(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    validarCampoEmail();
  }
}

function adicionarEventoDeTecla() {
  var emailInput = document.getElementById("email-usuario");
  emailInput.addEventListener("keypress", verificarTecla);
}

adicionarEventoDeTecla();
