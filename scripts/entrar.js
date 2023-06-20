// Event listener para o formulário de login
document.getElementById('entrarLink').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    
    // Obter os valores dos campos de entrada
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    // Verificar se os campos estão vazios
    if (usuario === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        // Enviar os dados para o servidor ou realizar outras ações necessárias
        alert('Login realizado com sucesso!');
        // Redirecionar para a página de destino
        window.location.href = event.target.href;
    }
    // Captura o elemento de link para redirecionamento
const entrarLink = document.getElementById("entrarLink");

// Adiciona um evento de clique ao link
entrarLink.addEventListener("click", function() {
  // Redireciona para a página "home.html"
  window.location.href = "home.html";
});
});