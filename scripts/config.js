


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

 inputField.addEventListener('keyup', function() {
    if (inputField.value === '') {
      message.classList.remove('hidden');
    } else {
      message.classList.add('hidden');
    }
    });
  
    inputField2.addEventListener('keyup', function() {
        if (inputField2.value === '') {
          message2.classList.remove('hidden');
        } else {
          message2.classList.add('hidden');
        }

    });

    inputField3.addEventListener('keyup', function() {
        if (inputField3.value === '') {
          message3.classList.remove('hidden');
        } else {
          message3.classList.add('hidden');
        }
    });

    inputField4.addEventListener('keyup', function() {
        if (inputField4.value === '') {
          message4.classList.remove('hidden');
        } else {
          message4.classList.add('hidden');
        }
    });

    inputField5.addEventListener('keyup', function() {
        if (inputField5.value === '') {
          message5.classList.remove('hidden');
        } else {
          message5.classList.add('hidden');
        }
    });
});
