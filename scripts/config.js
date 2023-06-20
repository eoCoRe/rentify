


document.addEventListener('DOMContentLoaded', function() {

inputField = document.getElementById('full-name');
message = document.getElementById('aviso-nome');
 
inputField2 = document.getElementById('email');
message2 = document.getElementById('aviso-email')

inputField3 = document.getElementById('telefone');
message3 = document.getElementById('aviso-telefone');

inputField4 = document.getElementById('usuario');
message4 = document.getElementById('aviso-usuario');

inputField5 = document.getElementById('senha');
message5 = document.getElementById('aviso-senha');

 botao = document.getElementById('salvando');
 botaozin = document.getElementById('jorge');

 inputField.addEventListener('keyup', function() {
    if (inputField.value === '') {
      message.classList.remove('hidden');
      botao.classList.add('disable');
      botaozin.style.backgroundColor = '#6f6f6f';
    } else {
      message.classList.add('hidden');
      botao.classList.remove('disable');
      botaozin.style.backgroundColor = '#F97316';
    }
    });
  
    inputField2.addEventListener('keyup', function() {
        if (inputField2.value === '') {
          message2.classList.remove('hidden');
          botao.classList.add('disable');
          botaozin.style.backgroundColor = '#6f6f6f';
        } else {
          message2.classList.add('hidden');
          botao.classList.remove('disable');
          botaozin.style.backgroundColor = '#F97316';
        }

    });

    inputField3.addEventListener('keyup', function() {
        if (inputField3.value === '') {
          message3.classList.remove('hidden');
          botao.classList.add('disable');
          botaozin.style.backgroundColor = '#6f6f6f';
        } else {
          message3.classList.add('hidden');    
          botao.classList.remove('disable');
          botaozin.style.backgroundColor = '#F97316';
        }
    });

    inputField4.addEventListener('keyup', function() {
        if (inputField4.value === '') {
          message4.classList.remove('hidden');
          botao.classList.remove('disable');
          botaozin.style.backgroundColor = '#6f6f6f';
        } else {
          message4.classList.add('hidden');
          botao.classList.remove('disable');
          botaozin.style.backgroundColor = '#F97316';
          
        }
    });

    inputField5.addEventListener('keyup', function() {
        if (inputField5.value === '') {
          message5.classList.remove('hidden');
          botao.classList.add('disable');
          botaozin.style.backgroundColor = '#6f6f6f';
        } else {
          message5.classList.add('hidden');
          botao.classList.remove('disable');
          
        }
    });
});
