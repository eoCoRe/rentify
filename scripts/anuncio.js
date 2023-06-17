document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll(".side-menu__action");
  
    menuLinks.forEach(link => {
      const href = link.querySelector("a").getAttribute("href");
  
      if (href === "../pages/anuncios.html") {
        link.classList.add("active");
      }
    });
  });

  function validarCampoCep() {
    var cep = document.getElementById("cep").value;
    var cepValido = /^[0-9]{5}-[0-9]{3}$/.test(cep);
  
    if (cep === '' || !cepValido) {
      document.getElementById("cep-error").style.display = "block";
      return false;
    }
  }

  $(document).ready(function() {
    $('#cep').mask('00000-000');
  });
  
  function formatarValor(input) {
    // Remove todos os caracteres que não sejam números, ponto ou vírgula
    var valor = input.value.replace(/[^\d.,]/g, '');
  
    // Substitui a vírgula pelo ponto (caso necessário)
    
  
    // Remove todos os pontos, exceto o último
    valor = valor.replace(/\.(?=.*\.)/g, '');
  
    // Remove os zeros à esquerda
    valor = valor.replace(/^0+/, '');
  
    // Formata o valor inserindo o símbolo "R$" e adicionando separadores de milhar
    var valorFormatado = "R$ " + parseFloat(valor).toLocaleString('pt-BR');
  
    // Atualiza o valor no campo de input
    input.value = valorFormatado;
  }
    function exibirNomesImagens(event) {
      var input = event.target;
      var nomesImagensDiv = document.getElementById('nomes-imagens');
      nomesImagensDiv.textContent = ""; // Limpa o conteúdo atual
    
      var nomesImagens = [];
      for (var i = 0; i < input.files.length; i++) {
        var nomeImagem = input.files[i].name;
        nomesImagens.push(nomeImagem);
      }
    
      nomesImagensDiv.textContent = nomesImagens.join(", ");
    }